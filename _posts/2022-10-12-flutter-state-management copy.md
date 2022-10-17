---
layout: post
title: Flutter State Management
tags: [flutter]
url: https://www.youtube.com/watch?v=uXmOKTPsxOk&list=PL6yRaaP0WPkUf-ff1OX99DVSL1cynLHxO&ab_channel=VandadNahavandipoor
---
{{ page.title }}
================
# Intro
* Flutter's UI code is so easy, it's best to focus on other things
* State management is the glue

# State Management Basics
* what does it mean?
    - managing dependencies in an orchestrated and organized way
* when using "flutter create" command, it's good to specify the "--org" option
* pattern for singleton in dart
``` dart
class ContactBook {
    ContactBook._sharedInstance();
    static final ContactBook _shared = ContactBook._sharedInstance();
    factory ContactBook() => _shared;
}
```
* windows stay on top so that the simulator stays on top of the editor
