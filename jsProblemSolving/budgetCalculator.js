function budgetCalculator(num1, num2, num3) {
    if ((goriPrize || phonePrize || laptopPrize) <= 0 || typeof goriPrize == "string" || typeof goriPrize == "boolean" || typeof goriPrize == "object") {
        console.log("Give positive numeric number")
    }
    else{
        goriPrize = 50;
        phonePrize = 100;
        laptopPrize = 500;

        goriTotalPrize = 50 * num1;
        phoneTotalPrize = 100 * num2;
        laptopTotalPrize = 500 * num3;

        totalBudget = goriTotalPrize + phoneTotalPrize + laptopTotalPrize;

        return totalBudget;
    }
}
budgetCalculator(10, 10, 10);
console.log(goriTotalPrize);
console.log(phoneTotalPrize);
console.log(laptopTotalPrize);