/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

test('Initial test', () => {
  expect(3).toBe(3);
});

describe('Testing serving files', ()=> {
  test('serving signin file', (done) => {
    request(app)
      .get('/pages/signin')
      .expect('content-type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('serving signup file', (done) => {
    request(app)
      .get('/pages/signup')
      .expect('content-type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
