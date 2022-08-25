2012-07-01
==========

Add Mainframe CA31 if it does not exist
---------------------------------------

# a CA31
# PDF // to go to ISPF/PDF Primary Option Menu
# 3.4 // to to to Data Set List Utility
# for Dsname Level -> CAREL06.PUBLIC.PDS.JCL, then press enter
# it lists the datasets, go to CAREL06.PUBLIC.PDS.JCL and do a view "v" 
# go to IBatsr2Z and type "v" first to view and then "sub" on the program to run it (this submits the job), port number is able when viewing the source code


 The check to see if it is running in the gui.
 
 
 start panel use "start" command
 F9 to switch betw two panels.
 open one panel as sysview
 and the other one as job view.
 in sysview
	st to list all my jobs
	refresh (enter | ref | st) to check if the job has executing
	go to the particular job and type "l" to list the different ddnames.
	press "s" to select stdout to view the logs
	
	
 
 swap list to display all panels.
 Trying to run the intertest program all day.
I have to follow the cheat sheet.
I need access to the mainframe server before I can begin.

Use sphinx and rst to do internal documentation.
Having trouble connecting to the SCM Broker.
Error Message: Unable to log into broker cscr801
Unable to initialize CA SCM.  Please ensure that all required components are installed.

To resolve this issue, Ravish provided me a new eclipse install to try out.
eclipse4sysdump.  This got around the SCM Broker issue.

Having issues following the instructions in "How to Install Eclipse Workstation for Testingtools".
It seems out of date.

When I try to import the said projects:
	com.ca.intertest.server
	intertest
	com.ca.sysdump.misc
	com.ca.sysdump.server
	testingtools
these projects don't exist.

Spoke to Ravish.  We don't need anything in sysdump for now. All the files exist in the TestingTools directory.

# Notes

# com.ca.intertest

Contains INtertestPlugin which extends AbstractUIPlugin.

# com.ca.intertest.admin
# com.ca.intertest.admin.feature
# com.ca.intertest.batch
# com.ca.intertest.batch.feature
# com.ca.intertest.cics
# com.ca.intertest.cics.feature
# com.ca.intertest.feature
# com.ca.intertest.installshield
# com.ca.intertest.product
# com.ca.intertest.rcp

This project requires the com.ca.intertest project.
Branding of the eclipse rcp app is also done here.
In the required plugin section, there are extra plugins that I have to investigate:

* com.ca.intertest - the main plugin that I have to look at
* org.eclipse.ui.cheatsheets
* org.eclipse.ui.forms
* org.eclipse.core.resources
* org.eclipse.update.configurator
* org.eclipse.update.core
* org.eclipse.u8pdate.ui

# com.ca.intertest.rcp.feature
# com.ca.intertest.runtime.feature
# com.ca.interteset.server.console
# com.ca.intertest.tools
# com.ca.intertest.updatesite
# intertest.mainframe
# intertest.setupThe first thing you need to do is call GIS up and get access to the mainframe server.
Richa mentioned getting access to ca11,ca31,tso and tpx. To confirm that I have access, there is a 
special telnet client called QWS2370 and I was able to login properly.
I then had to speak to Jim to make sure the server was up and running.
It was not, after he started it, the status of CA11 is "available".
I'm not sure what the next step is.

Richa was able to help me out but there are some stuff she redirected me to Jim P for.
Jim P is unavailable on IM currently.
I need some documentation on the Intertest Eclipse stuff.

2012-07-16
==========

* Worked on getting internal documentation setup.  Trying to get Sphinx Python Documentation Generator to work in my development environment.  The issue I'm having is that it doesn't work well in Windows.  I've installed VirtualBox (and Ubuntu image) to overcome this problem. Having issues with downloading the packages within the Ubuntu image, so I'll try do this at home since it might be a network issue. 
* James Pointsett sent a response regarding server settings, will try it out now. The server seems to be down again. Waiting for response.  This is kind of rediculous. Just try to setup a conference call to resolve this issue. 
* Trying to get a live meeting with Jim has been unsucessful.  I guess he is super busy. Will try again tomorrow.  But this is incredible frustrating since I am still unable to get Intertest to debug a file.  I've asked Richa for assistance but she refers me back to getting the answers to Jim.
* While I'm waiting for a response from Jim, I'm just going to try to replicate the intertest application as much as possible.  I've created a new RCP application and will be adding more plugins as I go.
* What I don't get is the fact that we had to extend the AbstractUIPlugin class (Intertest Plugin). Why does that have to be done.  Can't we just add views and editors via plugin.xml? Need to figure that out.
* Going through the tutorial Eclipse Extension Points and Extension Tutorial (http://www.vogella.com/articles/EclipseExtensionPoint/article.html).  Bought the eclipse 4 book by Vogella but the kindle format was trash.  I asked to get a refund for the book and they were nice enough.  I'll try again later on tonight to get a refresher on Eclipse 4 development.

2012-07-17
==========

* Still unable to run intertest.  Sent Jim another request to have a live meeting session. For now, 
I'm not going to get to worked up in getting the intertest app started.  
* OK, I've got the debugger started.  And I have a meeting with Jim to figure out the rest of the features tide to the app.  After this I can review how the RCP does these features.
* After the live meeting, I still don't have access to some of the files and that is the reason why I can't debug. going through the feature set with Jim, intertest is a full feature debugger. Pretty awesome and everything is working.  Intertestw is able to step through the code, you can watch variables, add breakpoints and such.
*  AD1DEV.INTERTDV.DEMO.PROTSYM <-- need to add this for later.  Don't have access to the code just yet
* Here are some notes that I took during the phone meeting:
	- It's better to set up the project to just monitor one file.  What I had before what have one project monitor multiple files and that was kind of confusing.
	- Not sure if the dragging variables to the watch view is working. Highlight a storage variablG
	- the JCL file determines which program is going to run.  IN the JCL provided by JIM, the JCL file pointed to the program CAMRCOBX.  I didn't have that file in my monitor list so nothing was happening during my debug session.  I had to add it manually..
* Read through Eclipse Plug-ins book and get really familiar with it.  Need to master this document before the end of two weeks is up.

2012-07-18
==========
* Working thru Chapter 2 of Eclipse Plugins.
* I've gone up to Chapter 6 of the Eclipse Plugins book but it I need to come up for air.
* Need to do an example or something to get myself out of the rut.
* Ugh, how come I can get started on this project.

2012-07-19
==========
* Yesterday, just trying to learn more about the product.  I was thinking of doing a newsgroup reader in eclipse as an example of what I can do.
* Also decided to continue using the Helios version of Eclipse since that is the version we are using for our customers.
* Update the mainframe password to "jonel123".

2012-07-20
==========
* Ravish gave me some powerpoint files regarding mainframe 101.  Will need to review those so that I have some familiarity.
* Need to really get to know the application.  Need to spend some extra time to go over the code and coordinate with the intertest source code.
* move to a backpack.  using the computer case is hard.  I'd rather use the backpack since it is easier to carry.  I just need a gel case for the dell when I do bring it home.
* it's hard just reading a book and trying to remember it.  need to apply what I'm reading 
* trying to just work with the eclipse text editor which does not support word wrapping.  That just sucks.  Maybe, I can create a simple plugin for that.
* It's already been developed https://github.com/ahtik/eclipse-wordwrap.
I'm not sure how to improve it.  It works pretty well.  My status notes are not word wrapped.
* I haven't really made any useful progress with the plugin.  Need to concentrate on the tasks.
* Don't forget to do your timesheets.
* Can't wait to get to 5pm already.  I haven't been too productive and yet I want to go home as early as possible.  I played a bit of ping pong with Renzo to pass the time away.  
* I'll do the timesheets at 4:30pm.
* still continue with the paleo diet.  how many meals are there in a week?
7 * 3 = 21 meals. no croutons on the salad and I have 4 meals covered. 

2012-07-23
==========

* Need to find a sample project that I can sink my teeth into to learn more about Eclipse programming.
* I'm just going to play around with a simple HelloWorld application.  It makes it easier for me to muck around with the functionality.  If I want to get more focused on an application, I can do that as well. 
* Learning the Eclipse's Commands API is more complicated than I thought.  I'm not sure why I"m not able to open the Favorites view via a Menu Command.
* This afternoon, I played basketball instead of doing the lunch workout series.  I think that was a mistake since I didn't get the cardio that I wanted.  Next time, just do the lunch series. And play basketball in the morning.
* Ok, the day is almost done.  I manage to get a close view of commands.

2012-07-24
==========

* work on interacting with the views and models today with regards to eclipse.  Updating the view based on model changes.
* created a simple rcp application.  now it's time to create a view.
* I know how to add the newly created view into the rcp app.. Need to add it to perspective.java
* Just finished working out and I feel great. I did some cardio during th eaerobic class and afterwards played a little bit of basketball. I feel great.  Working out in the afternoon is definitely better for me than in the morning. I'll do this instead.  How to be more efficient 
	- leave my sports shoes at the office and my shower stuff so I don't have to go back and forth. 
	- In the morning, I just need to prepare my workout clothes.  That should make what I carry every morning much lighter.
	- this also means, I can spend more time with the kids. I can do stuff with the kids in the morning.
* man, I"m getting so many business ideas in my head. Must be that blood rushing up my head.
* The next thing I have to do is tie my view to a model.

2012-07-25
==========

* continue to work on models and views
* get my access going on.
* Munish showed my the TPX.  Still so complicated and getting lost all around.I need to be more verse with the telnet client.  I still don't have the right access. That's why I talked to Scott and he mentioned that I delete my id and recreate it again.
* Notch programs in Eclipse on Windows.  I should just do the same thing.  Just try to follow Notch and see what he does. He is able to create a million dollar company with his game.  And his only tools were Java.
* Just focus on Java as the only language that you know.  That way you can become really fast with it.
* I still don't have access to Intertest.  This is such a pain in the ass.
* I've got a lot of hobbies that I'm thinking of.  Photography, Java Game Programming, Property Management Company. A lot of stuff to do. When do I have the time and energy to do all this tasks.  I sure hope I can do all this stuff while I'm at home.
* Join the Java4k contest to create a game.
* Get a good Java game programming book. SomethingG easy and light.

2012-07-26
==========

* played bball in the morning again. it feels good after the game.
* I'll be doing the fitness classes later this afternoon thought.  Get some more exercise.
* And then on Friday, I just relax and play racquetball with friends.
* Filled out Benefits sheet.  Not much benefits.  We'll try again when out third daughter is born.
* Work on updating the view again.
* Get a property editor where I can add more people.
* played bball in the afternoon and did some cardio.  Now I'm exhausted. 
* man, my feet are so sore.  I"m wearing my NB running shoes to fight the pain.
* It's 3:30pm.  I want to go home and eat some sushi.
* I'll focus my evenings on creating a android game.
	- Lode Runner
	- Ancient Art of War
* see if I can make any money in the android market.
* Am I super competitive at bball? I've got to become a better passer.  Become a better bball player here in CA. I've got to improve me game.  Get my 3pt shot up.  Maybe I need goggles.
* ok, i willo focus my attention to creating games on the android platform. 
* ask my friends to buy from me as well.
* so let me see.  I spent about 4 hours playing sports today and about 6 hours trying to look busy, yeesh.
* I'm going to focus on doing the java androd game at home.  I'll work on it in the mornings.  5am to 7am. 2 hours everyday to work on my pasttime. 

2012-07-27
==========

* focus on the view again and changing the properties.
* Luisa is going to invest in real estate as well.  It's a safe bet but I don't see my hsbc account has Geen credited 
with salary.
* ohh, boy we won't have access to watch the summer games on TV.  
* Luisa is a good friend to have since we share the same interest.
	- real estate investing
* I've got a morning habit now of drinking jasmine green tea and listening to wnyc.org for easy online listening.
* as far as RB tonight, there is no reason why we can't win tonight.  i'm fresh ( no sports today), i'll buy some stuff to help with my game (anti-fog, headband).  it's time to win this one.
* Read more about Eclipse Modeling Framework
* Went to Pizza Place for lunch.  I don't think I want to go there again.  They were so mean.
* What happened to my startup?  I have to start creating games.
* Stop by Dix Sporting Goods and buy headbands and anti-fogging for goggles.
* Need to start my blogging empire this weekend.
* I need to focus on something or else I'll go crazy.
* Sell the property and go with the Jacksonville one. Got to buy more properties in Jacksonville. If I have three more, then I will be set. 
* I need to read up on Eclipse.  Need to write a book about it.
* Restructure Text would be great.  
* Didn't I jsut say how much I can't get out of here.
* Need to fill in my timesheets today.

2012-07-30
==========

* need to join the status meeting
* got here at around 8:45am and it's still alright.  Not a lot of people here in the morning.
* scott will be arriving on vacation on August 8, so there is still a lot of time to learn things.
* got to freshen up on the eclipse plugin tool.
* drink some jasmine tea in the morning.
* tried joining in for the status meeting today.  I guess it was cancelled.  Will talk to Manish to find out.
* Meeting with Maureen this afternoon at 2pm.
* Let's see if Therese likes the school.
* The LodeRunner project is on. 
* I watched too much TV on the weekends. Watch TV on Sunday mornings when the kids are still sleeping.  That's a good time to watch TV.
* Get a list of shows that I want to watch.
	- Louie
	- Newsroom
	- Breaking Bad
        - Glee Project
	- Find out someother good series.
	- Get the movies from the library instead of downloading it online.
* The Olympic Flame must be one at all times in the Olympics.
* Why did I expect Therese to arrive on time.  She is always late.
	- it's hard to be on time when you have to bring the kids.
* Just visited the CDC and it is impressive.  It's got everything you could possibly want.  I want to enroll Sophia in this school. I want Sophia to have the best education ever.
* Oh boy, it's almost 5pm.  It's 4:22 and I haven't done much work.

2012-07-31
==========

* Played bball in the morning and it felt good.  I feel that my heart is adjusting to the level of play. I'm getting my breath now.
* I"ll do some cardio in the afternoon but I won't play bball.  I need to rest up.
* When the checks are deposited, I have money to make a bid on the apartment.  Therese 
* work on an eclipse product that craetes a debugger.
* get better at writing java eclipse rcp.
* You need a parsser and lexer generator.  Quite a few are avaiable, such as Flex/Yacc, JavaCC, Anagram, and ANTLR.
* When trying to install the RTC plugin, I get this error:

An error occurred while collecting items to be installed
session context was:(profile=epp.package.rcp, phase=org.eclipse.equinox.internal.p2.engine.phases.Collect, operand=, action=).
Unable to read repository at http://isl-ivy.ca.com/eclipse-plugins/rtc-3.0.1.1/features/com.ibm.rational.connector.cq.common.rtc.feature_3.0.2.v20110902_0314.jar.
Read timed out

Tried the install again and it works.

* Trying to get access to the MF intertest project in RTC.
* Melissa Holleman is helping me get access to this.
* What's the next thing that I should be doing.. 
* Maybe create a parser / lexer for the different languages.
* Here are the tasks:


* As an InterTest GUI user, I need the ability to import C listings into my project.
* As an InterTest QA Engineer, I need to set up an environment for testing the Eclipse plugin.
	- I'm willing to become the guinea pig to test for this.  As a new hire, I've had all sorts of trouble getting Intertest as an Eclipse plugin to work successfully.  Issues I have had to deal with include MainFrame permission issues and missing files needed in the workspace for the RCP to run.
	
* Worked with Munish to get his environment up but it is still not working.
	- Is there a corrupt file still, I don't think so.
	- I will try to replicate it tonight,
	- Try to figure out if I had to run a build.  But that shouldn't matter since it's an exact copy of what I'm doing.
	
2012-08-01
==========

* James Pointsett is PITA.  He seems to be sending out some rude emails. Are the PSE stuck up for some reason.
* Need to figure out why it's not working out for Munish.
* Ordered a headset today. I hope it's the right one.
* One of the task today is to figure out how to get the cisco softphone working.  So that I can use it during the meeting or when I am working from home.
* Talk to Mike regarding enrolling me in Boot Camp.  I feel so lost when people talk about the MF.
* Bring my Moleskine during the meeting to discuss, it's got my notes.
* Ok, I'm ready for the meeting with Mike.
* Ask for an instock monitor.
* Figure out what a DDS is.
* Damn, this kind of sucks waiting for 1pm.. I want the meeting to get started already.
* Create the Lode Runner app using the book found.
* Create the Lode Runner app using the Android book provided.
* What does it mean: "We created the workflow" regarding starting up Virtual Instance in the cloud.
* Ok, Just had a meeting with Mike.  My statement about me having three daughters didn't go over so well.  
* Damn, everybody has a click that they belong to.  Not sure where I belong to.
* THe meeting with Mike, we created the stories that needed to happen.
* I can do Eclipse plugins myself, I just have to be really good at it.

Some notes on Syntax Coloring:

Editor must override the getPresentationReconciler().
In the current codebase: ASM, COBOL and PLI implements this
These programs have a classes that extends AsmScanner.  The Scanner constructors are provided with Reserved words regex values for seperators.
        - AsmScanner
        - CobolScanner
        - PLIScanner
I don't see anywhere where it has anything to do with the protsym file.

Outline

- http://wiki.eclipse.org/FAQ_How_do_I_create_an_Outline_view_for_my_own_language_editor%3F
- needs IContentOutlinePage adapter which requires a ContentProvider, LabelProvider
- I looked at the source code and it's not easily understandable by me, need more research.
- They have a class called OutlinePage

2012-08-02
==========

- Left my keys at home.  PITA since I had to have Mike DuBois sign me in.
- I also played bball so I borrowed Ravish's key card.  Gotta thank him for that.
- Had the status meeting to discuss what I need to do for the rest of the month. 
- Munish was pretty anxious and got more of the task that I was assigned to do.
- I can't seem to access RTC online in the web. Freaking slow.
- Munish is going to take care of the server setup.  This will allow me to connect to the servers properly.
- created tasks for the story that I own.
- I"m not sure if that is it.
- Just figure out how that works.
- It's taking forever to update my local repository.

2012-08-03
==========

- SCM works properly with no issues.
- just trying to figure out which package it goes into.
- need to ask Vijay if he needs assistance  regarding Story 200.  Do we need to talk to Richa about how the package is delivered.
- may change the dom parser into the sax parser
- the quick brown fox jumped over the lazy dog.
- create a new junit test case for all the items that I work on.
- Munish said it will be Tuesday for the server to be up.
- Maybe I can use a temporary server from QA?
- Start using this machine as my main machine.  That way, I can get a better feel on the windows envinroment.
- For Monday's meeting, I need to mention that I need a server to connect to, to actually do a test.  Waiting up for Munish, it will take until Tuesday.  As a backup though, is there an alternative.
- provide a mechanism to get a sample of a protsym file.
- OK, I forgot to buy the other connector.  Just ordered it from CDW.  I should have bought the bundle first.  Yeesh.  That's resolved now and it's on order.
- I created the test cases, now I just have to deliver how it works.
- Am I replacing Charles Godwin as the main Eclipse programmer?  I sure hope so.  Paul Hurley is more of a mainframe guy so I don't think I am replacing him.
- Need to be familiar with the ByteBuffer class.  This is how the MemberInfo instance is constructed.
- Leave the house if not going to play basketball at 7:30am.  This allows me to be the first one in the office for the team. I'd leave early if there was no work to do.

2012-08-06
==========

++++++
Summary
I'm working on Story 899: As an INterTest GUI user, I need to be able to list the C members in my PROTSYM file.
Task Done:
* Isolated the files associated with being able to list the C members.
Road Block:
* Need to have a Intertest Server to connect to debug the Protsym file in Eclipse.
Currently working:
* While I wait for the server setup, trying to create test cases for the changes that needs to be made.
++++++

* looking into the dom parser into the sax parser
* create junit test case for all items worked on
* during status, mention the roadblock of connecting to server
* no need to buy pants for Friday.  I will just wear the same thing all the time.  Just wear dress pants and dress shirts.  This makes my life easier.  There is less decision making in the process.
* need the ability to write stories in the backlog.
	- wrote an email to Scott and Melissa about it.
* writing the test cases for the changes needed.

Status Meeting Notes:

What they have been working on since the last standup
What they intend to do today
What obstracles are standing in their way

* I need to focus on my Bball game.  And since I can't play in the morning.  I'll just play bball in the afternoon.  Maybe just do the cardio class on Wednesday.
* Can I create a test server on my local system.
* Decided not to play sports for the next two weeks.  Got to give my foot a rest.  AFter that, if the error occurs again, talk to an pediatrist.
* Need a test fixture to get the protsym file correctly.
* Use Mockito as my mocking utility.
* Trying to figure out how to integrate Mockito into y testing.
* Mockito allows me to create in instance of an interface and have it return whatever I want.  Do I really want this when testing eclipse?

2012-08-07
==========

I'm still on Story 899: List the C members in PROTSYM file.  I'm stilll trying to create a test case.
Again, the only obstacle I have is getting a Intertest Server.

* Go to a Baseball Game today
* DONE --> For the bugs that I find, create a task in the MISC Story.
* Using Find Bugs for static analysis.
* During the status meeting, I can probably connect using Madhuri's server
* I think it is just a matter of understanding the protsym file properly.
* Madhuri is taking a while to respond back.
* LoadListing.java is the main star of the program which loads the listing file.
    - need to understand this file and figure out the parts of the listing file.
    - set a debug statement at LoadListing.java first.  This will be my entry point to the code.
    - what does CVMO or CVMI mean?  The documentation sucks.
* So no paychecks this week.  Next week will be a big one. I needs to be able to connect to the server and get the member info.
    - that's a lot of setup code that needs to be done.
* No more bball for the next two weeks.  Need to rest my foot.
* How come I failed in Adeptra.  Was it b/c the location was too far away? I hope that was the case.  I didn't give up. I just didn't have the proper training.
* Playing for the first time in the game room.

     
2012-08-08
==========

* Jim mentioned to continue to work on setting up the Dev Environment.
* Asking Vijay if the server is down.

Installation Guide Doc ID: B027402E
Some deliverables in this bookshelf have restricted delivery. To view or download these guides, you must sign on with an email address associated with a CA product site ID. Contact a systems administrator at your site if you are unsure whether your email address meets this requirement. After signing on, follow these steps:
1. Copy the Doc ID number and minimize the bookshelf. 
2. Click the Documentation link on the main CA Support Online page.
3. Paste the Doc ID into the Quick Search field at the bottom of the Documentation page. 
4. Click Go to locate the guide.
Installation Guide sent to John Lemke


!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.479
!MESSAGE Vijay's Server CVMI Buffer 00000023:(35)
+0000 00000023 00000001 0000001B 00010023 0000C3C1 D9C5D3F0 F640FF55 586F4B67 |..................CAREL06 ...?..|
+0020 E2E933                                                                  |SZ.                             |
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.WriteOut(Connection.java:445)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:261)
    at com.ca.intertest.server.Connection.login(Connection.java:200)
    at com.ca.intertest.server.Connection.process(Connection.java:229)
    at com.ca.intertest.server.Connection.connectCmd(Connection.java:220)
    at com.ca.intertest.server.Connection.connect(Connection.java:147)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:741)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.480
!MESSAGE Vijay's Server CVMO Buffer 00000034:(52)
+0000 00000034 00000001 0000002C 00010012 00000001 00000000 001AE285 83A49989 |..........................Securi|
+0020 A3A84093 96879695 40A2A483 8385A2A2 86A49300                            |ty logon successful.            |
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.ReadIn(Connection.java:418)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:265)
    at com.ca.intertest.server.Connection.login(Connection.java:200)
    at com.ca.intertest.server.Connection.process(Connection.java:229)
    at com.ca.intertest.server.Connection.connectCmd(Connection.java:220)
    at com.ca.intertest.server.Connection.connect(Connection.java:147)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:741)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.490
