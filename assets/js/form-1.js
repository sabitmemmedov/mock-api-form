let form = document.getElementById("form")
let usernameN = document.getElementById("username")
let passwordN = document.getElementById("password")
let addressN = document.getElementById("address")
let emailN = document.getElementById("email")
let countryN = document.getElementById("country")

function postData(e) {
    e.preventDefault()
    axios.post("https://655e2afb9f1e1093c59aa2ee.mockapi.io/users", {
        username: usernameN.value,
        email: emailN.value,
        password: passwordN.value,
        address: addressN.value,
        country: countryN.value
    }).then(response => {
        console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

form.addEventListener("submit",postData)