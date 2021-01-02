const express = require('express')
const router = express.Router()
const getBiens = require('./request/tous-biens')
const getCategories = require('./request/categories')
const lastAdded = require('./request/last-added')
const getProduit = require('./request/bien-seule')
const creatBien = require('./request/create-bien')
const deletBien = require('./request/delete-bien')
const editBien = require('./request/edit-bien')
const searchBien = require('./request/search')
const findWithSlug = require('./request/slug')
const similarProduct = require('./request/similar-product')

//récupere tout les biens

router.get('/tous-biens', (req , res)=>{

    getBiens( req , res)
})

module.exports = router

//récupere toutes les categories

router.get('/categories', (req , res)=>{

    getCategories( req , res)
})

module.exports = router

//récupere les produits rescents

router.get('/last-added', (req , res)=>{

    lastAdded( req , res)
})

module.exports = router

//récupere un seul produit

router.get('/bien-seule', (req , res)=>{

    getProduit( req , res)
})

module.exports = router

//créer un bien 

router.get('/create-bien', (req , res)=>{

    creatBien( req , res)
})

module.exports = router

//supprimer un bien
router.get('/delete-bien', (req , res)=>{

    deletBien( req , res)
})

module.exports = router

//edit bien
router.get('/edit-bien', (req , res)=>{

    editBien( req , res)
})

module.exports = router

//search bien
router.get('/search', (req , res)=>{

    searchBien( req , res)
})

module.exports = router

//find with slug
router.get('/slug', (req , res)=>{

    findWithSlug( req , res)
})

module.exports = router

//produits similaires
router.get('/similar-product', (req , res)=>{

    similarProduct( req , res)
})

module.exports = router