!MESSAGE Status:0 Message #:1(1) Security logon successful

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.500
!MESSAGE Vijay's Server CVMI Buffer 00000008:(8)
+0000 00000008 00000000                                                       |........                        |
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.WriteOut(Connection.java:445)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:261)
    at com.ca.intertest.server.Connection.process(Connection.java:235)
    at com.ca.intertest.server.Connection.connectCmd(Connection.java:220)
    at com.ca.intertest.server.Connection.connect(Connection.java:147)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:741)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.500
!MESSAGE Vijay's Server CVMO Buffer 00000008:(8)
+0000 00000008 00000000                                                       |........                        |
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.ReadIn(Connection.java:418)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:265)
    at com.ca.intertest.server.Connection.process(Connection.java:235)
    at com.ca.intertest.server.Connection.connectCmd(Connection.java:220)
    at com.ca.intertest.server.Connection.connect(Connection.java:147)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:741)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.500
!MESSAGE Vijay's Server CVMI Buffer 0000003E:(62)
+0000 0000003E 00000001 00000036 0001001C 0000C1C4 F1C4C5E5 4BC9D5E3 C5D9E3C4 |..................AD1DEV.INTERTD|
+0020 E54BC4C5 D4D64BD7 D9D6E3E2 E8D44040 40404040 40404040 40404040 4040     |V.DEMO.PROTSYM                  |
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.WriteOut(Connection.java:445)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:261)
    at com.ca.intertest.server.Connection.process(Connection.java:235)
    at com.ca.intertest.server.FileConnection.getMembers(FileConnection.java:76)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:742)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

!ENTRY com.ca.intertest 1 0 2012-08-08 14:18:07.760
!MESSAGE Vijay's Server CVMO Buffer 00000040:(64)
+0000 00000040 00000001 00000038 0001001C 0000C1C4 F1C4C5E5 4BC9D5E3 C5D9E3C4 |... ..............AD1DEV.INTERTD|
+0020 E54BC4C5 D4D64BD7 D9D6E3E2 E8D44040 40404040 40404040 40404040 40400000 |V.DEMO.PROTSYM                ..|
!STACK 0
java.lang.Throwable
    at com.ca.intertest.server.Connection.ReadIn(Connection.java:418)
    at com.ca.intertest.server.Connection.processRaw(Connection.java:265)
    at com.ca.intertest.server.Connection.process(Connection.java:235)
    at com.ca.intertest.server.FileConnection.getMembers(FileConnection.java:76)
    at com.ca.intertest.wizards.ImportListingPage$loadList.run(ImportListingPage.java:742)
    at com.ca.intertest.wizards.ImportListingPage$3.widgetSelected(ImportListingPage.java:385)
    at com.ca.intertest.ui.actions.ImportAction.run(ImportAction.java:58)
    at com.ca.intertest.rcp.Application.start(Application.java:48)

I'm unavailble to import the PROTYSYM file again.  Maybe there is a 30 minute lock or something.

What does ProtsymMessage mean, who do I speak to about understanding the ProtsymMessage?
ProtsymMessage[28:0]  00 00 00 38 00 01 00 1C 00 00 C1 C4 F1 C4 C5 E5 4B C9 D5 E3 C5 D9 E3 C4 E5 4B C4 C5 D4 D6 4B D7 D9 D6 E3 E2 E8 D4 40 40 40 40 40 40 40 40 40 40 40 40 40 40 40 40 00 00

2012-08-09
==========

* Meeting with Charles Godwin about building install for Intertest V9
* Had the status meeting and mentioned to Scott what I did in the coffee room.
* Working with Vijay and found out that when importing a C file, it would not allow me to import the protsym file again.
* Can't import C file for now.
* Maybe go to the doctor and inquire about my foot.

LanguageAttribute.setValue
IAttribute.COBOL = 0x20
IAttribute.ASM = 0x10
IAttribute.PLI = 0x80
IAttribute.C = 0xa0

value as parameter = "10"
this.string = "ASM"

value as parameter = "a0"
this.string = "C"

value as parameter = "20"
this.string "COBOL"

value as parameter = "80"
this.string = "PL/I"

The files to modify

com.ca.intertest --> ImportListingPage
    - Do we need to add a member_c variable for the ViewLabelProvider class.
    

com.ca.intertest.tools --> 
    - IAttribute
        * need to add - public static final int C = 0xa0;
    - XMLConstants
        * need to add - public static final String C = "C";
    - LanguageAttribute
        * inside setValue(String value): 
            int mask = IAttribute.COBOL | IAttribute.ASM | IAttribute.PL1 | IAttribute.C;
                            break;
            case IAttribute.C:
                this.string = XMLConstants.C;
                break;
                
{gt_m_xa=0,  time=2009/04/02 23:19:00, gt_m_lang=10, name=ASBIN25, gt_m_avr=R6.0}
{gt_m_xa=0,  time=2009/04/02 23:19:00, gt_m_lang=10, name=AC37IN25, gt_m_avr=R6.0}
{gt_m_xa=0,  time=2009/04/02 23:19:00, gt_m_lang=10, name=AC37IN25, gt_m_avr=R6.0}
{gt_m_xa=0,  time=2012/07/05 11:40:59, gt_m_lang=a0, name=ADDN}
{gt_m_xa=0,  time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}
{gt_m_xa=40, time=2009/04/02 23:28:44, gt_m_lang=20, name=C370DEML, gt_m_cty=20}
{gt_m_xa=0,  time=2009/04/03 06:56:57, gt_m_lang=80, name=PL1DEML, gt_m_plc=3.20}
{gt_m_xa=0,  time=2009/04/03 06:58:25, gt_m_lang=80, name=PL1DEMO, gt_m_plc=3.20}

2012-08-10
==========

* let's wrap up 899 already.  want to get this done by Friday.

version: [-39, -10, 75, -16] --> "R6.0"
version: [34, 0, 0, 0]
version: [1, 0, 0, 0]
version: [21, 0, 0, 0]
version: [21, 0, 0, 0]
version: [21, 0, 0, 0]
version: [21, 0, 0, 0]
version: [21, 0, 0, 0]
version: [32, 0, 0, 0]
version: [32, 0, 0, 0]
version: [32, 0, 0, 0]
version: [32, 0, 0, 0]
version: [12, 0, 0, 0]
version: [12, 0, 0, 0]
version: [12, 0, 0, 0]
version: [12, 0, 0, 0]
version: [12, 0, 0, 0]
version: [32, 0, 0, 0]
version: [20, 0, 0, 0]
version: [20, 0, 0, 0]
version: [20, 0, 0, 0]
version: [20, 0, 0, 0]
version: [20, 0, 0, 0]
version: [22, 0, 0, 0]
version: [22, 0, 0, 0]
version: [22, 0, 0, 0]
version: [22, 0, 0, 0]
version: [22, 0, 0, 0]
version: [34, 0, 0, 0]
version: [-39, -11, 75, -16]
version: [1, 0, 0, 0]
version: [50, 12, 0, 0]
version: [50, 12, 0, 0]
version: [50, 12, 0, 0]
version: [50, 12, 0, 0]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [-39, -11, 75, -16]
version: [50, 12, 0, 0]
version: [-39, -11, 75, -16]
++++++++++++++



 
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 16 
version: [-39, -10, 75, -16] langFlag: 18
version: [-39, -10, 75, -16] langFlag: 16
version: [34, 0, 0, 0] langFlag: 96
version: [-39, -10, 75, -16] langFlag: 16
version: [1, 0, 0, 0] langFlag: 32
version: [21, 0, 0, 0] langFlag: 102
version: [21, 0, 0, 0] langFlag: 98
version: [21, 0, 0, 0] langFlag: 98
version: [21, 0, 0, 0] langFlag: 102
version: [21, 0, 0, 0] langFlag: 98
version: [32, 0, 0, 0] langFlag: 102
version: [32, 0, 0, 0] langFlag: 98
version: [32, 0, 0, 0] langFlag: 102
version: [32, 0, 0, 0] langFlag: 98
version: [12, 0, 0, 0] langFlag: 102
version: [12, 0, 0, 0] langFlag: 98
version: [12, 0, 0, 0] langFlag: 98
version: [12, 0, 0, 0] langFlag: 102
version: [12, 0, 0, 0] langFlag: 98
version: [32, 0, 0, 0] langFlag: 98
version: [20, 0, 0, 0] langFlag: 102
version: [20, 0, 0, 0] langFlag: 98
version: [20, 0, 0, 0] langFlag: 98
version: [20, 0, 0, 0] langFlag: 102
version: [20, 0, 0, 0] langFlag: 98
version: [22, 0, 0, 0] langFlag: 102
version: [22, 0, 0, 0] langFlag: 98
version: [22, 0, 0, 0] langFlag: 98
version: [22, 0, 0, 0] langFlag: 102
version: [22, 0, 0, 0] langFlag: 98
version: [34, 0, 0, 0] langFlag: 98
version: [-39, -11, 75, -16] langFlag: 16
version: [1, 0, 0, 0] langFlag: 32
version: [50, 12, 0, 0] langFlag: -114
version: [50, 12, 0, 0] langFlag: -118
version: [50, 12, 0, 0] langFlag: -118
version: [50, 12, 0, 0] langFlag: -118
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [-39, -11, 75, -16] langFlag: 18
version: [50, 12, 0, 0] langFlag: -118
version: [-39, -11, 75, -16] langFlag: 18

2012-08-13
==========

* finish up import protsym issue
* this is a new week.  focus on getting my story completed.
PL/1
String plc = member.getAttribute("gt_m_plc"); --> {gt_m_xa=0, time=2009/04/03 06:56:57, gt_m_lang=80, name=PL1DEML, gt_m_plc=3.20}
text = member_pl1.toString(plc); --> 3.20 
* Committed my changes regarding the programming language in the import protsym dialog box.
* spoke to Jim, the values for the versionstring coming from the server is null, need to fill those values in from the server. I'm waiting for this.
    - was trying to debug for the longest time but it turns out the protsym file needs to be filled in.

2012-08-14
==========

* don't forget to mention the issue about the missing menu item.  Munish should mention this.
* for Story 900, 
    - Member.java - look into constructor method Member(ProtsymMessage, Memberinfo)
    - BuildListing.java - build() // to parseC program
    - MemberInfo.java - add static int C = 0xa0;
    - created parseC class just so I wouldn't get any error.
* spoke to Jim Pointsett, the version info is still not being set.  He told me to wait on it.
* Story 900: As an InterTest GUI user, I need to be able to import C listings into my projects.
    -I should be able to select a C listing from a PROTSYM member list and have that listing downloaded and imported into my selected project.
    -I should be able to see that listing in the InterTest debug view as a monitored or unmonitored program.
* inside the run method of LoadListing, the gt_m_lang variable is a0.  so it is working when it goes into this method.

{gt_m_xa=0, time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}
{gt_m_xa=0, time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}
{gt_m_xa=0, time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}
{gt_m_xa=0, time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}

RMBRMessage[30:1]  00 00 01 EC 00 01 00 1E 00 01 C1 C4 C4 D7 D6 E2 40 40 A0 00 00 00 00 00 00 1D 00 00 00 1D 00 96 99 85 83 96 99 84 A2 7E F1 F5 F7 F6 5E 87 A3 6D 94 6D 93 81 95 87 7E F8 F0 5E 87 A3 6D 94 6D 97 93 83 7E F0 4B F0 F0 5E 87 A3 6D 94 6D A3 89 94 7E F1 F3 F3 F2 F4 F0 5E 87 A3 6D 94 6D 99 85 6D 7E F3 F3 5E A5 85 99 A2 89 96 95 7E F0 4B F0 F0 5E 87 A3 6D 94 6D 86 93 87 7E 81 F0 5E 87 A3 6D 94 6D 91 A4 93 7E F1 F0 F1 F8 F8 5E 87 A3 6D 94 6D A7 81 7E F0 5E 84 A2 95 7E C1 C4 F1 C4 C5 E5 4B C9 D5 E3 C5 D9 E3 C4 E5 4B C4 C5 D4 D6 4B D7 D9 D6 E3 E2 E8 D4 04 00 4C 61 81 61 A5 89 91 84 81 F0 F1 61 89 95 A3 85 99 A3 85 A2 A3 61 C9 95 A3 C2 81 A3 A2 85 99 A5 85 99 61 A6 96 99 92 61 C1 C4 C4 D7 D6 E2 6D D3 89 A2 A3 89 95 87 F7 F7 F2 F1 F7 F7 F7 F9 F0 F0 F7 F5 F3 F3 F1 F3 F4 F4 F1 4B A3 A7 A3 04 00 49 61 81 61 A5 89 91 84 81 F0 F1 61 89 95 A3 85 99 A3 85 A2 A3 61 C9 95 A3 C2 81 A3 A2 85 99 A5 85 99 61 A6 96 99 92 61 C1 C4 C4 D7 D6 E2 6D E5 81 99 A2 F3 F4 F7 F1 F4 F1 F6 F2 F8 F0 F4 F2 F6 F8 F4 F9 F1 F6 F4 4B A3 A7 A3 04 00 4B 61 81 61 A5 89 91 84 81 F0 F1 61 89 95 A3 85 99 A3 85 A2 A3 61 C9 95 A3 C2 81 A3 A2 85 99 A5 85 99 61 A6 96 99 92 61 C1 C4 C4 D7 D6 E2 6D D3 81 82 85 93 A2 F7 F4 F3 F6 F1 F1 F7 F1 F2 F7 F2 F6 F0 F7 F4 F2 F5 F9 F6 4B A3 A7 A3 04 00 4A 61 81 61 A5 89 91 84 81 F0 F1 61 89 95 A3 85 99 A3 85 A2 A3 61 C9 95 A3 C2 81 A3 A2 85 99 A5 85 99 61 A6 96 99 92 61 C1 C4 C4 D7 D6 E2 6D E5 85 99 82 A2 F6 F3 F7 F2 F5 F3 F7 F7 F9 F2 F8 F7 F9 F0 F3 F6 F7 F6 F3 4B 82 89 95

Tye PROTSYM file containing the symbolics for this program is not currently defined to this session.
Symbolic information for ADDPOS was retrieved from * which is not currently defined to this session.  
This can cause problems when you initiate your debug session.

language: a0
name: ADDPOS
key: gt_m_xa value: 0
key: time value: 1999/12/29 23:59:59
key: gt_m_re_ value: 33
key: gt_m_lang value: 80
key: dsn value: AD1DEV.INTERTDV.DEMO.PROTSYM
key: gt_m_flg value: a0
key: records value: 1576
key: gt_m_tim value: 133240
key: gt_m_plc value: 0.00
key: gt_m_jul value: 10188
key: version value: 0.00

Member.java has something to do regarding setting the language info.  Just need to create that.

2012-08-15
==========
* game room is open from 11-4pm today.  Snacks will be served.
[com.ca.intertest="true", dsn="AD1DEV.INTERTDV.DEMO.PROTSYM", gt_m_flg="a0", gt_m_jul="10188", gt_m_lang="80", gt_m_plc="0.00", gt_m_re_="33", gt_m_tim="133240", gt_m_xa="0", name="ADDPOS", records="1576", server="Vijay's Server", time="2010/07/07 13:32:40", version="0.00"]
{gt_m_xa=0, time=2010/07/07 09:32:40, gt_m_lang=a0, name=ADDPOS}
* need to be alone for a while.  turned off email and im.  need to work and get shit done.  figure out the issue regarding importing C programs.
* decorator.java determines what image to use.
* inside LoadListing constructor:
    - member variable contains gt_m_lang = 0xa0 <-- so this value is there

2012-08-16
==========
* no more joking.  let' finish story 900 and 901 today
* Vijay's Server CA31 19190 

--- Member Variable Being Modified --
key: gt_m_xa value: 0 original value: 0
--- Member Variable Being Modified --
key: time value: 1999/12/29 23:59:59 original value: 2009/04/03 06:55:51
--- Member Variable Being Modified --
--- Member Variable Being Modified --
key: gt_m_lang value: 80 original value: 80
--- Member Variable Being Modified --
--- Member Variable Being Modified --
--- Member Variable Being Modified --
--- Member Variable Being Modified --
--- Member Variable Being Modified --
key: gt_m_plc value: 3.20 original value: 3.20
--- Member Variable Being Modified --
--- Member Variable Being Modified --

* Ok, story 900/901 is done. finally.
* Feels good to finally complete all the stories.
* Tomorrow, work on Documentation and look into deploying to QA.
* played ping pong and foosball today.  had a lot of fun

2012-08-17
==========
- talk to Jim and see if we can have a code review.
- how do you add the CA Conferencing Center into Live Meeting 
- Munish was able to resolve the gt_m_lang issue via the protsym file.
- he is working on the version option
- hopefully he gets that resolved soon.
- Jim mentioned that the version string is there.
    * the problem is that the version string is incorrectly parsed by the server.
    
2012-08-20
==========

* create new workspace usig InterTest 9.0
    - now that we have a new branch, we should do a sanity check to make sure there are no issues.  
    - for example, "create intertest batch" menu was not available before. makes me wonder what else
    - complete
* get the build machie MSI resolved today (from the status meeting)
    - spoke to Charles Godwyn and he will take care of creating an environent to create the build.
    - complete
* Access to LOD machine
    - godch01-VM17547 (10.130.230.195)
    - machine is not a member of the TANT-A01 domain, when logging in use "\"
    - I'm using the password Mon123Day
* Need to review the C program.  Hopefully the version string gets resolved today
    - right now I'm stuck on getting the tomcat server out as I can't mount, GIS Ticket already created
    - Munish is working this
    - Munish is WFH today.  Can't bug him about questions regarding TPX. (Do it tomorrow then)
* Continue to work on the documentation
    - need to get this down today.
    - add a lot of screens captures.  the person is not suppose to know how to use the product.
    - we only need one Detailed Design specifications (DDS).  In the Preface, it says:
    - There can be many DDSs for each project, one for each major feature described in the Product Requirement Deocument (PRD).
    - The first draft of the DDS is complete.  It's just a bunch of screenshots pasted.
* 11:45 leave for the gym.  Go get a workout, need to exercise
    - went to the cardio class and did not play basketball.
    - i still feel my feet hurting. not the same as before.
    - i need to weigh myself to see if I'm super heavy weight.
    - do this for tomorrow as well as it is healthy and there is not much chance of injury.
    - after working out, i ate a burger and fries.  I'm not gong to lose weight this way.
    - need to reduce my calorie intake. maybe not have lunch at all.  I think I can get away with nothing having any lunch.
    - or maybe, no lunch or just salad.  that should be my lunch.
* no croutons for my salad.  
    - karen forgot to add croutons.  now i'm a bit hungry. 
    - should i get something to eat at the cafeteria.
    - ate cheeseburger and fries for lunch and spent $6.
* "sleepwalk with me" sounds like a good movie.
    - produced by Ira Glass
    - it was discussed on Fresh Air / NPR
* Still waiting for the OKLAHOMA check for this month.  
* Ask Therese if she has inquired with the insurance company about her hearing aids.
    - we need to make sure that it is paid off by the end of the month.
* Need to figure out how to work with the tpx.  I need to figure out the output of the mainframe code and the output of the tomcat code.
* Townhall meeting tomorrow.  Don't be late for work.  The townhall is at 9 in the morning.
* Don't ask for money from investors.  Need to derisk the product.
* The idea of a web app that does scheduling.  Allows text messaging confirmation and an easy way to find an alternate.
* which webapp does restaurant people finder?
    - market it first to see if you can get some clients.
    - don't develop the product, until you have some customers.
    - market and get customers.
    - maybe it's another income source, to be able to buy a nice car and buy a new house.
    - maybe ask Luisa how to market this app.
    - I'm very intersted in this since I think it would be really useful
    - Has to be super easy to use.

2012-08-21
==========

* ask Munish how he is coming along with the C program.
* look into the java server portion of intertest.mainframe.
    - need to understand how it works.
    - at least the java portion of it.
* trying to work with Charles.  The build machine is giving me java exceptions.  
* just got vi to work with 4 spaces as the tab.
    - source $MYVIMRC
    - e $MYVIMRC
* had a townhall meeting today.
    - always think about how to patent things
    - our numbers are low for the past quarter
    - Scott always dress to casual.  Too late for me as I already bought my wardrobe
      besides, there is no thinking about what to wear.  They all match. Grey/Black
      pants with whatever dress shirts with black shoes.
* install terminal plugin for my mac computer
* Look into protocol buffers: https://developers.google.com/protocol-buffers/
* Try to stay here longer than 5pm.  You can work on other stuff that are interesting. 
    - oh wait, i have to get the bed from Luisa.
- I did some cardio.  I tried playing bball and my feet felt kind of weird so I just passed on the game.  Need to conserve and make sure I don't make it any worse.  I gotta figure out how much I weigh.  I hope I don't weigh over 220.  If that is the case, need to lose super weight.
* Cool, Munish has the server information complete.  I've made my changes to eclipse and it is reflected in the "Import Protsym Wizard".  My workspace is rebuilt to latest and everything works now.
* One question to ask during the meeting is how best to transfer a zip file from the LOD machine for QA to review.
* just figure out the best way to share the files. Does qa have a shared server I can upload the zip files to?
* ok, all the work is pretty much finished.  i guess i can go home at 5pm. do some research about other projects that seem interesting.
* ok, I"ve got some free time. Wondering what I should be looking at?

2012-08-22
==========

* what i did yesterday:
	- we are now able to provide QA with a zip file for them to test
		- using the ant build for 8.5
		- need a place where we can upload the zip file to (server)
	- munish was working on the version string from the tomcat server side, i made the changes to reflect the eclipse gui side.
	- munish was suppose to ask regarding what the version string stood for.
* what i'm going to do today
	- just do a second review of everything from DDS document to code changes
* roadblocks
	- just waiting for the tomcat server code to be completed and we are ready to go and push it to qa
* maybe work with munish side by side regarding the c code.  an extra pair of eyes doesn't hurt.  
* verify with Charles about the server side code
	- we will build the server side code and deploy it to mainframe for them to view
* need to provide QA with a zip file and the server side code for them to test the stories.
	- send them an email
	- G
	- I will be deploying it to Vijay's shared directory.
* set up my chrome bookmarks.  this is permanent.  does it sync with my other bookmarks?
	- my investment in pinboard.in may have been a waste..  chrome bookmark sync is good enough for me	
* GIS Server ticket mount point has taken more than a week. man.  
	- this has got to get done.	
* Location of PROTYSYM File: AD1DEV.INTERTDV.DEMO.PROTSYM
* The C icon and C version is not showing up properly in the new build.  This needs to be tested again.
* Just came from the gym.. Spent an hour and a half at the gym working out. Ate a chicken caesar wrap to be healthy but bought a cookie afterwards as well. yeesh.

2012-08-23
==========
* What I did yesterday:
	- worked with Munish the latter part of the day
	- submitted eclipse build to QA
	- regression test issues, Charles Godwin has fixed
* What I will do today:
	- work on the version string in C
* Roadblock:
	- None
* Vijay did some regression testing and found a few differences with the build.
	- asked Charles to take a look at it as it could just be a simple build configuration fix.
* GIS has fixed the BPX access issue.  
	- asked Munish to help me set up my environment so I can deploy my own tomcat server
* Need Munish to also help me get around the TPX screen so I can see the debug messages and submit a job.
* For debugging purposes regarding the compiler version
	- I need Munish to show me how to get this screen information:
		- From Jim: You should see a version there now. It will x’11’, x’12’, x’13’. 
		- From Jim: I know the master record has a version number in it, make sure your server steplib is using the SYMCC Q2 libraries.
			_  00000000_32A50010 8f (A.S.POIJA01) --- , @R2+0, @R6+10, XPRIVATE+150010   
			_  32A50010  8f  C1C4C4D5 40404040 A0002312 230F0093  *ADDN    .......l*     
			_  32A50020  8f  630F0013 00000040 40404040 40404000  *.......        .*     
			_  32A50030  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50040  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50050  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50060  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50070  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50080  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A50090  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500A0  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500B0  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500C0  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500D0  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500E0  8f  00000000 00000000 00000000 00000000  *................*     
			_  32A500F0  8f  00000000 00000000 00000000 00000000  *................*     
			XDC ===> L PSW;L EPSW;L REGS                                                 
		- Ask Jim what 11,12,13 represents at a string when displayed as a GUI.
