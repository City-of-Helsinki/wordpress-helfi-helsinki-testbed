export function open(el) {
  el.setAttribute('aria-expanded', true);
}

export function close(el) {
  el.setAttribute('aria-expanded', false);
}

export function toggle(el) {
  const isExpanded = el.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }
}

export function toggler(el) {
  el.addEventListener('click', () => requestAnimationFrame(() => {
    const isExpanded = el.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      close(el);
    } else {
      open(el);
    }

    const controls = el.getAttribute('aria-controls');
    if (controls) {
      controls.split(' ').forEach((selector) => {
        const el  = document.getElementById(selector);
        if (isExpanded) {
          el.classList.remove('is-active');
        }
        else {
          el.classList.add('is-active');
        }
      });
    }
  }));
}
