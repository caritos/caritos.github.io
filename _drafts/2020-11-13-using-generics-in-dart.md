---
layout: post
title: "Using Generics in Dart"
tags: [flutter, firestore]
---

# Using StreamBuilder with Firestore

## What are Generics

Generics allow you to code for multiple types.

## How I'm using Generics

Using Generics allows me to write less code since it's being used by multiple types.

Less code = Less bugs.

```dart
abstract class Model<T> {
  List<T> processStreamDocumentsIntoList(List<DocumentSnapshot> documents) {
    List<T> list = [];
    documents.forEach(
        (document) => list.add(fromMap(document['uid'], document.data)) as T);
    return list;
  }

  Future<List<T>> getAll(String schoolUid, String nameOfCollection) async {
    List<T> list = [];
    QuerySnapshot snapshot = await Global.schoolsDbRef
        .document(schoolUid)
        .collection(nameOfCollection)
        .orderBy(Global.nameField, descending: true)
        .getDocuments();
    snapshot.documents.forEach((document) =>
        list.add(fromMap(document.documentID, document.data)) as T);
    return list;
  }

  Future<void> delete(BuildContext context, String schoolUid,
      String nameOfCollection, uid, String futureRoute) async {
    logger.d("delete: " + uid);
    debugPrintStack();
    await Global.schoolsDbRef
        .document(schoolUid)
        .collection(nameOfCollection)
        .document(uid)
        .delete();
  }

  String getUid();
  T fromMap(dynamic, Map<String, dynamic> data);
}
```

