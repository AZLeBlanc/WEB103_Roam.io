import { pool } from '../config/db.js'

const getDestinations = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM destinations ORDER BY id ASC;")
        res.status(200).json(results.rows)
    }
    catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

const getDestination = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM destinations WHERE id = $1;", [req.params.id])
        if (results.rows.length === 0) return res.status(404).json({ error: "Destination not found" })
        res.status(200).json(results.rows[0])
    }
    catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

export default { getDestinations, getDestination }