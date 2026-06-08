// Define a global script variable at the very top to safely pass data between stages
def versionChanged = false

pipeline {
    agent any

    tools {
        nodejs 'Node 22.14.0'
    }

    environment {
        // Reference your npm token stored securely in Jenkins credentials
        NPM_TOKEN = credentials('NPM_TOKEN') 
    }

    stages {
        stage('Build & Test') {
            steps {
                echo 'Checking out code...'
                checkout scm

                echo 'Installing Dependencies...'
                sh 'npm install'

                echo 'Building...'
                sh 'npm run build'

                echo 'Running Tests...'
                sh 'npm run test'

                script {
                    echo 'Checking if version changed...'
                    
                    // Extract current version using jq
                    def currentVersion = sh(script: "jq -r '.version' package.json", returnStdout: true).trim()
                    echo "Current version is: ${currentVersion}"

                    // Try to read the previous version from the previous Git commit
                    def previousVersion = ""
                    try {
                        previousVersion = sh(script: "git show HEAD^:package.json | jq -r '.version'", returnStdout: true).trim()
                    } catch (Exception e) {
                        echo "Could not fetch previous version (might be the first commit)."
                    }
                    echo "Previous version was: ${previousVersion}"

                    // Update our Groovy variable directly
                    if (currentVersion == previousVersion) {
                        versionChanged = false
                        echo "Version has not changed."
                    } else {
                        versionChanged = true
                        echo "Version changed! Proceeding to publish."
                    }
                }
            }
        }

        stage('Publish') {
            // Use the expression syntax to read our Groovy variable safely
            when {
                expression { return versionChanged }
            }
            steps {
                echo 'Preparing to publish to npm...'
                
                sh 'npm install'
                sh 'npm run build'

                script {
                    sh """
                        echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
                        npm publish
                        rm -f .npmrc
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                try {
                    echo 'Attempting to clean up workspace...'
                    cleanWs()
                } catch (Exception e) {
                    echo 'Workspace already released by Jenkins agent. Skipping explicit cleanup.'
                }
            }
        }
    }
}