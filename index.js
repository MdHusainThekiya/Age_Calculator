const element = document.getElementById('date');
element.valueAsNumber = Date.now()-(new Date()).getTimezoneOffset()*60000;

function calculate(){
    dob = document.getElementById("dob").valueAsNumber;
    console.log(dob)
    withdate = document.getElementById("date").valueAsNumber;
    console.log(withdate)

    difference = (withdate - dob)
    console.log(difference)

    totalseconds = (difference) / 1000
    minutes = totalseconds / 60
    hours = minutes / 60
    totaldays = hours / 24
    totalmonths = Math.floor(totaldays * (12/365))
    years = Math.floor(totalmonths / 12)
    months = (totalmonths - (years*12))
    days = (totaldays - (years*365) - (months*30))
    console.log(years, months, days, totalmonths, totaldays)
    result = document.getElementById("result")
    // createelement = document.createElement("b");
    // text = createelement.innerText = ("age is:", years, "years", months, "months", days, "days")
    
    result.innerHTML = ["The age is: ", years, " years,  ", months, " months,  ", days, " days !!"].join("");
}