Template.documents.events({
	'click .btn-warning':function(event){
		event.preventDefault();
		var tableControl = document.getElementById('table');
		var arr = [];
		var price = [];
		$('input:checkbox:checked', tableControl).each(function() {
        	console.log(this.value);
        	arr.push(this.value);
    	});

		$('.row-select input:checked').each(function() {
	      var p;
	      p = $(this).closest('tr').find('.rate').html();
	      console.log(p);
	      price.push(p);
	      
	    });
		var l = price.length;
		var res = 0;
	    for (var i = 0; i < l; i++) {
	    	res = res + parseInt(price[i]);
	    }


		console.log(arr);
		console.log(price);
		console.log(res);
		var u = Session.get('userId');
		var e = Session.get('userEmail');

		var docs = Session.set('documents',arr);
		Session.set('total',res);
		console.log(Meteor.userId());
		// Requests.insert({
		// 	createdAt : new Date(),
		// 	userId : Meteor.userId(),
		// 	userEmail : e,
		// 	docs : arr,
		// 	status : "processing"
		// });

		// Router.go('success');

		Router.go('confirmation');
	},

	'click .tog' : function(event){

		console.log('hi');
		$('.h').show();
	}
});
