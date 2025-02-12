import {
  EverythingAsCode,
  EverythingAsCodeClouds,
  EverythingAsCodeGitHub,
  EverythingAsCodeIdentity,
  EverythingAsCodeIoT,
  EverythingAsCodeSources,
} from './.deps.ts';

export type OpenBiotechEaC =
  & EverythingAsCode
  & EverythingAsCodeClouds
  & EverythingAsCodeGitHub
  & EverythingAsCodeIdentity
  & EverythingAsCodeIoT
  & EverythingAsCodeSources;
