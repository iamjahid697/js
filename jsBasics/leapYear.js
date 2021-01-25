function isLeapYear(year){
    
    if(year == 0){
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else{
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000);