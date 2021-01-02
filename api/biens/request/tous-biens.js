const query = require('../../../config/db')

const getBiens = async (req , res) =>{

  const limit = Number(req.query.limit)
        let results = '';
        try {
                //si la limit existe
                if(limit){

                    //si la limit n'est pas un chiffre

                    if(!isNaN(req.query.limit)){ 

                        results = await query(`
                                SELECT * FROM biens
                                ORDER BY id_bien  ASC
                                LIMIT ?
                            `,
                            limit
                        )

                    }else{
                        results = { message: " il faut une limite avec un numéro valide " }
                    }
                        

                }else{
                    //sinon selectionne tout
                    results = await query(`
                        SELECT * FROM biens
                        ORDER BY id_bien  ASC
                    `
                    )
                    // const nombreTotalBien = {nombreTotalBien : results.length}
                    // results.push(nombreTotalBien)
                }
            //la réponse finale
            return res.json(results)

        } catch (e) {//en cas d'erreur
            res.status(500).send({ message: e.message })
        }
}

module.exports =  getBiens