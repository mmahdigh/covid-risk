import express from 'express'
import { contractionChanceRegion } from './../logic/main';

export let router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  const {number, location} = req.body
  return contractionChanceRegion(location, number)
})