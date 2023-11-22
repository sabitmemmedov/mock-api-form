let form = document.getElementById("form")
let nameValue = document.getElementById("name")
let surnameValue = document.getElementById("surname")
let ageValue = document.getElementById("age")
let emailValue = document.getElementById("email")

function postData(e) {
    e.preventDefault()
    axios.post("https://655e2afb9f1e1093c59aa2ee.mockapi.io/students", {
        name: nameValue.value,
        surname: surnameValue.value,
        age: ageValue.value,
        email: emailValue.value,
    }).then(response => {
        console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

form.addEventListener("submit",postData)