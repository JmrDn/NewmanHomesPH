const PROPERTY_NAME = localStorage.getItem("property-name");

if (PROPERTY_NAME !== null && PROPERTY_NAME !== ""){
    document.getElementById("property-name").innerText = "Martinville Homes " + PROPERTY_NAME ;
    document.querySelector('title').innerText = "Martinville Homes " + PROPERTY_NAME;
}

const propertyPrice = document.getElementById("propert-price");
const propertyName =  localStorage.getItem("property-name");

// if (propertyName === 'Unit B'){
//     propertyPrice.classList.add('martinville-promo');
//     propertyPrice.innerText = "P6,100,000";
// }

document.addEventListener("DOMContentLoaded", function () {
    var propertyName = document.getElementById('property-name').innerText;
    
    // Set the value of the hidden input field
    if (propertyName) {
        document.querySelector('input[name="property_name"]').value = propertyName;
    }
});