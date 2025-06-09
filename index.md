---
layout: base 
title: Home 
---
If you want to get in touch with me, emailing me at eladio@caritos.com is best.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">({{ post.date | date: "%B %d, %Y" }})</span>
    </li>
  {% endfor %}
</ul>

