---
<a href="/index.html">Home</a></li>layout: post
title: "Using StreamBuilder with Firestore"
tags: [flutter, firestore]
---

# Using StreamBuilder with Firestore

## Difference between Futures and Streams

Futures have one and only one response.  I use Futures to handle http calls.  

Streams can change over time.

A Future can't listen to a variable change.  It's a one time response.  Instead you'll need to use a Stream.

When listening on a collection of objects, if any objects changes in the collection, it won't be notice when using FutureBuilder.  With StreamBuilder, the change will be noticed.

## How I'm using StreamBuilder

To display a list of objects, I'm using the StreamBuilder widget to listen to a FireStore collection.

For the builder attribute, I have to cast the snapshot variable to an

```dart
 AsyncSnapshot<QuerySnapshot>
```

![Screen Shot 2020-11-10 at 6.25.15 AM](/assets/2020-11-10-using-streambuilder-with-firestore/Screen%20Shot%202020-11-10%20at%206.25.15%20AM.png)

