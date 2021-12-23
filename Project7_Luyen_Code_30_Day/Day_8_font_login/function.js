const Username = document.getElementById('name');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-password');

var valueCheck = [];
valueCheck.push(Username);
valueCheck.push(Email);
valueCheck.push(Password);
valueCheck.push(ConfirmPassword);


// Username.nextElementSibling

function allLetter(inputtxt){
    var letters = /^[A-Za-z0-9]+$/;
    if(inputtxt.match(letters)){
        return true;
    }
    else{
        return false;
    }
}

function messageInput(e,message){
    e.nextElementSibling.nextElementSibling.innerText = message;
    e.nextElementSibling.nextElementSibling.style.color = '#ff3333';
}

Username.addEventListener('keydown', function(event){
    if (this.value.length < 4){
        messageInput(Username,'Username quá ngắn (>4)')
        Username.nextElementSibling.style.backgroundColor = '#ff3333';
    }else if (allLetter(this.value) === false){
        messageInput(Username,'Đầu vào không hợp lệ')
        Username.nextElementSibling.style.backgroundColor = '#ff3333';
    }else{
        messageInput(Username,'Đầu vào hợp lệ')
        Username.nextElementSibling.nextElementSibling.style.color = 'green';
        Username.nextElementSibling.style.backgroundColor = '#2691d9';
    }

    if (event.key === 'Enter'){
        Email.focus();
    }
})

function checkName(){
    for (var i = 0; i< valueCheck.length; i++) {
        valueCheck[i].addEventListener('change', function(){
            console.log('checknull')
            if (this.value !== ""){
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('have-value')
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('check')

                // this.nextElementSibling.classList.add('done')
                // this.nextElementSibling.classList.remove('normal')
            }else{
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('check')
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('have-value')

                this.nextElementSibling.classList.add('normal')
                this.nextElementSibling.classList.remove('done')
            }
        })
    }
}

checkName()