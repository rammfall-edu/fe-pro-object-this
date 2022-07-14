import { hotel } from './index.js';
  export const hotel =  {
  quantityOfPlaces: 30,
  priceByPlace: 20, 
  bankAccount: 0,
  guests: {
  0: {
   firstName: Oleg, 
   lastName: Boyko,
   money: 40,
     },
  1: {
    firstName: Ivan, 
    lastName: Ivanov,
    money: 40,
     } 
     }, // end guests
  
  getLength: function() {
  return Object.keys(this.guests).length
  },
  
   getActualFreePlace:  function() {
   return  this.quantityOfPlaces - this.getLength()
  },
  
   paidPerPlace: function() {
   return this.bankAccount = this.bankAccount + this.priceByPlace
   },
 
   checkInGuest: function(name, lastName, money) {
   if (this.getActualFreePlace === 0){
   return 'Sorry, we have not free spaces'
   }
    if (this.priceByPlace > money){
     return 'Sorry, you have not enough money'
    }
     
   const user = {
   firstName: name,
   lastName,
    money: money - this.priceByPlace
   }
   
   this.guest [this.getLength()] = user;
    
    this.paidPerPlace();
    
    return user;
    
   }, //end checkinGuest
  
};
