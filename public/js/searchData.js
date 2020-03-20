// global moment 
$(document).ready(function () {

    
    
    let nameContainer = $(".name-container");
    let nameSelect = $("#designation");
    // Click events for the edit and delete buttons
    $(document).on("click", ".delete-name", handleExhibitDelete);
    $(document).on("click", "button.edit", handleExhibitEdit);
    //change event for the exhibit select control
    $("#designation").change(getExhibits);
    // Variable to hold our exhibits
    let url = window.location.search;
    let exhibitId;
    let nameId;

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

    // Getting the initial list of Names
    getNames();


    // This function does an API call to delete exhibits
    function deleteExhibit(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/exhibits/" + id
        })
            .then(function () {
                getExhibits();
                window.location.href = "/searchData"
            });
    }

    // This function figures out which exhibit we want to delete and then calls deletePost
    function handleExhibitDelete() {
        console.log(this.id);
        let currentExhibit = $(this)

            .parent()
            .parent()
            .data("exhibits");
        deleteExhibit(currentExhibit.id);
    }

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handleExhibitEdit() {
        let currentExhibit = $(this)
            .parent()
            .parent()
            .data("Exhibit");
        window.location.href = "/addData?id=" + currentExhibit.id;
    }


    // Function for creating a new list row for names
    function createExhibitRow(nameData) {
        let newTr = $("<tr>");
        newTr.data("exhibits", nameData);
        newTr.append("<td>" + date(nameData.createdAt) + "</td>");
        newTr.append("<td> " + nameData.temperature + "</td>");
        newTr.append("<td> " + nameData.PH + "</td>");
        newTr.append("<td> " + nameData.salinity + "</td>");
        newTr.append("<td> " + nameData.disolvedOxygen + "</td>");
        newTr.append("<td> " + nameData.alkalinity + "</td>");
        newTr.append("<td> " + nameData.ammonia + "</td>");
        newTr.append("<td> " + nameData.nitrite + "</td>");
        newTr.append("<td> " + nameData.nitrate + "</td>");
        newTr.append("<td> " + nameData.iodine + "</td>");
        newTr.append("<td> " + nameData.calcium + "</td>");
        newTr.append("<td><a style='cursor:pointer;color:red' id ='nameData.id' class='delete-name'>Delete Data</a></td>");
        return newTr;
    }

    // created at format (for reference)"2020-03-14T12:20:33.000Z"
    // this function reformats the date to display it in mm/dd/yyyy format
    function date(x) {
        var parts = x.split('-');
        var day = parts[2].split('', 2);
        var newDate = parts[1] + '/' + day[0] + day[1] + '/' + parts[0];
        return newDate
    }



    // Function for retrieving exhibits and getting them ready to be rendered to the page
    function getExhibits() {
        console.log(nameSelect.val())

        $.get("/api/exhibits", data => {
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].NameId === parseInt(nameSelect.val())) {
                    rowsToAdd.push(createExhibitRow(data[i]));
                }


            }
            renderExhibitList(rowsToAdd);

        });
    }


    // A function for rendering the list of exhibits to the page
    function renderExhibitList(rows) {
        let nameList = $("tbody");
        nameList.empty();
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
        alertDiv.text("You must add data for this system.");
        nameContainer.append(alertDiv);
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

});
