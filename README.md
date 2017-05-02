# MyPropPay Auto Login

Procedure to assign an autologin url to a user

Note:
* To make full use of the steps outlined here, make sure you have an understanding of how to generate and use jwt ([JSON Web Token](https://jwt.io/))

## Usage

#### Assign a token for a user

![proppay-autologin](proppay-autologin.png)

1. Enable auto login for user (identified by email address) by obtaining the login token. 
    * Call PropPay endpoint [POST] /api/user/login?type=auto along with user email, propertyID and jwt
    * Refer to API listing below for more details
2. Pass the link containing the token to intended client
3. Client initiates auto login by calling the link containing the login token 


#### Generate a jwt (JSON Web Token)

__Prerequisite__

* private key assigned to your property
  - Get this from PropPay private kwy generator
* AppID
  -  AppID/PropertyID which the private key is assigned to
  -  You get this when the private key is generated.
*  Email
  -  the email of the user you want to issue an auto login
refer to file [sampledata](/sampledata) for sample private key and other data you may need.

Use the sample jwt generator or sample nodejs code provided to generate the jwt.
  
sample jwt
```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTMyNzQ0NzAsImVtYWlsIjoicGhzMDgzNjZAcmNhc2QuY29tIiwiYXBwaWQiOiIxOWEwM2UzZC00OTAyLTRjZWYtYmZmZS0zYmI2MWY2ZGYxM2UifQ.cAPrTWVScCSJfwL28-2ptW6R29wAgwz8W3_Hg4hza6saErTaH9VIAeXIKQNCXhmQ2IFKWVe_SRuzCXETq2P9g25HmMsR79OFDp-MLBZcO5rtBX44uL1gRo-9qHn8IFjReXNn0-O6yKZuRNto9YAfgopDJqXhu9TLJAUq0ocTgrW47-oSOTB0arfVypRLdAp0X3uHUxhfT-GoQW0viOu_6ODCgl6HXFjgla3ww4zxircJaArdLqc7P6fwSJqL2EieqoIO2eCodD2QXTsbRbwh9sWQU0JnZuI1mdRTpj726IBnyrQcTIVMlwqlPxZ0wrBBrCMs8xPfilvWXxYC9ErWug
```


## PropPay API 

### __POST /api/user/login?type=auto__

assign auto login token

#### Sample URL
http://app.myproppay.com/api/user/login?type=auto

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
    "link": "http://app.myproppay.com/api/user/login/aaa@email.com?token=123abc&appid=xxx-xxx-xxx",
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


