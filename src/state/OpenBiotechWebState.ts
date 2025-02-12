import { EaCUserLicense, EaCUserRecord, OpenBiotechEaC } from './.deps.ts';
import { SetupPhaseTypes } from './SetupPhaseTypes.ts';
import { CloudPhaseTypes } from './CloudPhaseTypes.ts';
import { DevicesPhaseTypes } from './DevicesPhaseTypes.ts';
import { DataPhaseTypes } from './DataPhaseTypes.ts';

export type OpenBiotechWebState =
  & {
    Cloud: OpenBiotechCloudState;

    Data: OpenBiotechDataState;

    Devices: OpenBiotechDevicesState;

    EaC?: OpenBiotechEaC;

    EaCJWT?: string;

    GitHub?: OpenBiotechGitHubState;

    OBiotechKV: Deno.Kv;

    Phase: SetupPhaseTypes;

    UserEaCs?: EaCUserRecord[];

    UserLicenses?: Record<string, EaCUserLicense>;

    Username: string;
  }
  & //   & WithSession
  Record<string, unknown>;

export type OpenBiotechCloudState = {
  AzureAccessToken?: string;

  CloudLookup?: string;

  Phase: CloudPhaseTypes;

  ResourceGroupLookup?: string;

  Storage?: {
    Cold: boolean;

    Hot: boolean;

    Warm: boolean;
  };
};

export type OpenBiotechDevicesState = {
  IoTLookup?: string;

  JWT: string;

  Phase: DevicesPhaseTypes;
};

export type OpenBiotechDataState = {
  Phase: DataPhaseTypes;
};

export type OpenBiotechGitHubState = {
  Username: string;
};
