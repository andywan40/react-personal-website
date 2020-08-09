  export default {
    up() {},
    down(size) {
      const sizes = {
        xs: "575.98px",
        sm: "767.98px",
        md: "960.98px",
        lg: "1199.98px",
        xl: "2500px"
      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };