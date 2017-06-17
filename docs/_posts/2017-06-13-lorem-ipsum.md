---
comments: true
title: "Lorem Ipsum!"
---
{{ site.time }}  
{{ site.github.build_revision }}

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![Bandit]({{ site.baseurl }}{% link /assets/img/bandit-192.png %})

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat _nulla pariatur_. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

$$
\sin^2 \alpha + \cos^2 \alpha = 1
$$

Writing posts: <https://jekyllrb.com/docs/posts/>  
Linking to posts: <https://jekyllrb.com/docs/templates/#linking-to-posts>  
[Tips]({{ site.baseurl }}{% post_url 2017-06-14-tips %}): <{{ site.url }}{{ site.baseurl }}{% post_url 2017-06-14-tips %}>

In gravida dictum vulputate. Nunc quam lectus, imperdiet ac eros scelerisque, porttitor vulputate lectus. Morbi vitae justo orci. Aliquam hendrerit vitae arcu ac pretium. Morbi varius orci ac egestas efficitur. Mauris a pretium nisi.

<script src="{{ site.baseurl }}{% link /assets/js/example.js %}" type="text/javascript">
</script>

<button onclick="foobar('demo')">Test</button>

Cras ac lacinia magna. Praesent lacinia, dui eu dapibus rutrum, diam arcu imperdiet massa, vel pulvinar justo metus quis dui. Pellentesque sollicitudin id ex ut vehicula. Phasellus posuere dolor auctor lorem varius volutpat. Sed interdum ac sem et tincidunt.

<script type="text/javascript">
function cartesianToPolar(c) {
  const r = Math.hypot(c.x, c.y);
  const φ = Math.atan2(c.y, c.x);
  const p = { r: r, φ: φ };
  return p;
}
</script>

<script type="text/javascript">
function cartesianToPolarString(input) {
  const values = input.split(',', 2).map(parseFloat);
  const c = { x: values[0], y: values[1] };
  const p = cartesianToPolar(c);
  return p.r.toFixed(4) + ", " + p.φ.toFixed(4);
}

function onTest(outputId) {
  const input = window.prompt("Please enter (x, y):", "0.5, 0.8660254");
  const output = cartesianToPolarString(input);
  const element = document.getElementById(outputId);
  element.value = output;
}
</script>

<button onclick="onTest('output')">(<i>x</i>, <i>y</i>) ↦ (<i>r</i>, <i>φ</i>)</button> <input type="text" id="output" readonly="readonly" />

<span id="demo">Praesent gravida</span> porta bibendum. Sed eget egestas nulla, a fringilla mauris. Aenean rhoncus, augue ac lacinia blandit, nulla metus suscipit tellus, id auctor tortor purus quis sem. Pellentesque vel eros venenatis, tincidunt sem cursus, faucibus ipsum. Sed tincidunt tempor ex, nec viverra est sagittis non. Aenean faucibus velit eu lorem gravida efficitur.
