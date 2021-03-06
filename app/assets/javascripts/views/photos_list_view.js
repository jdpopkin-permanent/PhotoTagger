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
      that.$ul.on("click", "a.show", PhotosListView.handleLinkClick);
      that.$ul.on("click", "a.hide", PhotosListView.hideImage);
      that.$ul.on("click", "img", PhotosListView.popTagSelectView);

      for (var i = 0; i < PT.Photo.all.length; i++) {
        var photo = PT.Photo.all[i];
        // var $li = $("<li>" + "<img src=" + photo.attributes.url +
        // ">" + "</li>"); // gets us the images

        var $li = $("<li><a class='show' data-id='" + photo.attributes.id + "' href='#'>" + photo.attributes.title + "</a></li>");

        that.$ul.prepend($li);
      };
      that.$el.append(that.$ul);
    } else {
      //var $li = $("<li>" + "<img src=" + PT.Photo.all[PT.Photo.all.length - 1].attributes.url + ">" + "</li>");
      var photo = PT.Photo.all[PT.Photo.all.length - 1];
      var $li = $("<li><a class='show' data-id='" + photo.attributes.id + "' href='#'>" + photo.attributes.title + "</a></li>");
      that.$ul.prepend($li);
    }

    return that;
  }

  PhotosListView.handleLinkClick = function(event) {
    event.preventDefault();

    console.log(this);

    var idNeeded = parseInt($(this).attr("data-id"));

    var photo = PT.Photo.find(idNeeded);
    console.log(photo);
    // set class to hide, remove show class
    $(this).addClass("hide");
    $(this).removeClass("show");

    var $photo = $("[photo-id='" + idNeeded + "']");

    if ($photo.length === 0) {
      PT.showPhotoDetail(photo);
    } else {
      var listItem = $("[data-id='" + photo.attributes.id + "']");
      var $img = $photo[0];
      $($img).removeClass("hidden");

      listItem.after($img);
    }
  }

  PhotosListView.hideImage = function(event) {
    event.preventDefault();

    var idNeeded = parseInt($(this).attr("data-id"));
    var $photo = $("[photo-id='" + idNeeded + "']");

    // set photo class to hidden
    $photo.addClass("hidden");
    //$photo.parent().addClass("hidden");

    // set this-class to show, remove hide class
    $(this).addClass("show");
    $(this).removeClass("hide");

  };

  PhotosListView.popTagSelectView = function(event) {
    var idNeeded = parseInt($(this).attr("photo-id"));
    var photo = PT.Photo.find(idNeeded);

    var tsv = new PT.TagSelectView(photo, event);

    tsv.render();
    $(this).parent().append(tsv.$el);
  }


})(this);