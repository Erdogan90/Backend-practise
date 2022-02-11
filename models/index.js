import topGoalScorers from "../data/index.js";

// Get all players

export function allPlayers(){
     return topGoalScorers
}

//Get all players by id

export function getPlayersById(id){
    return topGoalScorers.find(function(player){
        return player.id === id
    })
}

export default allPlayers

// Update player goals by id

export function updateGoalsById(id, update){
let foundId = topGoalScorers.findIndex(function(player){
    return player.id === id
});
topGoalScorers[foundId] = update
return topGoalScorers [foundId];
}