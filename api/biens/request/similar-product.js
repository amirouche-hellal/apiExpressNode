

//cette fonction est bien liée mais elle ne cherche pas les produits similaire pour le moment


const query = require('../../../config/db')


const similarProduct = async (req, res) => {

  const id_categorie = req.query.id_categorie
  const id_bien = req.query.id_bien


  try {

      const results = await query(`

          SELECT * FROM biens
          INNER JOIN categorie
          ON biens.id_categorie = categorie.id_categorie
          AND categorie.id_categorie = ${ id_categorie}
          AND biens.id_bien != ${id_bien}
          `   
      )         
       //la réponse finale
       
       return res.json(results)

  } catch (e) {//en cas d'erreur
    res.status(500).json({ message: e.message })
  }
}

module.exports = similarProduct