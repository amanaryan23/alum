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
			firstName : firstName,
			lastName : lastName,
			email : email,
			phone : phone,
			address : address,
			city : city,
			state : state,
			zip : zip
		});

		console.log(id);
		Session.set('userId',id);

		Router.go('documents');
		
		
		
	}

});