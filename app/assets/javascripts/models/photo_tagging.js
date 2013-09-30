(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotoTagging = PT.PhotoTagging = function(attributes) {
    var attributes_copy = _.extend({}, attributes);
    this.attributes = attributes_copy;
  }

  PhotoTagging.all = (PhotoTagging.all || []);

  PhotoTagging.prototype.get = function(attr_name) {
    return this.attributes[attr_name];
  };

  PhotoTagging.prototype.set = function(attr_name, val) {
    this.attributes[attr_name] = val;
  };

  PhotoTagging.prototype.create = function(callback) {
    if (this.id) {
      return
    }

    $.ajax({
      url: "/api/photo_taggings",
      type: "POST",
      data: this.attributes,
      success: function(photoData) {
        var photoObj = new PhotoTagging(photoData);
        PhotoTagging.all.push(photoObj);
        callback(photoData);
        Photo.trigger('add');
        //console.log(Photo._events)
      }
    });
  };

  PhotoTagging.prototype.localSave = function(photoData) {
    _.extend(this.attributes, photoData);
  }

  PhotoTagging.fetchByPhotoId = function(userId, callback) {
    $.ajax({
      url: "/api/photos/" + photoId + "/photo_taggings",
      type: "GET",
      success: function(photoData) {
        photoData.forEach(function(photo) {
          var photoObj = new PhotoTagging(photo);
          PhotoTagging.all.push(photoObj);
        });
        callback(photoData);
      }
    });
  }

  PhotoTagging._events = (PhotoTagging._events || {});

  PhotoTagging.on = function(eventName, callback) {
    console.log("Reached On. Events hash at end:");
    if (!PhotoTagging._events[eventName]) {
      PhotoTagging._events[eventName] = [callback];
    } else {
      PhotoTagging._events[eventName].push(callback);
    }
  };

  PhotoTagging.trigger = function(eventName) {
    PhotoTagging._events[eventName].forEach(function(callback) {
      callback();
    });
  }

  PhotoTagging.find = function(idNum) {
    for (var i = 0; i < PhotoTagging.all.length; i++) {
      if (PhotoTagging.all[i].attributes.id === idNum) {
        return PhotoTagging.all[i];
      }
    }

    return null;
  }

})(this);