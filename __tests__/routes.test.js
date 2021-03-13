'use strict';

require('@code-fellows/supergoose');
const supertest = require('supertest');
const server = require('../src/server.js');
const User = require('../src/models/user.js');
const request = supertest(server.app);
const base64 = require('base-64')
// const bcrypt = require('bcrypt')
const user = new User();

describe('ROUTE TESTS', () => {
  it('should create a new user', async () => {
    const newUser = {
      username: 'jdulce',
      password: '12345'
    }

    await request.post('/signup').send(newUser)
      .then(result => {
        expect(result.body.user.username).toEqual('jdulce');
      })
  })

  it('should login as a user', async () => {
    let encoded = base64.encode('jdulce:12345')
    await request.post('/signin').set('authorization', `${encoded}` )
      .then(result => {
        expect(result.status).toEqual(200);
        expect(result.body.login).toEqual('Login success!')
      })
  })

})