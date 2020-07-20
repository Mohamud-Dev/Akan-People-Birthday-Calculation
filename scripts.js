function hp(){ 
    var day = document.getElementById("day").value;
    var dd = parseInt(day)
    var month = document.getElementById("month").value;
    var mm = parseInt(month)
    var year = document.getElementById('year').value;
    var yy = parseInt(year)

    var weekDay = new Date(yy + "/" + mm + "/" + dd);
    var output = document.getElementById("output")
    var finalResults = weekDay.getDay()

    
    var maleNames=["kwasi","Kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    var femaleNames=["Akosuo","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
    var daysOfTheWeek=["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    
    if (year<1900 || year>2100) {
        output.innerHTML = "Cheers!" + " Please enter a valid year" 
    }
    else if (month <1 || month > 12) { 
        output.innerHTML = "Cheers!" + " Please enter  valid month"
    }
    else if (day <1 || day >31 ) {
        output.innerHTML = "Cheers! " + " Please enter a valid day"
    }
else if (female.checked) {
output.innerHTML = "Cheers!" + " your Akan name is " + femaleNames[finalResults] + " you were born on "
 + daysOfTheWeek[finalResults] 
} 
else{
    output.innerHTML = "Cheers!" + " your Akan name is " + maleNames[finalResults] + " you were born on " + daysOfTheWeek[finalResults]
}
}