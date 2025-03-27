// Open modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay show';
    document.body.appendChild(overlay);
    modal.classList.add('show');
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();
    modal.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    const currentDate = new Date().toISOString(); // Get current date and time in ISO format
    timestampInput.value = currentDate; // Set the hidden field value to the timestamp
});
