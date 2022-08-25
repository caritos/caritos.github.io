One of the prerequisites is that we have to decide on what Eclipse API to use.  We've had some brief conversation but there was no formal response.

Here are some information about the new version of Eclipse Helios (version 4.3).

Support for Eclipse 3.x API
The Eclipse platform team has created a compatibility layer which maps the 3.x API to the 4.x API.  
This allows you to run Eclipse 3.x RCP applications and plug-ins unmodified on top of the Eclipse 4 runtime.  
The Eclipse platform team has indicated that they plan to support this compatibility layer for unlimited period of time.  
Therefore, the existing Eclipse 3.x CA plugins that we have (Intertest/FMP-MVS) should run on top of a Eclipse Helios.

Technical reasons for migrating to Eclipse 4 RCP
One important technical reason to migrate to the Eclipse 4.x API is that it provides a consistent and well-designed API.  
The concept of the application model and dependency injection makes your application concise and flexible.  
The new components are POJOs and therefore very flexible, testable, and reusable.

Future development is based on Eclipse 4
The Eclipse 3.x API is effectively frozen.  In addition to the technical advantages the focus of development is concentrated on the Eclipse 4. X API.  
New features will only be available for Eclipse 4 implementation.

Source: 
http://www.vogella.com/tutorials/Eclipse4MigrationGuide/article.html
http://eclipsesource.com/blogs/tutorials/eclipse-4-e4-tutorial-soft-migration-from-3-x-to-eclipse-4-e4/