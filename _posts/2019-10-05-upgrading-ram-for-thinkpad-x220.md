---
layout: post
title: "Upgrading Ram for Thinkpad X220"
tags: [thinkpad, x220, ram, upgrade, linux]
---

# Upgrading Ram for Thinkpad X220

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
