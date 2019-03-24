require('dotenv').config()
const request = require('supertest')
const customerRoute = require('./index')

test('should make GET and return with Hello World!', () => {
    request(customerRoute).get('/').then(response => {
        expect(response.statusCode).toBe(200);
    })
})
