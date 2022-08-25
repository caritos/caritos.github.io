---
layout: post
title: Creating a Part
categories: eclipse
---

In Eclipse 4, editors and views are just Parts.

We need to verify that "org.eclipse.e4.ui.di" plugin is included as a depency.  If not, add it.  In your newly created project, open "plugin.xml" via the Plugin Manifest Editor.  Go to the Dependency Tab and verify that "org.eclipse.e4.ui.di" in part of the "Required Plug-ins" window.
![Verify DI Dependency](/img/creating-a-part-di-dependency.png)

Create a class called "HelloWorldPart"

{% gist 8588963 %}

Double click on the Application.e4xmi file to open up the Application Editor.
Go to "Application|Windows|Trimmed Window|Controls|Perspective Stack|Perspective|Contorls|PartSashContainer|PartStack".
Delete the "Sample Part" 
Right click on "Part Stack", select "Add child|Part".  Add "Hello World" as the label and configure the Clas URI to use the newly created HelloWorldPart class.
![Assigning the Part](/img/creating-a-part-di-application-config.png)

Save it and restart the app by double clicking on the "com.caritos.e4.product.product" and left clicking on "Launch an Eclipse application".
