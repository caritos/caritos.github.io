Eclipse 3.6
    * pros
	- we have experience using this version since we developed FMP-MVS with it.
	- clients don't have to upgrade since we expect them to already have Eclipse 3.6 installed on their system.
    * cons
	- we found some bugs with the Eclipse 3.6 version that were not fixed
	- code is deprecated, nobody is improving this code.
Eclipse 4.2
    * pros
        - Latest RDZ is based on Eclipse 4.2
Eclipse 4.3
    * pros
        - May solve existing problems with 3.6; Richa has talked about some limitations with table and column sizes that affected FMP-MVS GUI development
	- use 3.x APIs
            + we have the latest code base
            + if we develop on Eclipse 3.x APIs, the FMP-MVS plugin will theoretically be backward compatible with Eclipse 3.6 IDE.
           
	- use 4.x APIs
            + Better for users who intend to install FMP-IMS as a plugin to their own Eclipse or RDz instance, since they are more likely to be running a newer version
            + New features will only be available for Eclipse 4 implementation.
            + we have the latest code base
	    + the focus of development for Eclipse Open Source Developers is concentrated on Eclipse 4.x APIs.
            + One important technical reason to migrate to the Eclipse 4.x API is that it provides a consistent and well-designed API.  
		* easier to junit test the classes since their are smaller
                * smaller java classes since they use Dependency Injection
                * The concept of the application model and dependency injection makes your application concise and flexible.  
                * The new components are POJOs and therefore very flexible, testable, and reusable.
     * cons
        - it's going to forse the customer to upgrade to 4.3 when installing the FMP-IMS plugin.
	- we tried running the FMP-MVS plugin into Eclipse 4.3 IDE and it didn't work.
        - use 4.x API's
		+ there is a learning curve to learn the 4.x API's
        •   FMP GUI would have to be converted to 4.3 to reside in same Eclipse as FMP IMS.  This would be true whether RCP or plug-in.
        •   4.3-compliant products would not be able to reside in same instance of Eclipse as 3.6-compliant products (SymDump, InterTest, MAT)..  
	


Which Eclipse Version to Use for FMP-IMS
========================================

One of the prerequisites is that we have to decide on what Eclipse API to use.  We've had some brief conversation but there was no formal response.  Here are some information about the new version of Eclipse Helios (version 4.3).  Let me know if you have any questions.  Would like to get this decision nailed down as quickly as possible.

Support for Eclipse 3.x API
The Eclipse platform team has created a compatibility layer which maps the 3.x API to the 4.x API.  
This allows you to run Eclipse 3.x RCP applications and plug-ins unmodified on top of the Eclipse 4 runtime.  
The Eclipse platform team has indicated that they plan to support this compatibility layer for unlimited period of time.  
Therefore, the existing Eclipse 3.x CA plugins that we have (Intertest/FMP-MVS) should run on top of Eclipse Helios.

 



Future development is based on Eclipse 4
The Eclipse 3.x API is effectively frozen.  In addition to the technical advantages the focus of development is concentrated on the Eclipse 4. X API.  
Source: 
http://www.vogella.com/tutorials/Eclipse4MigrationGuide/article.html
http://eclipsesource.com/blogs/tutorials/eclipse-4-e4-tutorial-soft-migration-from-3-x-to-eclipse-4-e4/




Mike Dubois' Comments
---------------------
I think this question needs to be answered by the Product Owner.

Also, what is the cost of using an older version (like 3.6 just for example)? 

(a) Would a customer using a newer Eclipse version (like 4.3 just for example) not be able to add our plug-in if we build it with 3.6?
	- this doesn't work currently. 
(b) Are there new features in newer Eclipse versions that we need to exploit?
	- table veiwer features which contained bugs in Eclipse 3.6

This is not an argument for using 3.6, don’t mistake that.  But if we build with 4.3 and that means that a person with Eclipse 4.2 can’t plug it in, that’s a red flag.  What are the red flags to using an older version?

Scott Davidson's Comments
-------------------------
In my opinion, the advantages of using a newer version of Eclipse outweigh the disadvantages.  I believe that it is true that if we upgrade to use 4.x, that it wouldn’t be able to work together with the other plugins.  But we can’t stay on the old release forever.  At some point, we need to move forward and I think this is the time, especially considering the programming roadblocks we encountered on the last Fie Master project.  In fact, my understanding is that the CA MAT team has also made that decision.  I believe that they have settled on using 4.2 for their next release, V10.  We should jump onto their TPSR and use the same version.  

David Hearn
-----------
At first glance, it would appear that we ought to target the latest Eclipse version for new development, but since there will be some disadvantages in doing this, I thought I’d try to lay these out for possible discussion.      

I’m certainly no Eclipse expert, but my observation is that it isn’t very good at compatibility; an application developed for an older Eclipse release often doesn’t run in a newer release without changes.  Then, if you change the application to run on the newer Eclipse release then it doesn’t run on the old release anymore.  You may recall the link that I sent a while back showing the table of IBM GUI products and which releases are compatible with which releases of Eclipse; it’s http://www-01.ibm.com/support/docview.wss?uid=swg21279139.  If this is any model for us, it suggests that we should have releases or versions of our GUI products that are specific to a particular Eclipse release, e.g. SymDump GUI 9.0 runs on 3.6.x; SymDump GUI 9.1 runs on 4.2.x or something like that.  

Also, you’ll note that the latest Eclipse release supported by IBM is 4.2.  If there are compatibility issues between 4.2 and 4.3, then we might be better targeting 4.2 for our efforts so that customers wouldn’t have problems using our GUIs along with RDz and other IBM Rational products.  Leaving that aside for the moment, though, here are the pros and cons that I came up with for 4.3:

Advantages of using Eclipse 4.3
•   Better for users who intend to install FM IMS as a plug-in to their own Eclipse or RDz instance, since they are more likely to be running a newer version,
•   May solve existing problems with 3.6; Richa has talked about some limitations with table and column sizes that affected FMP GUI development.  

Disadvantages of using Eclipse 4.3


If we decide to go with 4.3, there are some things which will need to be set up:
•   I suggest that we have a separate project in Harvest to contain all products, as well as the common TestingTools components, which are to be 4.3-compatible
•   Build machine and build scripts would have to be changed to support 4.3, but leaving the existing ones in place for support builds.  Frankly, I don’t know how difficult this will be, except to say that it will be a lot more complicated than it appears at first glance.  
•   At some point we will have to deal with an upgrade to Java 7, and it might be a nice opportunity to do that as part of the build changes.  

Let me know if you want to discuss or whether you have any questions.

Dave
