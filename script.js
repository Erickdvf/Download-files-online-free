document.getElementById('downloadButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const statusMessage = document.getElementById('statusMessage');
    
    if (url.trim() === '') {
        statusMessage.textContent = 'Por favor, introduce un enlace válido.';
        return;
    }

    // Mensaje simulando la descarga
    statusMessage.textContent = 'Procesando tu solicitud...';

    // Aquí deberías integrar una API real que procese la descarga.
    setTimeout(() => {
        statusMessage.textContent = 'Descarga completada. Verifica tus descargas.';
    }, 3000); // Simulamos una espera de 3 segundos para "descargar" el contenido
});
