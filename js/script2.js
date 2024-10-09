
// Selección de elementos en el DOM---Obtener referencias a los elementos del formulario y de la tarjeta
const cardNumberInput = document.getElementById('cardNumber'); // Campo del número de tarjeta
const cardNameInput = document.getElementById('cardName');     // Campo del nombre del titular
const expiryDateInput = document.getElementById('expiryDate'); // Campo de la fecha de expiración
const cvcInput = document.getElementById('cvc');               // Campo del código de seguridad (CVC)
const card = document.getElementById('card');                  // Contenedor de la tarjeta para poder voltearla

// Obtener referencias a los elementos en los que se mostrarán los datos en la tarjeta
const cardNumberDisplay = document.querySelector('.card-number'); // Donde se muestra el número de tarjeta
const cardNameDisplay = document.querySelector('.card-name');     // Donde se muestra el nombre del titular
const cardExpiryDisplay = document.querySelector('.card-expiry'); // Donde se muestra la fecha de expiración
const cardCvcDisplay = document.querySelector('.back .cvc');      // Donde se muestra el CVC en la parte trasera

// Función para formatear automáticamente el número de tarjeta con espacios cada 4 dígitos
function formatCardNumber(value) {
  // Elimina todos los espacios en blanco y luego agrupa en bloques de 4
  return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
}

// Evento para actualizar el número de tarjeta a medida que se escribe
cardNumberInput.addEventListener('input', (e) => {
  // Formatea el valor actual del input del número de tarjeta
  const formattedValue = formatCardNumber(e.target.value);
  e.target.value = formattedValue;

  // Si el campo está vacío, mostrar el valor por defecto "#### #### #### ####"
  cardNumberDisplay.textContent = formattedValue || '#### #### #### ####';
});

// Evento para actualizar el nombre del titular a medida que se escribe
cardNameInput.addEventListener('input', (e) => {
  // Si el campo está vacío, mostrar "Nombre del Titular"
  cardNameDisplay.textContent = e.target.value || 'Nombre del Titular';
});

// Evento para actualizar la fecha de expiración a medida que se escribe
expiryDateInput.addEventListener('input', (e) => {
  // Si el campo está vacío, mostrar "MM/YY"
  cardExpiryDisplay.textContent = e.target.value || 'MM/YY';
});

// Evento para actualizar el código CVC y voltear la tarjeta para mostrar el reverso cuando el campo CVC está activo
cvcInput.addEventListener('focus', () => {
  // Añade la clase 'flip' a la tarjeta, que activa la rotación
  card.classList.add('flip');
});

// Evento para volver a la vista frontal de la tarjeta cuando se deja de escribir en el campo CVC
cvcInput.addEventListener('blur', () => {
  // Quita la clase 'flip', volviendo la tarjeta a la vista frontal
  card.classList.remove('flip');
});

// Evento para actualizar el código CVC en la tarjeta mientras se escribe
cvcInput.addEventListener('input', (e) => {
  // Si el campo está vacío, mostrar "CVC"
  cardCvcDisplay.textContent = e.target.value || 'CVC';
});



