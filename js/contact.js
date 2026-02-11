// Inicialize o EmailJS com a Public Key dela
emailjs.init("8gUHp0dOkgW63XjPj");

const btn = document.getElementById('button-text');
const feedback = document.getElementById('feedback-msg');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';
    btn.innerText = 'Enviando...';

    const serviceID = 'service_hut7hib';
    const templateID = 'template_78q0if6';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Mensagem';
            btn.innerText = 'Enviar Mensagem';
            feedback.innerText = "Mensagem enviada com sucesso! Em breve responderei.";
            feedback.style.color = "green";
            this.reset(); // Limpa o formulário
        }, (err) => {
            btn.value = 'Enviar Mensagem';
            btn.innerText = 'Enviar Mensagem';
            feedback.innerText = "Erro ao enviar. Tente novamente ou use o email direto.";
            feedback.style.color = "red";
            console.log(JSON.stringify(err));
        });
});