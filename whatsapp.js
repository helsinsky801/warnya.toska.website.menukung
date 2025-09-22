// whatsapp.js - Handling WhatsApp links for orders

document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = '6285752222285'; // WhatsApp number without +

    // Function to generate WhatsApp URL
    function generateWhatsAppUrl(item, quantity = 1, notes = '') {
        let message = `Halo, saya ingin memesan ${item}.`;
        if (quantity > 1) {
            message += ` Jumlah: ${quantity}.`;
        }
        if (notes) {
            message += ` Catatan: ${notes}.`;
        }
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }

    // Validate order details
    function validateOrder(item, quantity, notes) {
        if (!item || item.trim() === '') {
            alert('Item tidak boleh kosong.');
            return false;
        }
        if (quantity < 1 || quantity > 10) {
            alert('Jumlah harus antara 1 dan 10.');
            return false;
        }
        if (notes.length > 100) {
            alert('Catatan tidak boleh lebih dari 100 karakter.');
            return false;
        }
        return true;
    }

    // Event delegation for confirm buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('confirm-btn')) {
            const itemName = event.target.getAttribute('data-item');
            const quantity = parseInt(document.getElementById('order-quantity')?.value) || 1;
            const notes = document.getElementById('order-notes')?.value || '';
            if (validateOrder(itemName, quantity, notes)) {
                const whatsappUrl = generateWhatsAppUrl(itemName, quantity, notes);
                window.open(whatsappUrl, '_blank');
                // Close the confirm modal
                const modal = event.target.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            }
        }
    });

    // Utility function for direct WhatsApp links (if needed elsewhere)
    window.openWhatsApp = function(item, quantity = 1, notes = '') {
        if (validateOrder(item, quantity, notes)) {
            const url = generateWhatsAppUrl(item, quantity, notes);
            window.open(url, '_blank');
        }
    };

    // Add quantity and notes inputs to confirm modal
    const confirmModalContent = document.querySelector('#confirm-modal .modal-content');
    if (confirmModalContent) {
        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Jumlah:';
        quantityLabel.setAttribute('for', 'order-quantity');

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.id = 'order-quantity';
        quantityInput.min = '1';
        quantityInput.max = '10';
        quantityInput.value = '1';

        const notesLabel = document.createElement('label');
        notesLabel.textContent = 'Catatan:';
        notesLabel.setAttribute('for', 'order-notes');

        const notesInput = document.createElement('textarea');
        notesInput.id = 'order-notes';
        notesInput.placeholder = 'Tambahkan catatan khusus...';
        notesInput.maxLength = '100';

        const confirmPara = document.getElementById('confirm-text');
        confirmPara.insertAdjacentElement('afterend', quantityLabel);
        quantityLabel.insertAdjacentElement('afterend', quantityInput);
        quantityInput.insertAdjacentElement('afterend', notesLabel);
        notesLabel.insertAdjacentElement('afterend', notesInput);
    }

    // Log WhatsApp link generation
    console.log('WhatsApp functionality initialized with enhanced features.');
});
