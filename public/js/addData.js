// global moment 
$(document).ready(function() {

// exhibitContainer holds all of our exhibits
let exhibitContainer = $(".exh-container");
let ExhibitCategorySelect = $("#category");
// Click events for the edit and delete buttons
$(document).on("click", "button.delete", handleExhibitDelete);
$(document).on("click", "button.edit", handleExhibitEdit);
// Variable to hold our exhibits
let exhibits;

// The code below handles the case where we want to get exhibits for a specific name
// Looks for a query param in the url for NameId
let url = window.location.search;
let nameId;
if (url.indexOf("?NameId=") !== -1) {
  nameId = url.split("=")[1];
  getExhibits(nameId);
}
// If there's no nameId we just get all exhibits as usual
else {
  getExhibits();
}


// This function grabs exhibits from the database and updates the view
function getExhibits(name) {
    nameId = name || "";
    if (nameId) {
      nameId = "/?NameId=" + nameId;
    }
    $.get("/api/namess" + authorId, data => {
      console.log("Exhibits", data);
      exhibits = data;
      if (!exhibits || !exhibits.length) {
        displayEmpty(name);
      }
      else {
        initializeRows();
      }
    });
  }

// This function does an API call to delete exhibits
  function deleteExhibit(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/exhibits/" + id
    })
      .then(function() {
        getExhibits(postCategorySelect.val());
      });
  }

// InitializeRows handles appending all of our constructed post HTML inside blogContainer
 function initializeRows() {
    exhibitContainer.empty();
    let exhibitsToAdd = [];
    for (let i = 0; i < exhibits.length; i++) {
      exhibitsToAdd.push(createNewRow(exhibits[i]));
    }
    exhibitContainer.append(exhibitsToAdd);
  }

 // This function constructs a post's HTML
 function createNewRow(post) {
    let formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    let newPostCard = $("<div>");
    newPostCard.addClass("card");
    let newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    let deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    let editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    let newPostTitle = $("<h2>");
    let newPostDate = $("<small>");
    let newPostAuthor = $("<h5>");
    newPostAuthor.text("Written by: " + post.Author.name);
    newPostAuthor.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    let newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    let newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newExhibitCard;
  }

  // This function figures out which exhibitwe want to delete and then calls deletePost
  function handleExhibitDelete() {
    let currentExhibit = $(this)
      .parent()
      .parent()
      .data("exhibit");
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

  // This function displays a message when there are no exhibits
  function displayEmpty(id) {
    let query = window.location.search;
    let partial = "";
    if (id) {
      partial = " for designation #" + id;
    }
    exhibitContainer.empty();
    let messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No entries yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    exhibitContainer.append(messageH2);
  }

});



