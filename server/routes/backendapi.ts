import { exception } from 'console';
import * as express from 'express';
import { User } from '../models/user';
import { Game } from '../Game/Game';

export class BackendApi {

  //public game: Game = new Game();

  public test(req: express.Request, res: express.Response) {
    res.json('Hello World');
  }

  public creteUser(req: User, res: Array<User>) {

    // if(this.game.users.length == 5)
    // {
    //   throw(exception("Maximum users are created already!!"))
    // }

    // this.game.creteUser(req,res);
    // //res = this.game.users;

  }
}

