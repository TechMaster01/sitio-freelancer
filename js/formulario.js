document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validar que todos los campos estén llenos
    if (!nombre || !telefono || !correo || !mensaje) {
        alert('Por favor, llena todos los campos del formulario.');
        return;
    }
    
    // Crear el mensaje para WhatsApp
    const mensajeWhatsApp = `¡Hola! Me gustaría contactarte para servicios freelancer.

*Mi nombre es:* ${nombre}
*Mi numero de teléfono es:* ${telefono}
*Mi correo es:* ${correo}

*Mensaje:*
${mensaje}

Enviado desde tu sitio web.`;
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    
    // Número de WhatsApp (formato internacional sin + ni espacios)
    const numeroWhatsApp = '526673011907'; // México (+52) + tu número
    
    // URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
    
    // Opcional: limpiar el formulario después del envío
    this.reset();
});