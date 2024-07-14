<script>
    const horarioSelect = document.getElementById('hora');
    const diaSelect = document.getElementById('dia');

    const horariosSemana = [
        '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
    ];

    const horariosSabado = [
        '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'
    ];

    const horariosDomingo = [
        '10:00', '11:00', '12:00'
    ];

    diaSelect.addEventListener('change', function() {
        const selectedDay = this.value;
        let horarios;

        if (selectedDay === 'sabado') {
            horarios = horariosSabado;
        } else if (selectedDay === 'domingo') {
            horarios = horariosDomingo;
        } else {
            horarios = horariosSemana;
        }

        horarioSelect.innerHTML = '';
        horarios.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            horarioSelect.appendChild(option);
        });
    });

    document.querySelector('.formulario-agendamento').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('mensagem-sucesso').textContent = 'Obrigado por agendar! Recebemos sua solicitação e entraremos em contato em breve.';
        document.getElementById('mensagem-sucesso').style.display = 'block';
        setTimeout(function() {
            document.getElementById('mensagem-sucesso').style.display = 'none';
        }, 5000);
    });
</script>
