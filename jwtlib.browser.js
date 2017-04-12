
(function(exports){

	
   	var genJWT = function(opts,callback){
   		//var sClaim = JSON.stringify(opts.claim);
		//var sHeader = JSON.stringify(opts.header);
    var sClaim = opts.claim;
    var sHeader = opts.header;
		var key = opts.prvpem;
		var jwt = KJUR.jws.JWS.sign(null, sHeader, sClaim, key);
		callback(null,jwt)
   	}

   	var validateJWT = function(opts,cb){
   		var pubpem = opts.pubpem;
   		var jwt = opts.jwt;
   		var isValid = false;
		try {
			isValid = KJUR.jws.JWS.verifyJWT(jwt, pubpem,{alg:['RS256']});
		} catch (ex) {
			//alert("Error: " + ex);
			isValid = false;
		}
		cb(null,isValid);
   	}



   	exports.generateJWT = function(opts,fn){
        return genJWT(opts,fn);
    };
    exports.validateJWT = function(opts,fn){
        return validateJWT(opts,fn);
    };

})(window);