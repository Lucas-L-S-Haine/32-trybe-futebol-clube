import { Match } from '../database/models';

export const readAll = async (inProgress: string | undefined) => {
  const matches = await inProgress === undefined
    ? Match.findAll()
    : Match.findAll({ where: { inProgress: JSON.parse(inProgress as string) } });
  return matches;
};

export default readAll;
