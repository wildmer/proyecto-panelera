import express from 'express';
import { connection } from '../database/connection.js';
import cors from 'cors';

// routes
import { routerStore } from '../routes/store.js';
import { routerInventory } from '../routes/inventory.js';

import { routerUser } from '../routes/users.js';
import { routerAllotment } from '../routes/allotment.js';
import { routerMark } from '../routes/mark.js';
import { routerPhase } from '../routes/phase.js';
import { routerPeople } from '../routes/people.js';

class Server {
    constructor(){
        this.app = express();
        this.connect();
        this.middlewares();
        this.routes();
    }

    async connect() {
        await connection();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/bodega', routerStore );
        this.app.use('/inventario', routerInventory );
        
        this.app.use('/usuario', routerUser );
        this.app.use('/lote', routerAllotment );
        this.app.use('/marca', routerMark );
        this.app.use('/etapa', routerPhase );
        this.app.use('/persona', routerPeople );
    }

    listen() {
        this.app.listen('3000',()=>{console.log('server online')});
    }
}

export { Server }