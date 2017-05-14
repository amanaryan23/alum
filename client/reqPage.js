Template.reqPage.helpers({
  reqData : function(){
    var reqDetails = Requests.findOne({_id:Session.get("reqId")});
    var user = UserDetails.findOne({_id:reqDetails.userId});
    console.log(user);
    reqDetails['candidateName'] = user.firstName + " " + user.lastName;
    reqDetails['requestedOn'] = moment(reqDetails.createdAt).format('YYYY-MMM-DD  HH:MM:SS');
    return reqDetails;
  }
});
