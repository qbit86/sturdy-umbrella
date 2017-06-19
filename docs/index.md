---
title: "Table of Contents"
---
<p style="float:left">Last updated: {{ site.time }}<span style="float:right">{{ site.github.build_revision | slice: 0, 7 }}</span></p>

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
