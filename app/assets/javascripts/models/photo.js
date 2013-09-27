(function(root) {

  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function(attributes) {
    var attributes_copy = _.extend({}, attributes);
    this.attributes = attributes_copy;
  }

  Photo.all = (Photo.all || []);

  Photo.prototype.get = function(attr_name) {
    return this.attributes[attr_name];
  };

  Photo.prototype.set = function(attr_name, val) {
    this.attributes[attr_name] = val;
  };

  Photo.prototype.create = function(callback) {
    if (this.id) {
      return
    }

    $.ajax({
      url: "/api/photos",
      type: "POST",
      data: this.attributes,
      success: function(photoData) {
        var photoObj = new Photo(photoData);
        Photo.all.push(photoObj);
        callback(photoData);
        Photo.trigger('add');
      }
    });
  };

  Photo.prototype.localSave = function(photoData) {
    _.extend(this.attributes, photoData);
  }

  Photo.fetchByUserId = function(userId, callback) {
    $.ajax({
      url: "/api/users/" + userId + "/photos",
      type: "GET",
      success: function(photoData) {
        photoData.forEach(function(photo) {
          var photoObj = new Photo(photo);
          Photo.all.push(photoObj);
        });
        callback(photoData);
      }
    });
  }

  Photo._events = (Photo._events || {});

  Photo.on = function(eventName, callback) {
    console.log("On called.");
    if (!Photo._events[eventName]) {
      Photo._events[eventName] = [callback];
    } else {
      Photo._events[eventName].push(callback);
    }
    // console.log(eventName);
    // console.log(callback);
    console.log(Photo._events)
  };



  Photo.trigger = function(eventName) {
    Photo._events[eventName].forEach(function(callback) {
      //console.log("Triggered!");
      callback();
    });
  }



})(this);