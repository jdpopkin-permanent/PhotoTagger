(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoFormView = PT.PhotoFormView = function() {
    this.$el = $('<div></div>');
    this.$el.on("submit", "form", function() {console.log('clicked')});
  };

  PhotoFormView.prototype.render = function() {
    this.$el.prepend(JST["photo_form"]);
    return this;
  };

  PhotoFormView.prototype.submit = function(event) {
    event.preventDefault();

    var jsonData = $(this).serializeJSON();

    console.log(jsonData);

    // photo = new Photo(jsonData);
  };

})(this);