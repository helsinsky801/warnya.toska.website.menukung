// popup.js - Modal popup functionality for menu categories

document.addEventListener('DOMContentLoaded', function() {
    // Menu data
    const menuData = {
        minuman: [
            'ES YAKULT JELLY',
            'ES YAKULT TAMPA JELLY',
            'ES KOPI SUSU ESPRESSO',
            'ES KOPI SUSU ESPRESSO JELLY',
            'ES CAPPUCINO BIASA',
            'ES CAPPUCINO FULL UHT',
            'ES CAPPUCINO CINCAU',
            'ES EXTRA JOSS BIASA',
            'ES EXTRA JOSS SUSU',
            'ES SYRUP ABC',
            'ES TEH',
            'ES CENDOL',
            'KOPI SUSU ESPRESSO PANAS',
            'KOPI HITAM ESPRESSO PANAS',
            'CAPPUCINO PANAS',
            'TEH PANAS'
        ],
        makanan: [
            'MIE GORENG',
            'MIE REBUS',
            'NASI CUP',
            'NASI GORENG TELUR',
            'NASI GORENG AYGO',
            'TELUR CRISPY',
            'SEBLAK',
            'JAMUR CRISPY',
            'KULIT AYAM CRISPY'
        ]
    };

    // Create modals for each category
    Object.keys(menuData).forEach(category => {
        const modalId = `modal-${category}`;

        // Create modal div
        const modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal';

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content scrollable';

        // Close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';

        // Heading
        const heading = document.createElement('h3');
        heading.textContent = category === 'minuman' ? 'Menu Minuman' : 'Menu Makanan';

        // Search bar for filtering items
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Cari menu...';
        searchInput.className = 'search-input';

        // Menu grid
        const menuGrid = document.createElement('div');
        menuGrid.className = 'menu-grid';

        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            const itemTitle = document.createElement('h3');
            itemTitle.textContent = item;

            const orderBtn = document.createElement('button');
            orderBtn.className = 'order-btn';
            orderBtn.textContent = 'Pesan';
            orderBtn.setAttribute('data-item', item);

            menuItem.appendChild(itemTitle);
            menuItem.appendChild(orderBtn);
            menuGrid.appendChild(menuItem);
        });

        // Append elements
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(heading);
        modalContent.appendChild(searchInput);
        modalContent.appendChild(menuGrid);
        modal.appendChild(modalContent);

        // Append modal to body
        document.body.appendChild(modal);

        // Event listeners for close
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const items = menuGrid.querySelectorAll('.menu-item');
            items.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Create confirmation modal
    const confirmModal = document.createElement('div');
    confirmModal.id = 'confirm-modal';
    confirmModal.className = 'modal';

    const confirmModalContent = document.createElement('div');
    confirmModalContent.className = 'modal-content';

    const confirmCloseBtn = document.createElement('span');
    confirmCloseBtn.className = 'close';
    confirmCloseBtn.innerHTML = '&times;';

    const confirmHeading = document.createElement('h3');
    confirmHeading.textContent = 'Konfirmasi Pesanan';

    const confirmPara = document.createElement('p');
    confirmPara.id = 'confirm-text';
    confirmPara.textContent = 'Apakah Anda yakin ingin memesan item ini?';

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.textContent = 'Ya, Pesan via WhatsApp';
    confirmBtn.id = 'confirm-whatsapp-btn';

    confirmModalContent.appendChild(confirmCloseBtn);
    confirmModalContent.appendChild(confirmHeading);
    confirmModalContent.appendChild(confirmPara);
    confirmModalContent.appendChild(confirmBtn);
    confirmModal.appendChild(confirmModalContent);

    document.body.appendChild(confirmModal);

    // Event listeners for confirm modal
    confirmCloseBtn.addEventListener('click', function() {
        confirmModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === confirmModal) {
            confirmModal.style.display = 'none';
        }
    });

    // Event listeners for open buttons
    document.querySelectorAll('.open-popup-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const modal = document.getElementById(`modal-${category}`);
            if (modal) {
                modal.style.display = 'block';
            }
            // Remove blur effect on homepage when popup opens
            document.body.style.filter = 'none';
        });
    });

    // Event listeners for order buttons to open confirm modal
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('order-btn')) {
            const itemName = event.target.getAttribute('data-item');
            document.getElementById('confirm-text').textContent = `Apakah Anda yakin ingin memesan ${itemName}?`;
            document.getElementById('confirm-whatsapp-btn').setAttribute('data-item', itemName);
            confirmModal.style.display = 'block';
            // Close the category modal
            const categoryModal = event.target.closest('.modal');
            if (categoryModal) {
                categoryModal.style.display = 'none';
            }
            // Remove blur effect on homepage when confirm popup opens
            document.body.style.filter = 'none';
        }
    });
});
