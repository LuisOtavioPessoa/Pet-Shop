document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const mensagemEnviado = document.getElementById('mensagem-enviado');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        setTimeout(function() {
            mensagemEnviado.classList.add('mostrar');
        }, 1000); 
    });
});
