import {
  EverythingAsCode,
  EverythingAsCodeClouds,
  EverythingAsCodeGitHub,
  EverythingAsCodeIdentity,
  EverythingAsCodeIoT,
  EverythingAsCodeLicensing,
  EverythingAsCodeSources,
} from './.deps.ts';

export type OpenBiotechEaC =
  & EverythingAsCode
  & EverythingAsCodeClouds
  & EverythingAsCodeGitHub
  & EverythingAsCodeIdentity
  & EverythingAsCodeIoT
  & EverythingAsCodeLicensing
  & EverythingAsCodeSources;
