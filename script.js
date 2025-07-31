const form = document.getElementById('formulario-tarea');
const input = document.getElementById('nueva-tarea');
const lista = document.getElementById('lista-tareas');
const alerta = document.getElementById('alerta');

// Agregar tarea
form.addEventListener('submit', e => {
  e.preventDefault();
  const texto = input.value.trim();

  if (texto !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${texto} <button class="btn btn-danger btn-sm">Eliminar</button>`;
    lista.appendChild(li);
    input.value = '';

    // Mostrar alerta de éxito
    alerta.classList.remove('d-none');
    setTimeout(() => alerta.classList.add('d-none'), 2000);
  }
});

// Eliminar tareas con botón
lista.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});