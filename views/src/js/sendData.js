document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        const formData = new FormData(registerForm);
        const formDataJSON = {};

        formData.forEach((value, key) => {
            formDataJSON[key] = value;
        });

        // Enviar los datos al servidor
        try {
            const response = await fetch('/api/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataJSON)
            });

            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }

            const responseData = await response.json();
            console.log(responseData);
            window.location.href = "localhos:3000/home"
            // Aquí puedes manejar la respuesta del servidor como sea necesario
        } catch (error) {
            console.error('Error:', error.message);
            // Manejar el error aquí
        }
    });
});