* when installing the tomcat server:
	- http://usilca31.ca.com:25400/MSM/MSMMain.html#Open/tom-master-taskTree/9198
	
INTERTEST BATCH MAGN MEDIA 
	------------------------------------------------------------------------ 
	ESD PACKAGE INFORMATION 
	------------------------------------------------------------------------ 
	ESD Package location: /u/users/msmpt/PT41/msmserv/mpm/scroot/DatabaseM/CA/CA_InterTest_Batch_-_MVS/8.5/0904/INTERTEST_BATCH_MAGN_MEDIA/10_05_2012/850904EJ600.pax.Z 
	Unpaxed ESD Package prefix: /u/users/msmpt/PT41/msmserv/msm/unpaxt/MSMUnpaxTemp/CAREL06/tmp/Intbat85 
	Unzipped ESD Package HLQ: PUBLIC.MF2TC41P.P3 
	 
	------------------------------------------------------------------------ 
	INSTALLATION VARIABLES INFORMATION 
	------------------------------------------------------------------------ 
	.dddef.static.global.SMPPTS.referenceName -> (null) 
	.dddef.static.global.SMPPTS.unit -> (null) 
	.dddef.static.global.SMPPTS.volume -> (null) 
	.dddef.static.targetZone.CAIT1.SMPLTS.referenceName -> (null) 
	.dddef.static.targetZone.CAIT1.SMPLTS.unit -> (null) 
	.dddef.static.targetZone.CAIT1.SMPLTS.volume -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSCDS.referenceName -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSCDS.unit -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSCDS.volume -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSTS.referenceName -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSTS.unit -> (null) 
	.dddef.static.targetZone.CAIT1.SMPSTS.volume -> (null) 
	.dlib.AMRLIB.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AMRLIB) 
	.dlib.AMRLIB.derivedUnit -> (3390) 
	.dlib.AMRLIB.derivedVolume -> (TSU001) 
	.dlib.AMRMAC.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AMRMAC) 
	.dlib.AMRMAC.derivedUnit -> (3390) 
	.dlib.AMRMAC.derivedVolume -> (TSU001) 
	.dlib.AMRPNL.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AMRPNL) 
	.dlib.AMRPNL.derivedUnit -> (3390) 
	.dlib.AMRPNL.derivedVolume -> (TSU001) 
	.dlib.AMRSRC.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AMRSRC) 
	.dlib.AMRSRC.derivedUnit -> (3390) 
	.dlib.AMRSRC.derivedVolume -> (TSU001) 
	.dlib.AVHHFS.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AVHHFS) 
	.dlib.AVHHFS.derivedUnit -> (3390) 
	.dlib.AVHHFS.derivedVolume -> (TSU001) 
	.dlib.AVHLIB.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AVHLIB) 
	.dlib.AVHLIB.derivedUnit -> (3390) 
	.dlib.AVHLIB.derivedVolume -> (TSU001) 
	.dlib.AVHMAC.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AVHMAC) 
	.dlib.AVHMAC.derivedUnit -> (3390) 
	.dlib.AVHMAC.derivedVolume -> (TSU001) 
	.dlib.AVHSRC.derivedName -> (CAREL06.PUBLIC.INTBTSVR.AVHSRC)  

* need to work on my deploy server	
* provide a new eclipse gui distribution
* starting the tomcat server:
	1.  10 to go to CA31 (a ca31 if it doesn't exist)
	after loogging in add ca31.. then after a few enters pdf.
	2. 3.4 to go to data set list utility
	3. Dsname Level . . . CAREL06.PUBLIC.PDS.JCL
	4. view dataset (carel06.public.pds.jcl)
	5 sub IBATSR2Z
* ok, there is a discrepancy between the 8.5 and 9.0 branch.. when i try to build on the 9.0 branch, i get the error:

C:\Users\CAREL06\workspaces\intertest-90\intertest.mainframe\build server.xml:73: Could not create type ftp due to java.lang.NoClassDefFoundError: org/apache/commons/net/ftp/FTPClientConfig
* yey.. i'm able to build my server now.

2012-08-24
========== 
* Yesterday
	- Munish helped me install tomcat server
	- finally got the proper permissions from GIS to build from my local environment, i'm now able to build & deploy tomcat server
	- Submitted to QA Charle's fixes for the regression test 
* Today
	- The regression test fixes didn't seem to work so I'll investigate why and also resolve a missing icon issue that was found by Vijay
	- debug 899 on my local environment
* Roadblock
	- I need to review the code myself, but maybe on Monday we can have a powwow with Jim to iron the version string information.  If we are working together and presenting our findings, we can resolve the version string information info in no time.	 
* I'm not able to deploy and test changes to the protsym file.
	- let's start debugging and figuring out where the version information is coming from.
	
+0000 000004DC 00000001 000004D4 0001001C 0000C1C4 F1C4C5E5 4BC9D5E3 C5D9E3C4
+0020 E54BC4C5 D4D64BD7 D9D6E3E2 E8D44040 40404040 40404040 40404040 4040003B
+0040 C1C3D4E5 C9D5F2F5 12D9F64B F009093F 0031900F C1C3D6F2 C9D5F2F5 12D9F64B
+0060 F009093F 0031900F C1C3F3F7 C9D5F2F5 12D9F64B F009093F 0031900F C1C3F3F9
+0080 C9D5F2F5 12D9F64B F009093F 0031900F C1C4C4D5 40404040 A0D9F64B F012187F
+00A0 0154059F C1C4C4D7 D6E24040 A0D9F64B F010188F 0133240F C1E2C2C9 D5F2F540
+00C0 12D9F64B F009093F 0031900F C1E2D4C4 C5D4D640 12D9F64B F009093F 0032400F
+00E0 C1E2D4E3 C5E2E340 10D9F64B F012044F 0114600F C1E2D4E4 C5D4D640 12D9F64B
+0100 F009093F 0032400F C3C1C4E5 E6E2C3D2 10D9F64B F009159F 0141600F C3C1C4E5
+0120 E6E2D9E5 A0D9F64B F010118F 0131633F C3C1D3D3 C5D94040 60220000 0007233F
+0140 0120021F C3C1D4D9 C3C1C4C4 10D9F64B F011006F 0135500F C3C1D4D9 C3D6C2E7 
+0160 20010000 0011140F 0142043F C3D4E5E2 C4C5D4D3 66150000 0009093F 0032646F 
+0180 C3D4E5E2 C4C5D4D6 62150000 0009093F 0032204F C3D4E5E2 C9D5F2F5 62150000 
+01A0 0009093F 0031837F C3D4E5E2 E4C5D4D3 66150000 0009093F 0032738F C3D4E5E2
+01C0 E4C5D4D6 62150000 0009093F 0032234F C3D6C2C4 C5D4D340 66200000 0009093F
+01E0 0032528F C3D6C2C4 C5D4D640 62200000 0009093F 0032015F C3D6C2E4 C5D4D340
+0200 66200000 0009093F 0032556F C3D6C2E4 C5D4D640 62200000 0009093F 0032052F
+0220 C3D6C2F2 C4C5D4D3 660C0000 0009093F 0032614F C3D6C2F2 C4C5D4D6 620C0000
+0240 0009093F 0032120F C3D6C2F2 C9D5F2F5 620C0000 0009093F 0031827F C3D6C2F2
+0260 E4C5D4D3 660C0000 0009093F 0032628F C3D6C2F2 E4C5D4D6 620C0000 0009093F
+0280 0032139F C3E2C2C9 D5F2F540 62200000 0009093F 0031818F C3F3F7F0 C4C5D4D3
+02A0 66140000 0009093F 0032844F C3F3F7F0 C4C5D4D6 62140000 0009093F 0032254F
+02C0 C3F3F7F0 C9D5F2F5 62140000 0009093F 0031854F C3F3F7F0 E4C5D4D3 66140000
+02E0 0009093F 0032923F C3F3F7F0 E4C5D4D6 62140000 0009093F 0032312F C3F3F9F0
+0300 C4C5D4D3 66160000 0009093F 0032951F C3F3F9F0 C4C5D4D6 62160000 0009093F
+0320 0032331F C3F3F9F0 C9D5F2F5 62160000 0009093F 0031909F C3F3F9F0 E4C5D4D3 
+0340 66160000 0009093F 0033237F C3F3F9F0 E4C5D4D6 62160000 0009093F 0032349F 
+0360 C4C1E3C1 C2E3C3C8 62220000 0008098F 0135925F D4C5D4E3 C5E2E340 10D9F54B 
+0380 F007310F 0101900F D5C5E6D5 C1D4C540 20010000 0011140F 0142043F D7D3F1C4 
+03A0 C5D4D340 8E320C00 0009093F 0105657F D7D3F1C4 C5D4D640 8A320C00 0009093F 
+03C0 0105825F D7D3F1E4 C5D4D340 8A320C00 0009093F 0105633F D7D3F1E4 C5D4D640 
+03E0 8A320C00 0009093F 0105746F D7D9D6E3 C3C9F6F2 12D9F54B F006199F 0171500F 
+0400 D7D9D6E3 C3C9F6F3 12D9F54B F006145F 0125300F D7D9D6E3 C3C9F6F4 12D9F54B 
+0420 F006333F 0160100F D7D9D6E3 C3C9F6F5 12D9F54B F006333F 0153100F D7D9D6E3 
+0440 C3C9F6F6 12D9F54B F009028F 0092700F D7D9D6E3 C9D5F6F2 12D9F54B F006145F 
+0460 0125300F D7D9D6E3 C9D5F6F3 12D9F54B F006145F 0125300F D7D9D6E3 C9D5F6F4 
+0480 12D9F54B F006333F 0160100F D7D9D6E3 C9D5F6F5 12D9F54B F006333F 0153100F 
+04A0 D7D9D6E3 C9D5F6F6 12D9F54B F009028F 0092800F D7E2C2C9 D5F2F540 8A320C00 
+04C0 0009093F 0105551F E6C5C2C5 C3C8D640 12D9F54B F006300F 0172400F          * 

2012-08-27
==========

* came in early to work on the mainframe stuff
* testing the new build myself and the changes are not reflected.  emailed charles godwin about it.
	- also mentioned that the start/stop server icon is missing.
* emailed charles and jim regarding the version info.  The version info issue is happening before us.
* go to the gym in the morning b/c i may have lunch with the phil guys.
	- went to the gym.  shot some hoops and did 20 minutes of cardio
* thinking of creating my own framework but decided against it.
	- just use the new framework/library called DropWizard.
	- DropWizard looks like what I want.
	- learn more about maven.  Need maven to configure DropWizard.
	- what the fuck is wrong with.  Now I'm looking into the play framework
	- do i have startup idea -> NO -> so stop wasting time
	- looking into vaadin framework
	- stop looking into frameworks until you have a product you want to build, get customers first
* leave at 4pm today.  I came in early and did the debugging for the 
* why do I need tomcat server to reside in the mainframe.  why can't i just run tomcat server locally on my machine.  
	- isn't that an easier option to do.
* Story 967 and 969 completed.  Had time to spare so looked at it and closed when completed.
	
2012-08-28
==========

* Things I did yesterday:
	- verified input dump coming in from the mainframe
	- worked with Charles regarding changes not being seen in build, ticket has been created for Harvest issue
* Things working on today:
	- Create a new build for the demo tomorrow, will distribute to QA by EOD
	- Looking over the some tasks I created previously to fix up
	- for 899, if the expected values are coming in 0x11,0x12,0x13 we need to find the proper values to display as a string in the eclipse gui.
	- update the DSD to reflect the expected value
* Roadblock:
	- N/A
* Go to the cardio class for lunch.  And play some ping pong afterwards.  Need to refresh my mind.
	- had to work with GIS.  was late for the cardio class.
	- played bball instead and my foot feels ok.
* Get ready for the demo tomorrow.
* Look into mentorship program: https://one.ca.com/hr/od_public/mentoring/Pages/Guidebook.aspx
* Updated memberinfo class in tools project to include string representation for key value of 0x11, 0x12, 0x13
* Updated the DDS to reflect changes in compiler information.
* Settings for Munish's server:
	- CA31
	- 19460
	- AD1DEV.IBMC.PROTSYM
* send out email out to everybody regarding the new build -- COMPLETE
* Have Munish do the demo
	- I ended up doing the demo b/c I mentioned it during the status meeting before.
* Be in early as there is a demo
* We are good to go.
	
2012-08-29
==========

* created a GIS ticket to access STARTRAK.  need to resolve the issues.
* once i have access, assign the tickets back to QA (review the email I sent to myself)
* DONE - updated the dds document for the internal section
* DONE - next thing to do is to have QA test suggestions. 
* what can i do next? --> I think I can just do extra research.
* I spoke with Munish.. He will take 903 and I will take 904.
* Closed the stories that Scott requested.

2012-08-30
==========

* remind Scott to add the story about creating the installed.. Should be assigned to Charles G.
* talk to Gode Santosh about StarTrak issue.
	- having TPX login issue.
	- can't log
* look at the DDS for story 904 to see what needs to be tested.
* need to create tasks for each story regarding eclipse gui
* create the dds documentation
* to save conversations in eclipse, use shift + F12

2012-08-31
==========
* Yehaw, half day today
* Get the tasks completed today by noon.
* my next question, is why are we doing any processing at the tomcat server side.. it is so hard to debug.
	- this has been answered by Charles Godwin
* my mainframe password is summer45
	- verified to be correct
* Things I did yesterday
	- sprint 4 planning
	- looking into the stories
* Things I will do today
	- looking into the stories
	- creating tasks
* Roadblock
	- None
* Story 15646: As a CA InterTest Developer, I want to normalize the build procedure with the other testing tools so that we can provide QA with timely updates.
	- this is just being able to talk with Charles and provided a web distribution platform
	- i think most of the work is going to Charles
* forget about any notions of using intellij idea when doing eclipse. pointless since everybody uses eclipse.
* Task has been created Story 904.
* Task created for all the stories that I own.
* Modified buildserver.xml in intertest.mainframe project. Modified setup.xml in com.ca.intertest.tools.  
	- sent an email to the other developers
* Need to change my USS prompt on Monday.

2012-09-04
==========

* had a relaxing weekend.  excited to go back to work.
* status meeting
	- what i did previous working day
		* tasks created for stories that I own
	- what i will do today
		* i will be working on story 904 (outline view for C program)
		* change my USS prompt regarding build environment
	- roadblocks
		* n/a
* OutlinePage.java is the class that I have to look at.
	- investigate more to see what is happening.
	- parsePLI: [com.ca.intertest="true", dsn="AD1DEV.INTERTDV.DEMO.PROTSYM", gt_m_lang="80", gt_m_plc="3.20", gt_m_xa="0", name="PL1UEMO", records="8674", server="Eladio's Server", time="Unknown Date"]
	- parseC  : [com.ca.intertest="true", dsn="AD1DEV.INTERTDV.DEMO.PROTSYM", gt_m_lang="a0",                  gt_m_xa="0", name="ADDN",    records="1705", server="Eladio's Server", time="Unknown Date"]
  	- in the parseC program, there is no "gt_m_plc" key that I can parse out the version number.  I need to assign element gt_m_x a version number to.
  	- requestXML for PLI:
  	
<?xml version="1.0" encoding="UTF-8" standalone="no"?><?InterTest Version=0.9.0 ?>
<request errorlevel="0" msg="" time="2012/09/04 15:24:08">
	<File cmd="getfile">
		<getfile dsn="AD1DEV.INTERTDV.DEMO.PROTSYM" name="PSBIN25">
			<member com.ca.intertest="true" dsn="AD1DEV.INTERTDV.DEMO.PROTSYM"
				gt_m_lang="80" gt_m_plc="3.20" gt_m_xa="0" name="PSBIN25" records="424"
				server="Eladio's Server" time="Unknown Date" />
		</getfile>
	</File>
</request>

	- requestXML for C:
	
<?xml version="1.0" encoding="UTF-8" standalone="no"?><?InterTest Version=0.9.0 ?>
<request errorlevel="0" msg="" time="2012/09/04 15:26:04">
	<File cmd="getfile">
		<getfile dsn="AD1DEV.INTERTDV.DEMO.PROTSYM" name="ADDN">
			<member com.ca.intertest="true" dsn="AD1DEV.INTERTDV.DEMO.PROTSYM"
				gt_m_lang="a0" gt_m_xa="0" name="ADDN" records="1705" server="Eladio's Server"
				time="Unknown Date" />
		</getfile>
	</File>
</request>

	- look into LoadListing.run to see what the difference is between different programming languages
* my mind is mush right now, can't figure out what is going on.
* I woke up at 5 this morning, I guess that is still considered early.
	- when's the next episode of breaking bad?
	- i stay up till 10 to watch that last night.
	- as expected, he is going to get discovered.

2012-09-05
==========

* had a talk with Vijay regarding QTP, which is a cool program for testing in the windows environment.
* Write the DDS
	- looked over the Vijay's Test Document for Story 904 and providing more feedback
	- verify the completeness of the outline view.
* paid Joe S. $20 to participate in the deathpool league.
* updated the DDS for QA testing.
	- very rough.
* for the intertest.mainframe project, reliant on a specific version of ant.  have to use 1.7.1 instead of latest.
* my status is getting shorter and shorter
	- that's b/c I'm investigating how outlines work.
	- once I get how outlines work, i'm in the clear.
	
2012-09-06
==========

* focus on getting the outline up for the C program.
* yesterday:
	- updated dds for story 904
	- looking into the code for story 904
* today
	- review test plans that madhuri sent out and update DDS for the other stories
	- looking into the code for story 904
* roadblock
	- n/a
* playing bball today and getting some exercise.
* tree variable contains the member variables
	- the reload variable is the one that assigns it to the tree.
	- need to take a look at debugfile and see how it is parsed.
* in the cobol program that I just imported, not sure where "Procedure Division" is used.
	- need to investigate this a bit more.
	- but for now, let' figure out what shows in the C program.
* story 904 is on hold until the protsym file provides the symbol table.  can't construct the outline view for it.
* working on story 15309 for now.
* updated DDS QA Recommendations for Story 902.
* in Cobol, I can't seem to add a breakpoint, it is greyed out.
	- i can do it for a PL/1 program.
	- in ASM, the add breakpoint is also greyed out.
* questions about adding breakpoints, discuss with Scott and QA.

2012-09-07
==========

* worked on 904, that's on hold until I get the symbol table from the protsym file.
* Reviewed QA test plans and updated QA Testing Recomendations DDS for 902,15309 & 904.  
	- Will be working with Venkat after the meeting to tighten the scope of of 15309.
* roadblock - need symbol table from protsym file.
* for 15309
	- we want to focus on adding unconditional breakpoints for executable lines, thats it. (there are different types of breakpoints)
	- in the breakpoint view, we have all these icons.  (can we not focus on them during this story).  not sure what it means to configure settings.
		-configuring the breakpoint from unconditional to conditional.
	- what's add a global breakpoint?
* for 904
	- why can't we ask Jim to make it one of his priorities to complete by midweek.
	- in the code, when I'm building this tree it requires the symbol table.
	- for now, just have an outline with the root node going to main.  when you double click on main, it goes to the main method.
* Story 15646 is complete.  No need to 	write a DDS for this.
	- build process.  Charles Godwin worked on this.
* Get the outline view working by tonight.	
* Didn't get anywhere, I got stuck with the parsing the main class.	
* Don't play any basketball.  Just focus on getting this done.
    - gotta a lot of stories to finish.

2012-09-08
==========

* still working on story 904 outline view.  
    - had complications parsing out the main method.

2012-09-10
==========

* working on the outline view.
	- provide an outline for a c program where you can click on a C main method.
	- i've got the main method to show up in the outline view.  
	- just have to configure it so that when you double click on it, it goes to the right file location
* need to be able to view different C programs and go to the main method.
    - need to make sure I am doing this properly within the code, no hackjob.
* might need to pick up Therese after work.
* need to buy a camera soon.  Olympus OM-D

2012-09-11
==========

* for the camera
    -figure out if to buy one with no lens and buy a separate lens for it.
* finish up the outline view
    - need to determine the line of the main program or use the first executable statement, whichever is easier to implement
    - update the story's acceptance criteria
    
2012-09-12
==========

* need to really research what's going on in the code.  I'm not sure how information is passed from parseSource to the outline view.
    - the outline view get's its information from a debugfile
* information is contained in a zip file which includes two files
    - metadata >> the metadata contains the parsed information
    - listing >> the listing is the actual source file    
    
    public void addMainToCProgram(String lineNumber) {
        Element member = getFirstMember();
        NodeList nodelist = member.getChildNodes();
        for(int i=0; i < nodelist.getLength(); i++) {
            Node node = nodelist.item(i);
            if(node.getLocalName().equalsIgnoreCase(XMLConstants.SYMBOLS)) {
                Element childElement = newMember(XMLConstants.STRUCTURE);
                childElement.setAttribute("level", "-2"); 
                childElement.setAttribute("linenumber", lineNumber);
                childElement.setAttribute("name", "main");
                childElement.setAttribute("offset", "0");
                childElement.setAttribute("statementnumber", "1");
                node.appendChild(childElement);
            }
        }
    }

2012-09-13
==========

* story 904 complete
    - i'll make a build tonight for QA Testing
    - if you want all the method to be shown in the outline view it will take more time
      right now, it's just the main method
* moving unto story 15309, adding breakpoints

com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000001
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000001
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000002
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000002
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000003
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000003
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000004
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000004
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000005
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000005
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000006
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000006
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 56 positionType: main()


com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000001
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000001
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000002
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000002
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000003
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000003
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000004
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000004
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000005
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000005
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000006
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000006
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000007
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000007
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000008
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000008
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000009
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000009
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000010
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000010
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000011
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000011
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 11 positionOffset: 0 positionType: ===========
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: ===========
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 18 positionOffset: 0 positionType: *=WARNING=========
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: *=WARNING=========
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000012
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000012
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000013
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000013
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000014
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000014
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000001
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000001
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000002
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000002
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000003
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000003
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000004
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000004
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000005
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000005
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000006
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000006
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000007
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000007
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000008
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000008
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000009
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000009
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000010
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000010
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000011
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000011
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 11 positionOffset: 0 positionType: ===========
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: ===========
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 18 positionOffset: 0 positionType: *=WARNING=========
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: *=WARNING=========
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000012
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000012
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000013
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000013
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:189):positionLength: 6 positionOffset: 1 positionType: 000014
com.ca.intertest.ui.lister.util.ReservedWordProvider.containsWord(ReservedWordProvider.java:110):word: 000014




                                          * * * * *   S O U R C E   * * * * *
 
 LINE  STMT                                                                                                       SEQNBR INCNO
             *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
 000001 #include <stdio.h>                                                                                |      1
 000002     #define LAST 10                                                                               |      2
 000003                                                                                                   |      3
 000004     int main()                                                                                    |      4
 000005     {                                                                                             |      5
 000006         int i, sum = 0;                                                                           |      6
 000007                                                                                                   |      7
 000008         for ( i = 1; i <= LAST; i++ ) {                                                           |      8
 000009           sum += i;                                                                               |      9
 000010         } /*-for-*/                                                                               |     10
 000011         sprintf("sum = %d\n", sum);                                                               |     11
===========> ..............................a...................................................................
*=WARNING=========> a - CCN3280 Function argument assignment between types "const char*" and "int" is not allowed.
 000012      EXEC CICS SEND TEXT FROM(sum) LENGTH(28) ERASE WAIT;                                         |     12
 000013      EXEC CICS RETURN;                                                                            |     13
 000014     }                                                                                             |     14
 
 
                                           * * * * *   S O U R C E   * * * * *
 
 LINE  STMT                                                                                                       SEQNBR INCNO
             *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
 000001 #pragma XOPTS(CICS)                                                                               |      1
 000002  /********************************************************************/                           |      2
 000003  /*                                                                  */                           |      3
 000004  /* Module Name = NUMTEST                                            */                           |      4
 000005  /*                                                                  */                           |      5
 000006  /* Descriptive Name = QA TEST NUMERIC FIELDS IN C APPLICATION       */                           |      6
 000007  /* ------ copy of testnum program ----                              */                           |      7
 000008  /*                                                                  */                           |      8
 000009  /* STATUS = 4.1.0                                                   */                           |      9
 000010  /*                                                                  */                           |     10
 000011  /*------------------------------------------------------------------*/                           |     11
 000012 #include "dfhbmsca.h"                    /* BMS definitions          */                           |     12
 000013 #include "tmpnu2.h"                      /* Logical maps for TESTNUM */                           |     13
 000014 #include "dfh$dfil.h"                    /* Logical maps for TESTNUM */                           |     14
 000015                                                                                                   |     15
 000016 #include <stdio.h>                                           /* @D1A */                           |     16
 000017 #include <string.h>                                          /* @D1A */                           |     17
 000018 unsigned char keynum 6 ;                                                                          |     18
 000019 unsigned char amt 8 ;                                                                             |     19
 000020 int pagen;                                                                                        |     20
 000021 int rcode;                               /* RESP variable        */                               |     21
  000038 {                                                                                                 |     38
 000039    EXEC CICS RETURN;                                                                              |     39
 000040 }                                                                                                 |     40
 000041                                                                                                   |     41
 000042                                                                                                   |     42
 000043 main()                                                                                            |     43
 000044 {                                                                                                 |     44
 000045                                                                                                   |     45
 000046    EXEC CICS ADDRESS EIB(dfheiptr);                                                               |     46
 000047    EXEC CICS SEND MAP("heading") MAPSET("tmpnu2")                                                 |     47
 000048         ERASE RESP(rcode);                                                                        |     48
 000049    switch(rcode) {        GG : break;                                                               |     50
 000051       case DFHRESP(OVERFLOW) : Oflow();                                                           |     51
 000052       default : Errors();                                                                         |     52
 000053    }                                                                                              |     53
5694A01 V1.13 z/OS XL C            'AD1QA.INTERT90.CURRENT.SOURCE(TESTNU2)'                    09/05/2012 11:58:49   Page     4
 
 
                                          * * * * *   S O U R C E   * * * * *
 
 LINE  STMT                                                                                                       SEQNBR INCNO
             *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
 000054                                                                                                   |     54
 000055    unsigned char amt 8  = {0,0,0,0,0,0,4,5};                                                      |     55
 000056     memcpy(amt,"00000045",8);                                                                     |     56
 000057                                                                                                   |     57
 000058          memcpy(tmpnua.tmpnuao.amounto,amt,8);                                                    |     58
 000059                                                                                                   |     59
 000060          EXEC CICS SEND MAP("tmpnua ") MAPSET("tmpnu2")                                           |     60
 000061          RESP(rcode);                                                                             |     61
 000062          switch(rcode) {                                                                          |     62
 000063             case DFHRESP(NORMAL) : break;                                                         |     63
 000064             case DFHRESP(OVERFLOW) : Oflow(); break;                                              |     64
 000065             default : Errors();                                                                   |     65
 000066          }                                                                                        |     66
 000022                                    
                                    * * * * *   E N D   O F   S O U R C E   * * * * *
                                    
2012-09-14
==========

* need to submit build for QA > almost done
* work on adding breakpoints
    - Thanks to Charles, Look into RulerBreakpointAction
    - popup.add = Add Breakpoint
* need to figure out what are actions? i know what editors are, what views are.. but haven't worked much with actions
* RulerBreakpointAction.update determines if the line should have a context menu disabled or enabled.2012-09-17
==========

* last friday, i sent out the build to test the outline view.
* RulerBreakpointAction.update()
  RulerBreakpointAction.isValidStatement()
  AbstractRulerMarkerAction.getStmtTree()
  ListerEditor.getOutline() 
  -- the next thing to do is to check how to outline
     variable is populated
  LIsterEditor.setupEditor()
  Outline.getInstance()
  debugFile.getOutline()
  -- still looking for how the outline is populated.
  debugFile.setOutline()
  Outline.getInstance()
  Outline constructor class.
  Outline.reload()
  -- looking at where the statement tree is created
  parseSource.populateXML()
  
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 2 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 7 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 8 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 9 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 10 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 11 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 12 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 13 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 14 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 15 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 16 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 1677720 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: VERB statement: 1677720 linenum: 0
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:573): type: LABEL statement: 0 linenum: 0
  
 right now the issue is with the linenumber.. the linenumber value being put in the statement is always 0.
 this screws it up.
 
