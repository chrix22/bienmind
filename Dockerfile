FROM ghcr.io/nginxinc/nginx-unprivileged:alpine

# Copy static files (excluded files in .dockerignore)
COPY --chown=nginx:nginx . /usr/share/nginx/html/

# Copy nginx config
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
