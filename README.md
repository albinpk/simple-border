# Simple border creater

Add borders to your elements easy!

### Installation

    npm i simple-border

### Usage

add `.add-border` class to your elements

```html
<div class="add-border"></div>
<span class="add-border"></span>
<img class="add-border" src="url" alt="img" />
```

### Importing

```javascript
import simpleBorder from "simple-border";
```

Then run the function

```javascript
simpleBorder();
```

It make border with default styles

### Options

You can add some options

```javascript
simpleBorder({ radius: "1rem", color: "skyblue", width: ".5rem" });
```
