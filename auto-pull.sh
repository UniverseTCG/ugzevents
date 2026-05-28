#!/bin/bash
echo "Iniciando auto-pull de GitHub cada 30 segundos..."
while true; do
  # Descartar salida a menos que haya error para no llenar logs
  git pull origin main > /dev/null 2>&1
  sleep 30
done
