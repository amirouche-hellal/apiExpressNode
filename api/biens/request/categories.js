const query = require('../../../config/db')


const getCategories = async (req, res) => {
  try {
    const results = await query(`
    SELECT  DISTINCT categorie FROM categorie
    ORDER BY id_categorie ASC
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports= getCategories