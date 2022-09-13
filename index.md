---
layout: default
title: Eladio Caritos
---
<div id="home">
<p>Hello, I'm Eladio.</p>
<p>I'm a programmer currently living in Long Island, NY</p>
<p>If you want to get in touch with me, <a href="mailto:eladio@caritos.com">email</a> is best.</p>
</div>

<h1>Notes</h1>
<ul class="posts">
    {% for post in site.posts %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

<h1>Projects</h1>
<ul class="posts">
<li><a href="https://caritos.github.io/2022/09/08/food-forest.html">Food Forest</a></li>
</ul>