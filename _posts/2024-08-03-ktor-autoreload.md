---
layout: post
title: Ktor Autoreload 
city: stony-brook 
state: new-york 
tags: [ktor, autoreload, running, debugging]
---

The documentation for Ktor Autoreload can be found [here](https://ktor.io/docs/server-auto-reload.html#enable).  I had issues wih using the EmbeddedServer so I switched to EngineMain paired with an application configuration file.

To recompile on changes, i had to run the command "./gradlew -t build" and then on a separate terminal "./gradlew run"


![](https://i.imgur.com/0UTa0V0.jpeg)
![](https://i.imgur.com/KXA4Xjq.jpeg)