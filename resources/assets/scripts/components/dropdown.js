const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

function open(el) {
  el.setAttribute('aria-expanded', true);
}

function close(el) {
  el.setAttribute('aria-expanded', false);
}

function keydownListener(e) {
  const currentLink = e.target;

  // The element that would trigger a submenu
  const currentItem = currentLink.matches('[aria-haspopup]') ?
    currentLink :
    currentLink.closest('[aria-haspopup');

  const isInSubmenu = !! currentLink.closest('[role="menu"]');

  const nextItem = currentLink.parentElement.nextElementSibling;
  const prevItem = currentLink.parentElement.previousElementSibling;
  const nextLink = nextItem ? nextItem.querySelector('a') : null;
  const prevLink = prevItem ? prevItem.querySelector('a') : null;

  // Either current submenu or inner submenu
  const submenu = isInSubmenu ?
    currentLink.closest('[role="menu"]') :
    currentLink.parentElement.querySelector('[role="menu"]');

  // The closest tabbable element which is a parent
  const parentLink = isInSubmenu ?
    submenu.parentElement.querySelector('a, button') :
    null;

  // The closest parent element that triggers a submenu
  const parentItem = parentLink ?
    (parentLink.matches('[aria-haspopup') ? parentLink : parentLink.closest('[aria-haspopup')) :
    null;

  switch (e.keyCode) {
    case KEY_DOWN:
      // If it's in a submenu, go to next. If not, open submenu
      if (isInSubmenu) {
        if (nextLink) {
          nextLink.focus();
          e.preventDefault();
        }
      } else if (submenu) {
        open(currentItem);
        submenu.querySelector('[role="menuitem"]').focus();
        e.preventDefault();
      }
      break;
    case KEY_UP:
      // If it's in a submenu, go to previous until there's more then exit
      if (isInSubmenu) {
        if (prevLink) {
          prevLink.focus();
        } else if (parentLink) {
          parentLink.focus();
          close(parentItem);
        }
        e.preventDefault();
      }
      break;
    case KEY_LEFT:
      // If it's in a submenu exit, otherwise previous link
      if (isInSubmenu) {
        parentLink.focus();
        close(currentItem);
        e.preventDefault();
      } else if (prevLink) {
        prevLink.focus();
        e.preventDefault();
      }
      break;
    case KEY_RIGHT:
      // Next link
      if (nextLink) {
        nextLink.focus();
        e.preventDefault();
      }
      break;
  }
}

export function button(button) {
  const parent = button.parentNode;

  parent.addEventListener('mouseout', () => requestAnimationFrame(() => close(button)));
  // On mouseover close all other submenus
  parent.addEventListener('mouseover', () => requestAnimationFrame(() => {
    open(button);
  }));

  parent.addEventListener('keydown', keydownListener);
}

export function menu(menu) {
  const triggers = menu.querySelectorAll('[aria-haspopup="true"]');

  for (let i = 0; i < triggers.length; i++) {
    const trigger = triggers[i];

    trigger.addEventListener('mouseout', () => requestAnimationFrame(() => close(trigger)));
    // On mouseover close all other submenus
    trigger.addEventListener('mouseover', () => requestAnimationFrame(() => {
      Array.from(triggers).slice(i, 1).forEach(close);
      open(trigger);
    }));
  }

  menu.addEventListener('keydown', keydownListener);
}
