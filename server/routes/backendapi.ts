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
      let user: User = <User>req.body;

      let localStorage: LocalStorage = new LocalStorage('../');
      let gameClass = new Game()
      let game = gameClass.load(localStorage);;
      gameClass.creteUser(user, game);
      gameClass.save(game, localStorage)
      res.json(game)
    }
    catch (error) {
      throw error;
    }
  }
}

