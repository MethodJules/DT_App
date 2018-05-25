
//css einbinden
drupalgap_add_css(drupalgap_get_path('module', 'methode_uebersicht')+ '/methodenuebersichtdesign.css');

/**
 * Implements hook_menu().
 */
function methoden_uebersicht_menu() {
  try {

    var items = {};

    /*Sagen, welche Seiten es so gibt*/
    //Problemraum divergent
    items['methoden_uebersicht'] = {
      title: 'Protokollmanagement',
      page_callback: 'methoden_uebersicht'
    };

    return items;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}






function methoden_uebersicht() {
  try {

    //Zeigen in welchem Raum wir sind
    var content = {};
    content['titel'] = {
      markup: '<p>Methodenübersicht</p> <p><b><center>Bereits verwendete Methoden</center></b></p>'
    };

    //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methoden_uebersicht') + '/bewertung.png';
    console.log(image_path);

    content['methode1'] = {
      theme: 'collapsible',
      header: '6 Hüte Methode <img style="margin-left: 25%" src="' + image_path + ' " alt="[Image hier]" width="20" height="12">',
      content: '<p>Hi</p>',
      attributes: {
        'data-theme': "b",
        'data-collapsed-icon': 'bars',
        'data-expanded-icon': 'bars'
      }
    };

    content['methode2'] = {
      theme: 'collapsible',
      header: 'Brainstorming <img style="margin-left: 25% " src= "' + image_path + ' " alt="[Image hier]" width="20" height="12">',
      content: '<p>Hi</p> <p>Brainstorming</p> <p class="label"> Raum der Methode</p> ' +
      '<p> Konvergent </p> <p class="label"> Phase der Methode </p> ' +
      '<p> </p> <p class="label"> Bewertung </p>' ,
      attributes: {
        'data-theme': "b",
        'data-collapsed-icon': 'bars',
        'data-expanded-icon': 'bars'
      }
    };

    content['methode3'] = {
      theme: 'collapsible',
      header: 'Walt Disney <img style="margin-left: 25%" src="' + image_path + ' " alt="[Image hier]" width="20" height="12">',
      content: '<p>Hi</p>',
      attributes: {
        'data-theme': "b",
        'data-collapsed-icon': 'bars',
        'data-expanded-icon': 'bars'
      }
    };


    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swiperight3',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}