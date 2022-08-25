---
layout: post
title: EclipseCon 2014 
---

March 17 
========

Code Matters - Eclipse Hacker's Git Guide
-----------------------------------------
09:00 - 12:00 
don't do a merge, do a rebase
plugin spy
use git for comments. - decotration with comments
430481
425962
428355
429899

Building Eclipse Plug-ins and RCP Applications with Tycho
---------------------------------------------------------
12:00 - 16:00 

New Features of Java 8
----------------------
10:30 - 11:00
pros: simple, stable, fast, scalable, easy to read and maintain, choice of compatible implemnetion, great software ecosystem, future-proof

Hudson HIPP
-----------
puppet
autoyasto

Integration-tests for RCP applications made easy with SWTBot and Tycho
----------------------------------------------------------------------
@mickaelistria
integration tests
  - run on the whole application
  - interact at the user level
  - can repeat and veriy usage scenarios
rcp app already exist
  - write tests targeting exisitn RCP app?
      * PDE Target-Platform
  - anything easier and more efficeint to product tests
      * SWTBot APIs, and Test Recorder & Generator
  - how to run tests against an existing rcp app?
      * Tycho Surefire, or SWTBot/PDE Launch Configuration
HOw to write test stargeting existing RCP app?
  - the pde way:
    * test cases are in bundles (or fragments
    * ad dev-time, your "applicaiton under test" (AUT)" is configure in the Target Platform, which list available pieces.
    * edit target platrom / 
    * setting up target platform
SWTBot
  - provide easir natural language - test case translation
  - black box testing, using PDE tests
  - recording - generate java code for actions user is performing.
  - use JDT Dialog
  - record test scenario on another Eclipse/RCP
  - cannot run on the generator all the time.
  - all about rules
 
 Run tests on existing application
   - from tycho --> Tycho-surefire-plugin
   - artifactId - tycho-surefire-plugin
   - as a plugin
   - testRuntime - p2Installed

Java SE 8 Compact Profiles for Embedded Development
---------------------------------------------------
- is the microwave being used.

Bringing Java to the Internet of Things
---------------------------------------
- IOT touches everything
- can't just send data to a server, it will be forgotten
- need to parse the data on the device and act upon it.
- example: shipping container with light sensor
- raspberry pi bird feeder picture taking
 
Advanced Use of Eclipse 4's Dependency Injection Framework
----------------------------------------------------------
Brian de Alwis
- Increase cohesion between related objects
- DI as OPerating Theatre
   * @Inject Scalpel scalpel 
   * I don't care how you find it, just get it for me.
- Why use DI for Eclipse
   * simplify access to workbench services
   * removes need for signletons
   * remove boilerplate
   * shirnk service lifetimes
   * avoid need to create on startup
   * cleanup when no longer needed
- E4 DI Differences
   * supports field, method, and constructor injection
   * supports custom annotations
   * will re-inject wheever the injected values are changed or the injection situation changes
- Using JSR 330: Annotations
   * @Inject / @Named / @Singleton
   * JSR 250 @PostConstruct @PreDestroy
- Where Do Injected Objects Come From?
   * IEclipseContext: tree-based String -> Object amp with inheritance in lookups
   * key lookup starts as some chile and proceeds up the chain until satisfied
- What if a Value is unavailable  
   * exception is thrown
   * @OPtional returns null
= RunAndTracks (RATs
  * a runnable that tracks changes relative to a particular context
  * changges to those context variables cuase the Rat to be rerun
- context functions Computing Values on the Fly
- Creating / INject
  * Inject has 4 princibples method
  * IEclipseContext -> contextIjectionFactory
- Explicit Injection
  Injectable View Part
* bsd@mt.ca

Vaaclipse - e4 meets Vaadin
---------------------------
- wedding between eclipse and vaadin
- github.com/semanticsoft 
- rich internet applications / no javascript, pure java
- GWT as rendering engine
- eay OSGi setup
- Vaadin UI / init IEclipseContet/
  * load MAppliation Model
  * render Vaadin UI
- lunifera.org
- widget  (js from browser) / protocol RPC / sync widgets
- UIDL uses rendering Engine
- uses OSGi (write modular applications)(
- HTTP Service provided by Equinox HTTP, consumd by Vaadin Servlet engin.
- @piflo
- @rushanGilmullin
- github.com/lunifery/lunifera-vaadin-examples

UI Performance Monitoring
-------------------------
- SWT API to Monitor UI Delays
- UI Delay - interrup of a users workflow caused by mismanagement of the UI thread
- any work on the UI thread can cause a delay, but small delays do not make the UI unresponsive
- 200 ms
- would you use an editor iwth a /12 second delay afer each keystroke
- in eclipse 4.4, we extended SWT Event APIO
  * preevent/postevent,sleepevent 360052 (bug id)
- all 4 new events are unschedule
- BasicMOntoring
  * handleEvent SWT.WakeUPEvent
- sampling profiler
- Terry Parker - Google
- not using any tools.. 
- available in 4.4
- sometimes JProfiler

Extreme Git for Continous Delivery
----------------------------------
- Git + CD = BFFs
- Branching models
- Pointers & Pro tips
- issues: dependencies / code line chaos / 
- build things in narrow vertical slices
- branching and merging is a breeze
- keep the main line clean, dev branch = isolation chamber
- Branch per issue workflow
- branch name - developer initials + issue number
- do a quick fetch before merging to master.
- master branch / integration branch.. the tests are run on the integration branch
- don't merge from integration branch.. merge from dev branch
- not sass , a release branch is created.
- running CI on dev branches, not on master
- automate with plugin or Git hook (git-ci-cooks)
- pull request as a review

A Bridge Too Far? - How to Navigate Eclipse's Remote Frameworks
----------------------------------------------------------------
Greg Watson - IBM
Remote Framework
- Remoteness is becoming an imiportnt factor for application and tool dev
- remote frameworks
- Remote Application Platform (RAP)
  - Multi user client server based web framework
  - provides default web client that works with most pbroser
  - server is written entirely in Java
  - RAP protocol uses JSON-based messag format over HTTP
  - Why was ECP not used
- Remote Framework
  - Platform (EFS/JSch/Proxy
  - ECF
    - Realt ime communication and collaboration featurs for teams
    - set of APIs build on existing protocols (Google Talk, XMPP)
    - Contains (abstraction)
- Eclipse provides OSGi framework

Servlets are so 90s
--------------------
- OSGI + JAX-RS
- Use OSGI instead of servlets
- single point interface defines API
- use the interface for consumption
- ConsumerFactory
- OSGI-JAX-RS-CONNECTOR
- Interesting Talk that I would like to use.

Automating The Configurations of Project-specific IDES
-------------------------------------------------------
- bootstrap trigger
- need tasks to run ide
- Eclipse Oomph Installer
- CDO Release Engineering example
- need to learn about launch configurations
- spend time on automation, not on documentation
- Eclipse_Oomph_Installer
- EMF Newsgroup Oopmh

Turning Eclipse into an Arduino programming platform for kids
-------------------------------------------------------------
- Melanie Bats / Obeo
- littleBits
- arduino
- logo still around
- scratch
- DFRobot ardublock kit
- Powered by Sirius
- generate ino files with Acceleo
- github.com/mbats/  -- sample code from example


Flying sharks and m2m
---------------------
- Sharky
- Lunifera
- OpenNI - 3d sensing
  * JNect - same thing
- beaglebone
- Asus Xtion Pro
- linux - hihini lua

a- @piflo @kledlun

Need to write status report for Scott:


Classes that I have taken:
CODE MATTERS - ECLIPSE HACKER'S GIT GUIDE
Want to learn Git and use it within Eclipse? You already work with Git since a while and don't know how to use some of the more advanced concepts? You are already a proficient Git user but don't use code review ? Or you want to contribute some improvement to EGit or Gerrit and don't know how ?

In this tutorial you will learn through hands-on exercises how to use EGit, Gerrit and a code review workflow to help your team focus on better code.

We will use the EGit project as an example so that you can help us improving it using what you learnt in this tutorial.

BUILDING ECLIPSE PLUG-INS AND RCP APPLICATIONS WITH TYCHO
Tycho is a Maven extension for building Eclipse artifacts: Eclipse plug-ins/OSGi bundles, features, products/RCP applications, and p2 repositories.

In this hands-on tutorial, we will create these artifacts one by one in Eclipse and set up and automated Tycho build for them. We'll start with an Eclipse plug-in (including a JUnit test for regression testing) and go all the way to a ready-to-use distribution archive of a simple RCP application. You will learn how Tycho uses the well-known Eclipse PDE metadata files, like MANIFEST.MF, feature.xml, build.properties, product files, and category.xml for a fully automated, headless build.

The tutorial is targeted at everyone involved in the development lifecycle: from the release engineer who is running the production build to developers who are interested in a better understanding of their headless Tycho build. In fact, Maven and Tycho aim to bring these people closer together, by making it easy for every developer to run the automated build.

Attendees need to bring a laptop with a USB port. The course material including all required tools will be distributed via USB sticks during the tutorial. Basic experience of working with the Eclipse PDE is helpful, but not a prerequisite.

This is an updated version of the Tycho tutorial given at EclipseCon North America 2013.

NEW FEATURES IN JAVA SE 8