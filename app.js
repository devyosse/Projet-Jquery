window.$();
$( "#myId" ).text("Hello World");
let attribute = $( "a" ).attr( "href", "allMyHrefsAreTheSameNow.html" );

let body = $('body');
body.html(body.html() + `<div>Ajout d'une div</div>`);

$(body).width("150px");
$(body).height("150px");

body.html(body.html() + `<div>Ajout d'une div</div>`+ `<div>Ajout de deux div</div>` + `<div>Ajout de trois div</div>` + `<div>Ajout de quatre div</div>`)

