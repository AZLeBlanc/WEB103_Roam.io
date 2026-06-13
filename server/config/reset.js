import { pool } from './db.js'
import './dotenv.js'
import destinations from '../data.js'

const createDestinationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS destinations;

        CREATE TABLE IF NOT EXISTS destinations (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL,
            continent VARCHAR(255) NOT NULL,
            climate VARCHAR(255) NOT NULL,
            bestTimeToVisit VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            imageUrl VARCHAR(2048) NOT NULL
        )
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 destinations table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating destinations table', err)
    }
}

const seedDestinationsTable = async () => {
    await createDestinationsTable()

    const insertQuery = {
        text: 'INSERT INTO destinations (id, name, country, continent, climate, bestTimeToVisit, description, imageUrl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
    }

    destinations.forEach((destination) => {
        const values = [
            destination.id,
            destination.name,
            destination.country,
            destination.continent,
            destination.climate,
            destination.bestTimeToVisit,
            destination.description,
            destination.imageUrl
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting destination', err)
                return
            }

            console.log(`✅ ${destination.name} added successfully`)
        })
    })
}

seedDestinationsTable()
