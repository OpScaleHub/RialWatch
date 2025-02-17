// filepath: /workspaces/RialWatch/docs/script.js
async function fetchConfig() {
    const response = await fetch('/config.yaml');
    const text = await response.text();
    const config = jsyaml.load(text);
    return config.init;
}

async function startCounter() {
    const initValue = await fetchConfig();
    let counter = initValue;
    const counterElement = document.getElementById('counter');

    setInterval(() => {
        counterElement.textContent = counter++;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCounter);