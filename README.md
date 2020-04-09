# simple-border

Add borders to your elements easy!

### Installation

---

    npm i simple-border

### Usage

Add `.sim-bord` class to your elements

```html
<div class="sim-bord"></div>
<span class="sim-bord"></span>
<img class="sim-bord" src="<url>" alt="img" />
```

### Importing

---

```javascript
import simpleBorder from "simple-border";
```

Then run the function

```javascript
simpleBorder();
```

It make border with default styles to elements with class `.sim-bord`

### Options

---

You can add some options

```javascript
simpleBorder({ yourStyles }, "<your elements> -optional");
```

### Sample

---

##### Adding style

```javascript
simpleBorder({ color: "red", width: ".3rem" });
```

_Add border with styles to elements with class `.sim-bord`_

##### Adding custom selector

```javascript
simpleBorder({}, ".your-class");
```

_Add default border to elements with class `.your-class`_

##### Adding styles to your elements

```javascript
simpleBorder({ radius: "20px", color: "#f00" }, "div, .your-class");
```

_Add styled border to all `div`s and elements with class `.your-class`_

### Options

---

- `color`
- `width`
- `style`
- `radius`
