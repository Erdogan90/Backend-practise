import express from "express";
import {allPlayers, getPlayersbyId} from "./models/index.js";
import topGoalScorers from "./data/index.js"

const app = express()

//All player data

app.get("/players", function(req, res){
    const players = topGoalScorers
    console.log(players)
    res.json({success: true, payload: players})
})

//Get player by id

app.get("/players/:id", function(req,res){
    const id = Number(req.params.id);
    const idFound = getPlayersbyId(id)
    res.json({success: true, payload: idFound})
})

app.listen(3000, () => console.log("Server Started"))