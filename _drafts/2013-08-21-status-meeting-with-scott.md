20140211
========
* FMP-MVS issue.
    - plugin compatibility issue
    - has now been resolved.
* Rick as product owner has decided on Eclipse 4.2. 
  We provided him a pro and cons matrix and he chose Eclipse 4.2.
* Eclipse Best Practice Distribution List
  Working really well.
  Created document in KM Eclipse GUI folder (from David Hearn) about getting started with SWTBot
* Agile / Scrum for FMP-IMS project
    - still slow going but here in Islandia we are busy with research stories
    - had a meeting with Framingham team just 30 minutes ago, we will have standups twice a week
    - currently working on research stories
    - I think we have to have a meeting with Radek and Petr as well.  No feedback what they are up to.    
* Doing a lot of design work on FMP-IMS project to make it cleaner
    - looking at the way we separate out the packages so it's easier for the two GUI scrum teams to work together
      Created the initial plugin projects.
    - looking into JAXB (XML Binding)
    - working with Mahi on the build infrastructure
        - Maven and Wix   
    - creating the Junit / TDD project infracstructure
        - separate test folder
        - instructions on how to use Junit
        - For the User Interface portion of the code, I have added Junit Test cases that works on the SWT GUI components.
          Really want the team to use this and they now have no excuse to not do it.
          It's going to be hard going at first since it's our first time doing it, but I think the
          payoff is substantial especially during the later sprints where we can guarantee that 
          we are not breaking our code b/c of minor code changes.        
* for EclipseCon, it ends on Thursday.  Would like to leave on Sunday night.  I'll pay for 
  the rest of my stay there.  Would like to check the city out.
   
20140115
========    
* researching on Eclipse 4
	- making sure it's backward compatible with Eclipse 3.x plugin
		+ getting advice from Peter Miniar about his workflow/development regarding 4.x/3.x compatibility
		+ got to make sure we have the architecture/design correct up front, a little bit weary		
	- trying to create a skeleton application
	- trying to using TDD for development 
	- asked Mahi to do research on a new build infrastructure (mvn).
	- Prague guys in meeting requested they can do research on GUI, can TreeViewer class support the max reqs data view.
	- Richa is working on the tomcat/servlet implementation
		+ just wonding why we don't support REST interface.  Current, we create socket connections for this.
		+ it has keepalive integrated already, which is one of the added requirements for FMP-IMS
* Eclipse User Group
	- haven't started on it, not sure why since I just have to send out a bunch of emails
	- there is the CA Maker fair (David Luft created this group) which I want it to be based on, but decided just to start small and send an email out.
* Agile / Scrum
	- had a couple of scrum meetings, it's been pretty bad
	- Rick has shared the charter for FMP-IMS, I've read a bit and have already asked questions about it.
* thanks for letting me go to EclipseCon 2014
* did not get into the 2014 CTE Mentoring Program
* increase scope
	- am i too old to attend a career fair in stony brook representing CA?
	- inquiring about pre-sales, interested in doing this with the client but would only like to focus in the gui
		+ have a feeling I have to be well versed in both mainframe part as well.
* planning to go on vacation on April to the Philippines (so will be using up my vacation days from 2013)
* would like to work from home on 1/22 and 1/24.  Attending parent-teacher conference for my two kids.
		
20131218
========

Development Goals
-----------------
* FileMasterPlus in GA on 12/2
* Learning about FileMaster IMS
	- watching video tutorials with Mahi and Ravish to learn about the internals
		+ more in-depth than what we need.
		+ https://content.interskill.com/ca/datatrain/imsdb11.html?AICC_SID=C1001985667M10044920S&AICC_URL=https%3a%2f%2fcalearning%2eca%2ecom%2fplateau%2fPwsAicc
	- need to still play around with IMS, get more hands on. 
		+ working with Robert/Todd and the rest of the team to get acquainted

Improve Product Innovation and Quality
--------------------------------------
* Working with Donald Faul (Princial Application Developer for CA SCM)
	- trying to learn best practices of CA SCM
	- would like to apply this to our project.
	- CA SCM has an approval process to guarantee code review
	- will write up documentation on CA Wiki
* Working with other Eclipse Developers
	- improving my relationship with David Hearn and Peter Miniar
	- sharing ideas with them such as tips to install CA SCM 64 bit version (found on CA Wiki page)
	
Increase Market Awareness
-------------------------
* Mahi and I tried to produce a video
	- topic was "How to open a dataset".
		+ ran into some issues ragarding file size.. Was not able to record it properly.
		+ using CamStudio (the free version)
		+ Mahi knows a person who has the full version, we are still waiting on borrowing that license.
* Updating Personal Wiki page that I think might be useful to others
	- CA SCM Best practices
	- Installing 64 bit CA SCM
	- Overwriting Eclipse Class to Fix a Defect
	
Misc
----
* JRebel Licence 
	- complete
