---
layout: default
title: Eladio Caritos
---

# Projects
## Tinapay
Student Information System
Available in Android and IOS.
More information at <a href="http://tinapay.com">Tinapay website</a>

# Recent Posts
<ul class="posts">
  {% for post in site.posts %}
  <li>
    <span>{{ post.date | date_to_string }}</span> 
    &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

