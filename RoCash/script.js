const ROBUX_TO_EUR_RATE = 0.0033;

const robuxInput = document.getElementById('Robux');
const euroResult = document.getElementById('euro');
const rateNote = document.getElementById('rateNote');

const eurFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR'
});

function updateConversion() {
  const robux = parseFloat(robuxInput.value.replace(',', '.')) || 0;
  const euros = robux * ROBUX_TO_EUR_RATE;
  euroResult.textContent = eurFormatter.format(euros);
}

const per1000 = eurFormatter.format(1000 * ROBUX_TO_EUR_RATE);
rateNote.textContent = `Taux indicatif : 1 000 Robux ≈ ${per1000}`;

robuxInput.addEventListener('input', updateConversion);
updateConversion();
