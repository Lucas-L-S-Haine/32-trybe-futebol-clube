import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import { User } from '../database/models';
import { users as mockData } from './mocks';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;
const tokenExpression = /^ey[\w-]+\.ey[\w-]+\.[\w-]+$/

describe('Verifica se o usuário fez login', () => {
  const [_, modelUser] = mockData as unknown as User[];
  sinon.stub(User, 'findOne').resolves(modelUser);
  it('O usuário deve ser capaz de se conectar com sucesso', async () => {
    const loginData = { email: 'user@user.com', password: 'secret_user' };
    const response = await chai.request(app).post('/login').send(loginData);
    const { user, token } = response.body;
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('user');
    expect(response.body).to.have.property('token');
    expect(user).to.have.property('id').that.is.a('number');
    expect(user).to.have.property('username').that.is.a('string');
    expect(user).to.have.property('role').that.is.a('string');
    expect(user).to.have.property('email').that.is.a('string');
    expect(user).not.to.have.property('password');
    expect(token).to.match(tokenExpression);
  });
  it('O usuário não deve se conectar com email inválido', async () => {
    const loginData = { email: 'userr@user.com', password: 'secret_user' };
    const response = await chai.request(app).post('/login').send(loginData);
    const { message } = JSON.parse(response.text);
    expect(response).to.have.status(401);
    expect(message).to.be.equal('Incorrect email or password');
  });
  it('O usuário não deve se conectar com uma senha inválida', async () => {
    const loginData = { email: 'user@user.com', password: 'secret' };
    const response = await chai.request(app).post('/login').send(loginData);
    const { message } = JSON.parse(response.text);
    expect(response).to.have.status(401);
    expect(message).to.be.equal('Incorrect email or password');
  });
  it('O usuário não deve se conectar sem fornecer um email', async () => {
    const loginData = { password: 'secret_user' };
    const response = await chai.request(app).post('/login').send(loginData);
    const { message } = JSON.parse(response.text);
    expect(response).to.have.status(401);
    expect(message).to.be.equal('All fields must be filled');
  });
  it('O usuário não deve se conectar sem informar a senha', async () => {
    const loginData = { email: 'user@user.com' };
    const response = await chai.request(app).post('/login').send(loginData);
    const { message } = JSON.parse(response.text);
    expect(response).to.have.status(401);
    expect(message).to.be.equal('All fields must be filled');
  });
});
