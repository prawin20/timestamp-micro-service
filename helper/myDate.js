var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
module.exports = {
    unixDate: function(date){
    return new Date(date).getTime()/1000;    
    },
    naturalDate: function(date){
    var newDate =  new Date(date);
    if(!isNaN(Date.parse(newDate))){
    return month[newDate.getMonth()]+" "+newDate.getDate()+", "+newDate.getFullYear();    
    }
    return null;
    }
};