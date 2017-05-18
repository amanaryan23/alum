Meteor.startup(function(){
	mojo = Instamojo('b7fd479db1a62261d6744600df62280d', '29e4b17aa4f0494b2318d0b7ede9d8a7','https://test.instamojo.com/api/1.1/');

});




	// mojo.createRequest(payload);

	// var id = 
	// mojo.getRequestDetails(id);


Meteor.methods({

	paymentRequest:function(amount){
		 var amt = amount;
		var payload = {
		  purpose: 'FIFA 16',
		  amount: amt,
		  phone: '9999999999',
		  buyer_name: 'John Doe',
		  redirect_url: 'http://localhost:3000/redirect/',
		  send_email: true,
		  webhook: 'http://www.example.com/webhook/',
		  send_sms: true,
		  email: 'foo@example.com',
		  allow_repeated_payments: false
		}
		var m = mojo.createRequest(payload);
		console.log(m);
		return m.payment_request.longurl;

	},

	'getPaymentDetails' : function(paymentId,paymentRequestId){
		var x = mojo.getPaymentDetails(paymentRequestId, paymentId);
		console.log('methods');
		console.log(x.success);
		return x.success;
	}
})
