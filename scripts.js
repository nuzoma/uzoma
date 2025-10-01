const iconEl = document.getElementById('mode-icon');
const EnableEl  = document.getElementById("enable-chaos-el");
const body = document.body

function toggleEl() {
    body.classList.toggle('light-mode')

    if (body.classList.contains('light-mode')) {
        iconEl.classList.remove('fa-sun')
        iconEl.classList.add('fa-moon')
        EnableEl.textContent = 'Disable chaos'
    } else {
        iconEl.classList.remove('fa-moon')
        iconEl.classList.add('fa-sun')
        EnableEl.textContent = 'Enable chaos'
    }
}