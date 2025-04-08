pipeline {
  agent any

  environment {
    NETLIFY_SITE_ID = '4b1dd9a5-08fb-41e4-b7ae-a19dad452fb9'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Deploy to Netlify') {
      steps {
        withCredentials([string(credentialsId: 'netlify-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
          bat "node_modules\\.bin\\netlify deploy --prod --dir=build --site=%NETLIFY_SITE_ID% --auth=%NETLIFY_AUTH_TOKEN%"

        }
      }
    }
  }
}
