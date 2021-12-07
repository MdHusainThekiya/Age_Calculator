// element of date till when age is required
const element = document.getElementById('date');

// default todays date showing in "Age at the Date of :"
element.valueAsNumber = Date.now()-(new Date()).getTimezoneOffset()*60000;

// function to create date object of "Age at the Date of :" and using that for currentyear & currentmonth
function parseDate(date) {
    var b = date.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
  }


function calculate(){

    // number of date of birth
    dob = document.getElementById("dob").valueAsNumber;
    console.log(dob)

    // number of date till when age is required
    withdate = document.getElementById("date").valueAsNumber;
    console.log(withdate)


    // extracting currentyear & currentmonth using parsedate function of "Age at the Date of :" date
    currentyear = parseDate(element.value).getFullYear();
    console.log(currentyear)
    currentmonth = parseDate(element.value).getMonth()+1;
    console.log(currentmonth)


    // differece between current date and DOB in miliseconds
    difference = (withdate - dob)
    console.log(difference)

    // age in seconds
    totalseconds = (difference) / 1000

    // age in minutes
    minutes = totalseconds / 60

    // age in hours
    hours = minutes / 60

    // age in days
    totaldays = hours / 24

    // age in week (with roundoff week)
    totalweek = Math.floor(totaldays / 7)

    // remaining days after roundoff age in week
    leftoverdaysfromtotalweek = Math.floor(((totaldays / 7) - totalweek)*7)


    // age in months (with roundoff months) with condition of getting leapyear and non leap year
    if (currentyear%4 == 0){
        totalmonths = Math.floor(totaldays * (12/366))
    }
    else(
        totalmonths = Math.floor(totaldays * (12/365))
    )

    // remaining days after roundoff age in months (without days in month)
    leftoverdaysfromtotalmonths = ((totaldays * (12/365))-totalmonths)


    // remaining days after roundoff age in months (with days in month using condition checking)
    if (currentmonth == 1){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 2 && currentyear%4 == 0){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*29) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 2 && currentyear%4 != 0){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*28) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 3){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 4){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*30) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 5){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 6){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*30) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 7){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 8){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 9){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*30) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 10){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }
    else if (currentmonth == 11){
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*30) - leftoverdaysfromtotalweek
    }
    else {
        leftoverdaysfromtotalmonths = Math.floor(leftoverdaysfromtotalmonths*31) - leftoverdaysfromtotalweek
    }


    // age in years (with roundoff years)
    years = Math.floor(totalmonths/12)


    // remaining months after roundoff age in years
    leftovermonthsfromyears = Math.floor(((totalmonths/12) - years) * 12)


    // Testing
    console.log(totalseconds, minutes, hours, totaldays, totalweek, leftoverdaysfromtotalweek, totalmonths, leftoverdaysfromtotalmonths, years, leftovermonthsfromyears)
    
    // getting result div for pesting result
    result = document.getElementById("result")

    // pesting result in result area
    result.innerHTML = ["The age is: ", years, " years,  ", leftovermonthsfromyears, " months,  ", leftoverdaysfromtotalmonths, " days !!"].join("");
}
