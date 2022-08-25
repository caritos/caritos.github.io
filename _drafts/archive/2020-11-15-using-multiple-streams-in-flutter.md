---
layout: post
title: "Using multiple streams in Flutter"
tags: [flutter, firestore, streams, StreamBuilder, dart]
---

# Using multiple streams in Flutter

## Why use multiple streams

I was working on a semi complicated query.
The stream argument does not allow for multiple where clauses.

```dart
        StreamBuilder(
            stream: Global.schoolsDbRef
                .document(widget.authNotifier.user.schoolUid)
                .collection(Global.collectionFees)
                .where('user.uid', isEqualTo: widget.user.uid)
                .snapshots(),
            builder: (context, AsyncSnapshot<QuerySnapshot> snapshotUser) {
```

Hence, the need to use multiple streams.

## How I'm using multiple streams

I'm nesting the StreamBuilder widget.

```dart
        StreamBuilder(
            stream: Global.schoolsDbRef
                .document(widget.authNotifier.user.schoolUid)
                .collection(Global.collectionFees)
                .where('user.uid', isEqualTo: widget.user.uid)
                .snapshots(),
            builder: (context, AsyncSnapshot<QuerySnapshot> snapshotUser) {
              return StreamBuilder(
                  stream: Global.schoolsDbRef
                      .document(widget.authNotifier.user.schoolUid)
                      .collection(Global.collectionFees)
                      .where('user.guardianName', isEqualTo: widget.user.name)
                      .snapshots(),
                  builder:
                      (context, AsyncSnapshot<QuerySnapshot> snapshotGuardian) {
                    if (snapshotUser.hasData || snapshotGuardian.hasData) {
                      _fees = Fee().processStreamDocumentsIntoList(
                          snapshotUser.data.documents);
                      _guardianFees = Fee().processStreamDocumentsIntoList(
                          snapshotGuardian.data.documents);
                      _fees.addAll(_guardianFees);
                      return FeesList(_fees, widget.authNotifier);
                    } else {
                      return Loader();
                    }
                  });
            }),
```