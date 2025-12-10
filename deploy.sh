#!/bin/bash

echo "Stop old containers"
docker stop backend
docker rm backend

docker stop frontend
docker rm frontend

echo "Build Image"
docker build -t backend ./backend

docker build -t frontend ./frontend

echo "Run container"

echo "Success........."
