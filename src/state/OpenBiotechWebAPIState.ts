import { OpenBiotechAPIJWTPayload } from './OpenBiotechAPIJWTPayload.ts';

export type OpenBiotechWebAPIState = {
  EaCJWT?: string;
} & Omit<OpenBiotechAPIJWTPayload, 'JWT'>;
