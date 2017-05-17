Template.success.events({
	'click .btn-primary' : function(event){
		event.preventDefault();
		Router.go('dashboard');

	}
})