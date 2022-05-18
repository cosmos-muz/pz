"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cheeseApi_1 = __importDefault(require("./src/cheeseApi"));
dotenv_1.default.config();
const dbConnect_1 = require("./src/db/dbConnect");
(0, dbConnect_1.connect)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/cheeses', cheeseApi_1.default);
app.get('/health', (req, res) => {
    res.send('Healthy');
});
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
