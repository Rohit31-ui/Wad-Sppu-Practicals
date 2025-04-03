/*----------- event on documen loaded and apply function  --------------*/
document.addEventListener("DOMContentLoaded",function(){
     /*---------- array to get users ----------------*/
    let users = JSON.parse(localStorage.getItem("users")) || [];
    /*----- getting userlist --------*/
    let userList = document.getElementById("userList");

    /* adding for each to traverse througn entire users array ----------*/
    users.forEach(user => {
        /*----------- creating list element -----------*/
        let li=document.createElement("li")
        /*--------storing name and email in li tag ---------------*/
        li.textContent= `Name: ${user.name}, Email: ${user.email} `;
        /*--------- append child ------------------*/
        userList.appendChild(li);
    });

})