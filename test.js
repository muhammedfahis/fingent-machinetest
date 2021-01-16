const app = require("./app")
const chai = require('chai')
const request = require('supertest');



describe('Test Api End Points', () => {
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
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1dG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjEwODIxOTE3fQ.XELN4fXzRS_aDvjvRn4MgpL_lSPqBx06bU-vzAEqdS8')

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

    it('Edit list', (done) => {
        request(app)
            .patch('/tutor/(id here)')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1dG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjEwODIxOTE3fQ.XELN4fXzRS_aDvjvRn4MgpL_lSPqBx06bU-vzAEqdS8')

            .send({
                "name": "fahis",
                
            })
            .then(res => done())
    });

    it('Delete list', (done) => {
        request(app)
            .delete('/tutor/(id here)')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1dG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjEwODIxOTE3fQ.XELN4fXzRS_aDvjvRn4MgpL_lSPqBx06bU-vzAEqdS8')    
            
            .then(res => done())
    });
});