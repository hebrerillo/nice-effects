'use strict';

(function()
{
const container = document.querySelector('.items-container');
const items = container.querySelectorAll('.item');

items.forEach((item, index) => 
{
    item.style.transition = 'none';
    item.style.transform = 'translateX(-' + item.offsetLeft + 'px)';
    item.offsetHeight;
    item.style.transition = '';
    item.style.zIndex = items.length - index;
});

container.style.visibility = 'visible';
})();
