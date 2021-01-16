const app = require('../index');
const request = require('supertest');

// jest.setTimeout(30000);

test('should login tutor',async() =>{
   await request(app).post('/tutor/login')
    .send({
        email:'tutor@gmail.com',
        password:'123'
    })
    .expect(200)
})

jest.useFakeTimers();

test('should add student marks', () =>{
    request(app).post('/tutor/addlist')
    .send({
        name:'fahis',
        reg_No:123,
        subOne:28,
        subTwo:45,
        subThree:89,
        total:370
    })
    .expect(200)
    .then(response => console.log(response))
})



