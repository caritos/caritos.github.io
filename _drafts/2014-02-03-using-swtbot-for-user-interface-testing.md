---
layout: post 
title: Using SWTBot for User Interface Testing
categories: eclipse 
---

The first thing we need to do is install SWTBot.  
The update site for SWTBot is: http://download.eclipse.org/technology/swtbot/releases/latest/. 
Select everything except "SWTBot for GEF Testing". 
![SWTBot Installation](/img/swtbot-update-site.png)

Let's now create a plugin project to use SWTBot.
![SWTBot New Plugin Project](/img/swtbot-new-plugin-project.png)
To get started with testing gui components right away, let's use a template when creating our plugin project.  I chose "Plug-in with a view".
![SWTBot Plugin Template](/img/swtbot-new-project-template.png).

Create a new source folder called "test".  I like doing this to separater out the actual source code of the project from the junit test cases.
![SWTBot Test Source Folder](/img/swtbot-new-source-folder-called-test.png).

We also need to add some dependencies to the plugin.  Open up plugin.xml via the Plug-in Manifest Editor.  Go to the "Dependencies" tab and add some plugins. 
![SWTBot Plugin Dependencies](/img/swtbot-plugin-dependencies.png)

* org.eclipse.swtbot.junit4_x
* org.eclipse.swtbot.forms.finder
* org.eclipse.swtbot.eclipse.finder

Check out [com.caritos.e4.ui.swtbot](https://github.com/caritos/com.caritos.e4.ui.swtbot) to see the JUnit Test Cases that I have added.



