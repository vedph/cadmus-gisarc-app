# Cadmus GISARC App

- [Cadmus GISARC App](#cadmus-gisarc-app)
  - [Docker](#docker)
  - [History](#history)
    - [1.0.0](#100)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

- [API](https://github.com/vedph/cadmus-gisarc-api)

## Docker

Quick Docker image build:

1. `npm run build-lib`
2. update version in `env.js` and `ng build`
3. `docker build . -t vedph2020/cadmus-gisarc-app:1.0.0 -t vedph2020/cadmus-gisarc-app:latest` (replace with the current version).

## History

- 2023-01-20: updated packages and changed `hid` to `eid` in lookup definitions.
- 2023-01-17: updated packages.
- 2023-01-05: added MapBoxGL.
- 2023-01-04: refactored to exclude Gisarc specific components replacing them with geography and epigraphy generic components.

### 1.0.0

- 2022-12-21: updated packages (for Monaco you need to update the glob pattern in `angular.json`: see [this readme](https://github.com/atularen/ngx-monaco-editor)).
- 2022-12-16: updated Angular and Cadmus packages.
- 2022-12-14: updated Angular and other 3rd-party packages.
- 2022-12-06: updated packages.
- 2022-11-30:
  - updated packages.
  - removed `@angular/flex-layout`.
