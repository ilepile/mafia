import { exception } from 'console';
import * as express from 'express';
import { User } from '../models/user';
import { Game } from '../Game/Game';
import { LocalStorage } from "node-localstorage";

export class BackendApi {
 

  public test(req: express.Request, res: express.Response) {
    res.json('Hello Bitchessss');
  }

  public creteUser(req: express.Request, res: express.Response) {
     
    try {
      let user:User = <User>req.body;
      
    let game = new Game().load(); 
    game.creteUser(user);
    res.json(game.users)
    } catch (error) {
      throw error;
    }
    

  }

  
}

