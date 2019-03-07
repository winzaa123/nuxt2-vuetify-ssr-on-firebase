const functions = require("firebase-functions");
const express = require('express')
// const consola = require('consola')
const { Nuxt } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
let config = {
  mode: 'universal',
  dev: false,
  buildDir: ".nuxt",
  build: {
    publicPath: "/assets/"
  }
};

const nuxt = new Nuxt(config)

// Build only in dev mode
// if (config.dev) {
//   const builder = new Builder(nuxt)
//   await builder.build()
// } else {
  nuxt.ready()
// }

// Give nuxt middleware to express
app.use(nuxt.render)

exports.nuxtvuetify = functions.https.onRequest(app);