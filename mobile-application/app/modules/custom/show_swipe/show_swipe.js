function show_swipe_menu() {
    try {
        var items = {};
        items['simple_page'] = {
            title: 'My simple page',
            page_callback: 'show_swipe_simple_page'
        };

        return items;
    } catch (error) {
        console.log('show_swipe - ' + error ); //For Debugging
    }
}


function show_swipe_simple_page() {
    try{
        //Build content
        var content = {};
        content['my_stuff'] = {
            markup: '<p>Blah blah blah..</p>'
        };

        //Set up the swipe handler
        var page_id = drupalgap_get_page_id();
        content['my_swipe_handler'] = {
            markup: drupalgap_jqm_page_event_script_code({
                page_id: page_id,
                jqm_page_event: 'page_show',
                jqm_page_event_callback: 'show_swipe_page_swiperight',
                jqm_page_event_args: JSON.stringify({
                    page_id: page_id
                })
        })

        };
        return content;
    } catch (error) {
        console.log('show_swipe - '-  + error)
    }
}

//Swipe handler right swipe
function show_swipe_page_swiperight() {
    try{
        $('#' + options.page_id).on('swiperight', function(event) {
            drupalgap_back();
        });
    } catch (error) {
        console.log('show_swipe - ' + error);
    }
}