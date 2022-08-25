Key Note
========

* how do we get analytics for an eclipse rcp app
	- what features are people using
* send an email updates to us
* customer feedback / statistics for the new filemaster ims.


Styling Tips for the Refined RCP App
====================================

* The e4 styling engine is the de facto way to dress up your RCP app! Join me for an in depth tour of the 
  styling engine's main features - APIs to tooling to examples; everything you need to get you up and styling. 
  We will start by taking a look at how the IDE makes use of the styling engine and how you can use the provided 
  tools to customize your IDE and create new looks. We will then turn our attention to how to make use of the 
  engine to style your RCP app, including how to extend the engine with your own custom property handlers. 
  By the end of the talk, you will have a definite idea of what you can do with the styling engine and how 
  to go about doing it.
* styling engine using css (selectors and property values)
* This is for e4.
* styling selectors
	- for css cascade, can go to multiple sources
* eclipsecolorthemes.org
* GITHUB.COM/JEEYUL - most complicated theme
* css editor - code completion
* css spy - tool for inspecting widgets
* styling in RCP
	- create a new e4 projectoi
	- run out of time - sucks egg

Continous Testing with Jubula
=============================

* You've got software. You've got a list of features to implement. You've got some automated tests. You've got upcoming releases. The only glue that is going to make this scenario work is Continuous Integration. When you're adding and changing functionality, knowing what your changes are doing to your quality on a daily basis can be the difference between a successful release and a horrifically painful one. A project team needs to be able to make qualified decisions based on quality information at any given time, which is why you’ve got to hit the road (the application under test) with the rubber (the automated tests) as often as possible!
In this session Markus will give a full technical walk-through of all the necessary steps to setup Jubula tests in various continuous integration scenarios.
After starting with a super-quick overview of Jubula's concepts and architecture for any Jubula "newbies" in the audience, Markus moves onto a live walk-through of the necessary steps to get Jubula and Hudson playing well together. On the way, we'll look at topics such as:
- setup, maintenance and teardown of the test environment
- useful Jubula tools, configurations and settings
- Hudson options to optimize scheduling and test distribution
- making the whole system work for more complex test scenarios such as testing multiple AUTs and projects on various architectures and operating systems.
This talk is designed to give a detailed technical road-map for successful continuous testing with Jubula.
* UI automation GUIdancer
* code-free end-to-end testing
* user perspective testing
* supports sWT/RCP e3/e4 (Windows / Linux 
- tools
	-texteec
	-autoagen
- Integrated Testing Environment (ITE)
- Jubula is the way to go with continous testing
- ITE, you can do it manually but if you do it automatically.
- Jubul 2.0.0 / Hudoson
- Steps to test continously
	- build AUT
- get a virtual machine to get a jubula system.
- use hudson for nightly testing
- TEST / INCUBATION tags when testing
* Hudson Nodes - able to distribute tests

		

