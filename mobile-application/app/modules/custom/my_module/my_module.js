
function my_module_menu() {
    var items = {};
    items['food'] = {
        title: 'Food',
        page_callback: 'my_module_food_page'
    };

    items['beverage'] = {
        title: 'Beverage',
        page_callback: 'my_module_beverage_page'
    };

    return items;
}

function my_module_food_page() {
    var content = {};

    content['my_markup'] = {
      markup: '<svg width="400" height="110">\n' +
      '  <rect width="200" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />\n' +
      '</svg>'
    };

    return content;
}

function my_module_beverage_page() {
    return 'What would you like to drink?';
}

function my_module_block_info() {
    var blocks = {};
    blocks['my-custom-block'] = {
        delta: 'my_custom_block',
        module: 'my_module'
    };

    return blocks;
}

function my_module_block_view(delta, region) {
    var content = {};
    if(delta == 'my_custom_block') {
        var d = new Date();
        content['date'] ={
            markup : '<h2>' + d.toDateString() + '</h2>'
        };
    }
    return content;
}