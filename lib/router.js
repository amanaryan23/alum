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

Router.route('/admin', {
	template : 'adminDash'
});

Router.route('/req/:_id', function(){
	Session.set("reqId", this.params._id);
	this.render('reqPage');
});

Router.route('/user/:_id', function(){
	Session.set("userId", this.params._id);
	this.render('userPage');
})
// Router.route('/', function(){
//   this.render('main');

// });



var x;
var paymentId;
var paymentRequestId;
Router.route('/redirect',{
	// loadingTemplate:'loading',
	waitOn:function(){
		paymentId = this.params.query.payment_id;
		paymentRequestId = this.params.query.payment_request_id;
		console.log(this.params._id);
		console.log(paymentId);
		console.log(paymentRequestId);
		Session.set('payment_id',paymentId);
		Session.set('payment_request_id',paymentRequestId);
		console.log(Session.get('payment_request_id'));
		 x = ReactiveMethod.call('getPaymentDetails',paymentId,paymentRequestId);
		 Session.set('x_value',x);
		console.log(x);

	},
	action:function(){
		console.log('action');

		var x = Session.get('x_value');
		console.log(x);
		if(x == true){
			console.log('success @@');
			this.render('success');
		}
		else if(x == false){
			this.render('failure');
		}
	}
});

