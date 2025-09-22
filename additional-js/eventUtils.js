// Event utilities
function addClickListener(element, callback) {
    element.addEventListener('click', callback);
}

function removeClickListener(element, callback) {
    element.removeEventListener('click', callback);
}

console.log('Event utils loaded');
