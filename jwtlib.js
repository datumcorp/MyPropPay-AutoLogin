"use strict";

var http = require("http")
	,moment = require("moment")
	, jsrsasign = require("jsrsasign")
	;
(function(exports){

	
   	var genJWT = function(opts,cb){

   		var sClaim = JSON.stringify(opts.claim);
		var sHeader = JSON.stringify(opts.header);
		var prvpem = opts.secret;
		var jwt = jsrsasign.jws.JWS.sign(null, sHeader, sClaim, prvpem);
		cb(null,jwt)
   	}

	
   	exports.generateJWT = function(opts,fn){
        return genJWT(opts,fn);
    };

})(exports);