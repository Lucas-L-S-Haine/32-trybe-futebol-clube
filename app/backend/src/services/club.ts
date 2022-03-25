import { Club } from '../database/models';

export const readAll = async () => {
  const clubs = await Club.findAll();
  return clubs;
};

export const readOne = async (id: string) => {
  const club = await Club.findByPk(id);
  return club;
};
