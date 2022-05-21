import {App} from "./app";
import {connectDB} from "./src/config/dbConnect"
const app = new App(process.env.PORT || '4000');
connectDB().then(()=>{
  app.start();
});