2012-09-18
==========

* Munish mentioned that he will be done by tomorrow.
* Adding / Removing Breakpoints on Executable lines is complete.
 
2012-09-19
==========
 
* finished up the add breakpoint issue
* once issues with the build process has been resolved, we will be pushing it to QA for testing for all stories.
* will work on improving the syntax hightlighting today and generate a better outline.
* working on the c parser by creating an AST
* finally got all my projects not have any errors.  The only issue was that I have to create a BuildProduct project which
includes the apache tomcat jars.

2012-09-20
==========
* Submitted new build to QA yesterday 
* Look into for today:
    > look into 2 main methods in C code issue.
    > add line breakpoints issue.

com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseC.parseLine(parseC.java:144): statementtype: NOOP linenum: 76 statement: 2
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 76 statement: 2
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 81 statement: 7
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 82 statement: 8
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 83 statement: 9
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 84 statement: 10
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 85 statement: 11
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 86 statement: 12
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 87 statement: 13
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 88 statement: 14
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 89 statement: 15
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 90 statement: 16
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:379): statementtype: VERB linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:577): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:377): statementtype: LABEL linenum: 0 statement: 0

!ENTRY com.ca.intertest 1 0 2012-09-20 11:28:23.556
!MESSAGE com.ca.intertest.file

!ENTRY com.ca.intertest 1 0 2012-09-20 11:28:23.559
!MESSAGE com.ca.intertest.file
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP




For ADDPOS:

com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseC.parseLine(parseC.java:144): statementtype: NOOP linenum: 71 statement: 9
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 1 Value: 63
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 2 Value: 64
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 3 Value: 65
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 4 Value: 66
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 5 Value: 67
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 6 Value: 68
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 7 Value: 69
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 8 Value: 70
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 9 Value: 71
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 10 Value: 72
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 11 Value: 73
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 12 Value: 74
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 13 Value: 75
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 14 Value: 76
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 15 Value: 77
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 17 Value: 79
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 16 Value: 78
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 19 Value: 81
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 18 Value: 80
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 20 Value: 82
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 71 statement: 9
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 72 statement: 10
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 75 statement: 13
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 76 statement: 14
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 77 statement: 15
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 78 statement: 16
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 79 statement: 17
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 80 statement: 18
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 81 statement: 19
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 82 statement: 20
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:386): statementtype: VERB linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 0 statement: 0

!ENTRY com.ca.intertest 1 0 2012-09-20 13:47:58.108
!MESSAGE com.ca.intertest.file

!ENTRY com.ca.intertest 1 0 2012-09-20 13:47:58.111
!MESSAGE com.ca.intertest.file
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP

For ADDN
--------

com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseC.parseLine(parseC.java:144): statementtype: NOOP linenum: 71 statement: 9
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 1 Value: 63
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 2 Value: 64
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 3 Value: 65
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 4 Value: 66
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 5 Value: 67
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 6 Value: 68
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 7 Value: 69
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 8 Value: 70
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 9 Value: 71
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 10 Value: 72
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 11 Value: 73
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 12 Value: 74
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 13 Value: 75
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 14 Value: 76
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 15 Value: 77
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 17 Value: 79
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 16 Value: 78
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 19 Value: 81
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 18 Value: 80
com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:356): Key: 20 Value: 82
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 71 statement: 9
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 72 statement: 10
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 75 statement: 13
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 76 statement: 14
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 77 statement: 15
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 78 statement: 16
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 79 statement: 17
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 80 statement: 18
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 81 statement: 19
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 82 statement: 20
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:386): statementtype: VERB linenum: 0 statement: 1677720
com.ca.intertest.tools.parseSource.addVerb(parseSource.java:584): called from: com.ca.intertest.tools.parseSource.parseVerbs(parseSource.java:384): statementtype: LABEL linenum: 0 statement: 0

!ENTRY com.ca.intertest 1 0 2012-09-20 13:47:58.108
!MESSAGE com.ca.intertest.file

!ENTRY com.ca.intertest 1 0 2012-09-20 13:47:58.111
!MESSAGE com.ca.intertest.file
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP
com.ca.intertest.ui.actions.RulerBreakpointAction.isValidStatement(RulerBreakpointAction.java:154):statementType: NOOP



For ADDPOS, Line 11 has a statement type of LABEL, it is not part of the VerbListing
For ADDN, Line 5 has a statement type of NOOP, it is not part of the VerbListing

The question to ask right now is why Line 5 is a statement type of NOOP and the other one is ADDPOS

2012-09-21
==========

* Look into the outline view.. The AST parser is the real fix to the solution
* Created a filecalld ParserExample which is able to parse a C file pretty quickly.
    - I haven't checked it in but it looks good.
    - This can work in the outline view.
* The next step to figureout how to use the syntax hightlight.
* Trying to install virtualbox again.
    - Uninstalled again b/c installation was too slow.
    - It's taking more than an hour too complete.
    - Forget about it.
* I'll just continue to work on the mac.
* Instead of an ipad for development, the next machine that I should be using is a macbook air.
    - Using ipad / keyboard might sound cool but it's too big of a stretch.
    - After thinking about it, just get a macbook air
    
2012-09-24
==========

* for story 904, no more work until next story.
* keep working on CDT parsers

2012-09-25
==========

* yesterday, able to parse comments and functions through CDT jar files
* keep working on CDT parser
* prepped with Munish regarding the demo for tomorrow.
* still working on CDT implementation
* need to test out Charles Godwin latest changes.
    - will do the test tomorrow after the demo

2012-09-26    
==========

* demo today
    - it starts at 9:00am so I can't be late.
    - i won't be able to drop off javi at school tomorrow.
* review the upcoming stories
* review the server changes made by Charles Godwin <-- told Munish about this
* adding the class ParserCDT into com.ca.intertest.tools

2012-09-27
==========

* need to add tasks to the stories
    - this is complete
* let's work on the syntax highlighting
java.lang.NoClassDefFoundError: org/eclipse/cdt/core/parser/IParserLogService
    at com.ca.intertest.ui.lister.ListerEditor.setupEditor(ListerEditor.java:659)

2012-09-28
==========

* created tasks in the stories that I'm involved with
* need to write the DDS and QA Recommendations for 903
* have to test with the actual RCP plugin rather than using main.
    - the jar files keep getting messed up
Munish's Old Code:
//          if (cWords.containsKey(word))
//          String lowerCaseWord = word.toLowerCase();
//          System.out.println("I am in Reserved Word: " + lowerCaseWord);
//          if(lowerCaseWord.equals("main")) {
//              System.out.println("this is the main keyword");
//          }
            
//          System.out.println(cWords);
             
            if (cWords.containsKey(word)){
//                  System.out.println("Found -> "+lowerCaseWord);
                b = true;
            }//else{
//              System.out.println("Not");
//          }//containsKey(word))


How does position work.  Position is line based.

000001 - offset: 1, length: 6
include - offset: 11, length: 7
stdio - offset: 20, length: 5


Who sets the content type..  teh determines if it's a commentsToken or a defaultToken.
Look into contentType

                                          * * * * *   S O U R C E   * * * * *
 
 LINE  STMT                                                                                                       SEQNBR INCNO
             *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
 000001   #include <stdio.h>                                                                              |      1
 000002   int main(void) {                                                                                |      2
 000003  int n;       /* The number of numbers to be read */                                              |      3
 000004  int sum;     /* The sum of numbers already read  */                                              |      4
 000005  int current; /* The number just read             */                                              |      5
 000006  int lcv;     /* Loop control variable*/                                                          |      6
 000007  printf("Enter a positive number n > ");                                                          |      7
 000008  scanf("%d",&n); /* We should check that n is really positive*/                                   |      8
 000009  sum = 0;                                                                                         |      9
 000010  for (lcv=0; lcv < n; lcv++) {                                                                    |     10
 000011 printf("\nEnter an integer > ");                                                                  |     11
 000012  scanf("%d",&current);                                                                            |     12
 000013    printf("\nThe number was %d\n", current);                                                      |     13
 000014      sum = sum + current;   }                                                                     |     14
 000015  printf("The sum is %d\n", sum);                                                                  |     15
 000016 return 0; }                                                                                       |     16
                                    * * * * *   E N D   O F   S O U R C E   * * * * *

2012-10-01
==========

* need to create an RST cheat sheet
CScanner.java
//  @Override
//  public void parseBuffer() {
//        Logger.debug("inside parseBuffer");
//      // the buffer parameter being used is one line of the executable lines
//      // i.e. "000001   #include <stdio.h> |      1"          
//      Hashtable<String, Integer>  result = ((scanC)scanner).setupCommentSyntax(buffer);
//        if(result != null) {
//          contentType = IConstants.SOURCE_COMMENT_CONTENT;
//          tokenOffset = result.get("index");
//          tokenLength = result.get("length");
//        } else if (!scanner.isExecuteCode(buffer)) {
//          contentType = IConstants.SOURCE_OTHER_CONTENT;
//      }
//      bufferPositions = getTypedTokens(buffer);
//      if (bufferPositions == null) {
//          bufferPositions = new ArrayList<TypedPosition>();
//          bufferIndex = bufferPositions.size()+1;
//      }
//  }

//  @Override
//  public IToken getBufferToken(TypedPosition position) {
//      String word = position.getType();
//      Logger.debug(word);
//        return defaultToken;
//  }

scanC.java
    /**
     * One of the problems with the currect comment implementation is
     * that it is assumming that the comment takes up the whole line.
     * This is not the case with C code.  
     */
    public Hashtable<String, Integer> setupCommentSyntax(String line) {
        String cSnippet = null;
        if(isCandidate(line)) {
            // Let's get the C snippet of code from the line
            // the comment is between the statement number and "|"
            cSnippet = line.substring(beginningIndexOfCCode,endingIndexOfCCode);
            for(String comment: comments) {
                if(cSnippet.contains(comment)) {
                    int startIndex = cSnippet.indexOf(comment) + beginningIndexOfCCode;
                    Logger.debug(line);
                    Logger.debug("comment found: " + cSnippet + " starting at: " + startIndex + " with length of: " + comment.length());
                    Hashtable<String, Integer> result = new Hashtable<String, Integer>();
                    result.put("index", startIndex);
                    result.put("length", comment.length());
                    return result;
                }
            }
        }
        return null;
    }
    
2012-10-02
==========

com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):000015
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6231 tokenLength: 6 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6239 tokenLength: 7
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):PRINTF(
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6239 tokenLength: 7 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6247 tokenLength: 3
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):THE
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6247 tokenLength: 3 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6251 tokenLength: 3
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):SUM
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6251 tokenLength: 3 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6255 tokenLength: 2
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):IS
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6255 tokenLength: 2 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6259 tokenLength: 1
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):D
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6259 tokenLength: 1 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6261 tokenLength: 1
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):N
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6261 tokenLength: 1 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6265 tokenLength: 4
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):SUM)
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6265 tokenLength: 4 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6342 tokenLength: 2
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):15
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6342 tokenLength: 2 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 6346 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6347 tokenLength: 6
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):000016
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6347 tokenLength: 6 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6354 tokenLength: 6
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):RETURN
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6354 tokenLength: 6 textAttribute: org.eclipse.jface.text.TextAttribute@264ec43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6361 tokenLength: 1
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):0
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6361 tokenLength: 1 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:143):tokenOffset:6458 tokenLength: 2
com.ca.intertest.ui.lister.util.AbstractScanner.getBufferToken(AbstractScanner.java:196):16
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presenstation: org.eclipse.jface.text.TextPresentation@10772d2 tokenOffset: 6458 tokenLength: 2 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d

m.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 4606 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 4722 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 4838 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 4954 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5070 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5186 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5302 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5418 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5534 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5650 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5766 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5882 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 5998 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 6114 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 6230 rangeLength: 114
com.ca.intertest.ui.lister.util.AbstractScanner.setPartialRange(AbstractScanner.java:99):rangeOffset: 6346 rangeLength: 114

com.ca.intertest.ui.lister.c.CScanner.parseBuffer(CScanner.java:103):rangeOffset6346
com.ca.intertest.ui.lister.util.AbstractScanner.getTypedTokens(AbstractScanner.java:245):offset: 1 length: 6 type: 000016
com.ca.intertest.ui.lister.util.AbstractScanner.getTypedTokens(AbstractScanner.java:245):offset: 8 length: 6 type: return
com.ca.intertest.ui.lister.util.AbstractScanner.getTypedTokens(AbstractScanner.java:245):offset: 15 length: 1 type: 0
com.ca.intertest.ui.lister.util.AbstractScanner.getTypedTokens(AbstractScanner.java:245):offset: 112 length: 2 type: 16


com.ca.intertest.ui.lister.c.CScanner.getTypedTokens(CScanner.java:144):offset: 6347 length: 6 type: 000016
com.ca.intertest.ui.lister.c.CScanner.getTypedTokens(CScanner.java:144):offset: 6354 length: 6 type: return
com.ca.intertest.ui.lister.c.CScanner.getTypedTokens(CScanner.java:144):offset: 6361 length: 1 type: 0
com.ca.intertest.ui.lister.c.CScanner.getTypedTokens(CScanner.java:144):offset: 6458 length: 2 type: 16
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:144):tokenOffset:12693 tokenLength: 6
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:144):tokenOffset:12700 tokenLength: 6
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:144):tokenOffset:12707 tokenLength: 1
com.ca.intertest.ui.lister.util.AbstractScanner.nextToken(AbstractScanner.java:144):tokenOffset:12804 tokenLength: 2
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presentation: org.eclipse.jface.text.TextPresentation@fd4bba tokenOffset: 12693 tokenLength: 6 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presentation: org.eclipse.jface.text.TextPresentation@fd4bba tokenOffset: 12700 tokenLength: 6 textAttribute: org.eclipse.jface.text.TextAttribute@264ec43d
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presentation: org.eclipse.jface.text.TextPresentation@fd4bba tokenOffset: 12707 tokenLength: 1 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.createPresentation(AbstractPresentationRepairer.java:93):presentation: org.eclipse.jface.text.TextPresentation@fd4bba tokenOffset: 12804 tokenLength: 2 textAttribute: org.eclipse.jface.text.TextAttribute@173c43d


 000002   int main(void) {                                                                                |      2
 000003  int n;       /* The number of numbers to be read */                                              |      3
 000004  int sum;     /* The sum of numbers already read  */                                              |      4
 000005  int current; /* The number just read             */                                              |      5
 000006  int lcv;     /* Loop control variable*/                                                          |      6
 000007  printf("Enter a positive number n > ");                                                          |      7
 000008  scanf("%d",&n); /* We should check that n is really positive*/                                   |      8
 000009  sum = 0;                                                                                         |      9
 000010  for (lcv=0; lcv < n; lcv++) {                                                                    |     10
 000011 printf("\nEnter an integer > ");                                                                  |     11
 000012  scanf("%d",&current);                                                                            |     12
 000013    printf("\nThe number was %d\n", current);                                                      |     13
 000014      sum = sum + current;   }                                                                     |     14
 000015  printf("The sum is %d\n", sum);                                                                  |     15
 000016 return 0; }                                                                                       |     16

 000008  scanf("%d",&n); /* We should check that n is really positive*/                                   |      8
/* We should check that n is really positive*/ starting at: 25 with length: 46

/* The number of numbers to be read */


2012-10-03
==========

com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000001   #include <stdio.h>                                                                              |      1 offset: 4606 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000003  int n;       /* The number of numbers to be read */                                              |      3 offset: 4838 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000004  int sum;     /* The sum of numbers already read  */                                              |      4 offset: 4954 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000005  int current; /* The number just read             */                                              |      5 offset: 5070 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000006  int lcv;     /* Loop control variable*/                                                          |      6 offset: 5186 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000007  printf("Enter a positive number n > ");                                                          |      7 offset: 5302 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000008  scanf("%d",&n); /* We should check that n is really positive*/                                   |      8 offset: 5418 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000009  sum = 0;                                                                                         |      9 offset: 5534 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000010  for (lcv=0; lcv < n; lcv++) {                                                                    |     10 offset: 5650 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000011 printf("\nEnter an integer > ");                                                                  |     11 offset: 5766 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000012  scanf("%d",&current);                                                                            |     12 offset: 5882 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000013    printf("\nThe number was %d\n", current);                                                      |     13 offset: 5998 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000014      sum = sum + current;   }                                                                     |     14 offset: 6114 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000015  printf("The sum is %d\n", sum);                                                                  |     15 offset: 6230 length: 114
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000016 return 0; }                                                                                       |     16 offset: 6346 length: 114

ca.intertest.ui.lister.c.CPresentationRepairer$1.visit(CPresentationRepairer.java:158):IASTName: main offset: 107 length: 4
com.ca.intertest.ui.lister.c.CPresentationRepairer.createPresentation(CPresentationRepairer.java:225): 000002   int main(void) {                                                                                |      2 offset: 4722 length: 114
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:122):0002 offset: 4725 length: 4
4606

