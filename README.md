# PropPay Auto Login

Procedure to assign an autologin url to a user

## Usage

#### Generate a jwt (JSON Web Token)

__Prerequisite__

* private key assigned to your property
  - Get this from PropPay private kwy generator
* AppID
  -  AppID/PropertyID which the private key is assigned to
  -  You get this when the private key is generated.
*  Email
  -  the email of the user you want to issue an auto login

Use the sample jwt generator or sample nodejs code provided to generate the jwt.
  
sample private key
```
-----BEGIN RSA PRIVATE KEY-----
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

```

sample jwt
```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTMyNzQ0NzAsImVtYWlsIjoicGhzMDgzNjZAcmNhc2QuY29tIiwiYXBwaWQiOiIxOWEwM2UzZC00OTAyLTRjZWYtYmZmZS0zYmI2MWY2ZGYxM2UifQ.cAPrTWVScCSJfwL28-2ptW6R29wAgwz8W3_Hg4hza6saErTaH9VIAeXIKQNCXhmQ2IFKWVe_SRuzCXETq2P9g25HmMsR79OFDp-MLBZcO5rtBX44uL1gRo-9qHn8IFjReXNn0-O6yKZuRNto9YAfgopDJqXhu9TLJAUq0ocTgrW47-oSOTB0arfVypRLdAp0X3uHUxhfT-GoQW0viOu_6ODCgl6HXFjgla3ww4zxircJaArdLqc7P6fwSJqL2EieqoIO2eCodD2QXTsbRbwh9sWQU0JnZuI1mdRTpj726IBnyrQcTIVMlwqlPxZ0wrBBrCMs8xPfilvWXxYC9ErWug
```

#### Assign a token for a user

1. Enable auto login for user (identified by email address) by obtaining the login token. 
  * Call PropPay endpoint [POST] /api/user/login?type=auto along with user email, propertyID and jwt
  * Refer to API listing below for more details
2. Pass the link containing the token to intended client
3. Client initiates auto login by calling the link containing the login token 

![proppay-autologin](proppay-autologin.png)

## PropPay API 

### __POST /api/user/login?type=auto__

assign auto login token

#### Sample URL
http://proppay.com:3000/api/user/login?type=auto

#### Headers

#### Body
__*Required*__

* email - email of the user to assign the login token
* appid - appid jwt is assign to
* jwt - JSON Web token 

__*Optional*__

* format=json [string] - format of response, can be json,xml, jsv, csv

#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "ok": true,
  "data": {
    "link": "http://proppay.com:3000/api/user/login/aaa@email.com?token=123abc&appid=xxx-xxx-xxx",
    "token": "123abc"
  }
}
```

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Make sure the jwt is correct",
    "ErrorCode": 401
}
```


