Router.route('/',{
	name  : 'main',
	template : 'main'
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/checkStatus');

Router.route('/requestDoc');

Router.route('/documents');

Router.route('/success');

Router.route('/admin', {
	template : 'adminDash'
});

Router.route('/req/:_id', function(){
	Session.set("reqId", this.params._id);
	this.render('reqPage');
});

// Router.route('/', function(){
//   this.render('main');

// });
