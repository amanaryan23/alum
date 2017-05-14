Router.route('/',{
	name  : 'main',
	template : 'main'
});

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/dashboard');

Router.route('/requestDoc');

Router.route('/documents');

Router.route('/success');

Router.route('/register');

Router.route('/confirmation');
// Router.route('/', function(){
//   this.render('main');
  
// });