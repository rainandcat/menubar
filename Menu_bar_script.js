
//增加class active到被點選的menu item
$(document).ready(function(){
    $("li.menu-item").click(function(){
        $(this).toggleClass('active');
    });
});
