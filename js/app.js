function register() {
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            window.location.href = "/login";
            return;
        }

        alert(data.error || "Registration failed");
    });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    console.log(email, password); // debug

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        alert(data.message);

        if (data.success == true || data.message == "Login success") {
            window.location.href = data.redirect || "/dashboard";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Login failed. Please try again.");
    });
}

