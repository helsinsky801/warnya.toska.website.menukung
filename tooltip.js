// tooltip.js - Tooltip display on hover

/**
 * Tooltip class for displaying tooltips on hover
 */
class Tooltip {
    constructor() {
        this.tooltipElement = null;
        this.init();
    }

    init() {
        this.createTooltipElement();
        this.addHoverListeners();
    }

    createTooltipElement() {
        this.tooltipElement = document.createElement('div');
        this.tooltipElement.id = 'tooltip';
        this.tooltipElement.style.position = 'absolute';
        this.tooltipElement.style.backgroundColor = '#333';
        this.tooltipElement.style.color = 'white';
        this.tooltipElement.style.padding = '5px 10px';
        this.tooltipElement.style.borderRadius = '4px';
        this.tooltipElement.style.fontSize = '12px';
        this.tooltipElement.style.pointerEvents = 'none';
        this.tooltipElement.style.zIndex = '10000';
        this.tooltipElement.style.opacity = '0';
        this.tooltipElement.style.transition = 'opacity 0.3s';
        this.tooltipElement.style.whiteSpace = 'nowrap';
        this.tooltipElement.style.maxWidth = '200px';
        this.tooltipElement.style.wordWrap = 'break-word';

        document.body.appendChild(this.tooltipElement);
    }

    addHoverListeners() {
        document.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (target.hasAttribute('data-tooltip')) {
                this.showTooltip(target, target.getAttribute('data-tooltip'));
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target;
            if (target.hasAttribute('data-tooltip')) {
                this.hideTooltip();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (this.tooltipElement.style.opacity === '1') {
                this.updatePosition(e);
            }
        });
    }

    showTooltip(element, text) {
        this.tooltipElement.textContent = text;
        this.tooltipElement.style.opacity = '1';
        this.updatePosition({ clientX: event.clientX, clientY: event.clientY });
    }

    hideTooltip() {
        this.tooltipElement.style.opacity = '0';
    }

    updatePosition(event) {
        const tooltipRect = this.tooltipElement.getBoundingClientRect();
        let x = event.clientX + 10;
        let y = event.clientY + 10;

        // Adjust if tooltip goes off screen
        if (x + tooltipRect.width > window.innerWidth) {
            x = event.clientX - tooltipRect.width - 10;
        }

        if (y + tooltipRect.height > window.innerHeight) {
            y = event.clientY - tooltipRect.height - 10;
        }

        this.tooltipElement.style.left = x + 'px';
        this.tooltipElement.style.top = y + 'px';
    }
}

// Initialize tooltip
document.addEventListener('DOMContentLoaded', function() {
    new Tooltip();
});

// Export Tooltip class
window.Tooltip = Tooltip;
