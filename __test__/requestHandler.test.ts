// import {Routes} from '../src/Routes/Routes'
// import {RequestHandler} from '../src/RequestHandler/RequestHandler';
// import { ResponseHandler } from '../src/ResponseHandler';
// import { ResponseSuccess } from '../src/ResponseHandler/Response';




// describe("say hello", () => {
//     test("Send message", async () => {
//     const request = {
//         "resource": "/kyc/webhook/provider2",
//         "path": "/kyc/webhook/provider2",
//         "httpMethod": "POST",
//         "headers": {
//             "Accept": "*/*",
//             "Accept-Encoding": "gzip",
//             "Content-Type": "application/jwt",
//             "Eventversion": "1.0",
//             "Host": "t1wqxxmdhf.execute-api.us-east-1.amazonaws.com",
//             "User-Agent": "Truora/1.0.0",
//             "X-Amzn-Trace-Id": "Root=1-6269c468-3eb7745a3e67d89a7c01c996",
//             "X-Forwarded-For": "52.22.223.130",
//             "X-Forwarded-Port": "443",
//             "X-Forwarded-Proto": "https"
//         },
//         "multiValueHeaders": {
//             "Accept": [
//                 "*/*"
//             ],
//             "Accept-Encoding": [
//                 "gzip"
//             ],
//             "Content-Type": [
//                 "application/jwt"
//             ],
//             "Eventversion": [
//                 "1.0"
//             ],
//             "Host": [
//                 "t1wqxxmdhf.execute-api.us-east-1.amazonaws.com"
//             ],
//             "User-Agent": [
//                 "Truora/1.0.0"
//             ],
//             "X-Amzn-Trace-Id": [
//                 "Root=1-6269c468-3eb7745a3e67d89a7c01c996"
//             ],
//             "X-Forwarded-For": [
//                 "52.22.223.130"
//             ],
//             "X-Forwarded-Port": [
//                 "443"
//             ],
//             "X-Forwarded-Proto": [
//                 "https"
//             ]
//         },
//         "queryStringParameters": null,
//         "multiValueQueryStringParameters": null,
//         "pathParameters": null,
//         "stageVariables": null,
//         "requestContext": {
//             "resourceId": "nfdh2n",
//             "resourcePath": "/kyc/webhook/provider2",
//             "httpMethod": "POST",
//             "extendedRequestId": "RQugZH3xoAMFXqA=",
//             "requestTime": "27/Apr/2022:22:32:08 +0000",
//             "path": "/v1/kyc/webhook/provider2",
//             "accountId": "950166505146",
//             "protocol": "HTTP/1.1",
//             "stage": "v1",
//             "domainPrefix": "t1wqxxmdhf",
//             "requestTimeEpoch": 1651098728790,
//             "requestId": "3207532a-d521-4384-bc4f-2267de54f4b2",
//             "identity": {
//                 "cognitoIdentityPoolId": null,
//                 "accountId": null,
//                 "cognitoIdentityId": null,
//                 "caller": null,
//                 "sourceIp": "52.22.223.130",
//                 "principalOrgId": null,
//                 "accessKey": null,
//                 "cognitoAuthenticationType": null,
//                 "cognitoAuthenticationProvider": null,
//                 "userArn": null,
//                 "userAgent": "Truora/1.0.0",
//                 "user": null
//             },
//             "domainName": "t1wqxxmdhf.execute-api.us-east-1.amazonaws.com",
//             "apiId": "t1wqxxmdhf"
//         },
//         "body": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudHMiOlt7ImlkIjoiSEtFYmVhNTk0OTM4YjI4MjY1YTEzNGQwYjBkMjk5YzRjMTdiMDc3ZjU0MCIsImV2ZW50X3R5cGUiOiJjaGVjayIsImV2ZW50X2FjdGlvbiI6ImNyZWF0ZWQiLCJvYmplY3QiOnsiY2hlY2tfaWQiOiJDSEtiMzMzZDc3Mjk5MDFmZjI2OGQzODcyZDU5YTlhYjU0ZiIsImNvdW50cnkiOiJNWCIsImNyZWF0aW9uX2RhdGUiOiIyMDIyLTA0LTI3VDIyOjMyOjA4LjUxMDE4Nzg4NloiLCJpZF9zY29yZSI6MCwibmFtZV9zY29yZSI6MCwibmF0aW9uYWxfaWQiOiJHQVNFOTQxMDEzSENMUkxSMDciLCJwcmV2aW91c19jaGVjayI6IkNISzJlYWIzOWY4MmYyNTdjODg2ZDI5NGIwNjRjZjVhMTI0Iiwic2NvcmUiOi0xLCJzdGF0dXMiOiJub3Rfc3RhcnRlZCIsInR5cGUiOiJwZXJzb24iLCJ1cGRhdGVfZGF0ZSI6IjIwMjItMDQtMjdUMjI6MzI6MDguNTY2NDUzMTg5WiJ9LCJ2ZXJzaW9uIjoiMS4wIiwidGltZXN0YW1wIjoiMjAyMi0wNC0yN1QyMjozMjowOFoifV0sImlhdCI6MTY1MTA5ODcyOCwiaXNzIjoiVHJ1b3JhIn0.7yvoSnroVvY8Gg9JLNHbCeM-KEDMvBBCaBhDqQf9RIo",
//         "isBase64Encoded": false
//     }

//     class DefaultClass{
//         sayHello(){
//             let salute = "Hello!"
//             console.log(salute);
//             return new ResponseSuccess(salute);
//         }
//     }

//     let dc = new DefaultClass();
   
//     let routes = new Routes({
//         'defaultOperation':dc.sayHello
//     });

//     return await new RequestHandler(routes,request).handler();
  
   



// })});