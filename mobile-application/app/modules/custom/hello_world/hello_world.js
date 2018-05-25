

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
        text: 'Methode raussuchen',
        attributes: {
            onclick: "drupalgap_goto('methode_raussuchen_pdiv', {transition:'slide'})"
        }
    }

      return content;
}