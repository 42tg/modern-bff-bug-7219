# Modern.js App

# Howto use this
1. `pnpm install``
2. `pnpm dev`
3. Open new shell and run `pnpm curl` to see different results

## Output

```bash
curl -s localhost:8001/api/registry/remote/env
```

```json
{
  "framework": "hono",
  "remote": "env",
  "env": "remote"
}
```

```bash
curl -s localhost:8000/api/registry/remote/env
```

```json
{
  "framework": "express",
  "remote": "remote",
  "env": "env"
}
```

It seems that the order of the parameter you get from hono is the reverse of the order you get from express...
