const query = require('../../../config/db')

const deletBien = async (req, res) => {
  const { id_bien } = req.query
  try {
    if (!id_bien) {
      return res.status(400).json({ message: '`id_bien` required' })
    }
    if (typeof parseInt(id_bien.toString()) !== 'number') {
      return res.status(400).json({ message: '`id_bien` must be a number' })
    }
    const results = await query(
      `
      DELETE  FROM biens
      WHERE id_bien = ?
  `,
      id_bien
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports= deletBien
