const button = document.querySelector('.togglebtn');

const defaultIcon = document.querySelector('#sunIcon');

const logo = document.querySelector('#logo_img');


button.addEventListener('click', () => {
    document.body.classList.toggle('swichtheme');
    
    if (defaultIcon.classList.contains('fa-sun')) {
        defaultIcon.classList.remove('fa-sun');
        defaultIcon.classList.add('fa-moon');
        logo.src = "./logo2.png";

    } else{
        defaultIcon.classList.remove('fa-moon');
        defaultIcon.classList.add('fa-sun');
        logo.src = './logo3.png';


    }

})
