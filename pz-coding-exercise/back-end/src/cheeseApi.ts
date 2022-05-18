import express, { Request, Response } from 'express';
const mongoose = require('mongoose');
const router = express.Router();

// Item Model
// const TradeItem = require('./domain/TradeItem');

const getCheese = async (req: Request, res: Response) => {
    res.send({cheese: '1', colour:'blue', imgUrl: '1234'});
}
const saveCheese = async (req: Request, res: Response) => {
    res.send({cheese: '1', colour:'blue', imgUrl: '1234'});
}
const updateCheese = async (req: Request, res: Response) => {
    res.send({cheese: '1', colour:'blue', imgUrl: '1234'});
}
const deleteCheese = async (req: Request, res: Response) => {
    res.send({cheese: '1', colour:'blue', imgUrl: '1234'});
}

router.get('/', getCheese);
router.post('/', saveCheese);
router.patch('/', updateCheese);
router.delete('/', deleteCheese);


export default router