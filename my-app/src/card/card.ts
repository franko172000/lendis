export default class Card {
    private suites: string[];
    private values: string[];
    private matchedCards: number = 0;
  
    constructor() {
      this.suites = ["Heart", "Diamond", "Spade", "Club"];
      this.values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
    }
  
    private generateCard() {
      let cards: string[] = ["joker", "joker"];
      this.values.forEach((val) => {
        this.suites.forEach((suite) => {
          cards.push(`${val} of ${suite}`);
        });
      });
      return cards;
    }
  
    shuffleCards() {
      let card = this.generateCard();
      card.sort(() => Math.random() - 0.5);
      return card;
    }
  
    selectCard() {
      const shuffledCard = this.shuffleCards();
      const selected: string[] = [];
      for (let i = 0; i < 2; i++) {
        let chosen = Math.floor(Math.random() * shuffledCard.length);
  
        selected[i] = shuffledCard[chosen];
      }
      return selected;
    }
  
    compareCards(cards: [string, string]): any{
      if(cards[0] === "joker" || cards[1] === "joker"){
        this.matchedCards++;
      }else if(cards[0] === cards[1]){
        this.matchedCards++;
      }
    }
  }
  