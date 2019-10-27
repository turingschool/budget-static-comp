var form = document.querySelector('form');
var inputs = document.querySelectorAll('.typed-input');
var cards = document.querySelector('.account-cards');

form.addEventListener('submit', addTransaction);

function addTransaction(event) {
  event.preventDefault();

  var type = inputs[0].value;
  var payee = inputs[2].value;
  var amount = inputs[3].value;
  var category = inputs[4].value;

  addCard(type, payee, amount, category);
}

function addCard(type, payee, amount, category) {
  cards.innerHTML += `
    <section class="account-card">
      <img class="account-icon" src="./assets/${type}.svg" alt="Expenses Icon">
      <div class="account-title">
        <h3>${payee}</h3>
      </div>
      <p>${category}</p>
      <h4>$${amount}</h4>
    </section>
  `;
}
