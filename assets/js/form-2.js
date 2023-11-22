let title1 = document.getElementById("title")
let price1 = document.getElementById("price")
let description1 = document.getElementById("description")
let discount1 = document.getElementById("discount")
let stock1 = document.getElementById("stock")
let quality1 = document.getElementById("quality")
let country1 = document.getElementById("country")
let customersCount1 = document.getElementById("customersCount")
let catagory1 = document.getElementById("catagory")
let city1 = document.getElementById("city")


function postData(e) {
    e.preventDefault()
    axios.post("https://655e4b479f1e1093c59add07.mockapi.io/products", {
        title: title1.value,
        price: price1.value,
        description: description1.value,
        discount: discount1.value,
        stock: stock1.value,
        quality: quality1.value,
        country: country1.value,
        customersCount: customersCount1.value,
        catagory: catagory1.value,
        city: city1.value,
    }).then(response => {
        console.log('Response:', response.data);
    })
        .catch(error => {
            console.error('Error:', error);
        });
}

form.addEventListener("submit", postData)