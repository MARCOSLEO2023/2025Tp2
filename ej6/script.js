const validador = document.getElementById("validador")
const listado = document.getElementById("listado")
const mensaje = document.getElementById("mensaje")

validador.addEventListener("submit", (e) => {
  e.preventDefault()

  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value
  const edad = document.getElementById("edad").value
  const altura = document.getElementById("altura").value
  const email = document.getElementById("email").value

  mensaje.style.color = "red"
  if (!nombre || !apellido || !edad || !altura || !email) {
    mensaje.innerText = "Por favor, rellene todos los campos."
    return
  }
  if (nombre.length >= 50) {
    mensaje.innerText = "El nombre no puede ser mayor a 50 caracteres."
    return
  }
  if (apellido.length >= 50) {
    mensaje.innerText = "El apellido no puede ser mayor a 50 caracteres."
    return
  }
  if (edad < 18) {
    if (edad < 0) {
      mensaje.innerText = "No se puede tener una edad negativa."
    } else {
      mensaje.innerText = "Debe ser mayor de edad."
    }
    return
  }
  if (altura < 0) {
    mensaje.innerText = "No se puede tener una altura negativa."
    return
  } else if (altura > 230) {
    mensaje.innerText = "La altura no puede ser mayor a 230 cm."
    return
  }
  if (!email.includes("@")) {
    mensaje.innerText = "Debe ser un correo electronico valido."
    return
  }

  mensaje.style.color = "green"
  mensaje.innerText = "Los datos han sido validados con exito."
})
