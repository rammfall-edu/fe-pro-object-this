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
  checkInGuest(firstName, lastName, amountOfMoney) {
    if (this.getLength() === this.quantityOfPlaces) {
      return 'Sorry, we have not free spaces';
    } else if (amountOfMoney < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    } else {
      this.paidPerPlace();
      const newGuest = {
        firstName,
        lastName,
        money: amountOfMoney - this.priceByPlace,
      };
      this.guests[this.getLength()] = newGuest;
    }
  },
};