com.ca.intertest.ui.lister.c.CPresentationRepairer$1.visit(CPresentationRepairer.java:174):IASTName: scanf offset: 702 length: 5
com.ca.intertest.ui.lister.c.CPresentationRepairer$1.visit(CPresentationRepairer.java:174):IASTName: scanf offset: 1102 length: 5
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:122):/* We should check that n is really positive*/ offset: 5443 length: 46


         #include <stdio.h>                                                                              
         int main(void) {                                                                                
        int n;       /* The number of numbers to be read */                                              
        int sum;     /* The sum of numbers already read  */                                              
        int current; /* The number just read             */                                              
        int lcv;     /* Loop control variable*/                                                          
        printf("Enter a positive number n > ");                                                          
        scanf("%d",&n); /* We should check that n is really positive*/                                   
        sum = 0;                                                                                         
        for (lcv=0; lcv < n; lcv++) {                                                                    
       printf("\nEnter an integer > ");                                                                  
        scanf("%d",&current);                                                                            
          printf("\nThe number was %d\n", current);                                                      
            sum = sum + current;   }                                                                     
        printf("The sum is %d\n", sum);                                                                  
       return 0; }   

                                          * * * * *   S O U R C E   * * * * *
 
 LINE  STMT                                                                                                       SEQNBR INCNO
             *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
 000001   #include <stdio.h>                                                                              |      1
 000002   int main(void) {                                                                                |      2
 000003  int n;       /* The number of numbers to be read */                                              |      3
 000004  int sum;     /* The sum of numbers already read  */                                              |      4
 000005  int current; /* The number just read             */                                              |      5
 000006  int lcv;     /* Loop control variable*/                                                          |      6
 000007  printf("Enter a positive number n > ");                                                          |      7
 000008  scanf("%d",&n); /* We should check that n is really positive*/                                   |      8
 000009  sum = 0;                                                                                         |      9
 000010  for (lcv=0; lcv < n; lcv++) {                                                                    |     10
 000011 printf("\nEnter an integer > ");                                                                  |     11
 000012  scanf("%d",&current);                                                                            |     12
 000013    printf("\nThe number was %d\n", current);                                                      |     13
 000014      sum = sum + current;   }                                                                     |     14
 000015  printf("The sum is %d\n", sum);                                                                  |     15
 000016 return 0; }                                                                                       |     16
                                    * * * * *   E N D   O F   S O U R C E   * * * * *
          #include <stdio.h>                                                                                      
          int main(void) {                                                                                        
         int n;       /* The number of numbers to be read */                                                      
         int sum;     /* The sum of numbers already read  */                                                      
         int current; /* The number just read             */                                                      
         int lcv;     /* Loop control variable*/                                                                  
         printf("Enter a positive number n > ");                                                                  
         scanf("%d",&n); /* We should check that n is really positive*/                                           
         sum = 0;                                                                                                 
         for (lcv=0; lcv < n; lcv++) {                                                                            
        printf("\nEnter an integer > ");                                                                          
         scanf("%d",&current);                                                                                    
           printf("\nThe number was %d\n", current);                                                              
             sum = sum + current;   }                                                                             
         printf("The sum is %d\n", sum);                                                                          
        return 0; }                                                                                               
                                    
          #include <stdio.h>                                                                                      
          int main(void) {                                                                                        
         int n;       /* The number of numbers to be read */                                                      
         int sum;     /* The sum of numbers already read  */                                                      
         int current; /* The number just read             */                                                      
         int lcv;     /* Loop control variable*/                                                                  
         printf("Enter a positive number n > ");                                                                  
         scanf("%d",&n); /* We should check that n is really positive*/                                           
         sum = 0;                                                                                                 
         for (lcv=0; lcv < n; lcv++) {                                                                            
        printf("\nEnter an integer > ");                                                                          
         scanf("%d",&current);                                                                                    
           printf("\nThe number was %d\n", current);                                                              
             sum = sum + current;   }                                                                             
         printf("The sum is %d\n", sum);                                                                          
        return 0; }                                                                                               
                                    
          #include <stdio.h>                                                                              
          int main(void) {                                                                                
         int n;       /* The number of numbers to be read */                                              
         int sum;     /* The sum of numbers already read  */                                              
         int current; /* The number just read             */                                              
         int lcv;     /* Loop control variable*/                                                          
         printf("Enter a positive number n > ");                                                          
         scanf("%d",&n); /* We should check that n is really positive*/                                   
         sum = 0;                                                                                         
         for (lcv=0; lcv < n; lcv++) {                                                                    
        printf("\nEnter an integer > ");                                                                  
         scanf("%d",&current);                                                                            
           printf("\nThe number was %d\n", current);                                                      
             sum = sum + current;   }                                                                     
         printf("The sum is %d\n", sum);                                                                  
        return 0; }



          #include <stdio.h>                                                                                      
          int main(void) {                                                                                        
         int n;       /* The number of numbers to be read */                                                      
         int sum;     /* The sum of numbers already read  */                                                      
         int current; /* The number just read             */                                                      
         int lcv;     /* Loop control variable*/                                                                  
         printf("Enter a positive number n > ");                                                                  
         scanf("%d",&n); /* We should check that n is really positive*/                                           
         sum = 0;                                                                                                 
         for (lcv=0; lcv < n; lcv++) {                                                                            
        printf("\nEnter an integer > ");                                                                          
         scanf("%d",&current);                                                                                    
           printf("\nThe number was %d\n", current);                                                              
             sum = sum + current;   }                                                                             
         printf("The sum is %d\n", sum);                                                                          
        return 0; }                                                                                               
                                                                                       

                                                                                       
                                                                                       
                                                                                       
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     1
 
 
                                       * * * * *   P R O L O G   * * * * *
 
  Compile Time Library . . . . . . : 410D0000
  Command options:
     Program name. . . . . . . . . : 'KUMMU03.PDS.C.SRC(CADD)'
     Compiler options. . . . . . . : *NOGONUMBER *NOALIAS    *RENT       *TERMINAL   *NOUPCONV   *SOURCE     *LIST       
                                   : *XREF       *AGG        *NOPPONLY   *NOEXPMAC   *NOSHOWINC  *NOOFFSET   *MEMORY     *NOSSCOMM   
                                   : *NOSHOWMACROS           *SKIPSRC(SHOW)          *NOREPORT   *NOMAKEDEP  *PREFETCH   
                                   : *NOLONGNAME *START      *EXECOPS    *ARGPARSE   *NOEXPORTALL*NODLL(NOCALLBACKANY)   
                                   : *NOLIBANSI  *NOWSIZEOF  *REDIR      *ANSIALIAS  *DIGRAPH    *NOROCONST  *ROSTRING   
                                   : *TUNE(5)    *ARCH(5)    *SPILL(128) *MAXMEM(2097152)        *NOCOMPACT  
                                   : *TARGET(LE,CURRENT)     *FLAG(I)    *NOTEST(SYM,BLOCK,LINE,PATH,HOOK)   *NOOPTIMIZE 
                                   : *NOINLINE(AUTO,NOREPORT,100,1000)   *NESTINC(255)           *BITFIELD(UNSIGNED)     
                                   : *NOINFO
                                   : *NODFP      
                                   : *FLOAT(HEX,FOLD,NOMAF,AFP(NOVOLATILE))          *STRICT     
                                   : *NOCOMPRESS *NOSTRICT_INDUCTION     *AGGRCOPY(NOOVERLAP)    *CHARS(UNSIGNED)
                                   : *NOIGNERRNO 
                                   : *NOINITAUTO
                                   : *NOCSECT
                                   : *NOEVENTS
                                   : *ASSERT(RESTRICT)
                                   : *NORESTRICT
                                   : *OBJECT
                                   : *NOGENASM
                                   : *NOOPTFILE
                                   : *NOSERVICE
                                   : *NOOE
                                   : *NOIPA
                                   : *SEARCH(//'CEE.SCEEH.+')
                                   : *NOLSEARCH
                                   : *NOLOCALE   *HALT(16)   *PLIST(HOST)
                                   : *NOCONVLIT
                                   : *NOASCII    
                                   : *NOGOFF     *ILP32      *NOWARN64   *NOHGPR(NOPRESERVE)     *NOHOT      *NOMETAL    *NOARMODE   
                                   : *NOXPLINK(NOBACKCHAIN,NOSTOREARGS,NOCALLBACK,GUARD,OSCALL(NOSTACK))
                                   : *ENUMSIZE(SMALL)
                                   : *NOHALTONMSG
                                   : *NOSUPPRESS
                                   : *NORTCHECK
                                   : *NODEBUG
                                   : *NOSQL
                                   : *CICS
                                   : *UNROLL(AUTO)
                                   : *KEYWORD()
                                   : *NOKEYWORD(typeof)
                                   : *NOSEVERITY
                                   : *NODSAUSER
     Version Macros. . . . . . . . : __COMPILER_VER__=0x410D0000 __LIBREL__=0x410D0000 __TARGET_LIB__=0x410D0000
     Language level. . . . . . . . : *EXTENDED:NOTEXTAFTERENDIF          
     Source margins. . . . . . . . :  
       Varying length. . . . . . . : 1 - 32767
       Fixed length. . . . . . . . : 1 - 72
     Sequence columns. . . . . . . :  
       Varying length. . . . . . . : none
       Fixed length. . . . . . . . : 73 - 80
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     2
 
 
                                       * * * * *   P R O L O G   * * * * *
 
                                * * * * *   E N D   O F   P R O L O G   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     3
 
 
                                           * * * * *   S O U R C E   * * * * *
 
  LINE  STMT                                                                                                       SEQNBR INCNO
              *...+....1....+....2....+....3....+....4....+....5....+....6....+....7....+....8....+....9....+..*
     1       | #include <stdio.h>                                                                               |      1
     2       | int main()                                                                                       |      2
     3       | {                                                                                                |      3
     4     1 |         short int len = 10;                                                                      |      4
     5     2 |         int x = 10;                                                                              |      5
     6     3 |         int y = 20;                                                                              |      6
     7       |                                                                                                  |      7
     8     4 |         printf("Hello from CADD");                                                               |      8
     9       |         EXEC CICS SEND TEXT                                                                      |      9
    10       |         FROM(x) LENGTH(len)                                                                      |     10
    11     5 |         ERASE;                                                                                   |     11
    12       |                                                                                                  |     12
    13       | }                                                                                                |     13
                                     * * * * *   E N D   O F   S O U R C E   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     4
 
 
                         * * * * *   I N C L U D E S   * * * * *
 
 INCLUDE FILES  ---  FILE#   NAME
 
                        1   CEE.SCEEH.H(STDIO)
                        2   CEE.SCEEH.H(FEATURES)
                        3   CEE.SCEEH.SYS.H(TYPES)
 
                         * * * * *   E N D   O F   I N C L U D E S   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     5
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 ___valist           1-1:142         Class = typedef, Length = 8
                                     Type = array[2] of pointer to unsigned char
                                     1-1:145, 1-1:456, 1-1:457, 1-1:459
 
 __abend             1-1:895         Type = struct with no tag in union at offset 0
 
 __alloc             1-1:905         Type = struct with no tag in union at offset 0
 
 __amrc_noseek_to_seek
                     1-1:938         Type = unsigned char in struct __amrctype at offset 232
 
 __amrc_pad          1-1:940         Type = array[23] of unsigned char in struct __amrctype at offset 233
 
 __amrc_ptr          1-1:947         Class = typedef, Length = 4
                                     Type = pointer to struct __amrctype
 
 __amrc_type         1-1:943         Class = typedef, Length = 256
                                     Type = struct __amrctype
                                     1-1:947
 
 __amrctype          1-1:877         Class = struct tag
 
 __amrc2_ptr         1-1:961         Class = typedef, Length = 4
                                     Type = pointer to struct __amrc2type
 
 __amrc2_type        1-1:957         Class = typedef, Length = 32
                                     Type = struct __amrc2type
                                     1-1:961
 
 __amrc2type         1-1:952         Class = struct tag
 
 __blksize           1-1:729         Type = unsigned long in struct __fileData at offset 8
 
 __bufPtr            1-1:78          Type = pointer to unsigned char in struct __file at offset 0
 
 __cntlinterpret     1-1:83          Type = unsigned int:1 in struct __file at offset 20(0)
 
 __code              1-1:906         Type = union with no tag in struct __amrctype at offset 0
 
 __countIn           1-1:79          Type = long in struct __file at offset 4
 
 __countOut          1-1:80          Type = long in struct __file at offset 8
 
 __cusp              1-1:201         Class = typedef, Length = 4
                                     Type = pointer to const unsigned short
 
 __device            1-1:728         Type = enum with no tag in struct __fileData at offset 4
 
 __device_specific   1-1:745         Type = union with no tag in struct __fileData at offset 16
 
 __device_t          1-1:663         Class = typedef, Length = 1
                                     Type = enum with no tag
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     6
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     1-1:728
 
 __disk              1-1:643         Class = enumeration constant: 0, Length = 4
                                     Type = int
 
 __disk              1-1:743         Type = struct with no tag in union at offset 0
 
 __disk_access_method
                     1-1:740         Type = unsigned char in struct at offset 2
 
 __disk_noseek_to_seek
                     1-1:741         Type = unsigned char in struct at offset 3
 
 __disk_reserve      1-1:742         Type = array[2] of long in struct at offset 4
 
 __disk_vsam_type    1-1:739         Type = unsigned short in struct at offset 0
 
 __dsname            1-1:746         Type = pointer to unsigned char in struct __fileData at offset 28
 
 __dsorgConcat       1-1:703         Type = unsigned int:1 in struct __fileData at offset 1(3)
 
 __dsorgHiper        1-1:705         Type = unsigned int:1 in struct __fileData at offset 1(5)
 
 __dsorgHFS          1-1:710         Type = unsigned int:1 in struct __fileData at offset 2(0)
 
 __dsorgMem          1-1:704         Type = unsigned int:1 in struct __fileData at offset 1(4)
 
 __dsorgPDSdir       1-1:701         Type = unsigned int:1 in struct __fileData at offset 1(1)
 
 __dsorgPDSmem       1-1:700         Type = unsigned int:1 in struct __fileData at offset 1(0)
 
 __dsorgPDSE         1-1:717         Type = unsigned int:1 in struct __fileData at offset 2(7)
 
 __dsorgPO           1-1:699         Type = unsigned int:1 in struct __fileData at offset 0(7)
 
 __dsorgPS           1-1:702         Type = unsigned int:1 in struct __fileData at offset 1(2)
 
 __dsorgTemp         1-1:706         Type = unsigned int:1 in struct __fileData at offset 1(6)
 
 __dsorgVSAM         1-1:707         Type = unsigned int:1 in struct __fileData at offset 1(7)
 
 __dummy             1-1:648         Class = enumeration constant: 6, Length = 4
                                     Type = int
 
 __error             1-1:889         Type = int in union at offset 0
 
 __error2            1-1:953         Type = int in struct __amrc2type at offset 0
 
 __fcb_ascii         1-1:84          Type = unsigned int:1 in struct __file at offset 20(1)
 
 __fcb_orientation   1-1:85          Type = unsigned int:2 in struct __file at offset 20(2)
 
 __fcbgetc           1-1:81          Type = pointer to function returning int in struct __file at offset 12
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     7
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 __fcbputc           1-1:82          Type = pointer to function returning int in struct __file at offset 16
 
 __fdbk              1-1:900         Type = unsigned char in struct at offset 3
 
 __fdbk_fill         1-1:897         Type = unsigned char in struct at offset 0
 
 __feedback          1-1:901         Type = struct with no tag in union at offset 0
 
 __ffile             1-1:88          Class = struct tag
                                     1-1:93, 1-1:99
 
 __file              1-1:73          Class = struct tag
                                     1-1:74, 1-1:75, 1-1:90
 
 __fileptr           1-1:955         Type = pointer to struct __ffile in struct __amrc2type at offset 4
 
 __fileData          1-1:691         Class = struct tag
                                     1-1:750
 
 __fill              1-1:864         Type = unsigned int in struct at offset 0
 
 __filler1           1-1:626         Type = unsigned char in struct __S99emparms at offset 3
 
 __fill2             1-1:920         Type = array[2] of unsigned int in struct at offset 136
 
 __fp                1-1:90          Type = pointer to struct __file in struct __ffile at offset 0
 
 __fpos_elem         1-1:104         Type = array[8] of long in struct __fpos_t at offset 0
 
 __fpos_t            1-1:103         Class = struct tag
                                     1-1:107
 
 __ftncd             1-1:899         Type = unsigned char in struct at offset 2
 
 __func__            3-0:3           Class = static, Length = 5
                                     Type = array[5] of const unsigned char in function main
 
 __hfs               1-1:655         Class = enumeration constant: 9, Length = 4
                                     Type = int
 
 __hiperspace        1-1:656         Class = enumeration constant: 10, Length = 4
                                     Type = int
 
 __last_op           1-1:913         Type = unsigned int in struct __amrctype at offset 8
 
 __len               1-1:916         Type = unsigned int in struct at offset 4
 
 __len_fill          1-1:915         Type = unsigned int in struct at offset 0
 
 __maxreclen         1-1:730         Type = unsigned long in struct __fileData at offset 12
 
 __memory            1-1:654         Class = enumeration constant: 8, Length = 4
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     8
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     Type = int
 
 __modeflag          1-1:716         Type = unsigned int:4 in struct __fileData at offset 2(3)
 
 __msg               1-1:923         Type = struct with no tag in struct __amrctype at offset 12
 
 __msgfile           1-1:651         Class = enumeration constant: 7, Length = 4
                                     Type = int
 
 __msgrtn            1-1:659         Class = enumeration constant: 11, Length = 4
                                     Type = int
 
 __openmode          1-1:715         Type = unsigned int:2 in struct __fileData at offset 2(1)
 
 __other             1-1:662         Class = enumeration constant: 255, Length = 4
                                     Type = int
 
 __parmr0            1-1:918         Type = unsigned int in struct at offset 128
 
 __parmr1            1-1:919         Type = unsigned int in struct at offset 132
 
 __printer           1-1:645         Class = enumeration constant: 2, Length = 4
                                     Type = int
 
 __rc                1-1:894         Type = unsigned short in struct at offset 2
 
 __rc                1-1:898         Type = unsigned char in struct at offset 1
 
 __recfmASA          1-1:697         Type = unsigned int:1 in struct __fileData at offset 0(5)
 
 __recfmB            1-1:722         Type = unsigned int:1 in struct __fileData at offset 3(4)
 
 __recfmBlk          1-1:696         Type = unsigned int:1 in struct __fileData at offset 0(4)
 
 __recfmF            1-1:692         Type = unsigned int:1 in struct __fileData at offset 0(0)
 
 __recfmM            1-1:698         Type = unsigned int:1 in struct __fileData at offset 0(6)
 
 __recfmS            1-1:695         Type = unsigned int:1 in struct __fileData at offset 0(3)
 
 __recfmU            1-1:694         Type = unsigned int:1 in struct __fileData at offset 0(2)
 
 __recfmV            1-1:693         Type = unsigned int:1 in struct __fileData at offset 0(1)
 
 __recnum            1-1:865         Type = unsigned int in struct at offset 4
 
 __reserved          1-1:609         Type = unsigned char in struct __S99rbx at offset 16
 
 __reserved          1-1:956         Type = array[6] of int in struct __amrc2type at offset 8
 
 __reserve2          1-1:723         Type = unsigned int:3 in struct __fileData at offset 3(5)
 
 __reserve4          1-1:747         Type = pointer to void in struct __fileData at offset 32
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page     9
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 __reserv1           1-1:631         Type = int in struct __S99emparms at offset 20
 
 __reserv2           1-1:617         Type = int in struct __S99rbx at offset 32
 
 __reserv2           1-1:632         Type = int in struct __S99emparms at offset 24
 
 __rplfdbwd          1-1:926         Type = array[4] of unsigned char in struct __amrctype at offset 220
 
 __rrds_key_type     1-1:870         Class = typedef, Length = 8
                                     Type = struct with no tag
 
 __snprtf                            Class = extern
                                     Type = function returning int
                                     1-1:1724
 
 __str               1-1:917         Type = array[120] of unsigned char in struct at offset 8
 
 __str2              1-1:921         Type = array[64] of unsigned char in struct at offset 144
 
 __svc99_error       1-1:904         Type = unsigned short in struct at offset 2
 
 __svc99_info        1-1:903         Type = unsigned short in struct at offset 0
 
 __syscode           1-1:893         Type = unsigned short in struct at offset 0
 
 __tape              1-1:646         Class = enumeration constant: 3, Length = 4
                                     Type = int
 
 __tdq               1-1:647         Class = enumeration constant: 5, Length = 4
                                     Type = int
 
 __terminal          1-1:644         Class = enumeration constant: 1, Length = 4
                                     Type = int
 
 __vsam              1-1:736         Type = struct with no tag in union at offset 0
 
 __vsam_keylen       1-1:734         Type = unsigned long in struct at offset 4
 
 __vsam_type         1-1:733         Type = unsigned short in struct at offset 0
 
 __vsam_RKP          1-1:735         Type = unsigned long in struct at offset 8
 
 __vsamEA            1-1:721         Type = unsigned int:1 in struct __fileData at offset 3(3)
 
 __vsamRLS           1-1:719         Type = unsigned int:3 in struct __fileData at offset 3(0)
 
 __EMBUFP            1-1:630         Type = pointer to void in struct __S99emparms at offset 16
 
 __EMCPPLP           1-1:629         Type = pointer to void in struct __S99emparms at offset 12
 
 __EMFUNCT           1-1:623         Type = unsigned char in struct __S99emparms at offset 0
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    10
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 __EMIDNUM           1-1:624         Type = unsigned char in struct __S99emparms at offset 1
 
 __EMNMSGBK          1-1:625         Type = unsigned char in struct __S99emparms at offset 2
 
 __EMRETCOD          1-1:628         Type = int in struct __S99emparms at offset 8
 
 __EMS99RBP          1-1:627         Type = pointer to void in struct __S99emparms at offset 4
 
 __FILEP             1-1:93          Class = typedef, Length = 4
                                     Type = pointer to struct __ffile
 
 __RBA               1-1:907         Type = unsigned int in struct __amrctype at offset 4
 
 __S99emparms        1-1:622         Class = struct tag
                                     1-1:635
 
 __S99emparms_t      1-1:635         Class = typedef, Length = 28
                                     Type = struct __S99emparms
 
 __S99parms          1-1:595         Class = typedef, Length = 20
                                     Type = struct __S99struc
                                     1-1:833
 
 __S99rbx            1-1:599         Class = struct tag
                                     1-1:620
 
 __S99rbx_t          1-1:620         Class = typedef, Length = 36
                                     Type = struct __S99rbx
 
 __S99struc          1-1:578         Class = struct tag
                                     1-1:595
 
 __S99ECPPL          1-1:608         Type = pointer to void in struct __S99rbx at offset 12
 
 __S99EERR           1-1:615         Type = unsigned short in struct __S99rbx at offset 28
 
 __S99EID            1-1:601         Type = array[6] of unsigned char in struct __S99rbx at offset 0
 
 __S99EINFO          1-1:616         Type = unsigned short in struct __S99rbx at offset 30
 
 __S99EKEY           1-1:605         Type = unsigned char in struct __S99rbx at offset 9
 
 __S99EMGSV          1-1:606         Type = unsigned char in struct __S99rbx at offset 10
 
 __S99EMSGP          1-1:614         Type = pointer to void in struct __S99rbx at offset 24
 
 __S99ENMSG          1-1:607         Type = unsigned char in struct __S99rbx at offset 11
 
 __S99EOPTS          1-1:603         Type = unsigned char in struct __S99rbx at offset 7
 
 __S99ERCF           1-1:612         Type = unsigned char in struct __S99rbx at offset 19
 
 __S99ERCO           1-1:611         Type = unsigned char in struct __S99rbx at offset 18
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    11
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 __S99ERES           1-1:610         Type = unsigned char in struct __S99rbx at offset 17
 
 __S99ERROR          1-1:584         Type = unsigned short in struct __S99struc at offset 4
 
 __S99ESUBP          1-1:604         Type = unsigned char in struct __S99rbx at offset 8
 
 __S99EVER           1-1:602         Type = unsigned char in struct __S99rbx at offset 6
 
 __S99EWRC           1-1:613         Type = int in struct __S99rbx at offset 20
 
 __S99FLAG1          1-1:582         Type = unsigned short in struct __S99struc at offset 2
 
 __S99FLAG2          1-1:590         Type = unsigned int in struct __S99struc at offset 16
 
 __S99INFO           1-1:585         Type = unsigned short in struct __S99struc at offset 6
 
 __S99RBLN           1-1:580         Type = unsigned char in struct __S99struc at offset 0
 
 __S99S99X           1-1:588         Type = pointer to void in struct __S99struc at offset 12
 
 __S99TXTPP          1-1:586         Type = pointer to void in struct __S99struc at offset 8
 
 __S99VERB           1-1:581         Type = unsigned char in struct __S99struc at offset 1
 
 __XRBA              1-1:932         Type = unsigned long long in struct __amrctype at offset 224
 
 _gtca                               Class = extern
                                     Type = function returning pointer to const void
                                     1-1:166
 
 _Gtab                               Class = extern
                                     Type = function returning pointer to pointer to void
                                     1-1:156
 
 _GETCFUNC           1-1:74          Class = typedef
                                     Type = function returning int
                                     1-1:81
 
 _PUTCFUNC           1-1:75          Class = typedef
                                     Type = function returning int
                                     1-1:82
 
 clearerr                            Class = extern
                                     Type = function returning void
                                     1-1:406
 
 clrmemf                             Class = extern
                                     Type = function returning int
                                     1-1:837
 
 dfhbp020            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    12
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     11-0:11
 
 dfhbp021            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
 
 dfhbp022            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
 
 dfhbp023            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
 
 dfhbp024            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
 
 dfhbp025            1-1:58          Class = extern, Length = 4
                                     Type = pointer to short
 
 dfhb0020            1-1:58          Class = extern, Length = 2
                                     Type = short
                                     11-0:11
 
 dfhb0021            1-1:58          Class = extern, Length = 2
                                     Type = short
 
 dfhb0022            1-1:58          Class = extern, Length = 2
                                     Type = short
 
 dfhb0023            1-1:58          Class = extern, Length = 2
                                     Type = short
 
 dfhb0024            1-1:58          Class = extern, Length = 2
                                     Type = short
 
 dfhb0025            1-1:58          Class = extern, Length = 2
                                     Type = short
 
 dfhcp010            1-1:58          Class = extern, Length = 4
                                     Type = pointer to unsigned char
 
 dfhcp011            1-1:58          Class = extern, Length = 4
                                     Type = pointer to unsigned char
 
 dfhc0010            1-1:58          Class = extern, Length = 1
                                     Type = unsigned char
 
 dfhc0011            1-1:58          Class = extern, Length = 1
                                     Type = unsigned char
 
 dfhdummy            1-1:58          Class = extern, Length = 2
                                     Type = short
                                     11-0:11
 
 dfheib0             1-1:58          Class = extern, Length = 2
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    13
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     Type = unsigned short
 
 dfheicb             1-1:58          Class = extern, Length = 4
                                     Type = pointer to unsigned char
 
 dfheid0             1-1:58          Class = extern, Length = 4
                                     Type = pointer to unsigned char
 
 dfheiptr            1-1:58          Class = extern, Length = 4
                                     Type = pointer to struct with no tag
 
 dfhldver            1-1:58          Class = extern, Length = 4
                                     Type = pointer to unsigned char
 
 eibaid              1-1:58          Type = unsigned char in struct at offset 26
 
 eibatt              1-1:58          Type = unsigned char in struct at offset 63
 
 eibcalen            1-1:58          Type = short in struct at offset 24
 
 eibcompl            1-1:58          Type = unsigned char in struct at offset 66
 
 eibconf             1-1:58          Type = unsigned char in struct at offset 68
 
 eibcposn            1-1:58          Type = short in struct at offset 22
 
 eibdate             1-1:58          Type = array[4] of unsigned char in struct at offset 4
 
 eibds               1-1:58          Type = array[8] of unsigned char in struct at offset 35
 
 eibeoc              1-1:58          Type = unsigned char in struct at offset 64
 
 eiberr              1-1:58          Type = unsigned char in struct at offset 69
 
 eiberrcd            1-1:58          Type = array[4] of unsigned char in struct at offset 70
 
 eibfil01            1-1:58          Type = short in struct at offset 20
 
 eibfil02            1-1:58          Type = unsigned char in struct at offset 62
 
 eibfmh              1-1:58          Type = unsigned char in struct at offset 65
 
 eibfn               1-1:58          Type = array[2] of unsigned char in struct at offset 27
 
 eibfree             1-1:58          Type = unsigned char in struct at offset 60
 
 eibnodat            1-1:58          Type = unsigned char in struct at offset 75
 
 eibrcode            1-1:58          Type = array[6] of unsigned char in struct at offset 29
 
 eibrecv             1-1:58          Type = unsigned char in struct at offset 61
 
 eibreqid            1-1:58          Type = array[8] of unsigned char in struct at offset 43
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    14
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 eibresp             1-1:58          Type = long in struct at offset 76
 
 eibresp2            1-1:58          Type = long in struct at offset 80
 
 eibrldbk            1-1:58          Type = unsigned char in struct at offset 84
 
 eibrsrce            1-1:58          Type = array[8] of unsigned char in struct at offset 51
 
 eibsig              1-1:58          Type = unsigned char in struct at offset 67
 
 eibsync             1-1:58          Type = unsigned char in struct at offset 59
 
 eibsynrb            1-1:58          Type = unsigned char in struct at offset 74
 
 eibtaskn            1-1:58          Type = array[4] of unsigned char in struct at offset 12
 
 eibtime             1-1:58          Type = array[4] of unsigned char in struct at offset 0
 
 eibtrmid            1-1:58          Type = array[4] of unsigned char in struct at offset 16
 
 eibtrnid            1-1:58          Type = array[4] of unsigned char in struct at offset 8
 
 fclose                              Class = extern
                                     Type = function returning int
                                     1-1:407
 
 fdelrec                             Class = extern
                                     Type = function returning int
                                     1-1:835
 
 feof                                Class = extern
                                     Type = function returning int
                                     1-1:408
 
 ferror                              Class = extern
                                     Type = function returning int
                                     1-1:409
 
 fflush                              Class = extern
                                     Type = function returning int
                                     1-1:410
 
 fgetc                               Class = extern
                                     Type = function returning int
                                     1-1:411
 
 fgetpos                             Class = extern
                                     Type = function returning int
                                     1-1:412
 
 fgets                               Class = extern
                                     Type = function returning pointer to unsigned char
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    15
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     1-1:413
 
 fldata                              Class = extern
                                     Type = function returning int
                                     1-1:838
 
 fldata_t            1-1:750         Class = typedef, Length = 36
                                     Type = struct __fileData
                                     1-1:838
 
 flocate                             Class = extern
                                     Type = function returning int
                                     1-1:834
 
 fopen                               Class = extern
                                     Type = function returning pointer to struct __ffile
                                     1-1:414
 
 fpos_t              1-1:107         Class = typedef, Length = 32
                                     Type = struct __fpos_t
                                     1-1:412, 1-1:427
 
 fprintf                             Class = extern
                                     Type = function returning int
                                     1-1:416
 
 fputc                               Class = extern
                                     Type = function returning int
                                     1-1:418
 
 fputs                               Class = extern
                                     Type = function returning int
                                     1-1:419
 
 fread                               Class = extern
                                     Type = function returning unsigned int
                                     1-1:420
 
 freopen                             Class = extern
                                     Type = function returning pointer to struct __ffile
                                     1-1:422
 
 fscanf                              Class = extern
                                     Type = function returning int
                                     1-1:424
 
 fseek                               Class = extern
                                     Type = function returning int
                                     1-1:426
 
 fsetpos                             Class = extern
                                     Type = function returning int
                                     1-1:427
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    16
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
 
 ftell                               Class = extern
                                     Type = function returning long
                                     1-1:428
 
 fupdate                             Class = extern
                                     Type = function returning unsigned int
                                     1-1:836
 
 fwrite                              Class = extern
                                     Type = function returning unsigned int
                                     1-1:429
 
 getc                                Class = extern
                                     Type = function returning int
                                     1-1:431
 
 getchar                             Class = extern
                                     Type = function returning int
                                     1-1:432
 
 gets                                Class = extern
                                     Type = function returning pointer to unsigned char
                                     1-1:433
 
 len                 4-0:4           Class = auto, Length = 2
                                     Type = short in function main
                                     4-0:4, 11-0:11
 
 main                2-0:2           Class = extern
                                     Type = function returning int
 
 perror                              Class = extern
                                     Type = function returning void
                                     1-1:434
 
 printf                              Class = extern
                                     Type = function returning int
                                     1-1:435, 8-0:8
 
 putc                                Class = extern
                                     Type = function returning int
                                     1-1:436
 
 putchar                             Class = extern
                                     Type = function returning int
                                     1-1:437
 
 puts                                Class = extern
                                     Type = function returning int
                                     1-1:438
 
 remove                              Class = extern
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    17
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     Type = function returning int
                                     1-1:439
 
 rename                              Class = extern
                                     Type = function returning int
                                     1-1:440
 
 rewind                              Class = extern
                                     Type = function returning void
                                     1-1:441
 
 scanf                               Class = extern
                                     Type = function returning int
                                     1-1:442
 
 setbuf                              Class = extern
                                     Type = function returning void
                                     1-1:443
 
 setvbuf                             Class = extern
                                     Type = function returning int
                                     1-1:444
 
 size_t              1-1:58          Class = typedef, Length = 4
                                     Type = unsigned int
                                     1-1:420, 1-1:420, 1-1:421, 1-1:429, 1-1:429, 1-1:429, 1-1:445, 1-1:834, 1-1:836, 1-1:836, 
                                     1-1:1725
 
 sprintf                             Class = extern
                                     Type = function returning int
                                     1-1:447
 
 sscanf                              Class = extern
                                     Type = function returning int
                                     1-1:450
 
 ssize_t             1-1:67          Class = typedef, Length = 4
                                     Type = int
 
 svc99                               Class = extern
                                     Type = function returning int
                                     1-1:833
 
 tmpfile                             Class = extern
                                     Type = function returning pointer to struct __ffile
                                     1-1:452
 
 tmpnam                              Class = extern
                                     Type = function returning pointer to unsigned char
                                     1-1:453
 
 ungetc                              Class = extern
                                     Type = function returning int
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    18
 
 
                                 * * * * *   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
 
 IDENTIFIER          DEFINITION      ATTRIBUTES
                                     <SEQNBR>-<FILE NO>:<FILE LINE NO>
                                     1-1:454
 
 va_list             1-1:145         Class = typedef, Length = 8
                                     Type = array[2] of pointer to unsigned char
 
 vfprintf                            Class = extern
                                     Type = function returning int
                                     1-1:455
 
 vprintf                             Class = extern
                                     Type = function returning int
                                     1-1:457
 
 vsprintf                            Class = extern
                                     Type = function returning int
                                     1-1:458
 
 x                   5-0:5           Class = auto, Length = 4
                                     Type = int in function main
                                     5-0:5, 11-0:11
 
 y                   6-0:6           Class = auto, Length = 4
                                     Type = int in function main
                                     6-0:6
 
 DFHEIBLK            1-1:58          Class = typedef, Length = 88
                                     Type = struct with no tag
                                     1-1:58
 
 DFHEXEC                             Class = extern
                                     Type = function returning void
                                     1-1:58, 11-0:11
 
 FILE                1-1:99          Class = typedef, Length = 4
                                     Type = struct __ffile
                                     1-1:406, 1-1:407, 1-1:408, 1-1:409, 1-1:410, 1-1:411, 1-1:412, 1-1:413, 1-1:414, 1-1:416, 
                                     1-1:418, 1-1:419, 1-1:421, 1-1:422, 1-1:423, 1-1:424, 1-1:426, 1-1:427, 1-1:428, 1-1:430, 
                                     1-1:431, 1-1:436, 1-1:441, 1-1:443, 1-1:444, 1-1:452, 1-1:454, 1-1:455, 1-1:834, 1-1:835, 
                                     1-1:836, 1-1:838, 1-1:955
 
                          * * * * *   E N D   O F   C R O S S   R E F E R E N C E   L I S T I N G   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    19
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #1                                                       Total size: 88 bytes             |
 |.................................................................................................................................|
 |DFHEIBLK                                                                                                                         |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  eibtime[4]                                                                             |
 |       4           |       4           |  eibdate[4]                                                                             |
 |       8           |       4           |  eibtrnid[4]                                                                            |
 |      12           |       4           |  eibtaskn[4]                                                                            |
 |      16           |       4           |  eibtrmid[4]                                                                            |
 |      20           |       2           |  eibfil01                                                                               |
 |      22           |       2           |  eibcposn                                                                               |
 |      24           |       2           |  eibcalen                                                                               |
 |      26           |       1           |  eibaid                                                                                 |
 |      27           |       2           |  eibfn[2]                                                                               |
 |      29           |       6           |  eibrcode[6]                                                                            |
 |      35           |       8           |  eibds[8]                                                                               |
 |      43           |       8           |  eibreqid[8]                                                                            |
 |      51           |       8           |  eibrsrce[8]                                                                            |
 |      59           |       1           |  eibsync                                                                                |
 |      60           |       1           |  eibfree                                                                                |
 |      61           |       1           |  eibrecv                                                                                |
 |      62           |       1           |  eibfil02                                                                               |
 |      63           |       1           |  eibatt                                                                                 |
 |      64           |       1           |  eibeoc                                                                                 |
 |      65           |       1           |  eibfmh                                                                                 |
 |      66           |       1           |  eibcompl                                                                               |
 |      67           |       1           |  eibsig                                                                                 |
 |      68           |       1           |  eibconf                                                                                |
 |      69           |       1           |  eiberr                                                                                 |
 |      70           |       4           |  eiberrcd[4]                                                                            |
 |      74           |       1           |  eibsynrb                                                                               |
 |      75           |       1           |  eibnodat                                                                               |
 |      76           |       4           |  eibresp                                                                                |
 |      80           |       4           |  eibresp2                                                                               |
 |      84           |       1           |  eibrldbk                                                                               |
 |      85           |       3           |  ***PADDING***                                                                          |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct with no tag #1                                               Total size: 85 bytes             |
 |.................................................................................................................................|
 |_Packed DFHEIBLK                                                                                                                 |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  eibtime[4]                                                                             |
 |       4           |       4           |  eibdate[4]                                                                             |
 |       8           |       4           |  eibtrnid[4]                                                                            |
 |      12           |       4           |  eibtaskn[4]                                                                            |
 |      16           |       4           |  eibtrmid[4]                                                                            |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    20
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |      20           |       2           |  eibfil01                                                                               |
 |      22           |       2           |  eibcposn                                                                               |
 |      24           |       2           |  eibcalen                                                                               |
 |      26           |       1           |  eibaid                                                                                 |
 |      27           |       2           |  eibfn[2]                                                                               |
 |      29           |       6           |  eibrcode[6]                                                                            |
 |      35           |       8           |  eibds[8]                                                                               |
 |      43           |       8           |  eibreqid[8]                                                                            |
 |      51           |       8           |  eibrsrce[8]                                                                            |
 |      59           |       1           |  eibsync                                                                                |
 |      60           |       1           |  eibfree                                                                                |
 |      61           |       1           |  eibrecv                                                                                |
 |      62           |       1           |  eibfil02                                                                               |
 |      63           |       1           |  eibatt                                                                                 |
 |      64           |       1           |  eibeoc                                                                                 |
 |      65           |       1           |  eibfmh                                                                                 |
 |      66           |       1           |  eibcompl                                                                               |
 |      67           |       1           |  eibsig                                                                                 |
 |      68           |       1           |  eibconf                                                                                |
 |      69           |       1           |  eiberr                                                                                 |
 |      70           |       4           |  eiberrcd[4]                                                                            |
 |      74           |       1           |  eibsynrb                                                                               |
 |      75           |       1           |  eibnodat                                                                               |
 |      76           |       4           |  eibresp                                                                                |
 |      80           |       4           |  eibresp2                                                                               |
 |      84           |       1           |  eibrldbk                                                                               |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: union with no tag #2                                                        Total size: 12 bytes             |
 |.................................................................................................................................|
 |__device_specific                                                                                                                |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |      12           |  __vsam                                                                                 |
 |       0           |       2           |    __vsam_type                                                                          |
 |       2           |       2           |    ***PADDING***                                                                        |
 |       4           |       4           |    __vsam_keylen                                                                        |
 |       8           |       4           |    __vsam_RKP                                                                           |
 |       0           |      12           |  __disk                                                                                 |
 |       0           |       2           |    __disk_vsam_type                                                                     |
 |       2           |       1           |    __disk_access_method                                                                 |
 |       3           |       1           |    __disk_noseek_to_seek                                                                |
 |       4           |       8           |    __disk_reserve[2]                                                                    |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #3                                                       Total size: 12 bytes             |
 |.................................................................................................................................|
 |__vsam                                                                                                                           |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    21
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |       0           |       2           |  __vsam_type                                                                            |
 |       2           |       2           |  ***PADDING***                                                                          |
 |       4           |       4           |  __vsam_keylen                                                                          |
 |       8           |       4           |  __vsam_RKP                                                                             |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #4                                                       Total size: 12 bytes             |
 |.................................................................................................................................|
 |__disk                                                                                                                           |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       2           |  __disk_vsam_type                                                                       |
 |       2           |       1           |  __disk_access_method                                                                   |
 |       3           |       1           |  __disk_noseek_to_seek                                                                  |
 |       4           |       8           |  __disk_reserve[2]                                                                      |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #5                                                       Total size: 8 bytes              |
 |.................................................................................................................................|
 |__rrds_key_type                                                                                                                  |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __fill                                                                                 |
 |       4           |       4           |  __recnum                                                                               |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct with no tag #5                                               Total size: 8 bytes              |
 |.................................................................................................................................|
 |_Packed __rrds_key_type                                                                                                          |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __fill                                                                                 |
 |       4           |       4           |  __recnum                                                                               |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: union with no tag #6                                                        Total size: 4 bytes              |
 |.................................................................................................................................|
 |__code                                                                                                                           |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __error                                                                                |
 |       0           |       4           |  __abend                                                                                |
 |       0           |       2           |    __syscode                                                                            |
 |       2           |       2           |    __rc                                                                                 |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    22
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |       0           |       4           |  __feedback                                                                             |
 |       0           |       1           |    __fdbk_fill                                                                          |
 |       1           |       1           |    __rc                                                                                 |
 |       2           |       1           |    __ftncd                                                                              |
 |       3           |       1           |    __fdbk                                                                               |
 |       0           |       4           |  __alloc                                                                                |
 |       0           |       2           |    __svc99_info                                                                         |
 |       2           |       2           |    __svc99_error                                                                        |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #7                                                       Total size: 4 bytes              |
 |.................................................................................................................................|
 |__abend                                                                                                                          |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       2           |  __syscode                                                                              |
 |       2           |       2           |  __rc                                                                                   |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #8                                                       Total size: 4 bytes              |
 |.................................................................................................................................|
 |__feedback                                                                                                                       |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       1           |  __fdbk_fill                                                                            |
 |       1           |       1           |  __rc                                                                                   |
 |       2           |       1           |  __ftncd                                                                                |
 |       3           |       1           |  __fdbk                                                                                 |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #9                                                       Total size: 4 bytes              |
 |.................................................................................................................................|
 |__alloc                                                                                                                          |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       2           |  __svc99_info                                                                           |
 |       2           |       2           |  __svc99_error                                                                          |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct with no tag #10                                                      Total size: 208 bytes            |
 |.................................................................................................................................|
 |__msg                                                                                                                            |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    23
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |       0           |       4           |  __len_fill                                                                             |
 |       4           |       4           |  __len                                                                                  |
 |       8           |     120           |  __str[120]                                                                             |
 |     128           |       4           |  __parmr0                                                                               |
 |     132           |       4           |  __parmr1                                                                               |
 |     136           |       8           |  __fill2[2]                                                                             |
 |     144           |      64           |  __str2[64]                                                                             |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __amrctype                                                           Total size: 256 bytes            |
 |.................................................................................................................................|
 |__amrc_type                                                                                                                      |
 |*__amrc_ptr                                                                                                                      |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __code                                                                                 |
 |       0           |       4           |    __error                                                                              |
 |       0           |       4           |    __abend                                                                              |
 |       0           |       2           |      __syscode                                                                          |
 |       2           |       2           |      __rc                                                                               |
 |       0           |       4           |    __feedback                                                                           |
 |       0           |       1           |      __fdbk_fill                                                                        |
 |       1           |       1           |      __rc                                                                               |
 |       2           |       1           |      __ftncd                                                                            |
 |       3           |       1           |      __fdbk                                                                             |
 |       0           |       4           |    __alloc                                                                              |
 |       0           |       2           |      __svc99_info                                                                       |
 |       2           |       2           |      __svc99_error                                                                      |
 |       4           |       4           |  __RBA                                                                                  |
 |       8           |       4           |  __last_op                                                                              |
 |      12           |     208           |  __msg                                                                                  |
 |      12           |       4           |    __len_fill                                                                           |
 |      16           |       4           |    __len                                                                                |
 |      20           |     120           |    __str[120]                                                                           |
 |     140           |       4           |    __parmr0                                                                             |
 |     144           |       4           |    __parmr1                                                                             |
 |     148           |       8           |    __fill2[2]                                                                           |
 |     156           |      64           |    __str2[64]                                                                           |
 |     220           |       4           |  __rplfdbwd[4]                                                                          |
 |     224           |       8           |  __XRBA                                                                                 |
 |     232           |       1           |  __amrc_noseek_to_seek                                                                  |
 |     233           |      23           |  __amrc_pad[23]                                                                         |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __amrctype                                                   Total size: 256 bytes            |
 |.................................................................................................................................|
 |_Packed __amrc_type                                                                                                              |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __code                                                                                 |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    24
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |       0           |       4           |    __error                                                                              |
 |       0           |       4           |    __abend                                                                              |
 |       0           |       2           |      __syscode                                                                          |
 |       2           |       2           |      __rc                                                                               |
 |       0           |       4           |    __feedback                                                                           |
 |       0           |       1           |      __fdbk_fill                                                                        |
 |       1           |       1           |      __rc                                                                               |
 |       2           |       1           |      __ftncd                                                                            |
 |       3           |       1           |      __fdbk                                                                             |
 |       0           |       4           |    __alloc                                                                              |
 |       0           |       2           |      __svc99_info                                                                       |
 |       2           |       2           |      __svc99_error                                                                      |
 |       4           |       4           |  __RBA                                                                                  |
 |       8           |       4           |  __last_op                                                                              |
 |      12           |     208           |  __msg                                                                                  |
 |      12           |       4           |    __len_fill                                                                           |
 |      16           |       4           |    __len                                                                                |
 |      20           |     120           |    __str[120]                                                                           |
 |     140           |       4           |    __parmr0                                                                             |
 |     144           |       4           |    __parmr1                                                                             |
 |     148           |       8           |    __fill2[2]                                                                           |
 |     156           |      64           |    __str2[64]                                                                           |
 |     220           |       4           |  __rplfdbwd[4]                                                                          |
 |     224           |       8           |  __XRBA                                                                                 |
 |     232           |       1           |  __amrc_noseek_to_seek                                                                  |
 |     233           |      23           |  __amrc_pad[23]                                                                         |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __amrc2type                                                          Total size: 32 bytes             |
 |.................................................................................................................................|
 |__amrc2_type                                                                                                                     |
 |*__amrc2_ptr                                                                                                                     |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __error2                                                                               |
 |       4           |       4           |  __fileptr                                                                              |
 |       8           |      24           |  __reserved[6]                                                                          |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __amrc2type                                                  Total size: 32 bytes             |
 |.................................................................................................................................|
 |_Packed __amrc2_type                                                                                                             |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __error2                                                                               |
 |       4           |       4           |  __fileptr                                                                              |
 |       8           |      24           |  __reserved[6]                                                                          |
 ===================================================================================================================================
 
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    25
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 
 ===================================================================================================================================
 | Aggregate map for: struct __ffile                                                              Total size: 4 bytes              |
 |.................................................................................................................................|
 |*__FILEP                                                                                                                         |
 |FILE                                                                                                                             |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __fp                                                                                   |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __ffile                                                      Total size: 4 bytes              |
 |.................................................................................................................................|
 |_Packed FILE                                                                                                                     |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __fp                                                                                   |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __file                                                               Total size: 24 bytes             |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __bufPtr                                                                               |
 |       4           |       4           |  __countIn                                                                              |
 |       8           |       4           |  __countOut                                                                             |
 |      12           |       4           |  __fcbgetc                                                                              |
 |      16           |       4           |  __fcbputc                                                                              |
 |      20           |       0(1)        |  __cntlinterpret                                                                        |
 |      20(1)        |       0(1)        |  __fcb_ascii                                                                            |
 |      20(2)        |       0(2)        |  __fcb_orientation                                                                      |
 |      20(4)        |       3(4)        |  ***PADDING***                                                                          |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __file                                                       Total size: 21 bytes             |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       4           |  __bufPtr                                                                               |
 |       4           |       4           |  __countIn                                                                              |
 |       8           |       4           |  __countOut                                                                             |
 |      12           |       4           |  __fcbgetc                                                                              |
 |      16           |       4           |  __fcbputc                                                                              |
 |      20           |       0(1)        |  __cntlinterpret                                                                        |
 |      20(1)        |       0(1)        |  __fcb_ascii                                                                            |
 |      20(2)        |       0(2)        |  __fcb_orientation                                                                      |
 |      20(4)        |       0(4)        |  ***PADDING***                                                                          |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    26
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __fileData                                                           Total size: 36 bytes             |
 |.................................................................................................................................|
 |fldata_t                                                                                                                         |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       0(1)        |  __recfmF                                                                               |
 |       0(1)        |       0(1)        |  __recfmV                                                                               |
 |       0(2)        |       0(1)        |  __recfmU                                                                               |
 |       0(3)        |       0(1)        |  __recfmS                                                                               |
 |       0(4)        |       0(1)        |  __recfmBlk                                                                             |
 |       0(5)        |       0(1)        |  __recfmASA                                                                             |
 |       0(6)        |       0(1)        |  __recfmM                                                                               |
 |       0(7)        |       0(1)        |  __dsorgPO                                                                              |
 |       1           |       0(1)        |  __dsorgPDSmem                                                                          |
 |       1(1)        |       0(1)        |  __dsorgPDSdir                                                                          |
 |       1(2)        |       0(1)        |  __dsorgPS                                                                              |
 |       1(3)        |       0(1)        |  __dsorgConcat                                                                          |
 |       1(4)        |       0(1)        |  __dsorgMem                                                                             |
 |       1(5)        |       0(1)        |  __dsorgHiper                                                                           |
 |       1(6)        |       0(1)        |  __dsorgTemp                                                                            |
 |       1(7)        |       0(1)        |  __dsorgVSAM                                                                            |
 |       2           |       0(1)        |  __dsorgHFS                                                                             |
 |       2(1)        |       0(2)        |  __openmode                                                                             |
 |       2(3)        |       0(4)        |  __modeflag                                                                             |
 |       2(7)        |       0(1)        |  __dsorgPDSE                                                                            |
 |       3           |       0(3)        |  __vsamRLS                                                                              |
 |       3(3)        |       0(1)        |  __vsamEA                                                                               |
 |       3(4)        |       0(1)        |  __recfmB                                                                               |
 |       3(5)        |       0(3)        |  __reserve2                                                                             |
 |       4           |       1           |  __device                                                                               |
 |       5           |       3           |  ***PADDING***                                                                          |
 |       8           |       4           |  __blksize                                                                              |
 |      12           |       4           |  __maxreclen                                                                            |
 |      16           |      12           |  __device_specific                                                                      |
 |      16           |      12           |    __vsam                                                                               |
 |      16           |       2           |      __vsam_type                                                                        |
 |      18           |       2           |      ***PADDING***                                                                      |
 |      20           |       4           |      __vsam_keylen                                                                      |
 |      24           |       4           |      __vsam_RKP                                                                         |
 |      16           |      12           |    __disk                                                                               |
 |      16           |       2           |      __disk_vsam_type                                                                   |
 |      18           |       1           |      __disk_access_method                                                               |
 |      19           |       1           |      __disk_noseek_to_seek                                                              |
 |      20           |       8           |      __disk_reserve[2]                                                                  |
 |      28           |       4           |  __dsname                                                                               |
 |      32           |       4           |  __reserve4                                                                             |
 ===================================================================================================================================
 
 
 
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    27
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __fileData                                                   Total size: 33 bytes             |
 |.................................................................................................................................|
 |_Packed fldata_t                                                                                                                 |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       0(1)        |  __recfmF                                                                               |
 |       0(1)        |       0(1)        |  __recfmV                                                                               |
 |       0(2)        |       0(1)        |  __recfmU                                                                               |
 |       0(3)        |       0(1)        |  __recfmS                                                                               |
 |       0(4)        |       0(1)        |  __recfmBlk                                                                             |
 |       0(5)        |       0(1)        |  __recfmASA                                                                             |
 |       0(6)        |       0(1)        |  __recfmM                                                                               |
 |       0(7)        |       0(1)        |  __dsorgPO                                                                              |
 |       1           |       0(1)        |  __dsorgPDSmem                                                                          |
 |       1(1)        |       0(1)        |  __dsorgPDSdir                                                                          |
 |       1(2)        |       0(1)        |  __dsorgPS                                                                              |
 |       1(3)        |       0(1)        |  __dsorgConcat                                                                          |
 |       1(4)        |       0(1)        |  __dsorgMem                                                                             |
 |       1(5)        |       0(1)        |  __dsorgHiper                                                                           |
 |       1(6)        |       0(1)        |  __dsorgTemp                                                                            |
 |       1(7)        |       0(1)        |  __dsorgVSAM                                                                            |
 |       2           |       0(1)        |  __dsorgHFS                                                                             |
 |       2(1)        |       0(2)        |  __openmode                                                                             |
 |       2(3)        |       0(4)        |  __modeflag                                                                             |
 |       2(7)        |       0(1)        |  __dsorgPDSE                                                                            |
 |       3           |       0(3)        |  __vsamRLS                                                                              |
 |       3(3)        |       0(1)        |  __vsamEA                                                                               |
 |       3(4)        |       0(1)        |  __recfmB                                                                               |
 |       3(5)        |       0(3)        |  __reserve2                                                                             |
 |       4           |       1           |  __device                                                                               |
 |       5           |       4           |  __blksize                                                                              |
 |       9           |       4           |  __maxreclen                                                                            |
 |      13           |      12           |  __device_specific                                                                      |
 |      13           |      12           |    __vsam                                                                               |
 |      13           |       2           |      __vsam_type                                                                        |
 |      15           |       2           |      ***PADDING***                                                                      |
 |      17           |       4           |      __vsam_keylen                                                                      |
 |      21           |       4           |      __vsam_RKP                                                                         |
 |      13           |      12           |    __disk                                                                               |
 |      13           |       2           |      __disk_vsam_type                                                                   |
 |      15           |       1           |      __disk_access_method                                                               |
 |      16           |       1           |      __disk_noseek_to_seek                                                              |
 |      17           |       8           |      __disk_reserve[2]                                                                  |
 |      25           |       4           |  __dsname                                                                               |
 |      29           |       4           |  __reserve4                                                                             |
 ===================================================================================================================================
 
 
 
 
 
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    28
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 
 ===================================================================================================================================
 | Aggregate map for: struct __fpos_t                                                             Total size: 32 bytes             |
 |.................................................................................................................................|
 |fpos_t                                                                                                                           |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |      32           |  __fpos_elem[8]                                                                         |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __fpos_t                                                     Total size: 32 bytes             |
 |.................................................................................................................................|
 |_Packed fpos_t                                                                                                                   |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |      32           |  __fpos_elem[8]                                                                         |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __S99emparms                                                         Total size: 28 bytes             |
 |.................................................................................................................................|
 |__S99emparms_t                                                                                                                   |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       1           |  __EMFUNCT                                                                              |
 |       1           |       1           |  __EMIDNUM                                                                              |
 |       2           |       1           |  __EMNMSGBK                                                                             |
 |       3           |       1           |  __filler1                                                                              |
 |       4           |       4           |  __EMS99RBP                                                                             |
 |       8           |       4           |  __EMRETCOD                                                                             |
 |      12           |       4           |  __EMCPPLP                                                                              |
 |      16           |       4           |  __EMBUFP                                                                               |
 |      20           |       4           |  __reserv1                                                                              |
 |      24           |       4           |  __reserv2                                                                              |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __S99emparms                                                 Total size: 28 bytes             |
 |.................................................................................................................................|
 |_Packed __S99emparms_t                                                                                                           |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       1           |  __EMFUNCT                                                                              |
 |       1           |       1           |  __EMIDNUM                                                                              |
 |       2           |       1           |  __EMNMSGBK                                                                             |
 |       3           |       1           |  __filler1                                                                              |
 |       4           |       4           |  __EMS99RBP                                                                             |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    29
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |       8           |       4           |  __EMRETCOD                                                                             |
 |      12           |       4           |  __EMCPPLP                                                                              |
 |      16           |       4           |  __EMBUFP                                                                               |
 |      20           |       4           |  __reserv1                                                                              |
 |      24           |       4           |  __reserv2                                                                              |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __S99rbx                                                             Total size: 36 bytes             |
 |.................................................................................................................................|
 |__S99rbx_t                                                                                                                       |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       6           |  __S99EID[6]                                                                            |
 |       6           |       1           |  __S99EVER                                                                              |
 |       7           |       1           |  __S99EOPTS                                                                             |
 |       8           |       1           |  __S99ESUBP                                                                             |
 |       9           |       1           |  __S99EKEY                                                                              |
 |      10           |       1           |  __S99EMGSV                                                                             |
 |      11           |       1           |  __S99ENMSG                                                                             |
 |      12           |       4           |  __S99ECPPL                                                                             |
 |      16           |       1           |  __reserved                                                                             |
 |      17           |       1           |  __S99ERES                                                                              |
 |      18           |       1           |  __S99ERCO                                                                              |
 |      19           |       1           |  __S99ERCF                                                                              |
 |      20           |       4           |  __S99EWRC                                                                              |
 |      24           |       4           |  __S99EMSGP                                                                             |
 |      28           |       2           |  __S99EERR                                                                              |
 |      30           |       2           |  __S99EINFO                                                                             |
 |      32           |       4           |  __reserv2                                                                              |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __S99rbx                                                     Total size: 36 bytes             |
 |.................................................................................................................................|
 |_Packed __S99rbx_t                                                                                                               |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       6           |  __S99EID[6]                                                                            |
 |       6           |       1           |  __S99EVER                                                                              |
 |       7           |       1           |  __S99EOPTS                                                                             |
 |       8           |       1           |  __S99ESUBP                                                                             |
 |       9           |       1           |  __S99EKEY                                                                              |
 |      10           |       1           |  __S99EMGSV                                                                             |
 |      11           |       1           |  __S99ENMSG                                                                             |
 |      12           |       4           |  __S99ECPPL                                                                             |
 |      16           |       1           |  __reserved                                                                             |
 |      17           |       1           |  __S99ERES                                                                              |
 |      18           |       1           |  __S99ERCO                                                                              |
 |      19           |       1           |  __S99ERCF                                                                              |
 |      20           |       4           |  __S99EWRC                                                                              |
 |      24           |       4           |  __S99EMSGP                                                                             |
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    30
 
 
                                   * * * * *   S T R U C T U R E   M A P S   * * * * *
 |      28           |       2           |  __S99EERR                                                                              |
 |      30           |       2           |  __S99EINFO                                                                             |
 |      32           |       4           |  __reserv2                                                                              |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: struct __S99struc                                                           Total size: 20 bytes             |
 |.................................................................................................................................|
 |__S99parms                                                                                                                       |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       1           |  __S99RBLN                                                                              |
 |       1           |       1           |  __S99VERB                                                                              |
 |       2           |       2           |  __S99FLAG1                                                                             |
 |       4           |       2           |  __S99ERROR                                                                             |
 |       6           |       2           |  __S99INFO                                                                              |
 |       8           |       4           |  __S99TXTPP                                                                             |
 |      12           |       4           |  __S99S99X                                                                              |
 |      16           |       4           |  __S99FLAG2                                                                             |
 ===================================================================================================================================
 
 ===================================================================================================================================
 | Aggregate map for: _Packed struct __S99struc                                                   Total size: 20 bytes             |
 |.................................................................................................................................|
 |_Packed __S99parms                                                                                                               |
 |=================================================================================================================================|
 |      Offset       |      Length       | Member Name                                                                             |
 |    Bytes(Bits)    |    Bytes(Bits)    |                                                                                         |
 |===================|===================|=========================================================================================|
 |       0           |       1           |  __S99RBLN                                                                              |
 |       1           |       1           |  __S99VERB                                                                              |
 |       2           |       2           |  __S99FLAG1                                                                             |
 |       4           |       2           |  __S99ERROR                                                                             |
 |       6           |       2           |  __S99INFO                                                                              |
 |       8           |       4           |  __S99TXTPP                                                                             |
 |      12           |       4           |  __S99S99X                                                                              |
 |      16           |       4           |  __S99FLAG2                                                                             |
 ===================================================================================================================================
                            * * * * *   E N D   O F   S T R U C T U R E   M A P S   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    31
 
 
                              * * * * *   M E S S A G E   S U M M A R Y   * * * * *
 
         Total            Informational(00)          Warning(10)          Error(30)            Severe Error(40)
 
           0                    0                        0                   0                        0
                         * * * * *   E N D   O F   M E S S A G E   S U M M A R Y   * * * * *
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    32    
 
 OFFSET OBJECT CODE        LINE#  FILE#    P S E U D O   A S S E M B L Y   L I S T I N G                                            
 
                           Timestamp and Version Information
 000000  F2F0  F1F2                                          =C'2012'           Compiled Year
 000004  F1F0  F0F3                                          =C'1003'           Compiled Date MMDD
 000008  F1F0  F4F4  F4F3                                    =C'104443'         Compiled Time HHMMSS
 00000E  F0F1  F1F3  F0F0                                    =C'011300'         Compiler Version
 
 000014  006E  ****                                          AL2(110),C'...'    Saved Options String
                           Timestamp and Version End
 
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)': main              10/03/2012 10:44:43   Page    33    
 
 OFFSET OBJECT CODE        LINE#  FILE#    P S E U D O   A S S E M B L Y   L I S T I N G                                            
 
                           000001 |       *   #include <stdio.h>                                                             
                           000002 |       *   int main()                                                                     
 000088                    000002 |        main     DS       0D
 000088  47F0  F022        000002 |                 B        34(,r15)
 00008C  01C3C5C5                                            CEE eyecatcher
 000090  00000100                                            DSA size
 000094  00000170                                            =A(PPA1-main)
 000098  47F0  F001        000002 |                 B        1(,r15)
 00009C  58F0  C31C        000002 |                 L        r15,796(,r12)
 0000A0  184E              000002 |                 LR       r4,r14
 0000A2  05EF              000002 |                 BALR     r14,r15
 0000A4  00000000                                            =F'0'              
 0000A8  07F3              000002 |                 BR       r3
 0000AA  90E7  D00C        000002 |                 STM      r14,r7,12(r13)
 0000AE  58E0  D04C        000002 |                 L        r14,76(,r13)
 0000B2  4100  E100        000002 |                 LA       r0,256(,r14)
 0000B6  5500  C314        000002 |                 CL       r0,788(,r12)
 0000BA  4130  F03A        000002 |                 LA       r3,58(,r15)
 0000BE  4720  F014        000002 |                 BH       20(,r15)
 0000C2  58F0  C280        000002 |                 L        r15,640(,r12)
 0000C6  90F0  E048        000002 |                 STM      r15,r0,72(r14)
 0000CA  9210  E000        000002 |                 MVI      0(r14),16
 0000CE  50D0  E004        000002 |                 ST       r13,4(,r14)
 0000D2  18DE              000002 |                 LR       r13,r14
 0000D4                    End of Prolog
 
 0000D4  5800  C1F4        000000 |                 L        r0,_CEECAA_(,r12,500)
 0000D8  5000  D0B4        000000 |                 ST       r0,#CEECAACRENT_1(,r13,180)
 0000DC  C050  0000  0062  000000 |                 LARL     r5,F'98'
                           000003 |       *   {                                                                              
                           000004 |       *           short int len = 10;                                                    
 0000E2  4100  000A        000004 |                 LA       r0,10
 0000E6  4000  D0A8        000004 |                 STH      r0,len(,r13,168)
                           000005 |       *           int x = 10;                                                            
 0000EA  5000  D0AC        000005 |                 ST       r0,x(,r13,172)
                           000006 |       *           int y = 20;                                                            
                           000007 |       *                                                                                  
                           000008 |       *           printf("Hello from CADD");                                             
 0000EE  58F0  30C6        000008 |                 L        r15,=V(PRINTF)(,r3,198)
 0000F2  4100  5044        000008 |                 LA       r0,+CONSTANT_AREA(,r5,68)
 0000F6  4110  D098        000008 |                 LA       r1,#MX_TEMP1(,r13,152)
 0000FA  5000  D098        000008 |                 ST       r0,#MX_TEMP1(,r13,152)
 0000FE  0DEF              000008 |                 BASR     r14,r15
                           000009 |       *           EXEC CICS SEND TEXT                                                    
                           000010 |       *           FROM(x) LENGTH(len)                                                    
                           000011 |       *           ERASE;                                                                 
 000100  4800  D0A8        000011 |                 LH       r0,len(,r13,168)
 000104  5810  D0B4        000011 |                 L        r1,#CEECAACRENT_1(,r13,180)
 000108  5820  30CA        000011 |                 L        r2,=Q(DFHB0020)(,r3,202)
 00010C  4112  1000        000011 |                 LA       r1,=Q(DFHB0020)(r2,r1,0)
 000110  4000  1000        000011 |                 STH      r0,dfhb0020(,r1,0)
 000114  5840  D0B4        000011 |                 L        r4,#CEECAACRENT_1(,r13,180)
 000118  5810  30CE        000011 |                 L        r1,=Q(DFHDUMMY)(,r3,206)
 00011C  4111  4000        000011 |                 LA       r1,=Q(DFHDUMMY)(r1,r4,0)
 000120  4810  1000        000011 |                 LH       r1,dfhdummy(,r1,0)
 000124  5820  D0AC        000011 |                 L        r2,x(,r13,172)
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)': main              10/03/2012 10:44:43   Page    34    
 
 OFFSET OBJECT CODE        LINE#  FILE#    P S E U D O   A S S E M B L Y   L I S T I N G                                            
 
 000128  5860  30D2        000011 |                 L        r6,=Q(DFHBP020)(,r3,210)
 00012C  4146  4000        000011 |                 LA       r4,=Q(DFHBP020)(r6,r4,0)
 000130  5800  4000        000011 |                 L        r0,dfhbp020(,r4,0)
 000134  5020  D0B8        000011 |                 ST       r2,#wtemp_1(,r13,184)
 000138  4140  D0B8        000011 |                 LA       r4,#wtemp_1(,r13,184)
 00013C  5010  D0BC        000011 |                 ST       r1,#wtemp_2(,r13,188)
 000140  4160  D0BC        000011 |                 LA       r6,#wtemp_2(,r13,188)
 000144  4170  502C        000011 |                 LA       r7,'..-............CCNEP   .'(,r5,44)
 000148  A50A  8000        000011 |                 OILH     r0,H'-32768'
 00014C  B38C  0020        000011 |                 EFPC     r2
 000150  58F0  30D6        000011 |                 L        r15,=V(DFHEXEC)(,r3,214)
 000154  4110  D098        000011 |                 LA       r1,#MX_TEMP1(,r13,152)
 000158  5070  D098        000011 |                 ST       r7,#MX_TEMP1(,r13,152)
 00015C  5060  D09C        000011 |                 ST       r6,#MX_TEMP1(,r13,156)
 000160  5040  D0A0        000011 |                 ST       r4,#MX_TEMP1(,r13,160)
 000164  5000  D0A4        000011 |                 ST       r0,#MX_TEMP1(,r13,164)
 000168  0DEF              000011 |                 BASR     r14,r15
 00016A  1802              000011 |                 LR       r0,r2
 00016C  B384  0000        000011 |                 SFPC     r0
                           000012 |       *                                                                                  
                           000013 |       *   }                                                                              
 000170  41F0  0000        000013 |                 LA       r15,0
 000174                    000013 |        @1L1     DS       0H
 
 000174                    Start of Epilog
 000174  180D              000013 |                 LR       r0,r13
 000176  58D0  D004        000013 |                 L        r13,4(,r13)
 00017A  58E0  D00C        000013 |                 L        r14,12(,r13)
 00017E  9827  D01C        000013 |                 LM       r2,r7,28(r13)
 000182  051E              000013 |                 BALR     r1,r14
 000184  0707              000013 |                 NOPR     7
 000186  0000                                                
 
 000188                    Start of Literals
 000188  00000000                                            =V(PRINTF)
 00018C  00000000                                            =Q(DFHB0020)
 000190  00000000                                            =Q(DFHDUMMY)
 000194  00000000                                            =Q(DFHBP020)
 000198  00000000                                            =V(DFHEXEC)
 00019C                    End of Literals
 
                           ***   General purpose registers used: 1111111100001111
                           ***   Floating point  registers used: 1111111100000000
                           ***   Size of register spill area: 128(max) 0(used)
                           ***   Size of dynamic storage: 256
                           ***   Size of executable code: 254
 
 00019C  0000  0000                                          
 
                           Constant Area
 0001A0  D3C440E3 C1C2D3C5 40C4C6C8 C5C9E3C1    |LD TABLE DFHEITA|                                                                  
 0001B0  C240F6F5 F04B0000 0000000C 00000000    |B 650...........|                                                                  
 0001C0  40404040 40404040 00000000 18066000    |        ......-.|                                                                  
 0001D0  2F000000 00002204 000020C3 C3D5C5D7    |...........CCNEP|                                                                  
 0001E0  40404000 C8859393 96408699 969440C3    |   .Hello from C|                                                                  
 0001F0  C1C4C400                               |ADD.            |                                                                  
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    35    
 
 OFFSET OBJECT CODE        LINE#  FILE#    P S E U D O   A S S E M B L Y   L I S T I N G                                            
 
                           PPA1: Entry Point Constants
 0001F8  1CCEA106                                            =F'483303686'      Flags
 0001FC  000001B0                                            =A(PPA2-main)
 000200  00000000                                            =F'0'              No PPA3
 000204  00000000                                            =F'0'              No EPD
 000208  FFC00000                                            =F'-4194304'       Register save mask
 00020C  00000000                                            =F'0'              Member flags
 000210  90                                                  =AL1(144)          Flags
 000211  000000                                              =AL3(0)            Callee's DSA use/8
 000214  0040                                                =H'64'             Flags
 000216  0012                                                =H'18'             Offset/2 to CDL
 000218  00000000                                            =F'0'              Reserved
 00021C  5000007F                                            =F'1342177407'     CDL function length/2
 000220  FFFFFE90                                            =F'-368'           CDL function EP offset
 000224  38260000                                            =F'942014464'      CDL prolog
 000228  40090076                                            =F'1074331766'     CDL epilog
 00022C  00000000                                            =F'0'              CDL end
 000230  0004  ****                                          AL2(4),C'main'
                           PPA1 End
 
                           PPA2: Compile Unit Block
 000238  0300  2203                                          =F'50340355'       Flags
 00023C  FFFF  FDC8                                          =A(CEESTART-PPA2)
 000240  0000  0000                                          =F'0'              No PPA4
 000244  FFFF  FDC8                                          =A(TIMESTMP-PPA2)
 000248  0000  0000                                          =F'0'              No primary
 00024C  0200  0000                                          =F'33554432'       Flags
                           PPA2 End
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    36    
 
                                   E X T E R N A L   S Y M B O L   D I C T I O N A R Y                                              
 
           NAME        TYPE  ID  ADDR    LENGTH            NAME        TYPE  ID  ADDR    LENGTH                                     
 
           @STATICP     SD    1 000000   000250            DFHLDVER     PR    2 000000   000004
           DFHEIB0      PR    3 000000   000002            DFHEID0      PR    4 000000   000004
           DFHEICB      PR    5 000000   000004            DFHEIPTR     PR    6 000000   000004
           DFHB0020     PR    7 000000   000002            DFHBP020     PR    8 000000   000004
           DFHB0021     PR    9 000000   000002            DFHBP021     PR   10 000000   000004
           DFHB0022     PR   11 000000   000002            DFHBP022     PR   12 000000   000004
           DFHB0023     PR   13 000000   000002            DFHBP023     PR   14 000000   000004
           DFHB0024     PR   15 000000   000002            DFHBP024     PR   16 000000   000004
           DFHB0025     PR   17 000000   000002            DFHBP025     PR   18 000000   000004
           DFHC0010     PR   19 000000   000001            DFHCP010     PR   20 000000   000004
           DFHC0011     PR   21 000000   000001            DFHCP011     PR   22 000000   000004
           DFHDUMMY     PR   23 000000   000002            MAIN         LD    0 000088   000001
           CEESG003     ER   24 000000                     PRINTF       ER   25 000000         
           DFHEXEC      ER   26 000000                     CEESTART     ER   27 000000         
           CEEMAIN      SD   28 000000   00000C            EDCINPL      ER   29 000000         
           MAIN         ER   30 000000                    
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    37    
 
                             E X T E R N A L   S Y M B O L   C R O S S   R E F E R E N C E                                          
 
           ORIGINAL NAME                                   EXTERNAL SYMBOL NAME                                                     
 
           @STATICP                                        @STATICP                                                                 
           dfhldver                                        DFHLDVER                                                                 
           dfheib0                                         DFHEIB0                                                                  
           dfheid0                                         DFHEID0                                                                  
           dfheicb                                         DFHEICB                                                                  
           dfheiptr                                        DFHEIPTR                                                                 
           dfhb0020                                        DFHB0020                                                                 
           dfhbp020                                        DFHBP020                                                                 
           dfhb0021                                        DFHB0021                                                                 
           dfhbp021                                        DFHBP021                                                                 
           dfhb0022                                        DFHB0022                                                                 
           dfhbp022                                        DFHBP022                                                                 
           dfhb0023                                        DFHB0023                                                                 
           dfhbp023                                        DFHBP023                                                                 
           dfhb0024                                        DFHB0024                                                                 
           dfhbp024                                        DFHBP024                                                                 
           dfhb0025                                        DFHB0025                                                                 
           dfhbp025                                        DFHBP025                                                                 
           dfhc0010                                        DFHC0010                                                                 
           dfhcp010                                        DFHCP010                                                                 
           dfhc0011                                        DFHC0011                                                                 
           dfhcp011                                        DFHCP011                                                                 
           dfhdummy                                        DFHDUMMY                                                                 
           main                                            MAIN                                                                     
           CEESG003                                        CEESG003                                                                 
           printf                                          PRINTF                                                                   
           DFHEXEC                                         DFHEXEC                                                                  
           CEESTART                                        CEESTART                                                                 
           CEEMAIN                                         CEEMAIN                                                                  
           EDCINPL                                         EDCINPL                                                                  
