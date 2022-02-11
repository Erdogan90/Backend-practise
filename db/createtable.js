import { query } from "express"
import pool from "./index.js" 

const sqlString = `CREATE TABLE IF NOT EXISTS goal_scorers 
    (id SERIAL PRIMARY KEY,
    name TEXT,
    goals INTEGER);`

    async function createMostGoalsTable(){
        const res = await pool.query(sqlString)
        console.log("Most goals table created:", res)
    }
    createMostGoalsTable()