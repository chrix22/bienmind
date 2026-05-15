FROM nginx:alpine

# Copy static files
COPY . /usr/share/nginx/html/

# Remove unnecessary files
RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/docker-compose.yml \
    /usr/share/nginx/html/.dockerignore

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
