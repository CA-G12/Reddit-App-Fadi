/* eslint-disable no-undef */
require('dotenv').config();
const request = require('supertest');
const app = require('../src/app');
const build = require('../src/database/config/build');
const connection = require('../src/database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

describe('Testing serving files', () => {
  test('serving signin file', (done) => {
    request(app)
      .get('/pages/signin')
      .expect('content-type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('serving signup file', (done) => {
    request(app)
      .get('/pages/signup')
      .expect('content-type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
});

describe('test sign in and sign up validation', () => {
  test('sign up with invalid username', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'newuser',
        password: 'Ab1234!@ab',
        avatar: 'https://anything.com/pic.png',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
  test('sign up with valid inputs', (done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'newvaliduser',
        password: 'Ab1234!@ab',
        avatar: 'https://anything.com/pic.png',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        expect(res.text).toBe('Inserted Succuessfly!');
        return done();
      });
  });
  test('signin with invalid username', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        username: 'newuser',
        password: 'Ab1234!@ab',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
  test('signin with valid inputs', (done) => {
    request(app)
      .post('/api/v1/auth/signin')
      .send({
        username: 'hasansal',
        password: 'TestTest12!@',
      })
      .end((err, res) => {
        if (err) return done(err);
        console.log(res);
        expect(res.status).toBe(200);
        expect(res.header['set-cookie'][0]).not.toBe(undefined);
        return done();
      });
  });
});
