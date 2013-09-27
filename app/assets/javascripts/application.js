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
  var listView = new PT.PhotosListView();
  PT.Photo.fetchByUserId(userId, function() {
    listView.render();
    $('#content').prepend(listView.$el);
  });

  var formView = new PT.PhotoFormView();
  formView.render();
  $('#content').append(formView.$el);


};

