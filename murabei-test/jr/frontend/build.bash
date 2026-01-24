#!/bin/bash

# Build the frontend Docker image
npm install && docker build -t frontend:latest .
