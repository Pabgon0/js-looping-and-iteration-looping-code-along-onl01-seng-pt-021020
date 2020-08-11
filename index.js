function writeCards(names, event) {
  namesArray = []
  for (let i = 0; i < names.length; i++) {
    namesArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return namesArray;
}