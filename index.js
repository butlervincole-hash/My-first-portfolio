let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 /20;

function moveBackground(event) 
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX / 20;
    const y = event.clientY / 20;

    for ( let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = 'translate(${x * boolInt}px, ${y * boolInt}px)'
      }
    }

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (constrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
    document.body.classList.remove("dark-theme")
}


function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
     loading.classList += " modal__overlay--visible"
     emailjs
        .sendForm(
            'service_znmueyn',
            'template_s3chdi9'
            event.target,
            'vyQPkg6Gr-N_JMtpQ'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += "modal__overlay--visible");
        }).catch(() => {
            loading.classList.removal("modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly on butlervincole@gmail.com"
            );
         {)        
       }
       
       function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open")
        }
         isModalOpen = true;
         document.body.classList += "modal--open";
       }