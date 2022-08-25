2013/03/25
==========

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
	* from Oraclie, update to swing
- Installation is done via oracle java library
	* There is a tutorial on JavaFX tooling for tomorrow.
- Everything is exhangeable
- Everything is a service

DS, BP, EJB, CDI, WTF!?
-----------------------

- There are a number component models available to OSGi developers; Declarative Services (DS), Blueprint (BP), Enterprise JavaBeans (EJB), Contexts and Dependency Injection (CDI). Some have their roots in Java EE, some in open source projects such as the Spring Framework, others are standards at the OSGi Alliance, and some have DNA from all three. As is often the case where there are options available, there's rarely a one-size-fits-all. The 'right' choice may depend on the type of project you're working on, the existing assets, tools and skills at your disposal, and the runtime you're looking to deploy to. This talk will provide a brief overview of the four component models listed, describe their scope of capabilities, standards coverage, tools support, and available implementations in an efforts to help OSGi users find a path to a component model best suited to their particular task.
- Which one is best to use?
- EJB suck way back then, Spring rose up 
- OSGI is about modularity (pacakge share/ implementation sharing)
- Not familiar with the component models right now.

Rapid Java application development with JRebel 
----------------------------------------------

- JRebel rose as a research project to solve the problem with redeploying the Java applications that led to enormous turnaround cycles. Java developer productivity is quite critical in the companies today and becomes more and more important with the pace of the business changes these days. The longer is the turnaround, the more room for distractions there is leading to long unintentional breaks and loss of the focus.  We will take a look at the Java ecosystem from the productivity point of view and try to find the ways around the obstacles. How long does your application takes to build? How long does your application server takes to start and deploy the application? Do you have to navigate in the application in order to see the results of your change? JRebel maps workspaces directly to the running application, and changes are instantly reflected in the UI.  In this talk we will review the technical and conceptual challenges involved in solving the turnaround issue and the options available today. We will discuss the tooling and technologies in the Java ecosystem with the respect to productivity, and also the issues involved with integrating JRebel into development cycle and the consequences the tool leads to.  JRebel integrates with OSGi runtime and therefor is eligible for Eclipse plugin development although the support is in experimental state. We will see how JRebel can be applied to support plugin.xml changes, with support for adding new UI components without having to restart the whole workbench
- 
