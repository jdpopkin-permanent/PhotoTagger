(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function() {
    this.$el = $('<div id="plv-div"></div>');

    var that = this;
    PT.Photo.on("add", that.render.bind(that)); // binding issue?
  };

  PhotosListView.prototype.render = function() {
    var that = this;

    if (!that.$ul) {
      that.$ul = $('<ul id="list"></ul>');
      // install click handler for all <a> in "#list"
      that.$ul.on("click", "a", PhotosListView.handleLinkClick)

      for (var i = 0; i < PT.Photo.all.length; i++) {
        photo = PT.Photo.all[i];
        // var $li = $("<li>" + "<img src=" + photo.attributes.url +
        // ">" + "</li>"); // gets us the images

        var $li = $("<li><a data-id='" + photo.attributes.id + "' href='#'>" + photo.attributes.title + "</a></li>");
        that.$ul.prepend($li);
      };
      that.$el.append(that.$ul);
    } else {
      var $li = $("<li>" + "<img src=" + PT.Photo.all[PT.Photo.all.length - 1].attributes.url + ">" + "</li>");
      that.$ul.prepend($li);
    }

    return that;
  }

  PhotosListView.handleLinkClick = function(event) {
    event.preventDefault();

    console.log(this);

    var idNeeded = parseInt($(this).attr("data-id"));
    console.log(idNeeded)

    photo = PT.Photo.find(idNeeded);
    console.log(photo);
    PT.showPhotoDetail(photo);
  }
})(this);