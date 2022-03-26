import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica se os clubes aparecem na página', () => {
  it('Retorna uma lista de clubes com sucesso', async () => {
    const errorMessage = 'Clubs not found';
    const response = await chai.request(app).get('/clubs');
    const cruzeiro = {"id":5,"clubName":"Cruzeiro"};
    const clubs = response.body;
    expect(response, 'not found').not.to.have.status(404);
    expect(response, 'internal server error').not.to.have.status(500);
    expect(response).to.have.status(200);
    expect(clubs).to.be.an('array');
    expect(clubs).to.have.lengthOf(16);
    expect(clubs[4]).to.deep.equal(cruzeiro);
  });
});

describe('Procura um clube específico pelo "id"', () => {
  it('Retorna um objeto com os dados de um clube', async () => {
    const response = await chai.request(app).get('/clubs/5');
    const cruzeiro = {"id":5,"clubName":"Cruzeiro"};
    const club = response.body;
    expect(response, 'not found').not.to.have.status(404);
    expect(response, 'internal server error').not.to.have.status(500);
    expect(response).to.have.status(200);
    expect(club).to.be.an('object');
    expect(club).not.to.be.undefined;
    expect(club).to.have.property('id').that.is.a('number');
    expect(club).to.have.property('clubName').that.is.a('string');
    expect(club).to.deep.equal(cruzeiro);
  });
});
