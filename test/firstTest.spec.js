'use strict'

const MainWindow = require('../src/mainWindow')
const expect = require('chai').expect

describe('User module', () => {
    it('should export a function', () => {
      expect(MainWindow.create).to.be.a('function')
    })
})