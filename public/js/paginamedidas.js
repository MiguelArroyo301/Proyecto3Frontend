document.addEventListener('DOMContentLoaded', function() {
    // Llamamos a la función para obtener los datos de la base de datos
    fetchDataFromDatabase();
});

function fetchDataFromDatabase() {
    // URL de tu API que proporciona los datos de la base de datos
    const apiUrl = 'http://localhost:13000/measurements'; // Cambia esto por la URL real de tu API

    // Hacemos una petición para obtener los datos
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la base de datos');
            }
            return response.json();
        })
        .then(data => {
            // Aquí actualizamos el contenido dinámico con los datos obtenidos
            const dynamicTextElement = document.getElementById('dynamic-text');

            // Suponiendo que `data` es un objeto con una propiedad `texto` que contiene las medidas
            dynamicTextElement.textContent = `Medidas obtenidas: ${data.medidas}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
