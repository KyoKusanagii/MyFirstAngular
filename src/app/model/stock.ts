import {Person} from "./person";

export class Stock {
  favorite:boolean = false;
  notablePeople: Person[];
  constructor(
    public name:string,
    public code:string,
    public price:number,
    public previousPrice:number,
    public exchange:string){
    this.notablePeople = [];
  }


  isPositiveChange():boolean{
    return this.price >= this.previousPrice;
  }
}


