pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Johary-Sk/DevopsExo1.git'
            }
        }

	stage {
		steps {
			// Supprime tout les images
			sh 'docker system prune -af || true 

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
                sh 'docker rm -f backend || true'
                sh 'docker rm -f frontend || true'

                sh 'docker run -d --name backend -p 3000:3000 backend-image'
                sh 'docker run -d --name frontend -p 8000:80 frontend-image'
            }
        }
    }
}

