2013 Eclipse Conference Notes 
===================================

Background Information
----------------------
* EclipseCon 2013 held in Boston, MA from March 25-28
* Conference colocated with OSGi DevCon and ALM Connect
	- OSGi DevCon deals with Java Modularity
	- ALM Connect deals with wider picture of software development and the pratices/tools that support it.

Keynotes
--------
* Developers are the New Kingmakers
	- http://thenewkingmakers.com
	- delivered by RedMonk's Stephen O'Grady
	- previously it was the CEO's (the people who had the money) that decided technology choices
	- now it's the software developers that chooses the tools/projects they want to work on
		+ apache httpd software, most popular open source software
		+ mysql, most popular database even if it is not the most technology advanced
	- Hardware is getting cheaper/consolidated, it's the software the users care about most
* Moving towards ALM 3.0
	- Jeffrey Hammond of Forrester Research
	- Retrospective of how we build software
	- Mobile App Development, commit code, automated test, release to public, get feedback,
* How Github Works
	- Zach Holman of Github
	- Poll "How many people here develope after hours" <-- about 75% raise their hands up
	- create open source projects you are interested in
		+ running as a hobby, integrate Garmin with Nike+
	- it's so easy to contribute "Pull Request"
* Nashorn (JavaScript for the JVM)
	- Jim Laskey of Oracle
	- Nashorn (meaning Rhino) is Javascript on the JVM
	- Javascript is quicker to do somethings
	- other languages run on the JVM
    - pretty cool
    - java/javascript both together working

##########################################################################################################
Warning: From here to the end are my session notes.  Read the heading and if interested, we can discuss it further.
##########################################################################################################

What every Eclipse developer should know about Eclipse 4
--------------------------------------------------------
- too much coupling in e3.  Can't exchange View with Model
- parts replace editors and view
- e4 using Dependency Injection, so less coupling
- it searches the object via the hiearchy
	* from bottom to top
- no need to implement interfaces.. use pojos with annotations
- advantage
	* don't need to know what 
	* independent classes, easy to test
	* easier to test since they are pojos

Advanced Eclipse 4 Application Platform - not for the weak-hearted
------------------------------------------------------------------
- anything registered as osgi services, subject to direct injection
- don't construct classes when using direct injection
- "reinjection" - updates variables in child classes
- Figure out how to create a return value shortcut
- Figure out component.xml
- Everything is a service in Eclipse
- learn about target environments (not sure what they are used for)
- Vaadin in Eclipse 4 - email Sopot Cela
- add -nosplash if you have a mac - starting up vaadin
- Vaadin in E4 is doable 
- JavaFX has animation
	* from Oracle, update to swing
- Installation is done via oracle java library
	* There is a tutorial on JavaFX tooling for tomorrow.
- Everything is exhangeable
- Everything is a service

DS, BP, EJB, CDI, WTF!?
-----------------------
- There are a number component models available to OSGi developers; Declarative Services (DS), Blueprint (BP), Enterprise JavaBeans (EJB), Contexts and Dependency Injection (CDI). 
Some have their roots in Java EE, some in open source projects such as the Spring Framework, others are standards at the OSGi Alliance, and some have DNA from all three. As is 
often the case where there are options available, there's rarely a one-size-fits-all. The 'right' choice may depend on the type of project you're working on, the existing assets, 
tools and skills at your disposal, and the runtime you're looking to deploy to. This talk will provide a brief overview of the four component models listed, describe their scope 
of capabilities, standards coverage, tools support, and available implementations in an efforts to help OSGi users find a path to a component model best suited to their 
particular task.

Rapid Java application development with JRebel 
----------------------------------------------
- JRebel rose as a research project to solve the problem with redeploying the Java applications that led to enormous turnaround cycles. Java developer productivity is quite 
critical in the companies today and becomes more and more important with the pace of the business changes these days. The longer is the turnaround, the more room for distractions 
there is leading to long unintentional breaks and loss of the focus.  We will take a look at the Java ecosystem from the productivity point of view and try to find the ways 
around the obstacles. How long does your application takes to build? How long does your application server takes to start and deploy the application? Do you have to navigate 
in the application in order to see the results of your change? JRebel maps workspaces directly to the running application, and changes are instantly reflected in the UI.  In 
this talk we will review the technical and conceptual challenges involved in solving the turnaround issue and the options available today. We will discuss the tooling and 
technologies in the Java ecosystem with the respect to productivity, and also the issues involved with integrating JRebel into development cycle and the consequences the tool 
leads to.  JRebel integrates with OSGi runtime and therefor is eligible for Eclipse plugin development although the support is in experimental state. We will see how JRebel 
can be applied to support plugin.xml changes, with support for adding new UI components without having to restart the whole workbench

