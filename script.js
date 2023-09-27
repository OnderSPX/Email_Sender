emailjs.init("") // Replace with your EmailJS User ID | EmailJS Kullanıcı Kimliğinizle değiştirin https://www.emailjs.com/

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail(){
    //Get the form data | Form verilerini alın
    
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    //Send the email using EmailJS | EmailJS kullanarak e-postayı gönderin
    emailjs.send("service_i09snmj", "template_np742wv", {
        to_email: to,
        subject: subject,
        message: message
    }).then(function () {
        result.innerHTML = "E-posta başarıyla gönderildi";
        result.style.opacity = 1;
    }, function (error){
        result.innerHTML = "E-posta gönderilemedi";
        result.style.opacity = 1;
        console.log(error);
    });

}
