module.exports = (blackHand, whiteHand) => {
  cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  const blackCards = blackHand.map(card => card.split(''));
  const whiteCards = whiteHand.map(card => card.split(''));
  //utolsó lap nagyobb-e
  highestWhite = whiteCards[4][0];
  highestBlack = blackCards[4][0];

  function checkDrill(cards, color) {
    for (let i = 0; i < 5; i++) {
      if (cards[i + 2] !== undefined) {
        if (cards[i][0] === cards[i + 1][0] && cards[i][0] === cards[i + 2][0]) {
          return `${color} wins! - (Drill: ${cards[i][0]})`;
        }
      }
    }
  }

  function checkPair(cards, color) {
    for (let i = 0; i < 5; i++) {
      if (cards[i + 1] !== undefined) {
        if (cards[i][0] === cards[i + 1][0]) {
          return `${color} wins! - (Pair: ${cards[i][0]})`;
        }
      }
    }
  }

  if (checkDrill(blackCards, 'Black') !== undefined) {
    return checkDrill(blackCards, 'Black');
  }
  if (checkDrill(whiteCards, 'White') !== undefined) {
    return checkDrill(whiteCards, 'White')
  }
  if (checkPair(blackCards, 'Black') !== undefined) {
    return checkPair(blackCards, 'Black');
  }
  if (checkPair(whiteCards, 'White') !== undefined) {
    return checkPair(whiteCards, 'White')
  }

  if (cardValues.indexOf(highestBlack) > cardValues.indexOf(highestWhite)) {
    return `Black wins! - (High card: ${highestBlack})`;
  } else {
    return `White wins! - (High card: ${highestWhite})`;
  }
}