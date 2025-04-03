/*---------- get element from form id add submit event listener and a function------------*/
document.getElementById("registerForm").addEventListener("submit",function(e){
    /*--------- couldnt load the page after submit -----------*/
    e.preventDefault();

    /*------- get user entered data --------*/
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;

    /*------ store user entered data as an object -------*/
    let userData= {name,email,pass};

    /* create an local storage or an array to store user entered data in a json format ----------*/
    let users= JSON.parse(localStorage.getItem("users")) || [];
    /*------ push data to array -----------*/
    users.push(userData);
    /* convert that data into string */
    localStorage.setItem("users",JSON.stringify(users));

    /*------- ajax method to send form data---------*/
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body:JSON.stringify(userData),
        headers: {"Content-Type": "application/json"}
    })
    /*----- responce -----*/
    .then(response  => response .json())
    /*-------- alert ---------*/
    .then(data =>{
        alert("User registered successfully!");
        document.getElementById("registerForm").reset();

    })
    /*------ error catch --------*/
    .catch(error => console.error("Error:",error))

});