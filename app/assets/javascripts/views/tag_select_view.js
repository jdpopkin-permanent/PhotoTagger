(function(root) {
  var PT = root.PT = (root.PT || {});

  var TagSelectView = PT.TagSelectView = function(photo, event) {
    this.$el = $("<div></div>");

    this.$el.css("position", "absolute");
    this.$el.css("left", event.offsetX - 55 + "px");
    this.$el.css("top", event.offsetY - 55 + "px");
    // $(this).parent().append(div);
  }

  TagSelectView.prototype.render = function() {
    this.$el.append($("<div class='photo-tag'></div>"));

    this.$el.css("position", "absolute");
    this.$el.css("left", event.offsetX - 55 + "px");
    this.$el.css("top", event.offsetY - 55 + "px");
  }


}(this));