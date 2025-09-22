// cupu-tooltip.js - Fungsi tooltip yang cupu

document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const tooltipText = el.getAttribute('data-tooltip');
            let tooltipDiv = document.createElement('div');
            tooltipDiv.className = 'tooltip-popup';
            tooltipDiv.textContent = tooltipText;
            document.body.appendChild(tooltipDiv);

            const rect = el.getBoundingClientRect();
            tooltipDiv.style.position = 'absolute';
            tooltipDiv.style.top = (rect.top - tooltipDiv.offsetHeight - 5) + 'px';
            tooltipDiv.style.left = (rect.left + rect.width / 2 - tooltipDiv.offsetWidth / 2) + 'px';
            tooltipDiv.style.backgroundColor = '#333';
            tooltipDiv.style.color = '#fff';
            tooltipDiv.style.padding = '5px 10px';
            tooltipDiv.style.borderRadius = '4px';
            tooltipDiv.style.fontSize = '0.8rem';
            tooltipDiv.style.whiteSpace = 'nowrap';
            tooltipDiv.style.zIndex = '1000';

            el._tooltipDiv = tooltipDiv;
        });

        el.addEventListener('mouseleave', () => {
            if (el._tooltipDiv) {
                document.body.removeChild(el._tooltipDiv);
                el._tooltipDiv = null;
            }
        });
    });
});
