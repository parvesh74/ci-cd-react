pipeline {
  agent any

  environment {
    NETLIFY_SITE_ID = '4b1dd9a5-08fb-41e4-b7ae-a19dad452fb9'
    NETLIFY_AUTH_TOKEN = credentials('netlify-token')  
    // 'nfp_QrYBv8USiaCqu6WYXGuuyzNeGJzoWY9K08f0'
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

    stage('Test') {
      steps {
        bat 'call npm test -- --watchAll=false --passWithNoTests'

        // bat 'npm test -- --watchAll=false'
      }
    }

    stage('Deploy to Netlify') {
      steps {
        script {
          def deployUrl = "https://api.netlify.com/builds"
          def deployPayload = """
          {
            "site_id": "${NETLIFY_SITE_ID}",
            "auth_token": "${NETLIFY_AUTH_TOKEN}",
            "build": {
              "commit_ref": "main"
            }
          }
          """
          // Trigger deploy request
          sh "curl -X POST -H 'Content-Type: application/json' -d '${deployPayload}' ${deployUrl}"
        }
      }
    }
  }
}
