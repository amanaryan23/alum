var detailsUser = new Meteor.Collection(null);

    // create a local persistence observer
    var detailsUserObserver = new LocalPersist(detailsUser, 'details-user',
      {                                     // options are optional!
        maxDocuments: 20,                   // maximum number of line items in cart
        storageFull: function (col, doc) {  // function to handle maximum being exceeded
          col.remove({ _id: doc._id });
          alert('details is full.');
        }
      });