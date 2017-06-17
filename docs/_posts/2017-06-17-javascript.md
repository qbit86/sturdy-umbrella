---
title: "JavaScript"
---
<script type="text/javascript">
function cartesianToPolar(c) {
  const r = Math.hypot(c.x, c.y);
  const φ = Math.atan2(c.y, c.x);
  const p = { r: r, φ: φ };
  return p;
}

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

```javascript
function cartesianToPolar(c) {
  const r = Math.hypot(c.x, c.y);
  const φ = Math.atan2(c.y, c.x);
  const p = { r: r, φ: φ };
  return p;
}
```
