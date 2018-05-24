//Implement menu_hook

function feature_projektfortschritt_anzeigen_menu(){
    var items = {};
    items['projektfortschritt'] = {
        title: 'Projektfortschritt',
        page_callback : 'projektfortschritt_anzeigen'
    };

    return items;
}


function projektfortschritt_anzeigen() {
    var width = screen.width;
    var height = screen.height;
    console.log('width: ' + width + ' heigth: ' + height);
    var alert_text = 'hdhdhd';
    //DesignThinkingGrafik
    var svgDesignThinkigGrafik = ' <svg width="768" height="512">' +

        '                <rect x="0" y="0" width="100%" height="30" style="fill: rgb(70, 70, 70);"/>' +
        '                <text x="40%" y="20" font-family="sans-serif" font-size="12px" fill="white">Vorbereitung</text>' +

        '            <g>' +
        '                  <rect x="0" y="0" width="256" height="512" style="fill: rgb(89,89,89);"/>' +
        '                   <path d="M 128 0 L0 256 L128 512 z" style="fill: rgb(143, 86, 178);"></path>' +
        '                   <path d="M 128 0 L256 256 L128 512 z" style="fill: rgb(120, 61, 153);"></path>' +

        '           </g>' +
        '            <g>' +
        '                  <rect x="256" y="0" width="256" height="512" style="fill: rgb(109,109,109);"/>' +
        '                   <path d="M 384 0 L256 256 L384 512 z" style="fill: rgb(68, 111, 149);"></path>' +
        '                   <path d="M 384 0 L512 256 L384 512 z" style="fill: rgb(51, 94, 135);"></path>' +

        '           </g>' +
        '            <g>' +
        '                  <rect x="512" y="0" width="256" height="512" style="fill: rgb(129,129,129);"/>' +
        '                   <path d="M 640 0 L512 256 L640 512 z" style="fill: rgb(58, 160, 57);"></path>' +
        '                   <path d="M 640 0 L768 256 L640 512 z" style="fill: rgb(50, 129, 49);"></path>'

        '           </g>' +


        //'                <path d="M 190 94 L340 244 L190 394 z" style="fill: rgb(120, 61, 153);"></path> ' +
        //'                <path d="M 491 94 L341 244 L491 394 z" style="fill: rgb(68, 111, 149);"></path>' +
        //'                <path d="M 491 94 L641 244 L491 394 z" style="fill: rgb(51, 94, 135);"></path>' +
        //'                   <path d="M 792 94 L641 244 L792 394 z" style="fill: rgb(58, 160, 57);"></path>' +
        //'                   <path d="M 792 94 L941 244 L792 394 z" style="fill: rgb(50, 129, 49);"></path>' +
        //'            </g>' +
        //'' +
        '</svg>';


    //set image path
    var image_path = drupalgap_get_path('module', 'feature_projektfortschritt_anzeigen') +
        '/images/projektfortschritt.png';
    //console.log(image_path);
    var content = {};
    /*
    content['my_custom_image'] = {

            theme:'image',
            path:image_path,
            alt:'Projektfortschritt',
            title:'Projektfortschritt'
        };
    */
    content['dt_grafik'] = {
        markup: svgDesignThinkigGrafik,
    };

    return content;
}

