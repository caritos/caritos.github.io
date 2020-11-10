---
layout: default
title: Eladio Caritos
---

# Me in 10 seconds

#GirlDad, husband, and developer.

I work with small businesses to improve their workflow through mobile app development.

Currently living in New York.

If you want to get in touch with me, <a href="mailto:eladio@caritos.com">email</a> is best.

# Recent Posts

<ul class="posts">
  {% for post in site.posts %}
  <li>
    <span>{{ post.date | date_to_string }}</span> 
    &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

