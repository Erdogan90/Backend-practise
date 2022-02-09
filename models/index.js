import topGoalScorers from "../data/index.js";

// Get all players

export function allPlayers(){
     return topGoalScorers
}

export function getPlayersbyId(id){
    return topGoalScorers.find(function(player){
        return player.id === id
    })
}

export default allPlayers