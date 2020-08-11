function writeCards(names, event) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}

function countDown(int) {
  let i = 0;
  while (i > int) {
    console.log(`${int}`);
    i++;
  }
  return gifts;
}