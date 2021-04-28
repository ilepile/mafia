import express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import { BackendApi } from './routes/backendapi';
import cors from 'cors';  


class Server {
    public app = express();


    public static bootstrap(): Server {
        return new Server();
    }

    constructor() { 
 
        this.app.use(cors({
          origin:['http://localhost:4200']
        }));


        // configure application
        this.config();

        // configure routes
        this.routes();
    }

    private config() {

        // Parsers for POST data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Point static path to dist
        this.app.use(express.static(path.join(__dirname, 'public')));
      

        /**
         * Get port from environment and store in Express.
         */
        const port = process.env.PORT || '3000';
        this.app.set('port', port);

        /**
         * Create HTTP server.
         */
        const server = http.createServer(this.app);

        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(port, () => console.log(`API running on localhost:${port}`));

    }

    private routes() {
        // get router
        let router: express.Router;
        router = express.Router();

        // create routes
        const api: BackendApi = new BackendApi();

        // test API
        router.get('/api/test', api.test.bind(api.test));

        router.post('/api/createUser', api.creteUser.bind(api.creteUser))


        // use router middleware
        this.app.use(router);

        // Catch all other routes and return the index file
        // this.app.get('*', (req:any, res:any) => {
        //     res.sendFile(path.join(__dirname, 'public/index.html'));
        // });


    }


}

Server.bootstrap();

