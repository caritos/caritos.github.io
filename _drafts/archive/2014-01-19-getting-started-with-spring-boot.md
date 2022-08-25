---
layout: post
title: Getting Started with Spring Boot 
categories: spring
---

As a long time Java developer, I've heard about Spring for a long time now.  It's only now where I'm reading about dependency injection in Eclipse 4 that I'm actually digging it.
One of the cool things coming out from the Pivotal (previous SpringSource and creator of Spring) is the project Spring Boot. Spring Boot attempts to get you up and running with an Spring Web Application as quckly as possible.

In order for me to get started with Spring Boot, I downloaded the STS plugin for Eclipse via the Eclipse MarketPlace.

![STS Plugin](/img/eclipse-marketplace-sts-plugin.png)

Let's create a new Spring Project and fill out some options.
We are creating a web project, so I chose the "web" style.  
The "Actuator" style option provides us some cool metrics for monitoring our Spring Web app.
The "Security" style option allows the "Actuator" information to be displayed to only those who are authorized.

![New Spring Project](/img/new-project-spring-starter-project.png)
![Options for Spring Project](/img/new-spring-starter-project-options.png)

This creates a demo application.  Inside the src/main/java directory, an Application.java is already created.
Update Application.java to include a hello method with annotations "RequestMapping".

{% gist 8510719 Application.java %}

Point your browser to localhost:8080. If it asks for a password, check the console logs for the a newly generated password.

Source: [Webinar: Spring Boot -- Simplifying Spring for Everyone](http://www.youtube.com/watch?v=D6nJSyWB-xA)