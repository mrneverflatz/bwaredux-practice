const configs = {
  margin: {
    y: 0,
    x: 16,
  },
  close: {
    outsideClick: true,
    closeOnEscape: true,
    display: true,
    icon: "✖",
    size: 40,
  },
  outer: {
    style: {
      position: "fixed",
      overflowX: "hidden",
      inset: 0,
      zIndex: 1030,
    },
    className: "",
  },
  container: {
    style: { margin: 30 },
    className: "",
  },
  overlay: {
    style: {
      zIndex: 1031,
      inset: 0,
      position: "fixed",
      opacity: 0.9,
    },
    className: "",
  },
  wrapper: {
    style: {
      zIndex: 1032,
      borderRadius: ".75rem",
      padding: "2rem",
      boxShadow:
        "0 1px 40px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    },
    className: "",
  },
};
export default configs;
