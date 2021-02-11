function kilometerToMeter(kilometer){
    if (kilometer <= 0 || typeof kilometer == "string" || typeof kilometer == "boolean" || typeof kilometer == "object") {
     console.log("Invalid value")
    }
    else{
        meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(10);
console.log(result);