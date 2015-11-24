var sessionMin = 1, sessionSec = 00;
var breakMin = 5, breakSec = 0;
var sm, ss, bm, bs;
var sessionTime = true;
var running = false;
var interval;

function show() {
	if( sessionTime ) { 
		sm = sessionMin; ss = sessionSec;
		if( sessionMin < 10 )
			sm = "0" + sessionMin;
		if( sessionSec < 10 )
			ss = "0" + sessionSec;

		$("#time").html( sm + ":" + ss );

	} else {
		bm = breakMin; bs = breakSec;
		if( breakMin < 10 )
			bm = "0" + breakMin;
		if( breakSec < 10 )
			bs = "0" + breakSec;

		$("#time").html( bm + ":" + bs );
	}
}

function update() {
	if( sessionTime ) {
		sessionSec--;
		if( sessionSec == -1 ) { 
			sessionMin --;
			sessionSec = 59;
		}
		if( sessionMin == -1 ) {
			sessionTime = false;
			// leer tiempo actual del html
		}
		show();
	} else {
		breakSec--;
		if( breakSec == -1 ) { 
			breakMin --;
			breakSec = 59;
		}
		if( breakMin == -1 ) {
			sessionTime = true;
			// leer tiempo actual del html
		}
		show();
	}
}

function handler() {
	if( running ) {
		running = false;
		clearInterval( interval );
	} else {
		running = true;
		interval = setInterval(update, 1000);
	}
}

$(document).ready( function() {
	show();
} );