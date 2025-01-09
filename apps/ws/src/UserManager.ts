


import { WebSocket } from "ws";
import { OutgoingMessages } from "./types";
import { User } from "./User";


let ID = 1
export class UserManager {
    private _users : User[] = [];
    private static instance : UserManager;

    private consructor() {

    }

    public static getInstanmce(){
        if(!UserManager.instance) { 
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    addUser(ws:WebSocket , name : string ) {
     let id = ID;
     this._users.push(new User(
        id , 
        name ,
        ws))
     
      ws.on("close" , () => this.removeUser(id))
      ID++
    }
    

    removeUser(id : number) {
        
        this._users.filter(x => x.id !== id);

    }

    broadcast(message : OutgoingMessages , userId : number){
        this._users.forEach(({id , ws}) => {
            if(userId !== id){
                ws.send(JSON.stringify(message));
            }
        })
        
    }
}

