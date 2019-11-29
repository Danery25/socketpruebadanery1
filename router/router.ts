
import{Router,Request,Response } from 'express';


const router = Router ();
// http.get.... /mensaje = sitio web

router.get('/mensaje', (req:Request, res:Response)=>{

    res.json({
        ok: true,
        mensaje :`todo esta perfect`
    });
});
router.post('/mensaje', (req:Request, res:Response)=>{
//variables segun el post
const cuerpo =req.body.cuerpo;
const de =req.body.de;

 ///
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
//url
router.post('/mensaje/:id', (req:Request, res:Response)=>{
    //variables segun el post
    const cuerpo =req.body.cuerpo;
    const de =req.body.de;
    
    //constante para id de url
 const id= req.params.id;  
    //
        res.json({
            ok: true,
            cuerpo,
            de,
            id
        });
    });




export default router;
