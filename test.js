const app = require("./app")
const chai = require('chai')
const request = require('supertest');


describe('Test Add list', () => {
    it('should login tutor', (done) => {
        request(app)
        .post('/tutor/login')
        .send({
            email: 'tutor@gmail.com',
            password: '123'
        })
        .expect(200)
        .then(res => done())
    })

    it('add list', (done) => {
        request(app)
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
            .then(res => done())
    });
});