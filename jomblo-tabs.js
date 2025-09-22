// jomblo-tabs.js - Konten tabbed yang jomblo

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.jomblo-tabs .tab');
    const contents = document.querySelectorAll('.jomblo-tabs-content .content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');

            tab.classList.add('active');
            contents[index].style.display = 'block';
        });
    });

    // Show first tab content initially
    if (tabs.length > 0 && contents.length > 0) {
        tabs[0].classList.add('active');
        contents[0].style.display = 'block';
    }
});
