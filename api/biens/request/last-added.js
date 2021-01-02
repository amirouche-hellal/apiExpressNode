const query = require('../../../config/db')


const lastAdded = async (req, res) => {
  try {
    const results = await query(`
      SELECT * FROM biens
      ORDER BY date_modification  ASC
      LIMIT 3
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = lastAdded