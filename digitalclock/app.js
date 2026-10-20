function updateClock(){
    let now = new Date()



    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();



    // AM OR PM
ampm = "AM"
if(hours >= 12)
    ampm = "PM"

    hours = hours.toString().padStart(2,"0")
    minutes = minutes.toString().padStart(2,"0")
    seconds = seconds.toString().padStart(2,"0")

document.getElementById("time").textContent =` ${hours} : ${minutes} : ${seconds}  ${ampm}`
    console.log(hours);

    // let date = now.toDateString();

    // document.getElementById("date").textCntent = ` ${date}` ;
    

// days
    
 let days = [
 "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]


let year = now.getFullYear();
let date = now.getDate();
let day = days[now.getDay()];
let month = months[now.getMonth()];


// Greeting
if(hours >=12 && hours <=16){
    document.getElementById("greeting").textContent = "Good Afternoon"
}   

document.getElementById("date").textContent =   `${date} ${month} ${year}`
document.getElementById("day") .textContent =   `${day}`
document.getElementById("Day") .textContent =   `${day}`




}
setInterval(() => {
  updateClock()  
}, 1000);

// echo "# java-script-project" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/olamilekan641/java-script-project.git
// git push -u origin main