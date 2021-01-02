const query = require('../../../config/db')


const findWithSlug = async (req, res) => {

  const slug = "req.query.slug"
  // const slug = "studio1"

  try {

      const results = await query(`

              SELECT * FROM biens WHERE slug = ?
          `,
          slug
      )         
       //la réponse finale
       return res.json(results)

  } catch (e) {//en cas d'erreur
    res.status(500).json({ message: e.message })
  }
}

module.exports= findWithSlug