  export default {
    up() {},
    down(size) {
      const sizes = {
        xs: "575.98px",
        xss: "600px",
        sm: "767.98px",
        smm: "920px",
        md: "960.98px",
        mdd: "999.9px",
        lg: "1199.98px",
        lgg: "1280px",
        xl: "2500px"
      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };