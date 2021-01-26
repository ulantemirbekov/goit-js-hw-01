let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const droidsToBuy = prompt('Enter number of droids you wanted to buy');
const numberOfDroids = Number(droidsToBuy);

if (droidsToBuy === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = pricePerDroid * numberOfDroids;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`);
    }
}



