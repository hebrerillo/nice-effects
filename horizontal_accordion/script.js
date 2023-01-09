'use strict';

(function ()
{
    const $itemsContainer = $('.items-container');
    const $items = $itemsContainer.find('.item');

    $items.each((index, item) =>
    {
        $(item).css('z-index', $items.length - index);
        $itemsContainer.append($('<div class="static-item"></div>'));
    });

    const $staticItems = $itemsContainer.find('.static-item');
    $itemsContainer.mouseleave(() =>
    {
        $items.each((_, item) =>
        {
            $(item).css('transform', 'translateX(0)');
        });
    });

    $($items[0]).mouseenter(() => {
        $items.each((index, item)=>{
            const newCoordinate = $staticItems[index].offsetLeft;
            $(item).css('transform', 'translateX(' + newCoordinate + 'px)');
        });
    });
})();
