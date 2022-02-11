import pool from "./index.js"
import topGoalScorers from "../data/index.js"


const sqlString = `INSERT INTO goal_scorers (name, goals) VALUES ($1, $2)`

async function populateGoalsTable(){
    for(let i = 0; i < topGoalScorers.length; i++){
        const name = topGoalScorers[i].name;
        const goals = topGoalScorers[i].goals;
        const create = await pool.query(sqlString, [name, score])

    }
}
populateGoalsTable()