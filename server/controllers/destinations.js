import { pool } from '../config/db.js'

const getDestinations = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM destinations ORDER BY id ASC;")
        res.status(200).json(results.rows)
        console.log(results)
    }
    catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

export default { getDestinations }