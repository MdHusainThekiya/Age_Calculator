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
    

    // number of date till when age is required
    withdate = document.getElementById("date").valueAsNumber;


    // extracting currentyear & currentmonth using parsedate function of "Age at the Date of :" date
    currentyear = parseDate(element.value).getFullYear();
    currentmonth = parseDate(element.value).getMonth()+1;


    // differece between current date and DOB in miliseconds
    difference = (withdate - dob)

    // age in seconds
    ageinsec = difference/1000
    // age in minutes
    ageinmin = ageinsec/60
    // age in hours
    ageinhr = ageinmin/60
    // age in days
    ageinday = ageinhr/24
    // age in weeks
    ageinweeks = ageinday/7
    roundoffweeks = Math.floor(ageinweeks)
    // days left in last week
    daysleftinweek = Math.floor((ageinweeks-roundoffweeks)*7)
    // age in months
    ageinmonths = ageinweeks/4.34524
    roundoffageinmonths = Math.floor(ageinweeks/4.34524)



    // differece in current day and day of birth, which is equal to ****left over days in month****
    dateofbirth = document.getElementById("dob").value
    dayofbirth = dateofbirth.split('-')[2]
    currentday = element.value.split('-')[2]

    if(currentday > dayofbirth){
        differenceincurrentdayanddayofbirth = currentday - dayofbirth;
    } else {
        // 'string plus number' cannot be added, so used +x + +y = z to add 2 numbers
        differenceincurrentdayanddayofbirth = +currentday + +(dayofbirth - currentday);
    }
    leftoverdaysinmonth = differenceincurrentdayanddayofbirth;


    // age in years
    ageinyears = ageinmonths/12
    roundoffageinyears = Math.floor(ageinyears)
    // leftover month in years
    leftovermonthinyears = Math.floor((ageinyears - roundoffageinyears)*12)

    // condition when age is less than 30days
    if(roundoffageinyears == 0 & roundoffageinmonths == 0){
        leftoverdaysinmonth = ageinday
    }



    // Testing
    console.log("dob",dateofbirth, "as a number:", dob)
    console.log("current date",element.value, "as a number:", withdate)
    console.log("ageinsec",ageinsec)
    console.log("ageinmin",ageinmin)
    console.log("ageinhr",ageinhr)
    console.log("ageinweeks",ageinweeks)
    console.log("roundoffweeks",roundoffweeks)
    console.log("daysleftinweek",daysleftinweek)
    console.log("ageinmonths",ageinmonths)
    console.log("roundoffageinmonths",roundoffageinmonths)
    console.log("currentday",currentday)
    console.log("dayofbirth",dayofbirth)
    console.log("leftoverdaysinmonth",leftoverdaysinmonth)
    console.log("ageinyears",ageinyears)
    console.log("roundoffageinyears",roundoffageinyears)
    console.log("leftovermonthinyears",leftovermonthinyears)


    
    // getting result div for pesting result
    result = document.getElementById("result")

    // pesting result in result area
    result.innerHTML = ["Age is: <br>","<br>", roundoffageinyears, " Years,  ", roundoffageinmonths, " Months,  ", leftoverdaysinmonth, " Days !!<br>",
    "Or","<br>",roundoffageinmonths, " Months  ", leftoverdaysinmonth, " Days !!<br>",
    "Or","<br>",roundoffweeks, " Weeks  ", daysleftinweek, " Days !!<br>",
    "Or","<br>",ageinday, " Days !!<br>",
    "Or","<br>",ageinhr, " Hours !!<br>",
    "Or","<br>",ageinmin, " Minutes !!<br>",
    "Or","<br>",ageinsec, " Seconds !!<br>"].join("");
}