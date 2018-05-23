

function hello_world_menu() {
    var items = {};
    items['hello_world'] = {
        title: 'DrupalGap',
        page_callback: 'hello_world_hello_world_page'
    };

    return items;
}

function hello_world_hello_world_page() {
    var content = {};
    content['my_button'] = {
        theme: 'button',
        text: 'Hello World',
        attributes: {
            onclick: "drupalgap_goto('simple_page', {transition:'slide'})"
        }
    }

    return content;
}