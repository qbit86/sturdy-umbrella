---
layout: index
title: "Table of Contents"
---
Last updated: {{ site.time | date: "%F %R" }}
<span style="float:right"><a href="{{site.github.repository_url | append: '/tree/master/docs' }}">{{ site.github.build_revision | slice: 0, 7 }}</a></span>

Drafts:
{% for post in site.posts %}
{% if post.draft %}
+ {{ post.date | date_to_string }}: [{{ post.title }}]({{ post.url | relative_url }})  
{% endif %}
{% endfor %}

Posts:
{% for post in site.posts %}
{% unless post.draft %}
+ {{ post.date | date_to_string }}: [{{ post.title }}]({{ post.url | relative_url }})  
{% endunless %}
{% endfor %}
