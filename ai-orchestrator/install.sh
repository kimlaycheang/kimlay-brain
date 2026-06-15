#!/bin/bash
set -e

cd "$(dirname "$0")"

if [ ! -f .env ]; then
  echo "ERROR: .env not found. Copy .env.example to .env and fill in credentials first."
  exit 1
fi

echo "Installing dependencies..."
npm install

echo "Starting with PM2 as 'kim-orchestrator'..."
pm2 start orchestrator.js --name kim-orchestrator
pm2 save

echo "Done. Use 'pm2 logs kim-orchestrator' to view logs."
