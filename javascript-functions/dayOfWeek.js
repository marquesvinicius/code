// DEFINE YOUR FUNCTION BELOW:
function returnDay(dayNumber) {
    let arrayDays = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dayNumber > 0 && dayNumber <= 7) {
        return arrayDays[dayNumber];
    }
    else {
        return null;
    }
}

returnDay(1);
returnDay(2);
returnDay(5);
returnDay(8);