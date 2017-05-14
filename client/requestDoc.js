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

		var id = UserDetails.insert({
			createdAt : new Date(),
			firstName : firstName,
			lastName : lastName,
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
		Session.set('userId',id);
		Session.set('userEmail',email);

		Router.go('documents');
		
		
		
	}

});

