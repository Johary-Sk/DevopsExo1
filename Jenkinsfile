pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Johary-Sk/DevopsExo1.git'
            }
        }

        stage('Clean up old images and containers') {
            steps {
                // Supprimer les images inutilisées et les conteneurs arrêtés
                sh 'docker system prune -af || true'
            }
        }

        stage('Build backend') {
            steps {
                sh 'docker build -t backend-image ./backend'
            }
        }

        stage('Build frontend') {
            steps {
                sh 'docker build -t frontend-image ./frontend'
            }
        }

        stage('Run containers') {
            steps {
                // Supprimer les conteneurs existants si nécessaire
                sh 'docker rm -f backend || true'
                sh 'docker rm -f frontend || true'

                // Lancer les nouveaux conteneurs
                sh 'docker run -d --name backend -p 3000:3000 backend-image'
                sh 'docker run -d --name frontend -p 8000:80 frontend-image'
            }
        }

        stage('Test backend with curl') {
            steps {
                // Test avec curl pour vérifier que le backend fonctionne
                sh 'curl --fail http://localhost:3000'
            }
        }

        stage('Test frontend with curl') {
            steps {
                // Test avec curl pour vérifier que le frontend fonctionne
                sh 'curl --fail http://localhost:8000'
            }
        }
    }
}


