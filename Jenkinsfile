pipeline {
  agent {
    docker {
      image 'node:lts-bullseye-slim'
      args '-p 3000:3000'
    }
  }
  stages {
    stage ('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage ('Deploy') {
      steps {
        sh 'cd ~/projects/jenkins-starter-nodejs-app'
        sh 'docker compose down'
        sh 'docker compose up -d --build'
      }
    }
  }
}