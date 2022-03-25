import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const standardMessage = 'Locked and loaded, little lizard!!!';

describe('Verifica se as partidas aparecem na página', () => {
  it('Retorna uma lista de partidas com sucesso', async () => {
    const response = await chai.request(app).get('/matchs');
    const matches = response.body;
    const openingMatch = {
      id: 1,
      homeTeam: 16,
      homeTeamGoals: 1,
      awayTeam: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeClub: { "clubName": "São Paulo" },
      awayClub: { clubName: "Grêmio" },
    }
    expect(response.body.message).not.to.be.equal(standardMessage);
    expect(response).to.have.status(200);
    expect(matches).to.be.an('array');
    expect(matches[0]).to.deep.equal(openingMatch);
  });
});
