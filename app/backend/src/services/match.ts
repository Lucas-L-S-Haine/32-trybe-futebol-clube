import { Match, Club } from '../database/models';

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

export default readAll;
