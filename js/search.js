$('#search-photo').on('change paste keyup', function(){
    var inputName = $('#search-photo').val();
    var images = $('.item');
    $(images).each(function(){
        $(this).hide();
        if ($(this).children().attr('alt').toLowerCase().includes(inputName.toLowerCase()) || $(this).attr('data-title').toLowerCase().includes(inputName.toLowerCase())) {
            $(this).show();
        }
    });
});
