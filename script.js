
let formBtn = document.querySelector('#formBtn');
document.getElementById('p-info').style.display = 'none';
formBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let firstName = document.querySelector('#floatingFName').value;
    let lastName = document.querySelector('#floatingLName').value;
    let email = document.querySelector('#floatingEmail').value;
    let birthDate = document.querySelector('#floatingDOB').value;
    let heightS = document.querySelector('#floatingHeight').value;
    let weightS = document.querySelector('#floatingWeight').value;
    let bloodGroup = document.querySelector('#floatingBlood').value;

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
        alert('Please fill out all required fields (First Name, Last Name, Email)');
        return;
    }
    let weightN = parseInt(weightS);
    let heightN = parseInt(heightS);
    document.getElementById('fullName').innerHTML = firstName + ' ' + lastName;
    document.getElementById('email').innerHTML = email;
    document.getElementById('dob').innerHTML = birthDate;
    document.getElementById('height').innerHTML = (heightN / 30.48).toFixed(2)+' ft';
    document.getElementById('weight').innerHTML = weightN+ ' Kg';
    document.getElementById('bmi').innerHTML = (weightN / Math.pow((heightN / 100), 2)).toFixed(2);
    document.getElementById('bG').innerHTML = bloodGroup
    //age calculate
    document.getElementById('age').innerHTML = calculateAge(birthDate);

    document.getElementById('form-div').style.display = 'none';
    document.getElementById('p-info').style.display = 'block';
});
function calculateAge(birthDate) {
    const [year, month, day] = birthDate.split('-');
    const today = new Date();
    let currentYear = today.getFullYear();
    const age = currentYear - parseInt(year);
    return age;
    //update required...
}