* EclipseCon 2014
	- great lectures on Java/Eclipse stuff (https://www.eclipsecon.org/na2014/eclipsecon/schedule/session/2014-03-17)
	- thanks for the email, I guess it won't be finalize until 2014.
	

20131015
========
* vacation request updated 
    - 10/21 -> 10/30
* JRebel License
    - in discussion with MD, Shaffi (Superviser of Procurement)
    - hopefully should be done this week.
* Development Goals
    - Going to GA for FileMaster Plus
        * MultiRecordFormatMode will be removed as a feature for GA
        * 1853 Story 3 Demo will be done on 10/13 (Eladio Demoing)
        * 1853 Story 6 Demo will be done on 10/21 (Ilidio Demoing)
        * 48 (Open) + 8 (Reopened) - 25 (MF related) = 31 defects (does not include Sev 4's which Rich is stil evaluating)
    - Workflow
        * Pair Programming with Ilidio for the past two weeks
            - More effective than doing it alone.
            - Delivered more stable code
            - Can we try "Pair Programming" with the FileMaster IMS team as a trial 
        * Pre-QA Testing
            - Everytime before releasing, FileMaster GUI developers verify the defects that are in Fixed state
                * very helpful as we had to reopen and refix some again (saves QA time)
            - Petr and Radek not so helpful in volunteering their time to verify defects.
* Improve Product Innovation and Quality
    - last meeting, I mentioned creating an LOD image with Git/Gerrit/Jenkins.
        * found it very hard to complete
        * also Git/Gerrit/Jenkins is too big of a change, want to lessen the delta
    - RTC seems a better choice than what we currently use in FileMasterPlus
        * we have company support
            + have emailed Lindi Gricius (saw a RTC demo video from her), and she is directing me to other resource 
              that can assist
            + other teams are using it, can ask them for help (Chorus/Emri)
        * RTC has code reviews built in
            + http://stackoverflow.com/questions/9512830/how-to-review-code-that-was-submitted-to-me-in-rtc-with-submit-for-review-feat
        * RTC SCM has a better way of managing multiple streams than Harvest, I believe
            + https://jazz.net/library/article/41
        * maybe we should transition to RTC for FileMaster IMS? (Need Scott's opinion on this)
    - last meeting we discussed on having a forum with other Eclipse GUI Devs within CA to how they do their workflow
        * still needs to be done (Action item for Scott)
    - decide on Testing framework for all GUI devs
        * still work in progress.
        * would definely want to implement TDD for next project (don't want to replicate scenario we had with FileMaster Plus)
        * simple JUNIT would probably suffice (just break down the classes more effectively)
* Increase Market Awareness
    - No video yet
        * work in progress
    - Introduced myself in the Testing Tools Global User Community
        * https://communities.ca.com/web/ca-testing-tools-global-user-community/message-board/-/message_boards/view_message/101905740
        * no response from community
    - I am trying to update my wiki page and posting my research and notes there
        * http://cawiki.ca.com/display/~carel06/Home
* Scrum Notes
    - concerned about having two scrum teams (Europe / North America) working on the same codebase.
    - need some training on FileMaster IMS for the next project.
* Career Objectives
    - I'd like to become a Software Architect
        * how do I get there?


20130821
========
* vacation request 10/18-10/29 (8 business days)
	- when do vacation days expire?  at the end of the year or on March when the new vacation 
	  allotments were announced.
* I never got refunded for my JRebel Purchase.
	- I sent another email to Linda Bliss about a month ago to inquire but never got a response	  
* Corporate Goals - Have to be measurable
	- Increase Customer Loyalty
	- Improve Efficiency, Employee Engagement, Collaboration, and Performance
	- Increase Market Awareness
	- Accelerate Sales Velocity
	- Improve Product Innovation and Quality
* Development Goal
	- File Master Plus
		* Go to GA
		* Had a meeting with QA (Ken) to iron out the specs for Overtype and that was very useful.
		 	- we should do this all the time.
		 	- Banged out a Test Requirement which we all use to see eye to eye.
		* Currently 105 open/new/reopened defects
			- Lots of defects b/c of the new stories being submit
			- Got to find a way so that Devs arent' so rushed in submitting their story to QA so fast
			  without really testing it.  Code being provided to QA is not up to the standard but 
			  Dev fears missing the QA delivery date.  
			- There must be some carrot/stick to use for this.
		* I'm two days ahead of schedule.  I will submit my Overtype in Character Mode today.
			- Deadline is August 23 
			- I'll submit SRM tomorrow or next day (thurs or fri)
			- Got help from Robert who did some pre QA testing for me.
			- Ask Devs to assist with Testing.  Got great responses from Prague guys.  
			  	* They all sent me defects that I fixed.
		* Thing to note when planning estimates. Ask Developer how long it with take.
		  That is the same amount of time for Bug Fixing, maybe even more.
		  Before we have been using 50% of dev time which is not accurate.			  	 
	- Improve Product Innovation and Quality
		* I want to create LOD image that already has the common tools for development 
		  (2 month project, would like assistance from an LOD guy / Orlando)
			- Git for VCS
			- Gerrit for Code Review
			- Jenkins for Automatic Testing/Builds
		* Better Testing Environment (3 Month project)	 
			- Would like to have a forum with other Eclipse GUI Devs within CA to see 
			  how the do their testing. I'm sure it's a common problem with everybody
			  and some have a solution in place for this.
			- Decide on a testing framework with all these GUI devs
				* there are a bunch SWTBot/Jubula, let's chooose a standard
				* we can have a Webinar for QA and Dev on how to use these tools.
	- Increase Market Awareness
		* I have a blog / twitter account, how do I use it more effectively 
		* Create a youtube video about FileMasterPlus on how to use it.  (Save a Layout) 1 month
   		* Get on the Testing Tools Forum and be more active.  Make a post and introduce myself. 1 month
   	
   				
   		
		 
			

		