let ar = ["elvin","elsen","elsad",]
let a="elvin";
localStorage.setItem("user",a)
console.log(localStorage.getItem("user"));


localStorage.setItem("users",JSON.stringify(ar))
console.log(JSON.parse(localStorage.getItem("users")))
