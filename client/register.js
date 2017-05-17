Template.register.events({
	'click .btn-warning': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var pass = $('[name=password]').val();

			Accounts.createUser({
				email : email,
				password : pass,
				
			});

			Router.go('/requestDoc')

			

	}
});