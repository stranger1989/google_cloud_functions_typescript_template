# google_cloud_functions_typescript_template

Template for develop google cloud functions with typescript and webpack. <br />
To handle HTTP, Cloud Functions nodejs uses `Express 4.17.1`.

## Env setting

Create `env/dev.yml` and `env/prod.yml` file on root path. <br />
Here is the example {env}.yml file as below.

```yml
PROJECT_NAME: { GCP project name }
```

## Launch development server

Spin up a local development server for quick testing use `@google-cloud/functions-framework`.

### start

```shell
npm start
```

### watch

Build with webpack and reload development server when files change.

```shell
npm run watch
```

## Build and deploy with serverless framework

### webpack build and deploy

```shell
npx serverless deploy -s {env}
```

### test request

```shell
npx serverless invoke -f first
```
