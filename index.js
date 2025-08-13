// Función para inicializar modales: recibe los ids del botón, modal y botón cerrar
function setupModal(openBtnId, modalId, closeBtnId) {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  if (!openBtn || !modal || !closeBtn) return; // evitar errores si no existe algún elemento

  // Abrir modal
  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Cerrar modal con "X"
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal si se hace clic fuera del contenido
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Inicialización de todos los modales
setupModal('openModalSobremi', 'modalSobremi', 'closeModalSobremi');
setupModal('openModalexperiencia', 'modalexperiencia', 'closeModalexperiencia');
setupModal('openModalhabilidades', 'modalhabilidades', 'closeModalhabilidades');
setupModal('openModaleducacion', 'modaleducacion', 'closeModaleducacion');
setupModal('openModalidiomas', 'modalidiomas', 'closeModalidiomas');
setupModal('openModalpasatiempos', 'modalpasatiempos', 'closeModalpasatiempos');

document.getElementById('downloadPDF').addEventListener('click', () => {
 const element = document.querySelector('.container'); //Lo que se exporta
 const opt = {
    margin: 0.5,
    filename: 'CV-Lourdes Carranza.pdf',
    image:     { type: 'jpeg', quality: 0.98 },
    html2canvas: {scale: 2},
    jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
 };

 html2pdf().set(opt).from(element).save();

 });