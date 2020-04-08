export default function simpleBorder(opt) {
  const el = document.querySelectorAll(".add-border");

  let addStyle = `border-color: ${
    opt ? (opt.color ? opt.color : "#d3d3d3") : "#d3d3d3"
  }; border-width: ${
    opt ? (opt.width ? opt.width : "1px") : "1px"
  }; border-radius: ${
    opt ? (opt.radius ? opt.radius : "unset") : "unset"
  }; border-style: solid`;

  el.forEach((e) => (e.style = addStyle));
}
