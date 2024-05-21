document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('content-request-form');
    const successMessage = document.getElementById('success-message');
    const serieNote = document.getElementById('serie-note');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_hxjae03', 'template_cinetox4dsd', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                form.reset();
                form.style.display = 'none';
                successMessage.style.display = 'block';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

    document.getElementById('content-type').addEventListener('change', function() {
        if (this.value === 'Serie') {
            serieNote.style.display = 'block';
        } else {
            serieNote.style.display = 'none';
        }
    });
});
