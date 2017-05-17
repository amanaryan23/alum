Template.confirmation.helpers({
	'userDetails' : function(){
		var id = Meteor.userId();
		// console.log(UserDetails.find({userId: id},{sort : {createdAt : -1}}).fetch()[0]);
		// return UserDetails.find({userId: id},{sort : {createdAt : -1}}).fetch()[0];
		var data = Session.get('details');
		console.log(data[0]);
		console.log(data[0].firstName);
		// console.log(detailsUser.find({userId: id},{sort : {createdAt : -1}}).fetch()[0]);
		// return details.find({userId: id},{sort : {createdAt : -1}}).fetch()[0];
		return data[0];
	},

	
	'docDetails': function(){
		var arr = Session.get('documents');
		
			
		return arr;
	},

	'total_price' : function(){
		return Session.get('total');
	}
});


Template.confirmation.events({
	'click .btn-default': function(event){
		event.preventDefault();
		var arr = Session.get('documents');
		var e = Session.get('userEmail');


		var details = Session.get('details');

		UserDetails.insert({
			createdAt : new Date(),
			firstName : details[0].firstName,
			lastName : details[0].lastName,
			branch : details[0].branch,
			rollNum : details[0].rollNum,
			passingYear : details[0].passingYear,
			email : details[0].email,
			phone : details[0].phone,
			address : details[0].address,
			city : details[0].city,
			state : details[0].state,
			zip : details[0].zip,
			userId : Meteor.userId()
		});




		Requests.insert({
			createdAt : new Date(),
			userId : Meteor.userId(),
			userEmail : e,
			docs : arr,
			status : "processing"
		});

		Router.go('success');
	},

	'click .btn-warning': function(event){
		event.preventDefault();	

		Router.go('documents');
	},
	

	'click .btn-primary': function(event){
		event.preventDefault();	

		Router.go('requestDoc');
	}
});