
async function fetchLatestSensorData() {
    try {
        // Realiza una solicitud HTTP GET a la URL del servidor para obtener los datos más recientes
        const response = await fetch('http://localhost:13000/api/medidasmike/escribir'); // Cambia a la URL de tu servidor
        const data = await response.json(); // Convierte la respuesta a formato JSON

        // Inicializamos variables para almacenar los valores
        let ozoneValue = null; 
        let ozoneTimestamp = null; 
        let temperatureValue = null; 
        let temperatureTimestamp = null; 

        // Procesamos los datos obtenidos
        data.forEach(measurements => {
            if (measurements.sensor_type === 1) {
                ozoneValue = measurements.value; 
                ozoneTimestamp = measurements.timestamp; 
            } else if (measurements.sensor_type === 2) {
                temperatureValue = measurements.value; 
                temperatureTimestamp = measurements.timestamp; 
            }
        });

        // Actualizar los valores de ozono en la página
        const ozoneValueElement = document.getElementById('ozonoValue');
        const ozoneTimestampElement = document.getElementById('ozonoTimestamp');
        if (ozoneValue !== null) {
            ozoneValueElement.textContent = ozoneValue; // Muestra el valor de ozono
            ozoneTimestampElement.textContent = new Date(ozoneTimestamp).toLocaleString(); // Formatea y muestra la hora de la medición
        } else {
            ozoneValueElement.textContent = 'No disponible'; // Mensaje si no hay datos
            ozoneTimestampElement.textContent = 'No disponible'; // Mensaje si no hay datos
        }

        // Actualizar los valores de temperatura en la página
        const temperatureValueElement = document.getElementById('temperatureValue');
        const temperatureTimestampElement = document.getElementById('temperatureTimestamp');
        if (temperatureValue !== null) {
            temperatureValueElement.textContent = temperatureValue; // Muestra el valor de temperatura
            temperatureTimestampElement.textContent = new Date(temperatureTimestamp).toLocaleString(); // Formatea y muestra la hora de la medición
        } else {
            temperatureValueElement.textContent = 'No disponible'; // Mensaje si no hay datos
            temperatureTimestampElement.textContent = 'No disponible'; // Mensaje si no hay datos
        }

    } catch (error) {
        // Manejo de errores: muestra un mensaje en la consola si ocurre un error al obtener los datos
        console.error('Error al obtener los datos de sensores:', error);
    }
}

/**
 * @brief Función que se ejecuta al cargar la página.
 *
 * Llama a la función `fetchLatestSensorData` para obtener los datos iniciales de los sensores
 * y configura un intervalo para actualizar los datos cada 5 segundos.
 */
window.onload = () => {
    fetchLatestSensorData(); // Obtener datos iniciales
    setInterval(fetchLatestSensorData, 5000); // Actualizar cada 5 segundos
};
