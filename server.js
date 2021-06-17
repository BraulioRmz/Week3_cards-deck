const express = require('express');
const app = express();

const{ Deck, Hand } = require('./deck')

  app.get('/',(req, res) => {
    const deck = new Deck();
    const players = 5
    var hands_players = []
    for(i = 0; i<players; i++){
      hands_players[i] = new Hand(deck,5);
    }

    users=[]
    for(k=0; k < players; k++){
      users[k] = 'user '+String(k+1)+': '+hands_players[k].cards;
      }   //'user'+String(k)
    res.send(
      {
      cards: deck.cards,
      users
      });
  });
app.listen(3001, () =>{
console.log('Server running on port 8080');
});