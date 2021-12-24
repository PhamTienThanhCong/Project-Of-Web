const Username = document.getElementById('name');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-password');

var valueCheck = [];
valueCheck.push(Username);
valueCheck.push(Email);
valueCheck.push(Password);
valueCheck.push(ConfirmPassword);

var checkTextInput = [];

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

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function messageInput(e,message){
    e.nextElementSibling.nextElementSibling.innerText = message;
    e.nextElementSibling.nextElementSibling.style.color = '#ff3333';
}

Username.addEventListener('focus', function(){
    checkTextInput[0] = setInterval(function(){
        if ( Username.value.length === 0){
            Username.value.length
        }else if (Username.value.length < 4){
            messageInput(Username,'Username quá ngắn (>4)')
            Username.nextElementSibling.style.backgroundColor = '#ff3333';
        }else if (allLetter(Username.value) === false){
            messageInput(Username,'Username không được chứa kí tự đặc biệt')
            Username.nextElementSibling.style.backgroundColor = '#ff3333';
        }else{
            messageInput(Username,'Username hợp lệ')
            Username.nextElementSibling.nextElementSibling.style.color = 'green';
            Username.nextElementSibling.style.backgroundColor = '#2691d9';
        }
    },100)
})

Email.addEventListener('focus', function(){
    checkTextInput[1] = setInterval(function(){
        if ( Email.value.length === 0){
            Email.value.length
        }else if (validateEmail(Email.value) === null){
            messageInput(Email,'Email không hợp lệ')
            Email.nextElementSibling.nextElementSibling.style.color = '#ff3333';
            Email.nextElementSibling.style.backgroundColor = '#ff3333';
        }else{
            messageInput(Email,'Email hợp lệ')
            Email.nextElementSibling.nextElementSibling.style.color = 'green';
            Email.nextElementSibling.style.backgroundColor = '#2691d9';
        }
    },100)
})

Password.addEventListener('focus', function(){
    checkTextInput[2] = setInterval(function(){
        if ( Password.value.length === 0){
            Password.value.length
        }else if ( Password.value.length < 4){
            messageInput(Password,'Mật khẩu yếu')
            Password.nextElementSibling.nextElementSibling.style.color = '#ff3333';
            Password.nextElementSibling.style.backgroundColor = '#ff3333';
        }else if ( Password.value.length < 8){
            messageInput(Password,'Mật khẩu Trung bình')
            Password.nextElementSibling.nextElementSibling.style.color = '#cc9900';
            Password.nextElementSibling.style.backgroundColor = '#2691d9';
        }else{
            messageInput(Password,'Mật khẩu Mạnh')
            Password.nextElementSibling.nextElementSibling.style.color = '#2691d9';
            Password.nextElementSibling.style.backgroundColor = '#2691d9';
        }
    },100)
})

ConfirmPassword.addEventListener('focus', function(){
    checkTextInput[3] = setInterval(function(){
        if ( ConfirmPassword.value.length === 0){
            ConfirmPassword.value.length
        }else if ( ConfirmPassword.value === Password.value){
            messageInput(ConfirmPassword,'Mật khẩu Khớp')
            ConfirmPassword.nextElementSibling.nextElementSibling.style.color = '#2691d9';
            ConfirmPassword.nextElementSibling.style.backgroundColor = '#2691d9';
        }else{
            messageInput(ConfirmPassword,'Mật khẩu không trùng khớp')
            ConfirmPassword.nextElementSibling.nextElementSibling.style.color = '#ff3333';
            ConfirmPassword.nextElementSibling.style.backgroundColor = '#ff3333';
        }
    },100)
})

function checkName(){
    for (var i = 0; i< valueCheck.length; i++) {
        valueCheck[i].addEventListener('blur', function(){
            clearInterval(checkTextInput[0])
            console.log('checknull')
            if (this.value !== ""){
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('have-value')
                this.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('check')
                this.nextElementSibling.classList.remove('normal')
                this.nextElementSibling.classList.add('done')
                this.nextElementSibling.style.backgroundColor = '#2691d9';
            }else{
                this.nextElementSibling.nextElementSibling.style.color = '#ff3333';
                this.nextElementSibling.nextElementSibling.innerText = 'Hàng này không được để trống'
                
                this.nextElementSibling.classList.remove('normal')
                this.nextElementSibling.classList.add('done')
                this.nextElementSibling.style.backgroundColor = '#ff3333';
            }
        })
    }
}

checkName()