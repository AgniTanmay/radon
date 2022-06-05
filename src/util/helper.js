const printDate = function(){
console.log(Date());
}
module.exports.printDate = printDate;

const printMonth=function(){
    let today = new Date();
    let month = today.getMonth() +1;
    console.log('Current month is ' +month);
}
module.exports.printMonth = printMonth;

const getBatchInfo = function(){
    console.log('Radon W3D3 the topic being taught today is NodeJs module system')
}
module.exports.getBatchInfo = getBatchInfo;