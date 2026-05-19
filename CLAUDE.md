# Bienmind - Configuration Serveur

⚠️ **LIRE EN PREMIER** - Ce fichier contient toute la configuration du VPS. Ne pas refaire de recherches.

---

## VPS Production (Hostinger)

| Paramètre | Valeur |
|-----------|--------|
| Hostname | `srv1088249` |
| IP | `72.61.167.223` |
| SSH | `ssh root@72.61.167.223` |
| User | `root` |
| OS | Ubuntu |
| Chemin site | `/home/user/bienmind` |
| URL | https://bienmind.com |

---

## Architecture Réseau

```
┌─────────────┐     ┌─────────────────┐     ┌───────────────┐
│  Internet   │────▶│  Traefik :80/443│────▶│ bienmind-web  │
│             │     │  (reverse proxy)│     │    :8080      │
└─────────────┘     └─────────────────┘     └───────────────┘
```

**⚠️ RÈGLE ABSOLUE**: Ne JAMAIS exposer le port 80 directement. Tout passe par Traefik.

---

## Traefik (Reverse Proxy)

| Paramètre | Valeur |
|-----------|--------|
| Container | `traefik` |
| Image | `traefik:v2.11` |
| Ports | 80 (HTTP), 443 (HTTPS) |
| Network | `traefik_default` |
| Certificats | Let's Encrypt |
| Certresolver | `letsencrypt` |
| Entrypoints | `web` (80), `websecure` (443) |

---

## Container Bienmind

| Paramètre | Valeur |
|-----------|--------|
| Nom | `bienmind-web` |
| Image | `ghcr.io/nginxinc/nginx-unprivileged:alpine` |
| Port interne | 8080 |
| Network | `traefik_default` |
| Restart | `unless-stopped` |

### Labels Traefik requis
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.bienmind.rule=Host(`bienmind.com`) || Host(`www.bienmind.com`)"
  - "traefik.http.routers.bienmind.entrypoints=websecure"
  - "traefik.http.routers.bienmind.tls.certresolver=letsencrypt"
  - "traefik.http.services.bienmind.loadbalancer.server.port=8080"
```

---

## Autres Services sur ce VPS

| Container | Image | Usage | Port |
|-----------|-------|-------|------|
| traefik | traefik:v2.11 | Reverse proxy | 80, 443 |
| n8n | n8nio/n8n | Automation | 5678 |
| ghost_sonocrea | ghost:6-alpine | Blog Ghost | 2368 |
| openclaw | openclaw | OpenClaw | - |
| api-claude-cockpit | custom | API Claude | 8000 |
| crowdsec | crowdsecurity/crowdsec | Sécurité | - |
| mysql | mysql:8.0 | Base de données | 3306 |
| suno-api | custom | Suno API | 3000 |

---

## Déploiement

### Mise à jour standard
```bash
cd /home/user/bienmind
git pull origin main
docker rm -f bienmind-web
docker compose up -d --build
```

### Setup initial (nouveau serveur)
```bash
mkdir -p /home/user && cd /home/user
git clone https://github.com/chrix22/bienmind.git
cd bienmind
docker compose up -d --build
```

### Vérification
```bash
docker ps | grep bienmind
docker logs bienmind-web -f
curl -I https://bienmind.com
```

---

## Commandes Docker

```bash
# Logs
docker logs bienmind-web -f

# Restart
docker restart bienmind-web

# Rebuild complet
docker rm -f bienmind-web && docker compose up -d --build

# Status tous containers
docker ps

# Logs Traefik (debug routing)
docker logs traefik -f

# Entrer dans le container
docker exec -it bienmind-web sh

# Vérifier fichiers servis
docker exec bienmind-web ls -la /usr/share/nginx/html/
```

---

## Structure du Site

```
/home/user/bienmind/
├── index.html              # Page principale
├── favicon.svg             # Favicon
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── css/
│   └── styles.css          # Styles
├── js/
│   └── main.js             # JavaScript
├── images/
│   └── og-image.svg        # Image partage social
├── blog/
│   ├── index.html          # Liste articles
│   ├── calendrier-editorial.md
│   └── articles/
│       └── aaas-agent-as-a-service-revolution-ia.html
├── Dockerfile
├── docker-compose.yml      # ⚠️ Avec labels Traefik
├── nginx.conf
└── CLAUDE.md               # CE FICHIER
```

---

## URLs Production

| Page | URL |
|------|-----|
| Accueil | https://bienmind.com |
| Blog | https://bienmind.com/blog/ |
| Article AaaS | https://bienmind.com/blog/articles/aaas-agent-as-a-service-revolution-ia.html |

---

## Git

| Paramètre | Valeur |
|-----------|--------|
| Repo | https://github.com/chrix22/bienmind |
| Branche prod | `main` |
| Branche dev | `claude/create-bienmind-website-*` |

---

## Troubleshooting

### Port 80 already in use
→ C'est Traefik. Ne pas essayer de libérer le port. Utiliser les labels Traefik.

### Container ne démarre pas
```bash
docker logs bienmind-web
docker inspect bienmind-web
```

### Site 404
```bash
docker exec bienmind-web ls -la /usr/share/nginx/html/
docker exec bienmind-web cat /etc/nginx/conf.d/default.conf
```

### Traefik ne route pas
```bash
docker logs traefik -f
# Vérifier que le container est sur le réseau traefik_default
docker network inspect traefik_default
```
