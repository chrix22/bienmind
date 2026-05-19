# Bienmind - Configuration Serveur

## VPS Production (Hostinger)

- **Hostname**: srv1088249
- **User**: root
- **Chemin site**: `/home/user/bienmind`
- **URL**: https://bienmind.com

## Déploiement sur le VPS

```bash
ssh root@srv1088249
cd /home/user/bienmind
git pull origin main
docker compose down && docker compose up -d --build
```

## Setup initial (si nouveau serveur)

```bash
mkdir -p /home/user && cd /home/user
git clone https://github.com/chrix22/bienmind.git
cd bienmind
docker compose up -d --build
```

## Docker

- **Container**: `bienmind-web`
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

## Git

- **Repo**: https://github.com/chrix22/bienmind
- **Branche prod**: main
- **Branche dev**: claude/create-bienmind-website-vMMMD
