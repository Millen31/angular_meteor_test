Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images")],
  filter: {
      maxSize: 3145728,
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
            
        }
    }
});

Images.allow({
  insert: function() { return true },
  update: function() { return true },
  remove: function() { return true },
  download: function() { return true }
});


