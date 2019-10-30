//jshint esversion:6
module.exports.getDate=getDate;//either we can use module.exports or just exports
function getDate(){ //we can also create a variable with anonyms functiona and then call that function any time // here we have created a function where the date parameters are thier
  let today = new Date();
  let options={
    weekday:"long",
    day:"numeric", //here we have mentioned all the variables with thier type
    month:"long"
  };
  return today.toLocaleDateString("en-US",options);

  //after obtaining its returning the  file back  to app.js
}
/* module.exports.getday=getday; //if i want just to get only the day
function getDay(){ // here we have created a function where the date parameters are thier
  let today = new Date();
  let options={
    weekday:"long",

  };
  let day=today.toLocaleDateString("en-US",options);

  return day;//after obtaining its returning the  file back  to app.js
}*/
