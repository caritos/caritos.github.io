---
layout: post
title: Postgres Complexity, Moving to SQLite
city: stony-brook 
state: new-york 
tags: [simple, postgres, sqlite]
---
I was grappling with the complexity of database migration and the challenge of maintaining data consistency between the public version and my local system. Whenever I changed the schema of some models, I struggled to transfer those changes from my local development environment to the public server hosted on Digital Ocean.

Recently, I watched a [YouTube interview with DHH on SQLite](https://www.youtube.com/watch?v=0rlATWBNvMw) and it resonated with me. It made sense to switch from Postgres to SQLite to simplify the issue of database migrations. With SQLite, the database is just a file, so I would only need to manage one copy at a time. Today, I'll be dedicating my time to migrating my tennis app from Postgres to SQLite.