Template.documents.events({
	'click .btn-warning':function(event){
		event.preventDefault();
		var tableControl = document.getElementById('table');
		var arr = [];
		$('input:checkbox:checked', tableControl).each(function() {
        	console.log(this.value);
        	arr.push(this.value);
    	});
		console.log(arr);
		var u = Session.get('userId');

		Requests.insert({
			createdAt : new Date(),
			userId : u,
			docs : arr
		});

		Router.go('success');
	}
});