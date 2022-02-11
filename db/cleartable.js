import pool from './index.js'

const sqlString = `TRUNCATE TABLE goal_scorers;
;`

async function deleteQuestions() {
    const res = await pool.query(sqlString)
    console.log('Questions table emptied:', res)
}

deleteQuestions()