// modal-handler.js - Enhanced modal dialog handling

/**
 * Enhanced modal handler class
 */
class ModalHandler {
    constructor() {
        this.activeModal = null;
        this.init();
    }

    init() {
        this.createModalContainer();
        this.addKeyboardListeners();
        this.addClickListeners();
    }

    createModalContainer() {
        const container = document.createElement('div');
        container.id = 'modal-container';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = 'rgba(0,0,0,0.5)';
        container.style.display = 'none';
        container.style.zIndex = '10000';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';

        document.body.appendChild(container);
    }

    addKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal();
            }
        });
    }

    addClickListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-trigger')) {
                const modalId = e.target.getAttribute('data-modal');
                this.openModal(modalId);
            }

            if (e.target.classList.contains('modal-close') || e.target === document.getElementById('modal-container')) {
                this.closeModal();
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error('Modal not found:', modalId);
            return;
        }

        this.activeModal = modal;
        const container = document.getElementById('modal-container');

        // Move modal to container
        container.appendChild(modal);
        modal.style.display = 'block';
        container.style.display = 'flex';

        // Add animation
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.8)';
        modal.style.transition = 'opacity 0.3s, transform 0.3s';

        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        });

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        if (!this.activeModal) return;

        const modal = this.activeModal;
        const container = document.getElementById('modal-container');

        // Add closing animation
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.8)';

        modal.addEventListener('transitionend', () => {
            modal.style.display = 'none';
            container.style.display = 'none';

            // Move modal back to original position
            document.body.appendChild(modal);

            // Restore body scroll
            document.body.style.overflow = '';

            this.activeModal = null;
        }, { once: true });
    }

    createModal(id, title, content) {
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'modal';
        modal.style.backgroundColor = 'white';
        modal.style.borderRadius = '8px';
        modal.style.padding = '20px';
        modal.style.maxWidth = '500px';
        modal.style.width = '90%';
        modal.style.maxHeight = '80vh';
        modal.style.overflowY = 'auto';
        modal.style.position = 'relative';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.textContent = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';

        const titleEl = document.createElement('h2');
        titleEl.textContent = title;

        const contentEl = document.createElement('div');
        contentEl.innerHTML = content;

        modal.appendChild(closeBtn);
        modal.appendChild(titleEl);
        modal.appendChild(contentEl);

        document.body.appendChild(modal);

        return modal;
    }
}

// Initialize modal handler
document.addEventListener('DOMContentLoaded', function() {
    new ModalHandler();
});

// Export ModalHandler class
window.ModalHandler = ModalHandler;
