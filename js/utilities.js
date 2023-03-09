export const inputMoney = (id) =>{
    const input = document.getElementById(id),
    inputStrValue = input.value;
    input.value = '';
    return parseFloat(inputStrValue)
}

export const textMoney = (id) =>{
    const spanTag = document.getElementById(id),
    spanTagValue = spanTag.innerText;
    return parseFloat(spanTagValue);
}
export const setValue = (id, value) =>{
    document.getElementById(id).innerText = value;
}