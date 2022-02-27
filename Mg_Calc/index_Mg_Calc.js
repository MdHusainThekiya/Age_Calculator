//*****************Slider Value Script*****************


var emi_result = document.getElementById('emi_result');
var total_payble_result = document.getElementById('total_payble_result');
var intrest_result = document.getElementById('intrest_result');

let dollarIndianLocale = Intl.NumberFormat('en-IN');

// Get Rate Of Intrest & TIME Input from slider
var roi_input = document.getElementById('roi_input');
var time_input = document.getElementById('time_input');

// Get Rate Of Intrest output value ID & Creating Default Inner HTML for ROI
var roi_value = document.getElementById('roi_value');
roi_value.innerHTML = roi_input.value;

// Get TIME output value ID & Creating Default Inner HTML for TIME
var time_value = document.getElementById('time_value');
time_value.innerHTML = time_input.value;

var live_roi_input;

// Function To change Default HTML with Slider Value
roi_input.oninput = function(roi_input){
    roi_value.innerHTML = this.value;
}

time_input.oninput = function(){
    time_value.innerHTML = this.value;
}


var principal_input = document.getElementById('principal_input');
var principal = principal_input.value


principal_input.oninput = function(){
    principal_input.innerHTML = this.value;
    principal = principal_input.value
    roi_input.oninput = function(){
        roi_value.innerHTML = this.value;
    
        time_input.oninput = function(){
            time_value.innerHTML = this.value;
    
            monthlyInterestRate = roi_value.innerHTML/1200;
            timeInMonths = time_input.value*12;
    
            mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
            numerator = monthlyInterestRate * mpow
            denominator = mpow-1;
            num_upon_deno = numerator/denominator
    
            mortgage = principal * num_upon_deno
            emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
            total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
            intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
            var xValues = ["Principal", "Intrest"];
            var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
            var barColors = ["#b91d47","#00aba9"];
            
            new Chart("myChart", {
              type: "doughnut",
              data: {
                labels: xValues,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValues
                }]
              },
              options: {
                title: {
                  display: true,
                }
              }
            });
    
        }
    
    
        monthlyInterestRate = roi_input.value/1200;
        timeInMonths = time_input.value*12;
    
        mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
        numerator = monthlyInterestRate * mpow
        denominator = mpow-1;
        num_upon_deno = numerator/denominator
    
        mortgage = principal * num_upon_deno
        emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
        total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
        intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
        var xValues = ["Principal", "Intrest"];
        var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
        var barColors = ["#b91d47","#00aba9"];
        
        new Chart("myChart", {
          type: "doughnut",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
            }
          }
        });
    
    }
    
    monthlyInterestRate = roi_input.value/1200;
    timeInMonths = time_input.value*12;
    
    mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
    numerator = monthlyInterestRate * mpow
    denominator = mpow-1;
    num_upon_deno = numerator/denominator
    
    mortgage = principal * num_upon_deno
    emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
    total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
    intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
    var xValues = ["Principal", "Intrest"];
    var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
    var barColors = ["#b91d47","#00aba9"];
    
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
        }
      }
    });


    
    time_input.oninput = function(){
        time_value.innerHTML = this.value;
    
        monthlyInterestRate = roi_value.innerHTML/1200;
        timeInMonths = time_input.value*12;
    
        mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
        numerator = monthlyInterestRate * mpow
        denominator = mpow-1;
        num_upon_deno = numerator/denominator
    
        mortgage = principal * num_upon_deno
        emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
        total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
        intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
        var xValues = ["Principal", "Intrest"];
        var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
        var barColors = ["#b91d47","#00aba9"];
        
        new Chart("myChart", {
          type: "doughnut",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
            }
          }
        });
    
    }
}

roi_input.oninput = function(){
    roi_value.innerHTML = this.value;

    time_input.oninput = function(){
        time_value.innerHTML = this.value;

        monthlyInterestRate = roi_value.innerHTML/1200;
        timeInMonths = time_input.value*12;

        mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
        numerator = monthlyInterestRate * mpow
        denominator = mpow-1;
        num_upon_deno = numerator/denominator

        mortgage = principal * num_upon_deno
        emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
        total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
        intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
        var xValues = ["Principal", "Intrest"];
        var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
        var barColors = ["#b91d47","#00aba9"];
        
        new Chart("myChart", {
          type: "doughnut",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
            }
          }
        });

    }


    monthlyInterestRate = roi_input.value/1200;
    timeInMonths = time_input.value*12;

    mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
    numerator = monthlyInterestRate * mpow
    denominator = mpow-1;
    num_upon_deno = numerator/denominator

    mortgage = principal * num_upon_deno
    emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
    total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
    intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
    var xValues = ["Principal", "Intrest"];
    var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
    var barColors = ["#b91d47","#00aba9"];
    
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
        }
      }
    });

}

monthlyInterestRate = roi_input.value/1200;
timeInMonths = time_input.value*12;

mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
numerator = monthlyInterestRate * mpow
denominator = mpow-1;
num_upon_deno = numerator/denominator

mortgage = principal * num_upon_deno
emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
var xValues = ["Principal", "Intrest"];
var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
var barColors = ["#b91d47","#00aba9"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
    }
  }
});

time_input.oninput = function(){
    time_value.innerHTML = this.value;

    monthlyInterestRate = roi_value.innerHTML/1200;
    timeInMonths = time_input.value*12;

    mpow = Math.pow(1 + monthlyInterestRate, timeInMonths);
    numerator = monthlyInterestRate * mpow
    denominator = mpow-1;
    num_upon_deno = numerator/denominator

    mortgage = principal * num_upon_deno
    emi_result.innerHTML = dollarIndianLocale.format(mortgage.toFixed(2));
    total_payble_result.innerHTML = dollarIndianLocale.format((mortgage.toFixed(2) * timeInMonths).toFixed(2));
    intrest_result.innerHTML = dollarIndianLocale.format(((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2));
    var xValues = ["Principal", "Intrest"];
    var yValues = [principal, ((mortgage.toFixed(2) * timeInMonths).toFixed(2) - principal).toFixed(2)];
    var barColors = ["#b91d47","#00aba9"];
    
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
        }
      }
    });

}

//*****************Model of Other Calculator*****************
// Get Model Element
var model = document.getElementById('model');
// Get Open Button
var openbutton = document.getElementById('OtherCalculator');
// Get Closed Button
var closebutton = document.getElementById('close');
// Listen for click
openbutton.addEventListener('click', openmodel);
closebutton.addEventListener('click', closemodel);
// Function to open model
function openmodel(){
    model.style.display = 'flex';
}
// Function to close model
function closemodel(){
    model.style.display = 'none';
}


