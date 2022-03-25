import { Club } from '../database/models';

export const readAll = async () => {
  const clubs = await Club.findAll();
  return clubs;
};

export default readAll;
