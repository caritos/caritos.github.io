---
layout: base 
title: Home 
---
If you want to get in touch with me, emailing me at eladio@caritos.com is best.

## Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-date">({{ post.date | date: "%B %d, %Y" }})</span>
    </li>
  {% endfor %}
</ul>

## Browse by Tags

<div class="tags-cloud">
  {% assign tags_list = site.tags | sort %}
  {% for tag in tags_list %}
    <a href="{{ '/tags/' | append: tag[0] | relative_url }}" class="tag-link">
      {{ tag[0] }} ({{ tag[1] | size }})
    </a>
  {% endfor %}
</div>

<style>
.tags-cloud {
  margin: 20px 0;
  line-height: 2;
}

.tag-link {
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 15px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s;
}

.tag-link:hover {
  background-color: #e0e0e0;
}
</style>

