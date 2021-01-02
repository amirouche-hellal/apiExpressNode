const query = require('../../../config/db')


const searchBien = async (req, res) => {

  const categorie = req.body.filters.categorie
  const titre = req.body.filters.titre

  try {

    let sql = "SELECT * FROM biens INNER JOIN categorie ON biens.id_categorie =categorie.id_categorie " 

    if(categorie !=''){
       sql+= `AND categorie.categorie = "${categorie}"`
    }
    if(titre){

      sql+= `AND biens.titre LIKE "%${titre}%"`
      
    }
    if( categorie == "" || categorie == "tous"){

      sql= "SELECT * FROM biens INNER JOIN categorie ON biens.id_categorie =categorie.id_categorie"
      
    }
    
    const results = await query(sql )
             
    //la réponse finale
    return res.json(results)
       
      

  } catch (e) {//en cas d'erreur
    res.status(500).json({ message: e.message })
  }
}

module.exports = searchBien