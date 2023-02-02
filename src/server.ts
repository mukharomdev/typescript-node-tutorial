import express, { Request, Response } from "express";

const app = express();
const port:number = 3000;
app.get('/', (req:Request, res:Response) => {
  res.send('hallo mukharomdev');
});
app.listen(port, ():void=> {console.log(`server is listening on ${port}`);
});