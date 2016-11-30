var hiddens = document.getElementsByClassName('hidden');
//var buttons = document.getElementsByTagName("i");
var buttons = document.getElementsByClassName("edu");
for (var i = 0; i < buttons.length; i++) {      // for loopen finds buttons
  var v = buttons[i];
  v.addEventListener('click', expand);
}
function expand() {
  var idx = Number(this.id);          //Bygger på att<i> har id av 0,1,2, ossv
  var x = hiddens[idx].style;

if (x.display === 'block') {
    x.display = 'none';
    } else {
    x.display = 'block';
    }
}
