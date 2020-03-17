$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    let nameInput = $("#name");
    let nameList = $("tbody");
    let nameContainer = $(".name-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#name-form", handleNameFormSubmit);
    $(document).on("click", ".delete-name", handleDeleteButtonPress);
  
    // Getting the initial list of Names
    getNames();
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleNameFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertName function and passing in the value of the name input
      upsertName({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating a name. Calls getNames upon completion
    function upsertName(nameData) {
      $.post("/api/names", nameData)
        .then(getNames);
    }
  
    // Function for creating a new list row for names
    function createNameRow(nameData) {
      let newTr = $("<tr>");
      newTr.data("name", nameData);
      newTr.append("<td>" + nameData.name + "</td>");
      if (nameData.Exhibits) {
        newTr.append("<td> " + nameData.Exhibits.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/searchData?NameId=" + nameData.id + "'>Go to Data</a></td>");
      newTr.append("<td><a href='/addData?NameId=" + nameData.id + "'>Add Data</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-name'>Delete System</a></td>");
      return newTr;
    }
  
    // Function for retrieving names and getting them ready to be rendered to the page
    function getNames() {
      $.get("/api/names", data => {
        let rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createNameRow(data[i]));
        }
        renderNameList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of names to the page
    function renderNameList(rows) {
      nameList.children().not(":last").remove();
      nameContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        nameList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no names
    function renderEmpty() {
      let alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an Exhibit before you can add data.");
      nameContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      let listItemData = $(this).parent("td").parent("tr").data("name");
      let id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/names/" + id
      })
        .then(getNames);
    }
  });
  