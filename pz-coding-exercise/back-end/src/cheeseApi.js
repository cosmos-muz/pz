"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const router = express_1.default.Router();
// Item Model
// const TradeItem = require('./domain/TradeItem');
const getCheese = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ cheese: '1', colour: 'blue', imgUrl: '1234' });
});
const saveCheese = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ cheese: '1', colour: 'blue', imgUrl: '1234' });
});
const updateCheese = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ cheese: '1', colour: 'blue', imgUrl: '1234' });
});
const deleteCheese = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ cheese: '1', colour: 'blue', imgUrl: '1234' });
});
router.get('/', getCheese);
router.post('/', saveCheese);
router.patch('/', updateCheese);
router.delete('/', deleteCheese);
exports.default = router;
