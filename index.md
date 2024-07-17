---
layout: base 
title: Eladio Caritos
---
# 👋 Hi, I'm Eladio Caritos

A freelance full-stack developer based in Long Island with a passion for building digital services. I have a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.

# 🔭 I’m currently working on ...

## [tennis](https://github.com/caritos/busy-bee)

A website I made for my tennis friends to keep track of our tennis matches.  The site is built using the [ktor](https://ktor.io) framework using the [kotlin](https://kotlinlang.org/) programming language.  I'm using [Freemarker](https://freemarker.apache.org/) as my templating engine.  The site uses [Tailwind CSS](https://tailwindcss.com/) to make it look appealing.  I'm using [Postgresql](https://www.postgresql.org/) for my database.

## [school](https://github.com/caritos/frog-flip)

I'm developing a [student information system](https://en.wikipedia.org/wiki/Student_information_system) to help administrators and teachers manage the students at [Holy Trinity Academy of Calamba](https://www.holytrinityacademyofcalamba.com/).

# 📫 How to reach me:

If you want to get in touch wih me, emailing me at eladio@caritos.com is best.

<h2>Blog Posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>