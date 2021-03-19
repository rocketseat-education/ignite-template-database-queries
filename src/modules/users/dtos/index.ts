interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO };
