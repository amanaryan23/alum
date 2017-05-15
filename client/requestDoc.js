Template.requestDoc.helpers({
	
	'firstname': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).firstName;
		
		// console.log(user);
	},

	'lastname': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).lastName;
		
		// console.log(user);
	},

	'Email': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).email;
		// console.log(user);
	},

	'phoneNum': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).phone;
	},

	'rollNum': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).rollNum;
	},

	'branch': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).branch;
	},

	'passingYear': function(){
		var id = Meteor.userId();
		return UserDetails.findOne({userId:id}).passingYear;
	}



});


Template.requestDoc.events({
	'click .btn-warning' : function(event){
		event.preventDefault();
		var firstName = $('[name=first_name]').val();
		var lastName = $('[name=last_name]').val();
		var email = $('[name=email]').val();
		var phone = $('[name=phone]').val();
		var address = $('[name=address]').val();
		var city = $('[name=city]').val();
		var state = $('[name=state]').val();
		var zip = $('[name=zip]').val();
		var branch = $('[name=branch]').val();
		var passyear = $('[name=year_of_passing]').val();
		var rollnum = $('[name=roll_num]').val();

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

		var id = detailsUser.insert({
			createdAt : new Date(),
			firstName : firstName,
			lastName : lastName,
			rollNum : rollnum,
			branch : branch,
			passingYear : passyear,
			email : email,
			phone : phone,
			address : address,
			city : city,
			state : state,
			zip : zip,
			userId : Meteor.userId()
		});

		console.log(id);
		console.log(Meteor.userId());
		console.log(detailsUser.find({},{sort:{createdAt:-1}}).fetch());
		Session.set('userId',id);
		Session.set('userEmail',email);
		Session.set('details',detailsUser.find({},{sort:{createdAt:-1}}).fetch());

		Router.go('documents');
		
		
		
	}

});

