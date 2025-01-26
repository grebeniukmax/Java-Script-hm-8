// N1 //
const first = [Mango, Poly, Ajax, Lux];
let result = '';
for (let i = 0; i < first.length; i++) {
  result += first[i];
}
console.log(result);


const second = [Mango, Poly, Ajax, Lux];
const result_two = second.join(',');
console.log(result_two);

// N2 //
let cards = ['Завдання 1', 'Завдання 2', 'Завдання 3', 'Завдання 4', 'Завдання 5'];

// Видалення 2 карти
const removedCard = cards.splice(1);
console.log(cards);
console.log('Видалено:', removedCard);

// Додавання нової карти (на 2 місце)
cards.splice(1,'Нове завдання 2');
console.log(cards);

// 5. Оновлення тексту (3-ї картки)
cards.splice(2,'Вибачте,але прийшлося замінити і це завдання');
console.log(cards);