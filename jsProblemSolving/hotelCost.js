function hotelCost(days) {
    var hotelRent = 0;
    if(days< 0 || typeof days == 'string' || typeof days == 'boolean' || typeof days == 'object') {
        console.log("Enter valid days");
    }
    else if (days <= 10) {
        hotelRent = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        hotelRent = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var twentyPlusDays = remaining * 50;

        hotelRent = firstTenDays + secondTenDays + twentyPlusDays;
    }
    return hotelRent;
}
hotelCost(25);
