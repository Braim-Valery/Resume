document.addEventListener('DOMContentLoaded', function () {
const menu = document.querySelector('#menu-btn'),
      header = document.querySelector('.header'),
      phone = document.querySelector('#phone'),
      text = document.querySelector('#text'),
      comment = document.querySelector('textarea'),
      buttonForm = document.querySelector('#btn-form'),
      themeToggler = document.querySelector('#theme-toggler');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

buttonForm.onclick = () => {
      event.preventDefault();
      let pattern = /^\+(\d{12})$/;
      if(phone.value.match(pattern)){
            phone.classList.add('valid');
            phone.classList.remove('invalid')
            text.innerHTML="Your value in valid"
      }else{
            
            phone.classList.remove('valid');
            phone.classList.add('invalid');
            text.innerHTML="Please enter valid value"
      }
      if(comment.value === ''){
            comment.placeholder = 'vvmdbrm@gmail.com';
      }
}

});




