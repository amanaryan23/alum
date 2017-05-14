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

// Router.route('/', function(){
//   this.render('main');
  
// });