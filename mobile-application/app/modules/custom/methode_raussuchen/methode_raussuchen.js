
//css einbinden
drupalgap_add_css(drupalgap_get_path('module', 'methode_raussuchen')+ '/buttoncolours.css');

/**
 * Implements hook_menu().
 */
function methode_raussuchen_menu() {
  try {
    var items = {};

/*Sagen, welche Seiten es so gibt*/
    //Problemraum divergent
    items['methode_raussuchen_pdiv'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_pdiv'
    };
    //Problemraum konvergent
    items['methode_raussuchen_pkon'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_pkon'
    };

    //Lösungsraum divergent
    items['methode_raussuchen_ldiv'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_ldiv'
    };


    //Lösungsraum konvergent
    items['methode_raussuchen_lkon'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_lkon'
    };

    //Implementierungsraum divergent
    items['methode_raussuchen_idiv'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_idiv'
    };

    //Implementierungsraum konvergent
    items['methode_raussuchen_ikon'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methode_raussuchen_ikon'
    };

    //Implementierungsraum konvergent
    items['methoden_beschreibung'] = {
      title: 'Methodenbibliothek',
      page_callback: 'methoden_beschreibung'
    };

    return items;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}

//----------------------SWIPE HANDLER-----------------------------

/**
 * A swipeleft handler function for the simple page.
 */
function my_module_page_swipeleft(options) {
  try {
    $('#' + options.page_id).on('swipeleft', function(event) {
      drupalgap_goto('methode_raussuchen_ldiv', {transition:'slide'});
    });
  }
  catch (error) { console.log('my_module_page_swipeleft - ' + error); }
}

function my_module_page_swipeleft2(options) {
  try {
    $('#' + options.page_id).on('swipeleft', function(event) {
      drupalgap_goto('methode_raussuchen_idiv', {transition:'slide'});
    });
  }
  catch (error) { console.log('my_module_page_swipeleft2 - ' + error); }
}

/**
 * A swiperight handler function for the simple page.
 */
function my_module_page_swiperight(options) {
  try {
    $('#' + options.page_id).on('swiperight', function(event) {
      drupalgap_goto('methode_raussuchen_ldiv', {transition:'slide'});
    });
  }
  catch (error) { console.log('my_module_page_swiperight - ' + error); }
}

function my_module_page_swiperight2(options) {
  try {
    $('#' + options.page_id).on('swiperight', function(event) {
      drupalgap_goto('methode_raussuchen_pdiv', {transition:'slide'});
    });
  }
  catch (error) { console.log('my_module_page_swiperight2 - ' + error); }
}
//--------------------------------------------------------------------------



//seitengestaltung

/*Problemraum-Divergent*/
function methode_raussuchen_pdiv() {
  try {

    //Zeigen in welchem Raum wir sind
    var content = {};
    content['my_intro_text'] = {
      markup: '<p><center><b>Problemraum</b> <i>divergent</i> </center></p>'
    };

       //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/problemraumdiv2.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'problemdiv',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_pkon\')" />'
    };


      //  //Per Klick auf Button in den konvergenten Raum gelangen
    //content['my_button'] = {
      //theme: 'button',
      //text: 'problemraum-konvergent',
      //attributes: {
        //        'id': 'problemraumdivergent',
          //      onclick: "drupalgap_goto('methode_raussuchen_pkon', {transition:'slide'})"
      //}
    //}

    //Anzahl der Methoden in diesem Raum zeigen

    content['method_count'] = {
      markup: '<p> <center> <b>18 Methoden </b></center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id': 'problemraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id': 'problemraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id': 'problemraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id': 'problemraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swipeleft',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}

/*Problemraum-Konvergent*/
function methode_raussuchen_pkon() {
  try {

    //zeigen in welchem raum wir sind
    var content = {};
    content['my_intro_text'] = {
      markup: '<p><center><b>Problemraum</b> <i>konvergent</i></center></p>'
    };

    //dem Benutzer zeigen was zu tun ist

        //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/probmlemraumkon.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'problemkon',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_pdiv\')" />'

    };

    //Anzahl der Methoden in diesem Raum zeigen
        content['method_count'] = {
      markup: '<p> <center> <b>18 Methoden </b> </center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id': 'problemraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id': 'problemraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id': 'problemraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id': 'problemraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swipeleft',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}

/*Lösungsraum Divergent*/
function methode_raussuchen_ldiv() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p> <center><b>Lösungsraum</b> <i>divergent</i> </center></p>'
    };

    //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/loesungsraumdiv.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'loesungsraumdiv',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_lkon\')" />'

    };

       //Anzahl der Methoden in diesem Raum zeigen
    var content2 = {};
    content['method_count'] = {
      markup: '<p> <center> <b> 18 Methoden </b> </center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id': 'loesungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id': 'loesungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id': 'loesungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id': 'loesungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swipeleft2',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler2'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swiperight2',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };



    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}

