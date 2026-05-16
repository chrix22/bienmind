# Bienmind - Configuration Serveur

## Environnement VPS

- **OS**: Ubuntu 24.04 LTS
- **User**: root
- **Chemin site**: `/home/user/bienmind`
- **Docker**: Installé (v29.3.1)
- **Docker Compose**: v5.1.1

## Déploiement

```bash
cd /home/user/bienmind
git pull origin main
docker compose down && docker compose up -d --build
```

## Conteneur

- **Nom**: `bienmind-web`
- **Image**: `ghcr.io/nginxinc/nginx-unprivileged:alpine`
- **Port**: `80:8080`

## Commandes utiles

```bash
# Voir les logs
docker logs bienmind-web -f

# Redémarrer
docker compose restart

# Reconstruire
docker compose up -d --build

# Status
docker ps
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
