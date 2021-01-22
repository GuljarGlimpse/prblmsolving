//**Problem one**//
function kilometerToMeter(number){
    if (number < 0) {
        return "Distance should not be negetive integer!!!"
    } else {
        return number * 1000;        
    }    
}

//**Problem two**//
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Number of Product Should not be Negetive!!!";
    } else {
        return totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
    }    
}

//**Problem three**//
function hotelCost(day) {
    let cost = 0;
    if (day < 0) {
        return "Number of days can not be negetive integer!!!"
    } else if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        let firstTendays = 10 * 100;
        let remaining = day -10;
        let secondTendays = remaining * 80;
        cost = firstTendays + secondTendays;
    } else {
        let firstTendays = 10 * 100;
        let secondTendays = 10 * 80;
        let remaining = day - 20;
        let thirdTendays = remaining * 50;
        cost = firstTendays + secondTendays + thirdTendays;
    }
    return cost;
}

//**Problem four**//
function megaFriend(friends) {
    let maxLength = 0 ;
    let longestName = '';
    if (friends.length == 0 || !Array.isArray(friends)) {
        console.log("Input is not an Array or Array is empty!!!");
    } else {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length > maxLength) {
                maxLength = friends[i].length;
                longestName = friends[i];
            }
        }
    }
    return longestName;
}
//**The End**/

