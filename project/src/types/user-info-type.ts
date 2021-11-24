export type AbstractUser = {
  id?: number,
  email?: string,
  name?: string,
  token?: string;
}

export type UserInfoType = null | AbstractUser & {
  avatarUrl?: string,
};

export type ServerUserInfoType = AbstractUser & {
  'avatar_url': string,
};

