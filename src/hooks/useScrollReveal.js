import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    function onScroll() {
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return active;
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const nav = document.getElementById('nav');
  const navHeight = nav ? nav.getBoundingClientRect().height : 70;
  const navTop = nav ? (nav.getBoundingClientRect().top + window.scrollY) : 16;
  const offset = navTop + navHeight + 20;
  const elTop = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: elTop - offset, behavior: 'smooth' });
}
