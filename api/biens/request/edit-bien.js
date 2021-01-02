const Filter = require('bad-words')
const query = require('../../../config/db')

const filter = new Filter()

const editBien = async (req, res) => {
  const { id, title, content } = req.body
  try {
    if (!id || !title || !content) {
      return res
        .status(400)
        .json({ message: '`id`,`title`, and `content` are all required' })
    }

    const results = await query(
      `
      UPDATE biens
      SET titre = ?, description = ?
      WHERE id_bien = ?
      `,
      [filter.clean(title), filter.clean(content), id]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
module.exports= editBien
 
