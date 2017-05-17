Template.userPage.helpers({
  userData : function(){
    var user = UserDetails.findOne({userId:Session.get('userId')});
    user['name'] = user.firstName + " " + user.lastName;
    return user;
  }
});
