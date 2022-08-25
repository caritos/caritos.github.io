---
layout: default
title: How to tell if you're running the 32 bit or 64 bit kernel in Mac OS X Snow Leopard
---

{{ page.title }}
================
<p class="meta">14 April 2011 - Centereach</p>

I was surprised to find out that I was using the 32 bit kernel.
Here are the instructions to determine which kernel is being used and how to change it.

In Terminal: uname -a 

astro:src eladio$ uname -a
Darwin astro.local 10.7.0 Darwin Kernel Version 10.7.0: Sat Jan 29 15:17:16 PST 2011; root:xnu-1504.9.37~1/RELEASE_I386 i386

If it says "i386" at the end, this indicates the 32 bit kernel is being used.

astro:~ eladio$ uname -a
Darwin astro.local 10.7.0 Darwin Kernel Version 10.7.0: Sat Jan 29 15:16:10 PST 2011; root:xnu-1504.9.37~1/RELEASE_X86_64 x86_64

The "x86_64" at the end will let you know you are using the 64 bit kernel.

You can alternate between the two by holding down “6″ and “4″ during system boot to load the 64 bit kernel, or holding down ’3′ and ’2′ during boot to use the 32 bit kernel. Your machine should default into the kernel that is best supported.

Source: [OSX Daily](http://osxdaily.com/2009/09/07/how-to-tell-if-youre-running-the-32-bit-or-64-bit-kernel-in-mac-os-x-snow-leopard/)