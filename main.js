//Grabbing in all the timeline list items and putting it in variable items
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/*Function 'run' loops through all the list items and check if they are in the view-port.
'show' displays the items that are in viewport*/
const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

/* Events:
run  is fired when 1) The page is loaded
2) Browser is resized
3) The page is scrolled
*/
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);