export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const scrollToElement = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