15694A01 V1.13 z/OS XL C                           'KUMMU03.PDS.C.SRC(CADD)'                    10/03/2012 10:44:43   Page    38    
 
                                * * * * *   S T O R A G E   O F F S E T   L I S T I N G   * * * * *                                 
 
 IDENTIFIER          DEFINITION      ATTRIBUTES                                                                                     
 
 dfhldver            1-1:58          Class = external definition, Location = WSA + Q(dfhldver),                 Length = 4          
 
 dfheib0             1-1:58          Class = external definition, Location = WSA + Q(dfheib0),                  Length = 2          
 
 dfheid0             1-1:58          Class = external definition, Location = WSA + Q(dfheid0),                  Length = 4          
 
 dfheicb             1-1:58          Class = external definition, Location = WSA + Q(dfheicb),                  Length = 4          
 
 dfheiptr            1-1:58          Class = external definition, Location = WSA + Q(dfheiptr),                 Length = 4          
 
 dfhb0020            1-1:58          Class = external definition, Location = WSA + Q(dfhb0020),                 Length = 2          
 
 dfhbp020            1-1:58          Class = external definition, Location = WSA + Q(dfhbp020),                 Length = 4          
 
 dfhb0021            1-1:58          Class = external definition, Location = WSA + Q(dfhb0021),                 Length = 2          
 
 dfhbp021            1-1:58          Class = external definition, Location = WSA + Q(dfhbp021),                 Length = 4          
 
 dfhb0022            1-1:58          Class = external definition, Location = WSA + Q(dfhb0022),                 Length = 2          
 
 dfhbp022            1-1:58          Class = external definition, Location = WSA + Q(dfhbp022),                 Length = 4          
 
 dfhb0023            1-1:58          Class = external definition, Location = WSA + Q(dfhb0023),                 Length = 2          
 
 dfhbp023            1-1:58          Class = external definition, Location = WSA + Q(dfhbp023),                 Length = 4          
 
 dfhb0024            1-1:58          Class = external definition, Location = WSA + Q(dfhb0024),                 Length = 2          
 
 dfhbp024            1-1:58          Class = external definition, Location = WSA + Q(dfhbp024),                 Length = 4          
 
 dfhb0025            1-1:58          Class = external definition, Location = WSA + Q(dfhb0025),                 Length = 2          
 
 dfhbp025            1-1:58          Class = external definition, Location = WSA + Q(dfhbp025),                 Length = 4          
 
 dfhc0010            1-1:58          Class = external definition, Location = WSA + Q(dfhc0010),                 Length = 1          
 
 dfhcp010            1-1:58          Class = external definition, Location = WSA + Q(dfhcp010),                 Length = 4          
 
 dfhc0011            1-1:58          Class = external definition, Location = WSA + Q(dfhc0011),                 Length = 1          
 
 dfhcp011            1-1:58          Class = external definition, Location = WSA + Q(dfhcp011),                 Length = 4          
 
 dfhdummy            1-1:58          Class = external definition, Location = WSA + Q(dfhdummy),                 Length = 2          
 
 len                 4-0:4           Class = automatic,           Location = 168(r13),                          Length = 2          
 
 x                   5-0:5           Class = automatic,           Location = 172(r13),                          Length = 4          
 
 y                   6-0:6           Class = automatic,           Location = 176(r13),                          Length = 4          
 
                          * * * * *   E N D   O F   S T O R A G E   O F F S E T   L I S T I N G   * * * * *
 
                              * * * * *   E N D   O F   C O M P I L A T I O N   * * * * *
                                                                                       
                                                                                       
  000001   #include <stdio.h>                                                                              |      1
 000001   #include <stdio.h>                                                                              |      1
 
 
 |      1
