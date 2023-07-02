const calcButton = document.querySelector(".btn");


const errorMsgDay = document.querySelector(".errMsg-d");
const errorMsgMonth = document.querySelector(".errMsg-m");
const errorMsgYear = document.querySelector(".errMsg-y");

const labelD = document.querySelector(".label-d");
const labelM = document.querySelector(".label-m");
const labelY = document.querySelector(".label-y");


const ageSpanY = document.querySelector(".dash-y");
const ageSpanM = document.querySelector(".dash-m");
const ageSpanD = document.querySelector(".dash-d");



calcButton.addEventListener("click",function(){

      let bDay = document.querySelector("#day");
      let bMonth = document.querySelector("#month");
      let bYear = document.querySelector("#year");


      let birthDay = bDay.value;
      let birthMonth = bMonth.value;
      let birthYear = bYear.value;

      birthDay = birthDay > 0 && birthDay <= 31 ? birthDay : "invalid"
      birthMonth = birthMonth > 0 && birthMonth <= 12 ? birthMonth : "invalid"
      birthYear = birthYear > 0 ? birthYear : "invalid"

      if(birthDay !== "invalid" && birthMonth !== "invalid" && birthYear !== "invalid"){
            var age = calculateAge(birthDay,birthMonth,birthYear)
            const {day,month,year} = age;
            ageSpanY.innerHTML = year;
            ageSpanM.innerHTML = month;
            ageSpanD.innerHTML = day;

            errorMsgDay.innerHTML = "";
            errorMsgMonth.innerHTML = "";
            errorMsgYear.innerHTML = "";
            labelD.style.color="hsl(0, 1%, 44%)"
            bDay.style.borderColor = "hsl(0, 0%, 86%)"
            labelM.style.color="hsl(0, 1%, 44%)"
            bMonth.style.borderColor = "hsl(0, 0%, 86%)"
            labelY.style.color="hsl(0, 1%, 44%)"
            bYear.style.borderColor = "hsl(0, 0%, 86%)"
      }else {
            if (birthDay === "invalid"){
                  errorMsgDay.innerHTML = "Must be a valid day"
                  labelD.style.color="hsl(0, 100%, 67%)"
                  bDay.style.borderColor = "hsl(0, 100%, 67%)"
            }if (birthMonth === "invalid"){
                  errorMsgMonth.innerHTML = "Must be a valid month"
                  labelM.style.color="hsl(0, 100%, 67%)"
                  bMonth.style.borderColor = "hsl(0, 100%, 67%)"
            }if (birthYear === "invalid"){
                  errorMsgYear.innerHTML = "Must be a valid year"
                  labelY.style.color="hsl(0, 100%, 67%)"
                  bYear.style.borderColor = "hsl(0, 100%, 67%)"
            }
      }


});

function calculateAge(birthDay,birthMonth,birthYear){


      let date = new Date();
      let currentDate = date.getDate();
      let currentMonth = 1+date.getMonth();
      let currentYear = date.getFullYear();
      let months = [31,28,31,30,31,30,31,31,30,31,30,31];
      
      if(birthDay > currentDate){
            currentDate = currentDate + months[currentMonth - 1];
            currentMonth = currentMonth - 1;
      }
      if(birthMonth > currentMonth){
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
      }

      var day = currentDate - birthDay;
      var month = currentMonth - birthMonth;
      var year = currentYear - birthYear;
      
      return {
            day:day,
            month:month,
            year:year
      }
}
