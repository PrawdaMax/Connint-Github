pipeline {
    // 'agent any' means this pipeline can run on any available Jenkins executor/worker
    agent any

    // Optional: Set a timeout and timestamps for cleaner logs
    options {
        timeout(time: 1, unit: 'HOURS')
        timestamps()
    }

    stages {
        stage('Build') {
            steps {
                echo 'Starting the Build stage...'
                // Replace the echos below with your actual build commands
                // For example: sh 'npm install' or sh './mvnw clean package'
                sh 'echo "Compiling code and installing dependencies..."'
            }
        }

        stage('Test') {
            steps {
                echo 'Starting the Test stage...'
                // Replace with your actual testing commands
                // For example: sh 'npm test' or sh './mvnw test'
                sh 'echo "Running unit and integration tests..."'
            }
        }

        stage('Publish') {
            steps {
                echo 'Starting the Publish stage...'
                // Replace with your actual deployment/publishing commands
                // For example: uploading an artifact to Nexus/Artifactory, 
                // pushing a Docker image, or deploying to a server.
                sh 'echo "Publishing artifacts / deploying application..."'
            }
        }
    }

    // The post section runs actions based on the build outcome
    post {
        always {
            echo 'Cleaning up the workspace...'
            cleanWs() // Deletes the workspace directory to keep the server clean
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the console logs above.'
        }
    }
}