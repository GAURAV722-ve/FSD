const email = document.getElementById("email");
const name1 = document.getElementById("name");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const students = document.getElementById("students");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const emailVal = email.value;
    const nameVal = name1.value;
    const passwordVal = password.value;

    console.log(nameVal);
    console.log(emailVal);
    console.log(passwordVal);

    if(nameVal === "" || emailVal === "" || passwordVal === ""){
        alert("Please fill all the details.");
        return;
    }


    const innerDiv = document.createElement("div");

    innerDiv.classList.add("student-card");


    innerDiv.innerHTML = `
        <h3>${nameVal}</h3>
        <p><strong>Email :</strong> ${emailVal}</p>
        <p><strong>Password :</strong> ********</p>
    `;


    students.appendChild(innerDiv);


    name1.value = "";
    email.value = "";
    password.value = "";

});