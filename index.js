export default function simpleBorder(opt, selector = ".sim-bord") {
  const el = document.querySelectorAll(selector);

  // Default values
  const color = "#d3d3d3",
    width = "1px",
    style = "solid",
    radius = "unset";

  let addStyle = `border: ${opt ? (opt.color ? opt.color : color) : color} ${
    opt ? (opt.width ? opt.width : width) : width
  } ${opt ? (opt.style ? opt.style : style) : style}; border-radius: ${
    opt ? (opt.radius ? opt.radius : radius) : radius
  };`;

  el.forEach((e) => (e.style = addStyle));
}
