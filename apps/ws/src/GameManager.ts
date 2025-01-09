import { Bet, GameState, Number } from "./types";

export class GameManager {
    state : GameState = GameState.GameOver;
    bets : Bet[] = [];
    private static instance : GameManager
    private _lastWinner : Number  = Number.Zero;


private constructor() {
    
}

public static getInstanmce(){
    if(!GameManager.instance) { 
        GameManager.instance = new GameManager();
    }
    return GameManager.instance;
}

public bet(amount : number ,betNumber : Number ,  id : number): boolean {
    if(this.state ===  GameState.CanBet){
        this.bets.push({id , amount , number : betNumber})
        return true;
    }

    return false;
}

public start() {
    this.state = GameState.CanBet;
}

public end(output : Number) {
    this._lastWinner = output;
    
}
}
