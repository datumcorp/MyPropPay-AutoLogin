"use strict"; 

var moment = require("moment")
	, _ = require("lodash")
	, jwt = require("./jwtlib")
	;

/*var config = {
	"claimUrl":"mfs.datumcorp.com",
	"port": 1313,
	"urlpath": "/api/claim?format=json",
	"APIClientId": "mfs-demo-1313",
	"APIClientSecret": "81d5c5c2fb42908bb4cf5a32056b1fc05fe98c7533bee4071a8e649e8e0c8dae"
}*/
var config = {
	"claimUrl":"mfs.datumcorp.com",
	"port": 1313,
	"urlpath": "/api/claim?format=json",
	"APIClientId": "mfs-demo-1313",
	"APIClientSecret": "81d5c5c2fb42908bb4cf5a32056b1fc05fe98c7533bee4071a8e649e8e0c8dae"
}

var getClaimOpt = {claimUrl: config.claimUrl, port: config.port, urlpath: config.urlpath};
jwt.getClaim(getClaimOpt, function(err,cresp){
	if(cresp){
		console.log("header:", JSON.stringify(cresp.header,null,2))
		console.log("claim:", JSON.stringify(cresp.claim,null,2))
		var opts = {
			claim: cresp.claim,
			header: cresp.header,
			secret: config.APIClientSecret,
		}
		jwt.generateJWT(opts,function(err,jwtresult){
			console.log("jwtresult: ",jwtresult);
		});

	}else{
		console.log(err);
	}
})

let prvpem = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBzJSu9P/jaHjsNBBV1bDnpo7O4ilw1dGz2XOi5bpFsQb7H64D4
Qbtx2+CKnVfNpDZEpfEVQIFnfm7DQ5LeO35O/j2jw6Gbkw3CdFx/mY7qP2dwUfmb
5pifvmt7k0nD4yVR5LNZ9yoOt9YuMc2chn84KL3gP/TVpNfKC0Pb9V/lfUWunmIi
qxISg4dv3JHRdL6W2MqgnL6C2Fwx9EEVef7MMKuQbZ53CAV2Ya2h5ojHY/wqyLNY
fENtWGMrKxxjZ/ye2qK5KBYjByEvmCk0ihhG/VLsaKMbqq0X6CowbyUELehZJu1o
fWPePqN/PScFRxXNhpBvvrpgeT9PTPEMn9CNAgMBAAECggEAVDyoUA5h9uhQ2QfY
zwu7HnMVgvct2ClxoZZ851O9bc53TPi8ZGJqSDTMg3vyhU4SKYyg36RORzGWxKFF
6/DoSc/ztj/jldYyJcVM+kiT5kk2WlSOYICFva/oIAKz32vonI3MrA+HJDdXqHnk
6xL2NVaQ+mKvsjCjcXtmTJ+pZVCRgM2vXiMqK3RWGVqA6vMqhIifuKABqde0yJ+Z
XF2RLC21ps3WxHmK9cqjcebS5Z3uDsHoxDIC/BdvA0nI9cVSDsR6KUSxKlQyJJ3s
U6+DyE0aVIs7nK6YF5lNooIpwHsB3MfQ2mySim9fXX7OiNbhWryXbSZu9vy/lh8c
q22r/QKBgQC37B0Yw1X90aHjNxnAu2GBaCn5x/T55Am+WnxOxEGFj4VB4OaIyuaL
DGhTPslEEq9i9if97LP/Cm9JgGWRnT3vg19smQhoLRJ3WZwHfwBw1D4OAfGC0TBr
ze5PMtfGX8qIwCK+sJBFxf1EPRG2I7JdM1xjYjf0Y4o0hhEmY5FzMwKBgQCgRQmf
jVWO2sh2iKATqrFoNZHsNE74r6at8ZZLy8WmsW7vC+BPJmA4QaGbzaEuPDCLfX13
KvUK9cO79hB4IuzQXuDahfFJvpbJurtiwwKO4eTOuUJgehf7z51xvYY3zgxAy6mq
K67rITBQSZBcm/JqsOPGQlQ8IGDp3nm6+xmtPwKBgG9nBPjK2Hs1Tulhpqem2Bia
D1LMWwZBqeUyybisB0Pu+rg8kWap/5qZmVdS4HXrG3DFyNN1XFFO8LmEnADnTWyW
FmahCwaOxnCkRm4D7zBoXm39n1utebbStVYjZa8ytmq+dk0qhTi+A/ohQ2kflhn9
0igghePxpvTJf/nQtXkhAoGAA/lSQMOHYJBqMg43MeWkmnnhkWLGpoHsdxmraVu3
Hef+YS0BNdU0w5BVCoDxwyy442yMJN1K0CfB37I9PE1ZY91GZAS4M+Tm5j+cD9nY
AWT2gG21iKDeYV8Hf198qXuRcDXckhydLLVY9lSsoK85No4GR88zOX5wCLx8djdt
ro8CgYBU8R9ZLETDdJiCK9DYri3xabF8sLhwAWWp0oUpzOarew+g75Lo30pimZg+
N35yVwpEbwZyaUWnq9pEXsdSA6T5QTkxScLfSJzsG3kRO8kDxN2yCkGQ1Op/S9+Q
DuNhus2l0iPu2kTInwDC6jb+/OPtBuwaF7PKLslFz/nO3anCTA==
-----END RSA PRIVATE KEY-----

`

let daysvalid = 30;
let header = JSON.parse('{"alg": "RS256", "typ": "JWT"}');
let claim = {
	appid: "de6d48e1-8fa7-4bd1-8ec3-067e2bc9b379",
	email: "ldl96287@rcasd.com"
}

var opts = {
	claim: claim,
	header: header,
	prvpem: prvpem
}
jwt.generateJWT(opts,function(err,jwtresult){
	console.log("jwtresult: ",jwtresult);
});