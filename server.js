const express = require('express')
const { createNoSubstitutionTemplateLiteral } = require('typescript')

const app = express()

const { resolve } = require('path')
const { json } = require('express')

app.use('*', 
express.static(
    
    resolve(
        __dirname,
        './build'
    )
))

app.listen(process.env.PORT || 8000, (err) => {
    if (err) { return console.log(err) }

    console.log('Tudo funcionando certinho')
})