/*Lösungsraum Konvergent*/
function methode_raussuchen_lkon() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p><center> <b>Lösungsraum</b> <i> konvergent</i></center></p>'
    };

    //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/loesungsraumkon.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'loesungsraumkon',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_ldiv\')" />'

    };

    //Anzahl der Methoden in diesem Raum zeigen
    var content2 = {};
    content['method_count'] = {
      markup: '<p> <center> <b> 18 Methoden </b> </center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id' : 'loesungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id' : 'loesungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id' : 'loesungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id' : 'loesungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swipeleft2',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler2'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swiperight2',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}

/*Implementierungsraum Divergent*/
function methode_raussuchen_idiv() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p><center><b>Implementierungsraum </b> <i>divergent</i></center></p>'
    };

    //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/implementierungsraumdiv.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'implementierungsraumdiv',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_ikon\')" />'

    };

    //Anzahl der Methoden in diesem Raum zeigen
    var content2 = {};
    content['method_count'] = {
      markup: '<p> <center> <b> 18 Methoden </b> </center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id' : 'implementierungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id' : 'implementierungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id' : 'implementierungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id' : 'implementierungsraumdivergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }


    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swiperight',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}


/*Implementierungsraum Konvergent*/
function methode_raussuchen_ikon() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p><center> <b> Implementierungsraum </b> <i>konvergent</i> </center></p>'
    };

    //Grafik laden Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/implementierungsraumkon.png';
    console.log(image_path);

    content['problemdiv'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'implementierungsraumkon',
      markup : '<img src="' + image_path + '"' + 'alt="My Image Alt" onclick=" ' +
      'drupalgap_goto(\'methode_raussuchen_ikon\')" />'

    };

    //Anzahl der Methoden in diesem Raum zeigen
    var content2 = {};
    content['method_count'] = {
      markup: '<p> <center> <b> 18 Methoden </b> </center></p>'
    };

    //Methoden auflisten
    content['methode 1'] = {
      theme: 'button',
      text: 'Brainstorming',
      attributes: {
        'id' : 'implementierungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 2'] = {
      theme: 'button',
      text: 'Crazy 8',
      attributes: {
        'id' : 'implementierungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }
    content['methode 3'] = {
      theme: 'button',
      text: 'Mindmap',
      attributes: {
        'id' : 'implementierungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    content['methode 4'] = {
      theme: 'button',
      text: '6 Hüte',
      attributes: {
        'id' : 'implementierungsraumkonvergent',
        onclick: "drupalgap_goto('methoden_beschreibung', {transition:'slide'})"
      }
    }

    var page_id = drupalgap_get_page_id();
    content['my_swipe_handler'] = {
      markup: drupalgap_jqm_page_event_script_code({
        page_id: page_id,
        jqm_page_event: 'pageshow',
        jqm_page_event_callback: 'my_module_page_swiperight',
        jqm_page_event_args: JSON.stringify({
          page_id: page_id
        })
      })
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}



function methoden_beschreibung() {
  try {

    var content = {};

    content['ueberschrift'] = {
      markup: '<p><b>Beschreibung</b></p>'
    };

    content['my_intro_text'] = {
      markup: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ' +
      'ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ' +
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
      'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
      'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ' +
      'justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata' +
      ' sanctus est Lorem ipsum dolor sit amet.</p>'
    };




    content['weblink'] = {
      theme: 'button',
      text: 'Weblink',
      attributes: {
        'data-icon': 'info',
        onclick: "window.open('https://de.wikipedia.org/wiki/Stiftung_Universit%" +
        "C3%A4t_Hildesheim', '_system', 'location=yes')"
      }
    }

    content['Coach'] = {
      theme: 'button',
      text: 'Virtual Coach',
      attributes: {
        'data-icon': 'video',
        onclick: "window.open('https://www.youtube.com/watch?v=9K8W4ooygUU', '_system', 'location=yes')"
      }
    }

    content['titelskizze'] = {
      markup: '<p><b>Skizze</b></p>'
    };

    //Skizze Laden
    var image_path = drupalgap_get_path('module', 'methode_raussuchen') + '/skizze.jpg';
    console.log(image_path);

    content['skizze'] = {

      theme: 'image',
      path: image_path,
      alt: 'My Image Alt',
      title: 'Skizze'

    };

    content['Raum'] = {
      markup: '<p><b>Raum</b></p> <p>Problemraum, Lösungsraum</p>',

    };

    content['Phase'] = {
      markup: '<p><b>Phase</b></p><p>Konvergent</p>'
    };

    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}

