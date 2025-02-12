import { EaCAPIJWTPayload } from './.deps.ts';

export type OpenBiotechAPIJWTPayload = EaCAPIJWTPayload & {
  CloudLookup: string;

  ResourceGroupLookup: string;
} & Record<string, unknown>;
