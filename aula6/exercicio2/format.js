

function base() {
    var format = document.getElementById('format');
    var cname = document.getElementById('cname').value
    var city = document.getElementById('city').value
    var district = document.getElementById('district').value
    var street = document.getElementById('street').value;
    var houseNumber = document.getElementById('houseNumber').value;
    var zipcode = document.getElementById('zipcode').value;

    format.innerHTML = cname + ' shipping address: ' + city + ', ' + district + ', ' + street + ', ' + houseNumber + ', ' + zipcode
}

