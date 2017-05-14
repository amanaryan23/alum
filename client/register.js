Template.register.events({
	'click .btn-warning': function(event){
			event.preventDefault();
			var firstName = $('[name=first_name]').val();
			var lastName = $('[name=last_name]').val();
			var email = $('[name=email]').val();
			var phone = $('[name=phone]').val();
			var pass = $('[name=password]').val();

			Accounts.createUser({
				email : email,
				password : pass,
				firstName : firstName,
				lastName : lastName,
				phone : phone
			});

			

	}
});