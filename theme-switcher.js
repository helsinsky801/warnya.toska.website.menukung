// theme-switcher.js - Toggle between light/dark mode and hero background colors

/**
 * Theme switcher class with hero background color options
 */
class ThemeSwitcher {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.heroBackground = localStorage.getItem('heroBackground') || 'brown';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.applyHeroBackground(this.heroBackground);
        this.createToggleButton();
        this.createHeroBackgroundSelector();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    applyHeroBackground(color) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            if (color === 'brown') {
                heroSection.style.backgroundColor = 'rgba(139, 69, 19, 0.7)';
            } else if (color === 'black') {
                heroSection.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            }
            localStorage.setItem('heroBackground', color);
            this.heroBackground = color;
        }
    }

    changeHeroBackground(color) {
        this.applyHeroBackground(color);
    }

    createToggleButton() {
        const button = document.createElement('button');
        button.id = 'theme-toggle';
        button.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        button.style.position = 'fixed';
        button.style.top = '20px';
        button.style.left = '20px';
        button.style.zIndex = '1000';
        button.style.padding = '10px';
        button.style.border = 'none';
        button.style.borderRadius = '50%';
        button.style.cursor = 'pointer';
        button.style.fontSize = '20px';
        button.style.backgroundColor = 'var(--primary-color)';
        button.style.color = 'white';

        button.addEventListener('click', () => {
            this.toggleTheme();
            button.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        });

        document.body.appendChild(button);
    }

    createHeroBackgroundSelector() {
        const container = document.createElement('div');
        container.id = 'hero-bg-selector';
        container.style.position = 'fixed';
        container.style.top = '80px';
        container.style.left = '20px';
        container.style.zIndex = '1000';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '5px';

        const brownButton = document.createElement('button');
        brownButton.textContent = '🟤';
        brownButton.title = 'Background Coklat';
        brownButton.style.width = '40px';
        brownButton.style.height = '40px';
        brownButton.style.border = 'none';
        brownButton.style.borderRadius = '50%';
        brownButton.style.cursor = 'pointer';
        brownButton.style.fontSize = '16px';
        brownButton.style.backgroundColor = '#8B4513';
        brownButton.style.color = 'white';
        brownButton.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        brownButton.style.transition = 'transform 0.3s';

        const blackButton = document.createElement('button');
        blackButton.textContent = '⚫';
        blackButton.title = 'Background Hitam';
        blackButton.style.width = '40px';
        blackButton.style.height = '40px';
        blackButton.style.border = 'none';
        blackButton.style.borderRadius = '50%';
        blackButton.style.cursor = 'pointer';
        blackButton.style.fontSize = '16px';
        blackButton.style.backgroundColor = '#000000';
        blackButton.style.color = 'white';
        blackButton.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        blackButton.style.transition = 'transform 0.3s';

        brownButton.addEventListener('click', () => {
            this.changeHeroBackground('brown');
            brownButton.style.transform = 'scale(1.2)';
            blackButton.style.transform = 'scale(1)';
            setTimeout(() => {
                brownButton.style.transform = 'scale(1)';
            }, 200);
        });

        blackButton.addEventListener('click', () => {
            this.changeHeroBackground('black');
            blackButton.style.transform = 'scale(1.2)';
            brownButton.style.transform = 'scale(1)';
            setTimeout(() => {
                blackButton.style.transform = 'scale(1)';
            }, 200);
        });

        // Highlight current selection
        if (this.heroBackground === 'brown') {
            brownButton.style.transform = 'scale(1.1)';
            brownButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';
        } else {
            blackButton.style.transform = 'scale(1.1)';
            blackButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';
        }

        container.appendChild(brownButton);
        container.appendChild(blackButton);
        document.body.appendChild(container);
    }
}

// CSS for themes (add to your CSS file)
/*
:root {
    --primary-color: #8b4513;
    --secondary-color: #daa520;
    --background-color: #fff;
    --text-color: #333;
}

[data-theme="dark"] {
    --primary-color: #daa520;
    --secondary-color: #8b4513;
    --background-color: #333;
    --text-color: #fff;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}
*/

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', function() {
    new ThemeSwitcher();
});

// Export ThemeSwitcher class
window.ThemeSwitcher = ThemeSwitcher;
