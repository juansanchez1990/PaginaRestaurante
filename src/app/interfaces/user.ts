export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  FirstName: string,
  LastName: string,
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  idToken: string;
  needConfirm: boolean;
  role?: Roles;
}
