import {App} from "./App";
import {connectDB} from "./src/config/dbConnect"
const app = new App(process.env.PORT || '4000');
connectDB().then(()=>{
  app.start();
});

