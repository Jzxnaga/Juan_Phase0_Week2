
function minuteToHour(ToNone){
    var min = Math.floor(ToNone/60);
    var sec = ToNone%60;
    if(sec<10){
      sec = '0' + sec
    }else{
      sec
    }
    var time = min + ':'+ sec;
    return time
}
// TEST CASES
console.log(minuteToHour(63)); // 1:03
console.log(minuteToHour(124)); // 2:04
console.log(minuteToHour(53)); // 0:53
console.log(minuteToHour(88)); // 1:28
console.log(minuteToHour(120)); // 2:00


