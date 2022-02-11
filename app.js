import express from "express";
import {allPlayers, getPlayersById, updateGoalsById} from "./models/index.js";
import topGoalScorers from "./data/index.js"
import fs from "fs"

const app = express()
app.use(express.json());

//All player data

app.get("/players", function(req, res){
    const players = topGoalScorers
    console.log(players)
    res.json({success: true, payload: players})
})

//Get player by id

app.get("/players/:id", function(req,res){
    const id = Number(req.params.id);
    const idFound = getPlayersById(id)
    res.json({success: true, payload: idFound})
})

//Update player by id
app.put("/players/:id", function(req, res){
    const id = Number(req.params.id);
    const updateGoals = req.body
    const goalsReplacement = updateGoalsById (id, updateGoals)
    res.json({success: true, payload: goalsReplacement})
})


app.listen(3000, () => console.log("Server Started"))