/**
 * Get the current block number from a Cloud Ethereum node using basic
 * authentication.
 */

'use strict'

const https = require('https')
const Web3 = require('web3')

// Ethereum node's connection information
const ip = process.env.IP
const user = process.env.USER
const pass = process.env.PASS

// Create a Web3 HTTP provider
const url = `https://${user}:${pass}@${ip}:8545`
const web3Provider = new Web3.providers.HttpProvider(url)

// And replace the default HTTPS agent in that provider to avoid complaining
// about self-signed certificates
web3Provider.httpsAgent = new https.Agent({ rejectUnauthorized: false })

// Then create the Web3 instance
const web3 = new Web3(web3Provider)

// And get the current block number
web3.eth.getBlockNumber()
  .then(console.log)
  .catch(console.error)
