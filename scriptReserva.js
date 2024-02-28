function reservarTransporte() {
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
  
    // Aquí puedes realizar alguna validación de los datos ingresados antes de enviar la reserva
  
    alert("¡Reserva exitosa!"+ nombre +", has reservado un transporte de "+ origen + "a "+ destino+" para el "+fecha);
}