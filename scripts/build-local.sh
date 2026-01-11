# docker network create dropin
# docker volume create green_tech_db
docker-compose --env-file .env -f docker-compose/docker-compose.local.yaml up -d --build