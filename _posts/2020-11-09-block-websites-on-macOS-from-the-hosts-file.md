---
layout: post
title: "Block websites on macOS from the hosts file"
tags: [focus, macOS, productivity]
---

# Block websites on macOS from the hosts file

## Removing distractions

I'm using [RescueTime](https://www.rescuetime.com/rp/caritos) to evaluate my productivity. For October 2020, I spent 51 hours on YouTube.  Yikes.  

![Screen Shot 2020-11-09 at 9.09.11 AM](../assets/2020-11-09-block-websites-on-macOS-from-the-hosts-file/Screen%20Shot%202020-11-09%20at%209.09.11%20AM.png)

## Block websites on macOS

One way to block YouTube cold turkey is to make it inaccessible in my browser.  I can do that by editing my host file and redirecting the domain name to localhost.

![Screen Shot 2020-11-09 at 9.16.37 AM](../assets/2020-11-09-block-websites-on-macOS-from-the-hosts-file/Screen%20Shot%202020-11-09%20at%209.16.37%20AM.png)

You also have to enter the command "sudo dscacheutil -flushcache" to flush the cache.

![Screen Shot 2020-11-09 at 9.19.45 AM](../assets/2020-11-09-block-websites-on-macOS-from-the-hosts-file/Screen%20Shot%202020-11-09%20at%209.19.45%20AM.png)

Hopefully this will make me more productive.

