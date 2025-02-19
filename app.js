// let ar = ["elvin","elsen","elsad",]
// let a="elvin";
// localStorage.setItem("user",a)
// console.log(localStorage.getItem("user"));


// localStorage.setItem("users",JSON.stringify(ar))
// console.log(JSON.parse(localStorage.getItem("users")))
function setCarInfo() {
    let car = document.getElementById("carInput").value;
    localStorage.setItem("car", car);
    document.getElementById("carOutput").innerText="car info set successfully!"
}
function getCarInfo() {
    let car = localStorage.getItem("car");
if (car==document.getElementById("carInput").value) {
    document.getElementById("carOutput").innerText=  "Stored Car: " + car +"😊" ;
} else {
    document.getElementById("carOutput").innerText= "No car info stored 😊";  
}
}
