// TROCA DE TELA
const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll(".bottom-nav span");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabs.forEach(t => t.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(target).classList.add("active");
    btn.classList.add("active");
  });
});


// SIMULADOR (parte braba)
function simular() {
  const valor = document.getElementById("valor").value;
  const parcelas = document.getElementById("parcelas").value;
  const juros = document.getElementById("juros").value;

  if (!valor || !parcelas) return;

  const total = valor * (1 + juros / 100);
  const parcela = total / parcelas;

  document.getElementById("resultado").innerHTML = `
    <p>Total: R$ ${total.toFixed(2)}</p>
    <p>Parcela: R$ ${parcela.toFixed(2)}</p>
  `;
}

const ctx = document.getElementById('chartAlocacao').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Ações', 'CDB', 'Tesouro Direto', 'Cripto'],
        datasets: [{
            data: [40, 30, 20, 10], // As porcentagens
            backgroundColor: ['#6200ee', '#03dac6', '#ffb74d', '#ff5252'],
            borderWidth: 0,
            cutout: '75%' // Deixa o meio do gráfico mais vazio e elegante
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom', // Legendas embaixo para ganhar espaço
            }
        }
    }
});