|      1
        
2012-10-04
==========

* almost done with syntax highlighting
* ask Munish about his status for Vijay's issue regarding the extra icons
* work on testing with the QA p 
* need to work on DDS Documentation


com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250): 000038   #endif                                                                                          |     49     1 length: 120
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250): 000039                                                                                                   |     50     1 length: 120
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250): 000040   #if !defined(__features_h)  || defined(__inc_features)                                          |     51     1 length: 120
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250): 000041     #include <features.h>                                                                         |     52     1 length: 120
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250): 000001                    ??=if                       ??/                                                |     53     2 length: 120
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250):5694A01 V1.11 z/OS XL C       'TFM.MOTM.SYMSY85.W9900082.D2.CPGM(CADVWSRV)'                    04/28/2010 13:16:33   Page     3 length: 127
com.ca.intertest.ui.lister.c.CPresentationRepairer.createFilteredCSourceCode(CPresentationRepairer.java:250):  length: 1      



        if(statement instanceof CASTCompoundStatement) {
            // no need to include this for now
            // all the subelements are being revisited
        } else if(statement instanceof CASTDeclarationStatement) {
            CASTDeclarationStatement declarationStatement = (CASTDeclarationStatement) statement;
            IASTNode[] nodes = declarationStatement.getChildren();
            for(IASTNode node: nodes) {
                // highlight only the declaration specified since the other value is
                // already being highlighted by the name
                Logger.debug(node.getRawSignature());
                if(node instanceof CASTSimpleDeclaration) {
                    Logger.debug(node.getRawSignature());
                    CASTSimpleDeclaration simpleDeclaration = (CASTSimpleDeclaration) node;
                    IASTDeclSpecifier declSpecifier = simpleDeclaration.getDeclSpecifier();
                    syntaxHighlighIASTDelcSpecifier(declSpecifier);
                }
            }
        } else if(statement instanceof CASTExpressionStatement) {
            CASTExpressionStatement expressionStatement = (CASTExpressionStatement) statement;
            IASTExpression expression = expressionStatement.getExpression();
            if(expression instanceof CASTFunctionCallExpression) {
                CASTFunctionCallExpression functionCallExpression = (CASTFunctionCallExpression) expression;
                IASTInitializerClause[] initializerClauses = functionCallExpression.getArguments();
                for(IASTInitializerClause clause: initializerClauses) {
                    if(clause instanceof CASTLiteralExpression) {
                        int offset = ((CASTLiteralExpression) clause).getOffset() + sourceListingOffset;
                        ElementToSyntaxHighlight elementToSyntaxHighlight = new ElementToSyntaxHighlight(offset, ((CASTLiteralExpression) clause).getLength(), commentTextAttribute );                   
                        elementsToSyntaxHighlight.add(elementToSyntaxHighlight);
                    }
                }
            }
        } else if(statement instanceof CASTReturnStatement) {
            CASTReturnStatement returnStatement = (CASTReturnStatement) statement;
            Logger.debug("CASTReturnStatement: " + returnStatement.getRawSignature());
            int offset = returnStatement.getOffset() + sourceListingOffset;
            int length = "return".length();
            ElementToSyntaxHighlight elementToSyntaxHighlight = new ElementToSyntaxHighlight(offset,length, commentTextAttribute );                   
            elementsToSyntaxHighlight.add(elementToSyntaxHighlight);
        } else if(statement instanceof CASTForStatement) {
            int offset = ((CASTForStatement) statement).getOffset() + sourceListingOffset;
            ElementToSyntaxHighlight elementToSyntaxHighlight = new ElementToSyntaxHighlight(offset,"for".length(), commentTextAttribute );                   
            elementsToSyntaxHighlight.add(elementToSyntaxHighlight);
        } else {
            Logger.debug("Unknown Statement Type: " + statement.getRawSignature());
        }  20121008
