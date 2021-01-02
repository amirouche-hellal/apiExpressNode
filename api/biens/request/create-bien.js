const Filter = require('bad-words')
const query = require('../../../config/db')
const formidable =require('formidable')

//filter il clean les variables pour les sécuriser lors de l'insertion
const filter = new Filter()


//ce code est la config de l'api next : sans lui ça fonctionne pas pour le transfer du file as stream
//regarde la doc https://nextjs.org/docs/api-routes/api-middlewares
 const config = {
  api: {
    bodyParser: false,
  },
}
module.exports= config
// la fonction qui execute la requete --> son nom n'est pas important et l'essentiel elle sera exporter par default en bas

const creatBien = async (req, res) => {

  // j'utilise formidable pour :
  //1--- deplacer la photo dans un dossier de mon appli ici c images
      // declarer formidable
      const form = formidable({ multiples: true }) // ou const  form = new formidable.IncomingForm();
      form.encoding = 'utf-8';
      // deplacer l image
      form.uploadDir = "./public/images/";
      form.keepExtensions = true;
  //2 recuperer les data qui se trouve dans le formulaire afin de les enregistrer dans la base de donneées
    const RecupElementFormRecu = await new Promise(function (resolve, reject) {
        form.parse(req, function (err, fields, files) {
            if (err) {
                reject(err);
                return;
            }
            resolve({file : files, string : fields});

        }); 
    });

  // voici les variables récuperées du formulaire
  const title = RecupElementFormRecu.string.title
  const content = RecupElementFormRecu.string.content
  const photo = RecupElementFormRecu.file.photo.path.substring(14) //j'ai fais un substr pour recup juste le nom de l'image et enlever public/image
  
  //enregistrement des variables dans la base de donnée
    try {
      
      if (!title || !content) {
        return res
          .status(400)
          //return erreur si un element manque
          .json({ message: '`title` and `content` are both required' })
      }
      const results = await query(
        `INSERT INTO biens (titre, description ,image)
        VALUES (?, ? ,?)
        `,
        [filter.clean(title ), filter.clean(content) ,filter.clean(photo )]
      )
      //retourner la reponse
      return res.json(results)
  
    } catch (e) {
      //return erreur 
      res.status(500).json({ message: e.message })
    }

}

module.exports= creatBien
