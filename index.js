// template_nq30qn8
// service_znmueyn
// vyQPkg6Gr-N_JMtpQ

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
       
       let isModalOPen = false;
       function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open")
        }
         isModalOpen = true;
         document.body.classList += "modal--open";
       }