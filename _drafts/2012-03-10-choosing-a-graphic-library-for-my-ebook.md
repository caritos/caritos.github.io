---
layout: default
title: Choosing a Graphic Library for my E-Book
---

{{ page.title }}
================

As a side project, I'm creating an children's e-book for the kids to play with for the ipad.
As a programmer, I'm excited by the technology platform that I will be using.  The ebook project will be created using HTML5.  I'll be using [JQuery Mobile](http://jquerymobile.com) for the basic touch gesture handlings.  When completed, hopefully [PhoneGap](http://phonegap.com) will make it easy for me to convert it to an ipad application.

One of the things I had to was decide on the graphing library to use.  These were my top choices:

* [Paper.js](http://paperjs.org)
* [Processing.js](http://processingjs.org)
* [Raphael.js](http://raphaeljs.com)

I ended up choosing Paper.js because:

* Android doesn't support SVG, that removed Raphael out of the picture.
* Paper.js has better support for object level events than processing.js.

I good summary of the pros and cons of these 3 libraries can be found [here](http://coding.smashingmagazine.com/2012/02/22/web-drawing-throwdown-paper-processing-raphael/)