<p align="center">
  <a href="https://python.pizza">
    <img src="https://raw.githubusercontent.com/pythonpizza/python.pizza/master/social/social-image.jpg" width="100%" />
  </a>
</p>

<h1 align="center">
  Python Pizza
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/a12816da-77eb-44b0-950f-f72d7fa73704/deploy-status)](https://app.netlify.com/sites/eloquent-knuth-6dbbe5/deploys)

## Development

For local development consider using docker with below command:

```bash
docker run --rm -it \
  -p 8000:8000 \
  -p 8001:8001 \
  -v "$PWD":/app \
  -v pythonpizza_node_modules:/app/node_modules \
  -w /app \
  node:16-bullseye \
  bash -lc "corepack enable && yarn install && yarn develop -H 0.0.0.0 -p 8000"
```