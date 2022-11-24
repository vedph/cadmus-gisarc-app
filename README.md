# Cadmus GISARC App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

- [models](https://github.com/vedph/cadmus-gisarc)
- [API](https://github.com/vedph/cadmus-gisarc-api)

## Docker

Quick Docker image build:

1. `npm run build-lib`
2. update version in `env.js` and `ng build`
3. `docker build . -t vedph2020/cadmus-gisarc-app:1.0.0 -t vedph2020/cadmus-gisarc-app:latest` (replace with the current version).
