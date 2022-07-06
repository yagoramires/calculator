const billInput = document.querySelector('#payout');
const percentageButtons = document.querySelectorAll('.tip__percentage');
const customInput = document.querySelector('#custom');
const peopleInput = document.querySelector('#people');
const amountResult = document.querySelector('#amount');
const totalResult = document.querySelector('#total');
const reset = document.querySelector('#reset');

function calculate(bill, percent, people) {
  const total = Number(bill) * (Number(percent) / 100);
  const amount = total / Number(people);

  amountResult.innerText = `${amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}`;
  totalResult.innerText = `${total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}`;
}

percentageButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const percent = e.target.innerText.replace('%', '');
    const bill = billInput.value;
    const people = peopleInput.value;

    calculate(bill, percent, people);
  });
});

customInput.addEventListener('change', (e) => {
  const percent = e.target.value;
  const bill = billInput.value;
  const people = peopleInput.value;

  calculate(bill, percent, people);
});

billInput.addEventListener('change', (e) => {
  if (peopleInput.value != '' && customInput.value != '') {
    const bill = e.target.value;
    const custom = customInput.value;
    const people = peopleInput.value;

    calculate(bill, custom, people);
  }
});

people.addEventListener('change', (e) => {
  if (billInput.value != '' && customInput.value != '') {
    const people = e.target.value;
    const custom = customInput.value;
    const bill = billInput.value;

    calculate(bill, custom, people);
  }
});

reset.addEventListener('click', (e) => {
  e.preventDefault();

  billInput.value = '';
  customInput.value = '';
  peopleInput.value = '';
  amountResult.innerText = 'R$ 0,00';
  totalResult.innerText = 'R$ 0,00';
});
