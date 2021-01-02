const query = require('../../../config/db')

const getProduit = async (req, res) => {
  const { id } = req.query
  try {
    if (!id) {
      return res.status(400).json({ message: '`id` required' })
    }
    if (typeof parseInt(id) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' })
    }
    const results = await query(
      `SELECT *
      FROM biens
      WHERE id_bien = ?`,
      id
    )

    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports= getProduit

