
import { COINS, Number, OutgoingMessages } from "@repo/common/types";
import { GameManager } from "./GameManager";
import { WebSocket } from "ws";

const MULTIPLIER = 17


export class User {
    id : number ; 
    name : string;
    balance : number;
    locked? : number ;
    ws :  WebSocket

    constructor(id : number , name :string , ws : WebSocket) {

        this.id = id ;
        this.name = name ;
        this.balance = 2500 ;
        this.ws = ws

    }

    bet(clientId : string , amount : COINS , betNumber : Number) {
       this.balance -= amount;
       this.locked += amount;
      const response =  GameManager.getInstanmce().bet(amount , betNumber , this.id );
      if(response) {
        this.send({
            clientId,
            type :"bet",
            amount :amount,
            balance: this.balance,
            locked: this.locked
          })
        } else{
        this.send({
            type :"bet-undo",
            clientId,
            amount :amount,
            balance: this.balance,
            locked : this.locked
           })      
    }
       
    }

    send(payLoad : OutgoingMessages) {
      this.ws.send(JSON.stringify(payLoad));

    }

    won(amount : number , output : Number) {
      this.balance += amount * (output === Number.Zero ? MULTIPLIER * 2 : MULTIPLIER) ; ; 
      this.locked -= amount;
      this.send({
        type : "won" ,
         balance : this.balance,
         locked : this.locked
      })
    }

    lost(amount : number , output : Number) { 
      this.locked -= amount ;
      this.send({
        type : "lost" ,
         balance : this.balance,
         locked : this.locked
      })
    }
}

