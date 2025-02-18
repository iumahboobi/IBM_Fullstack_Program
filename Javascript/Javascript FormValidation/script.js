function checkData() {
    console.log("You are clicing me")


    // First of all create references to email and password

    let username = document.getElementById("name");
    let emailInput = document.getElementById("email");

    if (username.value === "" || emailInput.value == "") {

        alert("Please enter value for email and password");
        username.focus();
        emailInput.focus();
        return false;
    }


    const container = document.getElementsByClassName("container")[0];
    const headerTwo = document.getElementsByClassName("contact-detail")[0];
    const paraName = document.getElementsByClassName("name-entry")[0];
    const paraEmail = document.getElementsByClassName("email-entry")[0];

    headerTwo.innerHTML = "ContactDetails";
    paraName.innerHTML = `${username.value}`;
    paraEmail.innerHTML = `${emailInput.value}`;

    container.appendChild(headerTwo);
    container.appendChild(paraName);
    container.appendChild(paraEmail);
    return false;
}


