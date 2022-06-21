const form = document.getElementById("form");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

form.addEventListener("submit", () => {
  let num1 = num1Input.value;
  let num2 = num2Input.value;

  if (isNaN(num1) || isNaN(num2)) {
    return alert("Ingrese números válidos");
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (num1 < 0 || num2 < 0) {
    return alert("Ingrese números positivos");
  }

  if (num1 === num2) {
    return alert("Los números son iguales");
  }

  let major = num1 > num2 ? num1 : num2;
  let minor = num1 > num2 ? num2 : num1;

  alert(`El número mayor es ${major}, y el número menor es ${minor}`);

  if (minor % 2 === 0) {
    minor++;
  }

  let oddNumbers = `Números impares entre ${minor} y ${major}:\n`;

  for (let i = minor; i <= major; i += 2) {
    oddNumbers += `${i}\n`;
  }

  alert(oddNumbers);
});
