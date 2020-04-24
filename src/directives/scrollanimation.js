const animatedScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('enter');
        // animation.unobserve(entry.target);
        return;
      }
      entry.target.classList.remove('enter');
    });
  },
);

export default {
  bind(el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  },
};