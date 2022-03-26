import { WhereOptions } from 'sequelize';
import { Match, Club } from '../database/models';
import HttpException from '../classes/httpException';

const EQUAL_TEAM_ERROR = 'It is not possible to create a match with two equal teams';

export const readAll = async (inProgress: string | undefined) => {
  const matches = await inProgress === undefined
    ? Match.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: ['clubName'] },
        { model: Club, as: 'awayClub', attributes: ['clubName'] },
      ],
    })
    : Match.findAll({
      where: { inProgress: JSON.parse(inProgress as string) },
      include: [
        { model: Club, as: 'homeClub', attributes: ['clubName'] },
        { model: Club, as: 'awayClub', attributes: ['clubName'] },
      ],
    });
  return matches;
};

export const createOne = async (matchData: Match) => {
  const { homeTeam: homeId, awayTeam: awayId } = matchData;
  if (homeId < 1 || homeId > 16) throw new HttpException(400, 'Team not found');
  if (awayId < 1 || awayId > 16) throw new HttpException(400, 'Team not found');
  if (homeId === awayId) throw new HttpException(401, EQUAL_TEAM_ERROR);
  await Match.create(matchData);
  const options = matchData as unknown as WhereOptions<Match> | undefined;
  const matches = await Match.findAll({ where: options });
  const index = matches.length - 1;
  const match = matches[index];
  return match;
};