High Quality Agile - Incorporating Quality into Your Agile Porcess and Organization Means Working and Faster
------------------------------------------------------------------------------------------------------------
- @lindybrandon Lorinda Brandon
- weekly delivery, quality is a concern
- Automate vs. Exploratory (ideal is to have a balance of both)
- DevOps 
    * how to incorporate devops
    * it doesn't matter
- Not discussing mechanics, talking about mindshare
- agile comes with a changed mindset
- "agile" - people think about speed.
    * excludes the user experience
    * need to include quality and user experience.
 - need to include the persona
    * Create a user story
    * As a ____, I want to ____ because ____
 - read the "artifacts" <-- documentation
    * include test plan
    * need to read test plans so that everybody has an understanding of why it is being used
    * "MAT" - minimum acceptance test
            - associated with a user story
- Stand Up / Speak Up
    * encourage feedback
        + how does it look
        + how does it feel
        + can you show me
- code review
    * when ready to check in, need code review
    * had to demonstrate that the Minimum Accepted Test worked
    * the person who did the code review to pass it to QA
    * don't shut down dialog
    * not just about status updates
    * this is where you are managing quality
    * got to give all the people to talk
    * need to do this at work
- production data
    * get analytics from customer use
    * analyze production data
    * create production data analyzer
    * that's a good plugin to write about (user analytics)
- fail fast, fail often
    * don't do it in front of the customer
    * assess reality against assumption
    * failure is another way of learning
- safe for the teams
    * can react to what the users are telling you.
    * rethink everyday of what you are doing and why you are doing
- "Quality is not an act, it is a habit" - Aristotle

Big Data and Business Intelligence
----------------------------------
- BIRT project <-- Actuate Company
    * Business Inteeligence and Reporting Tools
- Big Data - Hadoop/BIRT
- Data Visitualization Essential
- Hadoop seems to be #1 choice
- Application use: Customer Experience Analysis
- BIRT Exchange - Centralized hub for developers

EMF Dos and Dont's
------------------
- Tom Cargill quote "90%"
- EMF-based frameworks :Teneo/CDO
- Don't change getters and setters
- Use pattern for replacing gen.co
    * method name suffix "Gen"
- Use EMF commands, support undo-redo and they do it correctly.
- UI does no update to new values in the model
    * widget is disposed
    * cause:databinding is buggy
    * use EMF Databinding 
- JAXB is an alternate

Designing software with users and testers in mind
-------------------------------------------------
- For all our our ingeniousness in writing amazing software with complex architecture, 
we often tend to leave much room for improvement when it comes to putting ourselves 
in the position of our users and testers. It's understandable to some degree, 
after all, usability and testability conjure images of hand-holding, hair-stroking 
and frolicking in fields. It sounds like something hippies would talk about. 
And much of the information available is fuzzy and wishy-washy.
In this talk, Alex looks at real examples where usability and testability are 
frequently neglected, making the software we write harder to use, harder to test 
and harder to love. She starts by proposing why we should care so much about these 
â€“abilitys before looking briefly at some typical usability guidelines. Having got the 
theoretical stuff out of the way, she moves onto concrete examples from projects 
sheâ€™s worked on to exemplify how small changes can make a big difference. Finally, 
she suggests some â€œbad smellsâ€� that might help you identify problematic areas to 
look at in your own projects and some methods to make sure youâ€™re thinking about 
your â€“abilitys at the right time.
This talk is aimed at project leaders and product owners as well as developers 
and testers - anyone who has a stake in how their software is seen by others.- 
- Alexandra Schaledebeck - Product owner of Jubula Project
- Visibility of system status
    * Usuability - keep users informed, feedback , reasonable time
        - is it broken
        - should i restart
    * Testability - Observer restuls, automated checks
- the point of this class is that you can make it easier to have both testing / 
  usability
- top three
    - action/reaction something should happen when i do something
    - people think different - let it be accessible in different ways
    - need cancel button, need to have a clear way out (valuable usability/testability)
    - alex_schl
    
Now that I've Got a Model - Where's my Application?
---------------------------------------------------
- EMF / CDO technology
- Models are efficient for capturing enterprise knowledge at a high level of abstraction, independent of technical concerns. Using the Eclipse Modeling Framework (EMF) I can generate an Eclipse editor for my model on a click of a button and instantly play with it. Once I've iterated on the model I need to develop an application around it to put it to use. Now I realize that modeling didn't eliminate any technical aspects, it just relieved me from thinking about them early.
- What about the background threads that are expected to cooperate nicely with my model? What if real data are magnitudes bigger than the data I've played with? How do I store this data and broadcast changes to the other users of my application? Can I prevent multiple users from accidentally modifying the same object? My application seems to disappear behind a curtain of challenges until I discover that the Connected Data Objects (CDO) framework provides me with a sophisticated platform for the technical aspects of my model.
- In this presentation I'll tell you how best to employ the runtime aspects of these frameworks to build a scalable, transactional and distributed application for your modeled data with little more than a mouse click.    
- stepper@esc-net.de
- http://thegordian.blogspot.com
- Storage Layer - Resource Set - 
- PropertyChangeSupport
- cool demo effect where he faked drawing a wire diagram using a webcam.

