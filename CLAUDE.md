# Bienmind - Configuration Serveur

## VPS Production (Hostinger)

- **Hostname**: srv1088249
- **User**: root
- **Chemin site**: `/home/user/bienmind`
- **URL**: https://bienmind.com

## Architecture

```
Internet → Traefik (port 80/443) → bienmind-web (port 8080)
```

## Reverse Proxy - Traefik

- **Container**: `traefik`
- **Ports**: 80 (HTTP), 443 (HTTPS)
- **Network**: `traefik_default`
- **Certificats**: Let's Encrypt (certresolver: letsencrypt)

⚠️ **IMPORTANT**: Ne jamais mapper le port 80 directement. Toujours passer par Traefik.

## Déploiement

```bash
ssh root@srv1088249
cd /home/user/bienmind
git pull origin main
docker rm -f bienmind-web
docker compose up -d --build
```

## Docker Compose (avec Traefik)

```yaml
services:
  web:
    build: .
    container_name: bienmind-web
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.bienmind.rule=Host(`bienmind.com`) || Host(`www.bienmind.com`)"
      - "traefik.http.routers.bienmind.entrypoints=websecure"
      - "traefik.http.routers.bienmind.tls.certresolver=letsencrypt"
      - "traefik.http.services.bienmind.loadbalancer.server.port=8080"
    networks:
      - traefik_default

networks:
  traefik_default:
    external: true
```

## Autres services sur ce VPS

| Container | Usage |
|-----------|-------|
| traefik | Reverse proxy (ports 80/443) |
| n8n | Automation (port 5678) |
| ghost_sonocrea | Blog Ghost |
| openclaw | OpenClaw |
| api-claude-cockpit | API Claude |
| crowdsec | Sécurité |
| mysql | Base de données |
| suno-api | Suno API |

## Commandes utiles

```bash
# Voir les logs
docker logs bienmind-web -f

# Redémarrer
docker restart bienmind-web

# Reconstruire
docker rm -f bienmind-web && docker compose up -d --build

# Status tous les containers
docker ps

# Vérifier Traefik
docker logs traefik -f
```

## Structure du site

```
/home/user/bienmind/
├── index.html          # Page principale
├── blog/
│   ├── index.html      # Liste articles
│   └── articles/       # Articles du blog
├── css/styles.css
├── js/main.js
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

## URLs

- **Production**: https://bienmind.com
- **Blog**: https://bienmind.com/blog/

## Git

- **Repo**: https://github.com/chrix22/bienmind
- **Branche prod**: main
