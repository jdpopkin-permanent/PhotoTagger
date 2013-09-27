(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function() {
    this.$el = $('<div></div>');
    PT.Photo.on("add", this.render); // binding issue?
  };

  PhotosListView.prototype.render = function() {
    this.$el = $('<div></div>');
    var $ul = $('<ul id="list"></ul>');

    // PT.Photo.all.forEach(function(photo) {
    //       var $li = $("<li>" + photo.title + "</li>");
    //       console.log('$li:');
    //       console.log($li);
    //       $ul.prepend($li);
    //     });
    for (var i = 0; i < PT.Photo.all.length; i++) {
      var $li = $("<li>" + PT.Photo.all[i].attributes.title + "</li>");
      $ul.prepend($li);
    };

    console.log(this);
    this.$el.append($ul);
    return this;
  }
})(this);