Lifecycle Integration â€“ The secret sauce of ALM success
-------------------------------------------------------
- For many businesses software enables innovation, increased customer intimacy, and better decision making. This means that software delivery is transitioning from a support process to a key business process. One that embraces the speed that comes with developer autonomy while enabling the organization to manage an end-to-end lifecycle. Our new look at ALM offers a business process focus, allowing the practice of software delivery to be managed holistically, from business analysis to DevOps. But, for many organizations there is a disconnect between ALM and both technology innovation of mobile, and cloud and the process change of Agile, Mobile and PaaS. In this talk CEO and Founder of Tasktop Mik Kersten and Chief Product Officer, and former Forrester ALM Analyst Dave West discuss how integration is changing the face of ALM and how Agile practices and the DevOps movement is helping that change.
- @davidjwest @tasktop
- ALM - application lifecycle management
- has not been very successfully
- was at Rational, but could never get massive adoption
- Tasktop - Lifecycle integration
- Switzerland of ALM
- OEMs - CA is included
- connect the world of software delivery
- 30-70% of software projects fail (ontime/on budget/with define functionality)
- silo tools disconnect between the tools
- OEM - CA.. how does this affect the developers
- HP-QC, has tasktop integration
- M4, new eclipse project for ALM

NASA uses Eclipse RCP application for experiments on the ISS
------------------------------------------------------------
Eclipse is going to space in 2013! The International Space Station (ISS) is used as a site for experiments; any software developed as part of these experiments has to comply with extensive and strict user interface guidelines. NASA Ames Research Center's Intelligent Robotics Group is doing 2 sets of experiments, both with astronauts using Eclipse RCP applications to remotely control robots. One experiment will control SPHERES with an Android Smartphone on the ISS; the other experiment will control a K10 rover on Earth.
This presentation will describe the experiments as well as the following information:
-Customizing the front end of the RCP applications to follow the user interface guidelines and not look like an Eclipse perspective
-Faking buttons to comply with non-standard button requirements
-Customizing log4j loggers to correctly log to the user interface as well as the file system
-Communicating over a network that can have long delays and loss of service

Modern UIs with JavaFX, OSGi, and e4 and the tooling provided by e(fx)clipse
----------------------------------------------------------------------------
Interested in a modern UI-Toolkit? If yes this session is for you!
We'll start with introducing you to JavaFX and the tooling you get for your favorite IDE and afterwards take a deep dive into all runtime technologies you get from the e(fx)clipse project.
Next we'll show you the integration into OSGi and how you can apply your e4 know-how to applications written with JavaFX instead of SWT.
We'll introduce demo applications like:
e4 multimedia app - showing animations, multi-media integration
simple ide - showing how to use JDT, Orion, OSGi and JavaFX
and discuss how those are implemented on top of technologies from various opensource projects (Eclipse Platform, Orion, e(fx)clipse).
- Tom Schindl
- @tomsontom
- EPL license
- efxclipse.org
- JavaFX 2 (animations and new feature)
- Most eclipse not need SWT
- needs tooling
    * Java/CSS/FXML (object graph)
    * expext support for fx-ant tasks
        + you can go to the app store and download the appliation
    * need to create a Java Main Class.
    * use FXML for declaritve GUI  just like android
    * integrate with CSS
    * FXGgraph 
        + JSON vs. XML
        + built using XText
        + SVG integration as FXML
            - allows for animation       
- OSGI / Orion
    - created a source code editor.
- BestSolutions.at
- jemmy for automated testing
- Jubula will provide support for automated testing.

Continousus Delivery
--------------------
- Graham Brooks / @grahamcbrooks / gbrooks@thoughworks.com
- flickr using continous development to get immediate feedback.
- "Done" - In Production
- "Product Cylce" vs. "Production Ready State" - proudction cycle constrained by managers/users
- "push by IT" vs. "pull by Manager"
- deployment pipeline provides visibility/feedback
- create a repeatable , reliable process for releaseing software
- automate almost everything
- keep everything in version contorl
- if it hurts, do it more often, and bring the pain formward
- build quality
- done means released
- eveybody is responsible for delivery
- only build binaries once
- keep you environments similar
- if anything fails, stop the line
- provide transparency to the process
- version control reference
    * burn it into the artifacts
    * tie versioning to the version control system

You're not failing fast enough
------------------------------
- Bamboo sucks (Hudson/TeamCity/Jenkin)
- terminate hung builds (build time plugin)
- automate deploys
    * need to test ui level
- Pass the artifact (what is an artifact)
- Run test in parallel
- TestNG has groups

Beyond Gerrit
-------------
-R4e provides better integration into eclipse with Gerrit