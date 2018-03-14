node {

    // git url: 'https://github.com/syslogic/extjs-nvd3-charts.git'

    deleteDir()

    try {

        stage ('Clone') {
        	checkout scm
        }

        stage ('Build') {
        	sh "echo 'copy framework & theme'"
		sh "cp -R /home/public/extjs-nvd3-charts/ext ./ext"
		sh "cp -R /home/public/extjs-nvd3-charts/resources/themes ./resources/themes"
                sh "echo 'building `extjs-nvd3-charts`'"
		sh "cd scripts"
		sh "./compile.sh"
        }

        stage ('JsDuck') {
        	// sh "gem install jsduck"
                sh "jsduck --output docs --exclude=ext --warnings=-all:ext/build ext/build/ext-all.js app"
        }

        stage ('Tests') {
	       sh "echo 'Jasmine Tests'" 
        }

      	stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                // sh 'make publish'
            }
        }

    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}
