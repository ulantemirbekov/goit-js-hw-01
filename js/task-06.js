let input;
let total = 0;

while (true) {
    input = prompt('Введите число');
    const inputNumbered = Number(input);
    total += inputNumbered;

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
}