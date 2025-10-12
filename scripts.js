const iconEl = document.getElementById('mode-icon');
const EnableEl  = document.getElementById("enable-chaos-el");
const body = document.body;
const storageKey = 'user-theme'; // Define a key for local storage

// 1. Function to apply the theme and update the toggle display
function applyTheme(isLightMode) {
    if (isLightMode) {
        body.classList.add('light-mode');
        iconEl.classList.remove('fa-sun');
        iconEl.classList.add('fa-moon');
        EnableEl.textContent = 'Disable chaos';
    } else {
        body.classList.remove('light-mode');
        iconEl.classList.remove('fa-moon');
        iconEl.classList.add('fa-sun');
        EnableEl.textContent = 'Enable chaos';
    }
}

// 2. Your original toggle function, now saving the preference
function toggleEl() {
    // Toggle the class as before
    body.classList.toggle('light-mode');

    // Determine the new state
    const isLightMode = body.classList.contains('light-mode');
    
    // Apply theme changes
    applyTheme(isLightMode); 
    
    // Save the new state to local storage
    localStorage.setItem(storageKey, isLightMode ? 'light' : 'dark');
}

// 3. Self-executing function to load the preference on page refresh
(function loadPreference() {
    const savedTheme = localStorage.getItem(storageKey);
    
    // If a theme is saved, apply it.
    if (savedTheme) {
        // savedTheme === 'light' will return true or false
        applyTheme(savedTheme === 'light');
    } 
    // If no theme is saved, your default (dark) mode will load, 
    // which is the simplest way to maintain the current state.
})(); 
