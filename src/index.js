export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength() {
    const objectInArray = Object.keys(this.guests);
    return objectInArray.length;
  },

  getActualFreePlace() {
    return this.quantityOfPlaces - this.getLength();
  },

  paidPerPlace() {
    this.bankAccount += this.priceByPlace;
  },

  checkInGuest(firstName, lastName, avaiilableBalance) {
    if (this.getLength() === this.quantityOfPlaces) {
      return 'Sorry, we have not free spaces';
    } else if (avaiilableBalance < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else {
      this.paidPerPlace();
      const newUser = {
        firstName,
        lastName,
        money: avaiilableBalance - this.priceByPlace,
      };
      this.guests[this.getLength()] = newUser;
      return newUser;
    }
  },
};
