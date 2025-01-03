import express from "express";
const rout = express.Router();
import getMessage from "../controler/control.js";



rout.post('/message',getMessage);




export default rout;