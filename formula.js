const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"];
let winners = {};
//schumacher: 5, Alonso: 2, Räikkönen: 1, Hamilton: 7, Button: 1, Vettel: 4, Rosberg: 1}//
function countWin(driver) {
    if (winners.hasOwnProperty(driver)===false)
    {
    winners[driver]=1;
    }
    else{
        winners[driver]++;
    }





    // your code goes here
}

formula1Champions.forEach(countWin);
