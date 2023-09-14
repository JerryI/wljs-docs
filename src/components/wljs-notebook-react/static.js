if (!window) var window = {dispatchEvent: () => {}};

const ev = new Event("load-wljs");
window.socket = {
    send: () => {console.warn('socket is offline')}
  }

  window.loadedNotebooks = {};
  window.LoadedWLJSForSure = true
  if (window.LoadedWLJS) {
    //alert('already loading...');
    
  } else {

  //alert('loading...');

 

  window.LoadedWLJS = true;
  window.dispatchEvent(ev);
  }