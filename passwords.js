const button = document.getElementById("btn");
const givePassword = document.getElementById("result");
const length = document.getElementById("input");
button.addEventListener("click", callPasswordAPI);



async function callPasswordAPI() {
    givePassword.innerHTML = "Generating password...";
    let size= length.value;

    if(!size)
        size=10;

    if (size <= 0) {
        givePassword.innerText = "Please enter a valid number";
        return;
    }

    if(size >=50)
    {
        givePassword.innerText = "Password length should be <= 50"
        return;
    }

    try {
        const res = await fetch(
            `https://api.api-ninjas.com/v1/passwordgenerator?length=${size}`,
            {
                method: "GET",
                headers: { "X-Api-Key": "q1uPVSG3DWpSxsFG7Ao1FByQlN8nEx0Nj6pBXBDa" }
            });

        if (!res.ok)
            throw new Error("API ERROR");

        const data = await res.json();
        sendPassword(data);
    }
    catch (error) {
        givePassword.innerText = "Failed to generate password!!";
        console.error(error);
    }
}

function sendPassword(pass) {
    givePassword.innerHTML = "";

    const p = document.createElement("p");
    p.innerText = pass.random_password;
    givePassword.append(p);
}