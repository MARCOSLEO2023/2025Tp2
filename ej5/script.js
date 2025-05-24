const formulario = document.getElementById("formulario")
const resultado = document.getElementById("resultado")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()

  const lado1 = parseFloat(document.getElementById("lado1").value)
  const lado2 = parseFloat(document.getElementById("lado2").value)
  const lado3 = parseFloat(document.getElementById("lado3").value)

  if (!lado1 || !lado2 || !lado3) {
    alert("Por favor, ingrese valores válidos.")
    return
  }

  if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
    alert("Por favor, ingrese valores positivos.")
    return
  }

  if (lado1 < lado3) {
    alert("El lado A debe ser mayor al lado C")
    return
  }

  const area = ((lado1 - lado3) * lado2) / 2 + lado2 * lado3
  resultado.textContent = "El Area del terreno es: " + area
})
