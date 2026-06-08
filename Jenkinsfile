pipeline {
    agent any

    tools {
        // Assumes you have Node.js configured in Jenkins (Manage Jenkins -> Tools)
        // Match the name 'Node 22.14.0' to whatever you named it in your Jenkins global tools setup.
        nodejs 'Node 22.14.0'
    }

    environment {
        // We will store the version change status here to use across stages
        VERSION_CHANGED = 'false'
        // Reference your npm token stored securely in Jenkins credentials
        NPM_TOKEN = credentials('NPM_TOKEN') 
    }

    stages {
        stage('Build & Test') {
            steps {
                echo 'Checking out code...'
                // 'checkout scm' automatically pulls the repo and commit that triggered the build
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
                    // Using a try/catch in case there is no previous commit (e.g., initial build)
                    def previousVersion = ""
                    try {
                        previousVersion = sh(script: "git show HEAD^:package.json | jq -r '.version'", returnStdout: true).trim()
                    } catch (Exception e) {
                        echo "Could not fetch previous version (might be the first commit)."
                    }
                    echo "Previous version was: ${previousVersion}"

                    // Compare versions and update our environment variable
                    if (currentVersion == previousVersion) {
                        VERSION_CHANGED = 'false'
                        echo "Version has not changed."
                    } else {
                        VERSION_CHANGED = 'true'
                        echo "Version changed! Proceeding to publish."
                    }
                }
            }
        }

        stage('Publish') {
            // This 'when' block acts exactly like the 'if:' conditional in your GitHub Actions yaml
            when {
                environment name: 'VERSION_CHANGED', value: 'true'
            }
            steps {
                echo 'Preparing to publish to npm...'
                
                // Re-running build just like your original workflow yaml did
                sh 'npm install'
                sh 'npm run build'

                // Creating a temporary .npmrc file using the token credential for secure authentication
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
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}