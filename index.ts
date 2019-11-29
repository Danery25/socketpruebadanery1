import Server from "./Clases/Server";
import  router  from "./router/router";
//body parse leer peticion post 
import bodyParse   from 'body-parser';
//cors
import cors from 'cors';

///body parse user
const server = new Server();
///tomar el post
server.app.use(bodyParse.urlencoded({extended:true}));
//transformar en java
server.app.use(bodyParse.json());
   

//// cors
server.app.use(cors({origin:true,credentials:true}));




//rutas de servicios
 server.app.use('/',router);

 //puerto de conecccion 
server.start( ()=>{

   console.log(`servidor esta corriendo posrt ${server.port}`);
}  
)