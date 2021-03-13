'use strict';

require('@code-fellows/supergoose');
const base64 = require('base-64')
const verifyPassword = require('../src/middleware/auth/verifyPasswords.js')
const encrypt = require('../src/middleware/auth/encrypt.js')
describe('ROUTE TESTS', () => {

  let res = {};
  let next = jest.fn();

  it('should create a new user', async () => {
    
    let req = {
      body: {
        username: 'jdulce',
        password: '12345'
      }
    }
  
    await encrypt(req, res, next)
    expect(next).toHaveBeenCalled()
  })

  it('should create a new user', async () => {
    let encoded = base64.encode('jdulce:12345')
    let req = {
      headers: {
        authorization: encoded
      }
    }

    await verifyPassword(req, res, next)
    expect(next).toHaveBeenCalled()
  })
})