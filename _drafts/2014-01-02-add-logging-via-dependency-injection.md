---
layout: post
title: Add Logging via Dependency Injection
categories: eclipse
---

Update HelloWorldPart class to include the log variable.  Run it and you should see the debug message in the console.

{% gist 8510832 HelloWorldPart.java %}

The E4 runtime infrastructure injected the reference into the class when it was constructed.  The instance was obtained from the E4 context, which looks through a hierarchy of contexts until it can find an instance which matches the class type.