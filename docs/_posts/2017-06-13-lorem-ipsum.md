---
comments: true
title: "Lorem Ipsum!"
---
Last updated: 
{{ site.time | date: "%F %R" }}
<span style="float:right"><a href="{{ site.github.repository_url | append: '/tree/master/docs' }}">{{ site.github.build_revision | slice: 0, 7 }}</a></span>

Link to current page source: <{{ site.github.repository_url | append: '/blob/master/docs/' | append: page.path }}>

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![Bandit]({{ site.baseurl }}{% link /assets/img/avatar/helmet-with-white-cross-120.png %})

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat _nulla pariatur_. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

$$
\sin^2 \alpha + \cos^2 \alpha = 1
$$

Writing posts: <https://jekyllrb.com/docs/posts/>  
Linking to posts: <https://jekyllrb.com/docs/templates/#linking-to-posts>  
[JavaScript example]({{ site.baseurl }}{% post_url 2017-06-17-javascript %}): <{{ site.url }}{{ site.baseurl }}{% post_url 2017-06-17-javascript %}>

In gravida dictum vulputate. Nunc quam lectus, imperdiet ac eros scelerisque, porttitor vulputate lectus. Morbi vitae justo orci. Aliquam hendrerit vitae arcu ac pretium. Morbi varius orci ac egestas efficitur. Mauris a pretium nisi.

<script src="{{ site.baseurl }}{% link /assets/js/example.js %}" type="text/javascript">
</script>

<button onclick="foobar('demo')">Test</button>

Cras ac lacinia magna. Praesent lacinia, dui eu dapibus rutrum, diam arcu imperdiet massa, vel pulvinar justo metus quis dui. Pellentesque sollicitudin id ex ut vehicula. Phasellus posuere dolor auctor lorem varius volutpat. Sed interdum ac sem et tincidunt.

<span id="demo">Praesent gravida</span> porta bibendum. Sed eget egestas nulla, a fringilla mauris. Aenean rhoncus, augue ac lacinia blandit, nulla metus suscipit tellus, id auctor tortor purus quis sem. Pellentesque vel eros venenatis, tincidunt sem cursus, faucibus ipsum. Sed tincidunt tempor ex, nec viverra est sagittis non. Aenean faucibus velit eu lorem gravida efficitur.
