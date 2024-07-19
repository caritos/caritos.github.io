---
layout: post
title: Embracing Docker in my Workflow 
city: ponte-vedra-beach
state: florida
tags: [docker, development, workflow ]
---

Recently, I've integrated Docker into my development workflow. While it introduces some friction compared to my previous setup, the benefits of using Docker are worth the extra steps.

Previously, I could simply press CTRL-R to run the latest code locally on my machine and test out changes instantaneously. However, with Docker, I need to execute a series of commands in the terminal:

    ./gradlew build
    docker-compose build --no-cache
    docker-compose down
    docker-compose up -d

Although these additional steps can be cumbersome, Docker provides a consistent environment for both local development and remote hosting, ensuring that my code runs smoothly across different platforms.

In the next few weeks, I plan to streamline these steps to reduce friction and improve my workflow. Using Docker is a valuable investment in maintaining a consistent development environment, and I’m confident that with some adjustments, it will enhance my productivity even further.