==========

* This weekend released the latest build for Story 903 & 15248
* Will be working on 20217 (initiate debug session for Batch)
    - Asked Vijay to show me how to initiate debugging with the ASM language
    - Sent an email to Jim to see if he can help me out with this issue
        - I'm unable to debug
    - !MESSAGE Status:0 Message #:1(1) Error -2147483648 null submitting Batch job
    - Kind of stuck right now since my configuration files to connect to the server doesn't work right.
      Asking help from Vijay, Jim, and Munish.
    - Able to successfullly initiate a breakpoint
* StartDebugAction.java initiates the breakpoint procedure
* Keep getting the error: !MESSAGE Status:0 jessage #:1(1) Error -2147483648 null submitting Batch job
    - I'm not sure if it's my setup or if it's the server
    - Failing at DebugBatchSessionSetup.launch --> connectin.process(cmvi) (line 80)
    - Message being sent: [InitMessage[26:2] , GDSNMessage[28:0] AD1QA.INTBAT85.CURRENT.PROTSYM, MonitorMessage[18:0] PROGID CAMRCOBB enabled]
    - !MESSAGE Status:0 Message #:1(1) Error -2147483648 null submitting Batch job
    
20121009
========

* remove from the queue from mainframe
    - job from batch
* once I start the debug session again, it seems to fail
    - fixed.  just have to purge the job using sysview

2012-10-10
==========

* spent the whole time debugging the problem regarding mcafee antivirus upgrade.
* Today
    - review Vijay's test spec and provide feedback
    - debug breakpoint issue, no commits
* Just waiting for GIS to have my machine reimaged.

2012-10-11
==========
* spent the whole day waiting for local GIS to pick up my laptop

2012-10-12
==========
* gis reimaged my laptop.  Received reimaged laptop at noon.
* working on syntax highlighting2012-10-15
==========

* Got my computer setup properly now, I'm able to commit and checkout code.
* Will be working to clean up the syntax highlighting based on Vijay's comment
* Will also start debugging the breakpoint issue
                                    
2012-10-16
==========

* Running out of ideas.  Need to get this resolve fast but taking a break for now.
* Yeah, ready to work on breakpoint initialization
* Added Munish Kumar as adminstrative user.  And created document to show how to log in.  Push in into Clarity.
* having mainframe issues, can't get started in debugging the code.
- go to sysview to purge the running programs
- in the edit JCL -> CAREL06.PUBLIC.PDS.JCL(ITBATCH7)
  the exec field should should be changed to the program you want it to run as.
  my server is now connected at CA11: 19459

2012-10-17
==========

* Vijay's Issues Regarding Syntax Highlighting:
	Factoril:
	- function prototypes not yet supported
	Globalvar:
	- function prototypes not yet supported
	Basic:
	- function prototypes not yet supported
	- statement # 9 - invalid C syntax
	- statement # 23 - invalid C syntax
	DivZero:
	- function prototypes not yet supported
* Work on breakpoint initialization
* I want to debug Hello.. This is the simplest program that I see.

// What does this do?
// For the C program,the found variable is "false". 
// For the cobol program, the found variable is "true".

	    if (!session.isDataMonitorOK()) {
	        if (session.isBatch()){
                boolean found = false;
                for (debugFile file : session.getMonitored(true)){
                    if (file.isDataMonitor()) {
                        found = true;
                        break;
                    }
                } if (found) {
                    prompt = true;
                    String msg = Messages.StartDebugAction_5
                        + Messages.StartDebugAction_6
                        + Messages.StartDebugAction_7;
                    MessageDialog.openWarning(null, Messages.StartDebugAction_8, msg);
                }
	        } 

After editting the JCL and changing the program to Hello, it gives me the error message:
"Error occurred Connecting to Server:Connection refused CA11:19459".
!ENTRY com.ca.intertest 4 0 2012-10-17 14:18:53.925
!MESSAGE Connection refused CA11:19459
!STACK 0
com.ca.intertest.tools.ITException: Connection refused CA11:19459
	at com.ca.intertest.server.Connection.connect(Connection.java:168)
	at com.ca.intertest.dialogs.EditBatchJCL.saveFile(EditBatchJCL.java:95)
	at com.ca.intertest.dialogs.EditBatchJCL.process(EditBatchJCL.java:81)
	at com.ca.intertest.wizards.BatchSettingsPage.editJCL(BatchSettingsPage.java:948)
	at com.ca.intertest.wizards.BatchSettingsPage.access$11(BatchSettingsPage.java:945)
	at com.ca.intertest.wizards.BatchSettingsPage$9.widgetSelected(BatchSettingsPage.java:884)
	at com.ca.intertest.ui.actions.StartDebugAction.promptForSettings(StartDebugAction.java:246)
	at com.ca.intertest.ui.actions.StartDebugAction.run(StartDebugAction.java:126)
	at com.ca.intertest.rcp.Application.start(Application.java:79)
	
2012-10-18
==========

* Madhuri was able to step trough and breakpoint a batch program.
* Ask Munish to do a CICS app breakpoing testing.
* Resolved "#define syntax highlighting"
* Resolved function prototypes.  That is finished now.
* Learn to figure out how to use VIM effectively.  Don't bother with Pycharm or any other editor.
	- keep honing your skills with VIM.  It will get better.
	
2012-10-19
========== 

* will be working from home or at the hsc library
	- decided to go back to work. better to do work at the office
	  than to stay home.
* will work on looking at the protocols on how debugging works.

com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:124):offset:length -->12267:5
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:124):offset:length -->12276:5
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:124):offset:length -->12368:6
com.ca.intertest.ui.lister.util.AbstractPresentationRepairer.addRange(AbstractPresentationRepairer.java:124):offset:length -->12735:30
KUMMU03.PUBLIC.MK.INTBT9S4.PROTSYM
2012-10-22
==========

* status - yesterday
	- last friday worked on improving story 903
		* CICS programs weren't being opened up in the editor
		* multiline comments weren't being highlighted
		* more CICS keywords highlighted
* status - working on today
	- improve on switch, case, else that vijay mentioned
	- will not be available tomorrow.
	- no roadblocks for me
	- will need to send a status report tonight
	
2012-10-26
==========

* took 3 personal days off to take care of new baby.
* now it's time to get back to work.
* i'm looking at the project management site and I'm responsible for 2 stories.
* north side is the employee entrance
* also, talk to Scott about the 3 personal days that I took for the birth of the baby.
* halloween is one of the coolest things here at CA.. let see what happens.
* listen to the assembler videos later on today.
* figure out how to debug a program in CICS.

2012-11-01
==========

* Just came back from the Office.. 3 days off b/c of Hurricane Sandy.
* Hard to get back in the groove after such a long break.
* Try to get the protocol going with CICS application
* I still have no power in my house
* It's hard to concentrate when the house has no power.
* What I did Monday
	- I played around trying to attached through a CICS server for Story 20219
	- need more work on that.
* What I will do today.
	- create tasks for stories
	- More of the same
	- Try to get the protocol and figure out the difference.
* The tasks have already been created.  
* Need to focus on CICS debugging.
* Need to work with Vijay during his time.
* Aetna or Cigna
* Looking into Story 23477.  "Unknown Version".  Sent the email back to Jim
	- will have to look at it more carefully.
* No more pregnancy/birth days off.. It's time to get back to work.  


2012-11-02
==========

* created story for debugging cics and in the outline view changes from C to ASM
* Debug a program in INTERTEST BATCH
==================================
support.ca.com

1) In PDF, go to COMMAND (6)
2) Enter in the command prompt "EX 'CAREL06.CLIST(INTBAT)' 'QA'
3) Go to Foreground
4) In CA-IntertTEst Batch EXECUTION CONTROL Panel
	a) you should specify the PGR (CAMRC)
	b) specify the task library 'KUMMU03.INTBAT90.CURRENT.LOAD787'
5) In CA-InterTest Batch MONITOR CONTROL Panel
	a) in monitored programs, specify the program(s) you want to monitor
	b) Specify theSymbolic (PROTSYM) Files --> 'KUMMU03.PUBLIC.MK.INTBT9S4.PROTSYM'
	
				
Debug a program in INTERTEST CICS
=================================

1) Monitor a program first
	a) go to sysview
	b) look for CICS 
		1) I'm looking specifically for CICSTA67
		2) for that program "s" for select then "enter"
		3) look for the applid.  in this case, it is A11TITA7
	c) SHIFT-F12 to go back to TPX menu
	d) a A11TITA7
	e) in the CICS menu, click on "+" to clear the screen 
	f) run ITST
	g) 2 for Monitoring
	h) 1 in CA InterTest for CICS r8.5 MONITORING MENU
	i) in CA InterTest for CICS r8.5 PROGRAM MONITORING, you can enter CDEMO in Program and add "S" in "Monitor"
	
2) Then run the program
	a) press "+" to clear
	b) CDEM
	

Start the Tomcat Server
=======================

1) Go to either CA11 or CA31 (CA11 is more stable)
2) PDF // to go to ISPF/PDF Primary Option Menu
3) 3.4 // to go to the data set list utility
4) for DSNAME LEVEL --> CAREL06.PUBLIC.PDS.JCL, then press enter
5) it lists the datasets, go to CAREL06.PUBLIC.PDS.JCL and do a view "V"
6) go to IBATSV2Z and type "V" first to view and then "sub" on the program to run it 
   (this submits the job), port number can be found when viewing the source code.
   
Using Sysview
=============

start panel use "start" command
F9 to switch btwn two panels
open one panel as sysview
and the other one as job view
in sysview
	- "st" to list all my jobs
	- refresh (enter | ref | st) to check if the job has been executing
	- go to the particular job and type "l" to list the different ddnames.
	- press "s" to select stdout to view the logs

Misc
====

- "swap list" - list ot display all panels

Debugging CICS with Madhuri Session
===================================

- from TPX menu --> go to command --> "a a11tita6"
- clear the screen, using the "+"
- itst < -- start the intertest
- option 2 --> monitoring
- option 1 --> programs
- for program --> COBDEMO // select "S" for monitor
- "request has been processed"
- PF3 to back out of the screen until it says "ITST transaction ended"
- run the program DEMC
- press ENTER key to begin the demo
- in the keep window, modify the TASKNUM variable to "000000." and press ENTER
- press "GO"

ASMDEMO --> DEMA
PL1DEMO --> DEMP
CDEMO --> CDEM


These two servers have to be available

CICSTA66 CA11:11506
QA IntBat 9.0 CA11:19190

Import COBDEMO
Use QA IntBAt 9.0 server
AD1QA.INTERT90.CURRENT.PROTSYM

Click on the bug for the monitored program
InterTest Server -> QA INtBat 9.0
CICS Region CICSTA66 
Connect

Select and click for load module

Running the transaction on TPX --> DEMC/DEMA/DEMP


If it hangs, this is how you check it:
itst
4 -> auxilary stories
5 -> TS queues
cemt set ts all d


for asmdemo
change A to D and go to the tasknum varaible and change the questin mark to 0

for cdemo
go to statement 00612 and add G.  then enter.. this bypasses the other lines.
2012-11-05
==========

* Looking into the issue

2012-11-06
==========

* Voted first before I got to work.
* AD1QA.INTERT90.CURRENT.PROTSYM
  CABEND
  Talk about this during the status meeting.
* I'm still debugging the CICS protocol.

!ENTRY com.ca.intertest 4 0 2012-11-06 11:23:25.246
!MESSAGE Error31 Abend intercepted by API?s ESTAE or ESPIE(GT_RC=31)
attempting to import variables for CICSCPRG from PROTSYM AD1QA.INTERT90.CURRENT.PROTSYM
!STACK 0
com.ca.intertest.tools.ITException: Error31 Abend intercepted by API?s ESTAE or ESPIE(GT_RC=31)
attempting to impo variables for CICSCPRG from PROTSYM AD1QA.INTERT90.CURRENT.PROTSYM
	at com.ca.intertest.common.LoadListing.run(LoadListing.java:160)
	at com.ca.intertest.wizards.loadListings.run(loadListings.java:93)
	at org.eclipse.jface.operation.ModalContext$ModalContextThread.run(ModalContext.java:121)* 
Getting the "Abend" error and the program is not importing.
I can't separate the file from importing.  It loads the listing
sent an email to Charles Godwin to find alternatives.

2012-11-07
==========

* Sent Jim and Charles asking for advice  regarding breakpoint initialization.
* Working with Jim regarding the message beno ing sent from mainframe and eclipse gui.


2012-11-08
==========

* adding a bunch of logs

2012-11-09
==========

* status meeting regarding project
* no mention of what i need to do the upcoming project.
* continue working on my dsect section.

2012-11-12
==========

* there is no status meeting b/c the sprint is dead.
* keep continuing to work in the CICS debug initialization.
* keep up to date with the latest Java features.
	- need to learn more about lambdas
* how did i end up downloading IdeaC.exe
	- looking up lambda features
	- idea supports java 8
* download movies and tv shows on Thursday night.  
* I guess after Thanksgiving is when Mrs. Mella is going to leave for home.
* com.ca.testingtools.core/IConstants.java
	- this deals with the c icon.
	com.ca.testingtools.common/IAttribute.java
							  /LanguageAttribute.java
							  /XMLConstants.java
* having harvest issue.  cannot commit.
* let's work on this issue first:
!ENTRY com.ca.intertest 4 0 2012-11-12 11:10:10.365
!MESSAGE Error31 Abend intercepted by API?s ESTAE or ESPIE(GT_RC=31)
attempting to import variables for CICSCPRG from PROTSYM KUMMU03.PUBLIC.MK.INTBT9S4.PROTSYM
!STACK 0
com.ca.intertest.tools.ITException: Error31 Abend intercepted by API?s ESTAE or ESPIE(GT_RC=31)
attempting to import variables for CICSCPRG from PROTSYM KUMMU03.PUBLIC.MK.INTBT9S4.PROTSYM
	at com.ca.intertest.common.LoadListing.run(LoadListing.java:160)
	at com.ca.intertest.wizards.loadListings.run(loadListings.java:93)
	at org.eclipse.jface.operation.ModalContext$ModalContextThread.run(ModalContext.java:121)
								

2012-11-13
==========

CA
--

* Attending Knowledge Transfer: INTERT & SYSDUMP DB2 Setup
