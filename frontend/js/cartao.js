const cardInner = document.getElementById('card-inner');
const inputs = {
    number: document.getElementById('input-number'),
    name: document.getElementById('input-name'),
    month: document.getElementById('input-month'),
    year: document.getElementById('input-year'),
    cvv: document.getElementById('input-cvv')
};

const displays = {
    number: document.getElementById('display-number'),
    name: document.getElementById('display-name'),
    expiry: document.getElementById('display-expiry'),
    cvv: document.getElementById('display-cvv')
};

// Formatação do Número
inputs.number.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = v;
    displays.number.innerText = v || "#### #### #### ####";
});

// Nome
inputs.name.addEventListener('input', (e) => {
    displays.name.innerText = e.target.value.toUpperCase() || "NOME COMPLETO";
});

// Data
const updateExpiry = () => {
    const m = inputs.month.value || "MM";
    const y = inputs.year.value || "YY";
    displays.expiry.innerText = `${m}/${y}`;
};
inputs.month.addEventListener('change', updateExpiry);
inputs.year.addEventListener('change', updateExpiry);

// CVV e Efeito Flip
inputs.cvv.addEventListener('input', (e) => {
    displays.cvv.innerText = e.target.value || "***";
});

inputs.cvv.addEventListener('focus', () => cardInner.classList.add('flipped'));
inputs.cvv.addEventListener('blur', () => cardInner.classList.remove('flipped'));