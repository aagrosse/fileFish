$(document).ready(function() {
    // Getting jQuery references to the exhibit perameters, and name select
    let tempInput = $("#temp");
    let phInput = $("#ph");
    let salinityInput = $("#salinity");
    let doInput = $("#do");
    let alkInput = $("#alkalinity");
    let ammInput = $("#ammonia");
    let nitriteInput = $("#nitrite");
    let nitrateInput = $("#nitrate");
    let iodineInput = $("#iodine");
    let calciumInput = $("#calcium");
    let addDataForm = $("#cms");
    let nameSelect = $("#designation");

    // Adding an event listener for when the form is submitted
    $(addDataForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating an exhibit)
    let url = window.location.search;
    let exhibitId;
    let nameId;
    // Sets a flag for whether or not we're updating an exhibit to be false initially
    let updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In '?ExhibitId=1', ExhibitId is 1
    if (url.indexOf("?ExhibitId=") !== -1) {
      exhibitId = url.split("=")[1];
      getPostData(exhibitId, "exhibit");
    }
    // Otherwise if we have an NameId in our url, preset the name select box to be our Name
    else if (url.indexOf("?NameId=") !== -1) {
      nameId = url.split("=")[1];
    }
  
    // Getting the names, and their exhibits
    getNames();
  
    // A function for handling what happens when the form to create a new exhibit is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the exhibit if we are missing any perameters.
      if (!tempInput.val().trim() || !phInput.val().trim() || !salinityInput.val() || !doInput.val() || 
      !alkInput.val() || !ammInput.val() || !nitriteInput.val() || !nitrateInput.val() || !iodineInput.val() || !calciumInput.val()) {
        return;
      }
      // Constructing a newExhibit object to hand to the database
      let newExhibit = {
        temperature: tempInput
          .val()
          .trim(),
        PH: phInput
          .val()
          .trim(),
        salinity: salinityInput
          .val()
          .trim(),
        disolvedOxygen: doInput
          .val()
          .trim(),
        alkalinity: alkInput
          .val()
          .trim(),
        ammonia: ammInput
          .val()
          .trim(),
        nitrite: nitriteInput
          .val()
          .trim(),
        nitrate: nitrateInput 
          .val()
          .trim(),
        iodine: iodineInput
          .val()
          .trim(),
        calcium: calciumInput
          .val()
          .trim(),
        NameId: nameSelect.val()
      };

      // If we're updating an exhibit run updateExhibit to update an Exhibit
      // Otherwise run submitExhibit to create a whole new exhibit
      if (updating) {
        newExhibit.id = ExhibitId;
        updateExhibit(newExhibit);
      }
      else {
        submitExhibit(newExhibit);
      }
    }
  
    // Submits a new exhibit and brings user to SearchData page upon completion
    function submitExhibit(exhibit) {
      $.post("/api/exhibits", exhibit, function() {
        window.location.href = "/searchData";
      });
    }
  
    // Gets exhibit data for the current exhibit if we're editing, or if we're adding to a names existing exhibit
    function getExhibitData(id, type) {
      let queryUrl;
      switch (type) {
      case "exhibit":
        queryUrl = "/api/exhibits/" + id;
        break;
      case "name":
        queryUrl = "/api/names/" + id;
        break;
      default:
        return;
      }
      $.get(queryUrl, data => {
        if (data) {
          console.log(data.NameId || data.id);
          // If this exhibit exists, prefill our addData forms with its data
          tempInput.val(data.temperature);
          phInput.val(data.PH);
          salinityInput.val(data.salinity);
          doInput.val(data.disolvedOxygen);
          alkInput.val(data.alkalinity);
          ammInput.val(data.ammonia);
          nitriteInput.val(data.nitrite);
          nitrateInput.val(data.nitrate);
          iodineInput.val(data.iodine);
          calciumInput.val(data.calcium);          
          NameId = data.NameId || data.id;
          // If we have an exhibit with this id, set a flag for us to know to update the exhibit
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // A function to get Names and then render our list of Names
    function getNames() {
      $.get("/api/names", renderNameList);
    }
    // Function to either render a list of names, or if there are none, direct the user to the page
    // to create a name first
    function renderNameList(data) {
      if (!data.length) {
        window.location.href = "/names";
      }
      $(".hidden").removeClass("hidden");
      let rowsToAdd = [];
      for (let i = 0; i < data.length; i++) {
        rowsToAdd.push(createNameRow(data[i]));
      }
      nameSelect.empty();
      console.log(rowsToAdd);
      console.log(nameSelect);
      nameSelect.append(rowsToAdd);
     nameSelect.val(nameId);
    }
  
    // Creates the name options in the dropdown
    function createNameRow(name) {
      let listOption = $("<option>");
      listOption.attr("value", name.id);
      listOption.text(name.name);
      return listOption;
    }
  
    // Update a given exhibit, bring user to the searchData page when done
    function updateExhibit(exhibit) {
      $.ajax({
        method: "PUT",
        url: "/api/exhibits",
        data: post
      })
        .then(function() {
          window.location.href = "/searchData";
        });
    }
  });
  