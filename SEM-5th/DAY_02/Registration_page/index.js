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

    // Print on the console
    console.log(nameVal);
    console.log(emailVal);
    console.log(passwordVal);

    const innerdiv = document.createElement("div");

    innerdiv.innerText =
        `${nameVal} ${emailVal} ${passwordVal}`;

    students.appendChild(innerdiv);

    name1.value = "";
    email.value = "";
    password.value = "";
});