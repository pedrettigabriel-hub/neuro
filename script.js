const btn = document.getElementById('btn-reacao');
const display = document.getElementById('status');
let startTime;

function startSnapCount() {
    display.innerText = "Preparado...";
    btn.style.backgroundColor = "#555";
    
    // Tempo aleatório para simular a cadência do QB
    const delay = Math.floor(Math.random() * 2000) + 1000; 

    setTimeout(() => {
        display.innerText = "SNAP!";
        btn.style.backgroundColor = "#ff4500"; // Cor de alerta
        startTime = Date.now();
    }, delay);
}

btn.addEventListener('click', () => {
    if (display.innerText === "SNAP!") {
        const reaction = Date.now() - startTime;
        display.innerText = `Reação: ${reaction}ms`;
        btn.style.backgroundColor = "#333";
        setTimeout(startSnapCount, 1000); // Próximo rep
    } else {
        display.innerText = "Queimou a largada!";
    }
});

startSnapCount();
