$(document).ready(function () {
    $('.submenu-2').parent().hover(function () {
        

        $('.submenu-3').hide();
        $(this).parent().height('auto');
        $('#' + $(this).data('id')).show();
        
        var width = $(this).width();
        var left = $(this).offset().left;

        if ($('#' + $(this).data('id')).length > 0) {
            $('#' + $(this).data('id')).show();

            $(this).parent().parent().addClass('border');
            if ($(this).hasClass('pre-last')) {
                $(this).parent().parent().addClass('last');
                $('#' + $(this).data('id')).css('left', -(width + 90) - 5);
            } else if ($(this).hasClass('last')) {
                $(this).parent().parent().addClass('last');
                $('#' + $(this).data('id')).css('left', -(width * 2) - 5);
            } else
                $('#' + $(this).data('id')).css('left', width);
        }

        var hoverh = [];
        $(this).parent().find('ul').each(function () {
            hoverh.push($(this).height());
        });

        var max_of_array = Math.max.apply(Math, hoverh);

        if ($(this).parent().height() < max_of_array)
            $(this).parent().height(max_of_array);
        else {
            max_of_array = $(this).parent().height();
            //$('#' + $(this).data('id')).height($(this).parent().height());
        }

        $(this).parent().find('ul').each(function () {
            $(this).height(max_of_array);
        });
    }, function () {

        $(this).parent().parent().find('ul').each(function () {
            $(this).height('auto');
        });
        $(this).parent().parent().removeClass('border');
        $(this).parent().parent().removeClass('last');
        $('#' + $(this).data('id')).hide();
        //$(this).parent().height('auto');
    })
});


function showFirst(id) {

    var first = $(id).find('.submenu-2').eq(0).parent();
    first.parent().parent().removeClass('last');
    first.parent().parent().removeClass('border');
    $_this = first;
    $('.submenu-3').hide();
    $_this.parent().height('auto');
    $('#' + $_this.data('id')).show();

    $_this.parent().height('auto');


    var width = $_this.width();
    var left = $_this.offset().left;

    if ($('#' + $_this.data('id')).length > 0) {
        $('#' + $_this.data('id')).show();

        $_this.parent().parent().addClass('border');
        if ($_this.hasClass('pre-last')) {
            $_this.parent().parent().addClass('last');
            $('#' + $_this.data('id')).css('left', -(width + 90) - 5);
        } else if ($_this.hasClass('last')) {
            $_this.parent().parent().addClass('last');
            $('#' + $_this.data('id')).css('left', -(width + 90) - 5);
        } else
            $('#' + $_this.data('id')).css('left', width);
    }

    var hoverh = new Array;
    $_this.parent().find('ul').each(function () {
        hoverh.push($(this).height());
    });
    var max_of_array = Math.max.apply(Math, hoverh);

    if ($_this.parent().height() < max_of_array)
        $_this.parent().height(max_of_array);
    else {
        max_of_array = $_this.parent().height();
        //$('#' + $(this).data('id')).height($(this).parent().height());
    }

    $_this.parent().find('ul').each(function () {
        $(this).height(max_of_array);
    });
}