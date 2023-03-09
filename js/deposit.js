import { inputMoney, setValue, textMoney } from "./utilities.js";

const depositeForm = document.getElementById('deposite-form'),
      withdrawForm = document.getElementById('withdraw-form');

const deposite = (e) =>{
    e.preventDefault();
    const previusTotal = textMoney('deposite-total'),
        inputValue = inputMoney('input-deposite');
    const totalDeposite = previusTotal + inputValue;
    setValue('deposite-total', totalDeposite)
    setValue('balance-total', totalDeposite)
}

const withdraw = (e) =>{
    e.preventDefault();
    const previusWithdrawTotal = textMoney('withdraw-total'),
    previusTotal = textMoney('balance-total'),
    inputValue = inputMoney('input-whithdraw');
    const totalWithdraw = previusWithdrawTotal + inputValue;
    const total = previusTotal - inputValue;
    setValue('withdraw-total', totalWithdraw);
    setValue('balance-total', total)
}

depositeForm.addEventListener('submit', deposite)
withdrawForm.addEventListener('submit', withdraw)