import { OpenBiotechAPIJWTPayload } from './OpenBiotechAPIJWTPayload.ts';

export type OpenBiotechWebAPIState = {
  CloudLookup?: string;

  EaCJWT?: string;

  ResourceGroupLookup?: string;
} & Omit<OpenBiotechAPIJWTPayload, 'JWT'>;
