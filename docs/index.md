---
markdown: kramdown
title: "Table of Contents"
---
{{ site.time }}

{% for post in site.posts %}
+ {{ post.date | date_to_string }}: [{{ post.title }}]({{ post.url | prepend: site.github.url }})  
{% endfor %}
