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

  var newTransaction = new Transaction(type, payee, amount, category);
  addCard(newTransaction);
}

function addCard(transaction) {
  cards.innerHTML += `
    <section class="account-card">
      <img class="account-icon" src="./assets/${transaction.type}.svg" alt="Expenses Icon">
      <div class="account-title">
        <h3>${transaction.payee}</h3>
      </div>
      <p>${transaction.category}</p>
      <h4>$${transaction.amount}</h4>
    </section>
  `;
}
