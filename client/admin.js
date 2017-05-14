Template.adminDash.helpers({

  requestsList : function(){
    var reqs_crs = Requests.find();
    var reqs = reqs_crs.fetch();
    for (var i = 0; i < reqs.length; i++) {
      reqs[i].index = i+1;
    }
    console.log(reqs);
    return reqs;
  },
  name : function(userId){
    var user = UserDetails.findOne({userId:userId });
    console.log(user);
    return user.firstName + " " + user.lastName;
  },
  creationDate: function(createdAt){
    console.log(createdAt.getYear());
    var d = moment(createdAt);
    console.log(d);
    var result = d.format('DD-MM-YYYY');
    return result;
  }
});
