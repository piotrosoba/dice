function RY(){
    return Math.random() * 500;
}

function RX(){
    return Math.random() * 1000;
}

function DEG(){
    return (Math.floor((Math.random() * 10) +3) * 90);
}


$('#dice:not(:animated)').click(function(){
    $('#dice').css({
        'transition': '1s',
        'transform': 'rotateX('+ DEG() +'deg) rotateY('+ DEG() +'deg)'
   });
   $('#scene').css({
    'transition': '1s',
    'transform': 'translate('+ RX() +'px, '+ RY() +'px )'})
}); 
