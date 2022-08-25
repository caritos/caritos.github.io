Maven
=====

- Build Tool
    - Common Problems and Activities
        - Multiple Jars
        - Dependencies and Versions
        - Project Structure
        - Building, Publishing, and Deploying
    - Installation
        - http://maven.apache.org
        - max os x already has Maven pre-installed
        - export M2_HOME=/Users/eladio/src/apache-maven-3.0.4
        - export PATH=$M2_HOME/bin:$PATH
        - check by using "mvn --version"
    - Creating a New Project
	- create new directory
	- choose an archetype
	- mvn archetype:generate
mvn archetype:generate -DarchetypeGroupId=com.vaadin -DarchetypeArtifactId=vaadin-archetype-application -DarchetypeVersion=LATEST -DgroupId=com.caritos -DartifactId=chat -Dversion=1.0 -Dpackaging=war
	- mvn compile (in directory where pom.xml is located)
	- mvn package
	    - runs the test case automatically

