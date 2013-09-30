(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function() {
    this.$el = $('<div id="plv-div"></div>');
    //this.$ul = $('<ul id="list"></ul>');

    var that = this;
    PT.Photo.on("add", that.render.bind(that)); // binding issue?
  };

  PhotosListView.prototype.render = function() {
    var that = this;

    if (!that.$ul) {
      that.$ul = $('<ul id="list"></ul>');

      for (var i = 0; i < PT.Photo.all.length; i++) {
        var $li = $("<li>" + "<img src=" + PT.Photo.all[i].attributes.url + ">" + "</li>");
        that.$ul.prepend($li);
      };
      that.$el.append(that.$ul);
    } else {
      var $li = $("<li>" + "<img src=" + PT.Photo.all[PT.Photo.all.length - 1].attributes.url + ">" + "</li>");
      that.$ul.prepend($li);
    }

    console.log("Render called.");
    if (!$("#list")) {
      that.$el.append(that.$ul);
    }

    return that;
  }
})(this);