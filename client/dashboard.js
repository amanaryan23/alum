Template.dashboard.helpers({
	'requests': function(){

		var id = Meteor.userId();

		console.log(id);

		return Requests.find({userId: id},{sort : {createdAt : -1}});

	}
});