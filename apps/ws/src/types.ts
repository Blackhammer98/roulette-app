
export type OutgoingMessages = {
  type: "bet" ;
  amount : number ; 
  balance  :number;
  locked : number;
}

export enum COINS {
    One = 1 ,
    Ten = 10 ,
    TwentyFive = 25 ,
    Fifty = 50 ,
    OneHundred = 100,
    FiveHundred = 500 ,
    
}

export enum Number {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    TwentyOne,
    TwentyTwo,
    TwentyThree,
    TwentyFour,
    TwentyFive,
    TwentySix,
    TwentySeven,
    TwentyEight,
    TwentyNine,
    Thirty,
    ThirtyOne,
    ThirtyTwo,
    ThirtyThree,
    ThirtyFour,
    ThirtyFive,
    ThirtySix,
}

export enum GameState {
   CanBet ,
   CantBet , 
   GameOver
}