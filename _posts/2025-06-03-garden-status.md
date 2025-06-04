---
layout: post
title: Postgres Complexity, Moving to SQLite
city: stony-brook 
state: new-york 
tags: [simple, postgres, sqlite]
---
I recently faced challenges with database migration and maintaining data consistency between the public version and my local system. Every time I changed the schema of some models, I found it difficult to transfer those changes from my local development environment to the public server hosted on DigitalOcean.

While searching for solutions, I stumbled upon a [YouTube interview with DHH on SQLite](https://www.youtube.com/watch?v=0rlATWBNvMw). The interview made a compelling case for switching from Postgres to SQLite, which seemed to be a good fit for my current needs. With SQLite, the database is simply a file, so I only need to manage one copy at a time, simplifying the migration process significantly.

Inspired by this, I’ve decided to spend today migrating my tennis app from Postgres to SQLite. This switch will help me delay confronting the complexity of database migrations and focus more on development.

Stay tuned for updates on how this transition goes and any lessons learned along the way!