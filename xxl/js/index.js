$(function() {
    $('body').css('visibility', 'visible');
    $('html').addClass('noscroll');
    $('.modal').css('opacity', 1);
    $('.modal .modal-content button').on({
        click: function () {
            $('html').removeClass('noscroll');
            $('.modal').hide();
        }
    })
    $('.modal').on('touchmove', function(event) {
        event.preventDefault();
    });
})