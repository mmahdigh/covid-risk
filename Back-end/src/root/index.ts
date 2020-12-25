import express from 'express'
import { contractionChanceRegion } from './../logic/main';

export let router = express.Router()

router.post('/', function (req, res) {
  const {number, location} = req.body
  res.json(contractionChanceRegion(location, Number(number)))
})