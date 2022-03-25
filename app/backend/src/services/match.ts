import { Match } from '../database/models';

export const readAll = async () => {
  const matches = await Match.findAll();
  return matches;
};

export default readAll;
