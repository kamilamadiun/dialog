let headerBtn = $('.button');
let overlay = $('.overlay');
let popupClose = $('.popup__close');
let popupFormBtn = $('.popup__form-btn');

headerBtn.on('click' , function () {
    overlay.fadeIn('slow')

});

popupClose.on('click',function () {
    overlay.fadeOut('slow')

});

popupFormBtn.on('click',function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');

});

// overlay.on('click', function (e) {
//     if (target.className *** 'overlay'){
//         overlay.fadeOut('slow');
//     }
// });




let ul =$('.review__list');
ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('.review__tabs').find('.review__tabs-content').removeClass('review__tabs-content_active')
        .eq($(this).index()).addClass('review__tabs-content_active');
});


let owl = $('.owl-carousel');
owl.owlCarousel({
    item: 3,
    margin:30,
    autoHeight:true,
    dotsContainer: '#dots',
    loop:true,



});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});




let map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.879919, 74.595097],
        zoom: 18
    });
    let myIcon = DG.icon({
        iconUrl: 'my-icon.png',
        iconSize: [38, 95],
    });

    DG.marker([42.879919, 74.595097], {icon: myIcon}).addTo(map).bindPopup('IKEA');
});
