// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require ./jquery.serializeJSON.min.js
//= require jquery_ujs
//= require underscore
//= require_tree ./models
//= require_tree ../templates
//= require_tree .



PT.initialize = function(userId) {
  PT.showPhotosIndex(userId);

}

PT.showPhotosIndex = function(userId) {
  var listView = new PT.PhotosListView();
  PT.Photo.fetchByUserId(userId, function() {
    listView.render();
    console.log(listView.$el)
    $('#content').prepend(listView.$el); // #content?
  });

  var formView = new PT.PhotoFormView();
  formView.render();
  $('#content').prepend(formView.$el); // #content?
};

PT.showPhotoDetail = function(photo) {
  //var $li = $("<li>" + "<img src=" + photo.attributes.url +
  //           ">" + "</li>"); // gets us the images

  var pdv = new PT.PhotoDetailView(photo);
  var listItem = $("[data-id='" + photo.attributes.id + "']");
  var $img = "<div class=img-div photo-id=" + photo.attributes.id + "><img src=" + photo.attributes.url + "></div>";

  listItem.after($img);

}

