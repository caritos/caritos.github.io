20131120
========
* Development Goals
    - Going to GA for FileMaster Plus
        * we are on target
    - Continuing to Pair Program with Ilidio
    - Pre-QA
        * not doing it all the time, even though I mention to do it.
* Improve Product Innovation and Quality
    - forum with Eclipse developers, 
        * brought it up with Scott and Aline (sent an email).
    - ordered a book for Eclipse 4 RCP development
        * who decides if we should be using E4 or 3.x
* Increate Market Awareness
    - created a draft regarding a recent bug fix.
        - changes to Eclipse Internal clases.  Had to create a plugin
          Thought the Eclipse GUI developers might find it useful.
          Thinking of putting it in my blog/wiki
* vacations
    - I believe I have 11 vacation days left
    - I plan to use up all my vacation days in the coming weeks.
* JRebel License
    - not completed yet.
    - Aline knows about it.

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
        * POST:
            - Scott will look into this for using RTC. Can we.
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
        * POST:
            - add Tip of the Month articles in the community page when product goes to GA.
    - I am trying to update my wiki page and posting my research and notes there
        * http://cawiki.ca.com/display/~carel06/Home
* Scrum Notes
    - concerned about having two scrum teams (Europe / North America) working on the same codebase.
    - need some training on FileMaster IMS for the next project.
* Career Objectives
    - I'd like to become a Software Architect
        * how do I get there?
        * POST: 
            - no need for certifications or things like that
            - just do stuff without being told
            - prepare for the FileMaster IMS
                * why should we use Eclipse Kepler instead of the older version
                
                
           
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
   	
   				

        

            
            
         	
		 
			

		