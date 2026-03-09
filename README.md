# PlukNu landing page

## Deploy

GitHub Actions deploys this site on every push to `main` and mirrors the built `dist/` output to the TransIP webroot at `/data/sites/web/pluknunl/www`.

Required GitHub Actions secrets:

- `DEPLOY_HOST`
- `DEPLOY_PORT`
- `DEPLOY_USER`
- `DEPLOY_SSH_KEY`
- `DEPLOY_PATH`

Set `DEPLOY_PATH` to `/data/sites/web/pluknunl/www`.

## Mail endpoint on shared hosting

The frontend keeps posting to `/.netlify/functions/send-email`. On shared hosting, Apache rewrites that route to [`public/.netlify/functions/send-email.php`](/c:/laragon/www/pluknu-landingpage-frontend/public/.netlify/functions/send-email.php), which calls the Brevo API server-side.

Configure the Brevo API key in one of these ways:

1. Expose `BREVO_API_KEY` as an environment variable in hosting.
2. Set `BREVO_CONFIG_PATH` to a PHP file outside the webroot that returns `['api_key' => '...']`.

The deployed [`public/.htaccess`](/c:/laragon/www/pluknu-landingpage-frontend/public/.htaccess) also provides SPA routing back to `index.html`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
