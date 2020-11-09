---
layout: default
title: Eladio Caritos
---

<div id="home">
<h1>Me in 10 seconds</h1>
#GirlDad, husband, and developer.<br/>
I work with small businesses to improve their workflow through mobile app development.<br/>  
Currently living in New York.<br/>
If you want to get in touch with me, <a href="mailto:eladio@caritos.com">email</a> is best.<br/>
</div>

<ul class="posts">
  {% for post in site.posts %}
  <li>
    <span>{{ post.date | date_to_string }}</span> 
    &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>