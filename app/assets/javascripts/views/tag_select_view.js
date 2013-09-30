(function(root) {
  var PT = root.PT = (root.PT || {});

  var TagSelectView = PT.TagSelectView = function(photo, event) {
    this.$el = $("<div></div>");

    this.$el.css("position", "absolute");
    this.$el.css("left", event.offsetX - 55 + "px");
    this.$el.css("top", event.offsetY - 55 + "px");

    // install click handler for child li elements
    this.$el.on("click", "li", this.selectTagOption);
  }

  TagSelectView.prototype.render = function() {
    this.$el.append($("<div class='photo-tag'></div>"));

    this.$el.css("position", "absolute");
    this.$el.css("left", event.offsetX - 55 + "px");
    this.$el.css("top", event.offsetY - 55 + "px");
    var template = JST["photo_tag_options"];
    //console.log(template);
    this.$el.append(template);
  }

  TagSelectView.prototype.selectTagOption = function(event) {
    var that = this;

    var userId = $(this).attr("data-user-id");
    var xCoord = event.offsetX - 55;
    var yCoord = event.offsetY - 55;

    var photoId = $(this).parents(".img-div").attr("photo-id");

    var attributes = { userId: userId, xPos: xCoord, yPos: yCoord, photoId: photoId};

    var photoTagging = new PT.PhotoTagging(attributes);
    console.log(photoTagging);
    photoTagging.create(function(){});
  }


})(this);