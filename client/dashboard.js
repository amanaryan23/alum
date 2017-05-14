Template.dashboard.helpers({
	'requests': function(){

		var id = Meteor.userId();

		console.log(id);

		return Requests.find({userId: id},{sort : {createdAt : -1}});

	},
	creationDate: function(createdAt){
		return moment(createdAt).format('YYYY-MMM-DD  HH:MM:SS');
	}
});
