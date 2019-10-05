---
layout: default
title: Eladio Caritos
---

<div id="home">
Yes my site is plain on purpose. It's my minimalist desire for only what's needed.

<h1>Me in 10 seconds</h1>
Husband and father to 4 girls.  Been working in the tech industry all my life. From Software Engineering to Systems Engineering in the Telecommunication, E-Commerce, and Transporation industry.  Born in the Philippines.  Childhood in Saudi Arabia.  I now live in the United States.

<h1>Contact me?</h1>
If you want to get in touch with me, <a href="mailto:eladio@caritos.com">email</a> is best.

<h1>Blog Posts</h1>
<ul class="posts">
  {% for post in site.posts %}
  <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

</div>
