const AVATAR_KEY_FOR_LOCAL_STORAGE = 'wtw-userpic';

export const saveUserAvatar = (avatar: string): void => localStorage.setItem(AVATAR_KEY_FOR_LOCAL_STORAGE, avatar);

export const getUserAvatar  = (): string | null => localStorage.getItem(AVATAR_KEY_FOR_LOCAL_STORAGE) || null;

export const dropUserAvatar  = (): void => localStorage.removeItem(AVATAR_KEY_FOR_LOCAL_STORAGE);
