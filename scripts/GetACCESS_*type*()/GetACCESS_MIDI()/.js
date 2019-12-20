function GetACCESS_MIDI() {
navigator.requestMIDIAccess()
  .then(function(access) {

     // Get lists of available MIDI controllers
     const inputs = access.inputs.values();
     const outputs = access.outputs.values();

     access.onstatechange = function(e) {

       // Print information about the (dis)connected MIDI controller
       console.log(e.port.name, e.port.manufacturer, e.port.state);
     };
  });
}
GetACCESS_MIDI()
