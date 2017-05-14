Template.reqPage.helpers({
  reqData : function(){
    var reqDetails = Requests.findOne({_id:Session.get("reqId")});
    var user = UserDetails.findOne({userId:reqDetails.userId});
    console.log(user);
    reqDetails['candidateName'] = user.firstName + " " + user.lastName;
    reqDetails['requestedOn'] = moment(reqDetails.createdAt).format('YYYY-MMM-DD  HH:MM:SS');
    reqDetails['address'] = user.address;
    return reqDetails;
  },
});


Template.reqPage.events({
  'change .status' : function(){
    console.log("status changed to");
    var newStatus = $('[name=status_field]').val();
    console.log(newStatus);
    Requests.update({_id:Session.get('reqId')}, {$set :{status:newStatus}});
  }
});
