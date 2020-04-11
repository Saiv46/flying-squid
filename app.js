#!/usr/bin/env node

const mcServer = require('./')
const notify = require('sd-notify')
const defaultSettings = require('./config/default-settings')

let settings

try {
  settings = require('./config/settings')

  Object.keys(defaultSettings).forEach(settingKey => {
    if (settings[settingKey] === undefined) {
      settings[settingKey] = defaultSettings[settingKey]
    }
  })
} catch (err) {
  settings = defaultSettings
}

const server = mcServer.createMCServer(settings)

module.exports = server

server.on('listening', () => {
  notify.ready()
  const watchdogInterval = notify.watchdogInterval()
  if (watchdogInterval) {
    notify.startWatchdogMode(watchdogInterval >> 1)
  }
})

process.on('unhandledRejection', err => {
  console.log(err.stack)
})
