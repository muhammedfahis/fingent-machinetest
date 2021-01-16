const app = require("./app")
const chai = require('chai')
const request = require('supertest')


describe('Test login', () => {
    it('should login tutor', async () => {
        await request(app)
        .post('/tutor/login')
        .send({
            email: 'tutor@gmail.com',
            password: '123'
        })
        .expect(200)
    })
})

describe('Test Add list', () => {
    it('add list', async () => {
        await request(app)
            .post('/tutor/addlist')
            .send({
                "name": "musthu",
                "reg_No": 123,
                "subOne": 23,
                "subTwo": 49,
                "subThree": 55,
                "total": 452
            })
            .expect(201)
    });
});