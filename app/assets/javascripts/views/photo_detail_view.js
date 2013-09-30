(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotoDetailView = PT.PhotoDetailView = function(photo) {
    this.photo = photo;
    this.$el = $("<div class='pdv'></div>");
  }

  PhotoDetailView.prototype.render = function() {
    this.$el.prepend(JST["photo_detail"]({pdv: this})); // WILL NOT WORK
    return this;
  }




})(this);