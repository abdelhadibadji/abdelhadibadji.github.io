//////////////////// CONTACT US INPUT CHECK

const form = document.getElementById('form');
const UserName = document.getElementById('UserName');
const Fname = document.getElementById('Fname');
const Email = document.getElementById('Email');
const Tel = document.getElementById('Tel');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    Check();
});

function Check(){
    const UserNameVal = UserName.value.trim();
    const FnameVal = Fname.value.trim();
    const EmailVal = Email.value.trim();
    const TelVal = Tel.value.trim();

    if (UserNameVal === '') {
        setErrorFor(UserName);
    }
    else{
        setSuccessFor(UserName);
    }
}

function setErrorFor(){
    const Form = document.getElementsByClassName('control');

    Form.className = 'control error';
}

function setSuccessFor() {
    const Form = document.getElementsByClassName('control');

    Form.className = 'control Success';
}