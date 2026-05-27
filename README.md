# Assignment 1 – Automated Container Build Pipeline

## Objective
Grasp the fundamentals of containerisation and automated workflows.

## Scenario
Package a simple application into a container and set up an automated pipeline that builds and stores the container image every time code is committed.

---

## Project Structure

```
assig_1/
├── app.js                          # Node.js "Hello World" HTTP server
├── package.json                    # Node.js project manifest
├── Dockerfile                      # Container image definition
├── .dockerignore                   # Files excluded from Docker build context
├── .gitignore                      # Files excluded from Git
└── .github/
    └── workflows/
        └── docker-build-push.yml  # GitHub Actions CI/CD pipeline
```

---

## Tasks Completed

### ✅ 1. App Setup
A basic **Node.js** HTTP server (`app.js`) that responds with a styled "Hello World" page on port **3000**.

**Run locally:**
```bash
node app.js
# Visit http://localhost:3000
```

---

### ✅ 2. Containerize (Dockerfile)
The `Dockerfile` uses the official `node:20-alpine` base image.

**Build & run the container:**
```bash
# Build
docker build -t hello-world-devsecops .

# Run
docker run -p 3000:3000 hello-world-devsecops

# Visit http://localhost:3000
```

Key features:
- Layer caching via separate `COPY package*.json` step
- Only production dependencies installed (`--omit=dev`)
- Built-in `HEALTHCHECK`

---

### ✅ 3. Automation (GitHub Actions)

File: `.github/workflows/docker-build-push.yml`

**Trigger:** Every `push` to the `main` branch.

**Pipeline steps:**
1. Checkout source code
2. Set up Docker Buildx
3. Log in to Docker Hub
4. Extract image metadata (tags + labels)
5. Build and push image (with GHA layer cache)

**Tags pushed:**
| Tag | Description |
|-----|-------------|
| `latest` | Always points to the newest build |
| `sha-<short>` | Immutable, commit-level tag |

---

## 🔐 Required GitHub Secrets

Before the workflow can push to Docker Hub, add these two secrets in your repo:  
**Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Value |
|-------------|-------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | A Docker Hub Access Token (not your password) |

> Generate a Docker Hub token at: https://hub.docker.com/settings/security

---

## Technologies Used
- **Node.js 20** – Application runtime
- **Docker / Docker Hub** – Containerisation & image registry
- **GitHub Actions** – CI/CD automation
