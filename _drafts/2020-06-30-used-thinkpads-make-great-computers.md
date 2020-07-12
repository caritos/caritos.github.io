---
layout: post
title: "Used Thinkpads Make Great Computers"
tags: [thinkpad, x220, t440p, ebay]
---
I've bought three thinkpads from ebay.  One is an x220 and the other two are t440p.  I've upgraded all the laptops with 32 gb of RAM.
The kids are using these laptops for their school work and games.  I started with Arch Linux for these computers but the kids found it difficult to play their games with it, so now all the computers are using Windows 10.

# 2019-10-05 Upgrading Ram for Thinkpad X220

I'm running multiple tabs on Firefox in Window 1. I'm running a PDF Viewer and Terminal in Window 2.  I noticed a slowness when switching tabs in Firefox as well as switching between Window 1 and Window 2.

I think it's alright that it works in the terminal but when I have a X-Windows running and just running a few apps, the slowness is noticeable.
That why I thought it would bea good time to buy some ram.

I searched the Web and found at the the type of Ram that the X220 could use were called DDR Sodimms.
I saw it on ebay for 49 but they were shipping from China.  I saw it on NewEgg for 55 and shipping withing the United States.  Total cost including shipping and taxes were 60$.   That was already 2/3 of the price of the Thinkpad itself.  It's kind of pricy but I felt that in order to make the Thinkpad more usable I had to do it.

Still waiting for it so I'll take some pictures when I do install it.

Ram arrived this afternoon.. It was pretty easy to replace the ram for the thinkpad x220.  Just had to unscrew two screws to get access to the ram housing.  I don't really know how to do a ram system check so all I did was a 'cat /proc/meminfo' before and after.  Here are the results.

<pre>
[eladio@hawkeye ~]$ diff meminfo20191010 meminfo20191011
1,5c1,5
< MemTotal:        3915928 kB
< MemFree:         2049704 kB
< MemAvailable:    2555848 kB
< Buffers:           47516 kB
< Cached:           749908 kB
---
> MemTotal:       16283664 kB
> MemFree:        15693200 kB
> MemAvailable:   15711160 kB
> Buffers:           32940 kB
> Cached:           310600 kB
</pre>

I'm noticing right away that my browser loads the pages much quicker. Transitions between windows seems snappier.

# 2019-09-25 Bought a Thinkpad X220 on Ebay

![thinkpad-x220](/assets/thinkpad-x220.jpg)

I've worked on a Thinkpad T-series a few years after graduating from the University.  I was side-hustling as a freelance web developer working on websites that dealt mostly with PHP and Java Servlets.  I loved working on that Thinkpad.  It was reliable and didn't get in my way. I felt I could get in the zone a lot quicker back then.  (Or maybe it was because I didn't have four daughters interrupting me at home like I do now).

Ever since then, I've been a long time lurker of [r/thinkpad](https://www.reddit.com/r/thinkpad/) for the longest time.  I'd look at the images members would post on the site and reminisce abou the good times I've had with my past thinkpad and wonder when I would get another one.

The computers provided to me at work have ranged from Dells notebooks and Macbooks.  They've been ok and when I got a Macbook for work, I thought I was in heaven. Up until recently, when I received a Macbook with those crappy keyboards.  Oohh, how I hate that keyboard.

The crappy keyboard, the lack of ports that I have to carry a dongle everywhere, the new usb-c port.  All of these finally led me to go to ebay and buy a 20 year old Thinkpad X220 for $90.

