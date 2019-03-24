require('dotenv').config()
const request = require('supertest');
const app = require('../app');
const mongoose = require ('mongoose');
const dbURL = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI

describe('Test the addLike method', () => {
    beforeAll(() => {
        mongoose.connect(dbURL,{ useNewUrlParser: true })
    });
    
    afterAll((done) => {
        mongoose.disconnect(done)
    });
})

test('Should failed when env not test ', () => {
    expect(process.env.NODE_ENV).toEqual('test');
});

test('should pass integration tests', (done) => {
  request(app)
    .get('/v1/api/customers')
    .expect(200, 'Hello World!')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});