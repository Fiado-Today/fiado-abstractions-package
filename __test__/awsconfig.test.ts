import { unmarshall,marshall,unmarshallOptions} from '@aws-sdk/util-dynamodb';
import {DynamoDBConnector} from '../src/DatabaseConnector/DynamoDB/DynamoDBConnector';
import {DynamoDBCRUD} from '../src/DatabaseConnector/DynamoDB/DynamoDBCRUD'
import {DynamoDBQueryParams} from '../src/DatabaseConnector/DynamoDB/DynamoDBQueryParams'
import {Controller} from '../src/index'
import {ResponseReject,ResponseSuccess,ResponseTimeOut,ResponseUnauthorized,ResponseNotFound} from '../src/ResponseHandler/Response'


// // describe("get DynamoDB configuration", () => {
// //   it("should get an DynamoDBClient object", () => {
// //     let test = new DynamoDBConnector().getConfig();
// //     console.log(test);
// //   });
// // });


// describe("Save an object into DynamoDB table", () => {
//   it("Saves an object into DynamoDB table and returns it", async() => {
//     await new DynamoDBCRUD('TransactionMessage').save({otpCode:'6666',name:'TAN', lastname:'BAN'}).then((data)=>{
//       console.log(data);
//     }).catch((error)=>{
//       console.log(error)
//     });

//   });
// });

// // describe("Invalid password", () => {
// //   it("Intent to saves an object into DynamoDB table with wrong password", async() => {
// //     let test = await new DynamoDBCRUD('TransactionMessage').save({otpCode:'8890',name:'Jairoman', lastname:'account'}).then((data)=>{
// //       return data;
// //     }).catch((err)=>{
// //       console.log(err);
// //     });
// //   });
// // });

// describe("Select all items from DynamoDB table", () => {
//   it("Saves an object into DynamoDB table and returns it", () => {
//     let dynamoQueryParams = new DynamoDBQueryParams().setLimit(2);
//     let test = new DynamoDBCRUD('TemplateMessage').find(dynamoQueryParams);
//     console.log(test);
//   });
// });


// describe("Paginate all items from DynamoDB table", () => {
//     it("Saves an object into DynamoDB table and returns it", () => {
//       let dynamoQueryParams = new DynamoDBQueryParams().setLimit(100);
//       let test = new DynamoDBCRUD('TemplateMessage').find(dynamoQueryParams);
//       console.log(test);
//     });
//   });


// // describe("Select items  with query params from DynamoDB table", () => {
// //   it("select items with query params into DynamoDB table and returns it", async() => {

// //     let filter = `directoryId = :directoryId AND creationDate <= :creationDate AND creationDate >= :expirationDate and #status = :status`;
// //     let attributes = {
// //         ":directoryId": 'sefnwe-w3234-0504-31cc',
// //         ":creationDate": '2022-04-20T02:28:57.040Z',
// //         ":expirationDate": '2022-04-20T00:28:57.040Z',
// //         ":status":'CREATED'
// //      }

// //     let query =  new DynamoDBQueryParams()
// //     .setfilters(filter)
// //     .setAttributeValues(attributes)
// //     .setAttributeNames({"#status":"status"})
// //     .setLimit(1)

// //    await new DynamoDBCRUD('TransactionMessage').find(query).then((data)=>{
// //       console.log(data)
// //     }).catch((err)=>{
// //       console.log(err)
// //     });
// //     //console.log(test);
// //   });
// // });


// // describe("update item from DynamoDB table", () => {
// //   it("Saves an object into DynamoDB table and returns it", () => {
// //     let dynamoQueryParams = new DynamoDBQueryParams()
// //     .setKey({id:'03438bf8-af91-4992-8a21-ff8974744861'})
// //     .setUpdateExpression('set otpCode = :otpCode')
// //     .setAttributeValues({':otpCode': '1000'})
// //     let test = new DynamoDBCRUD('TransactionMessage').update(dynamoQueryParams);
// //     console.log(test);
// //   });
// // });


// // describe("delete item from DynamoDB table", () => {
// //   it("delete an object from DynamoDB table", () => {
    // let dynamoQueryParams = new DynamoDBQueryParams()
    // .setKey({id:'03438bf8-af91-4992-8a21-ff8974744861'})
    // let test = new DynamoDBCRUD('TransactionMessage').delete(dynamoQueryParams);
    // console.log(test);
// //   });
// // });

// describe("Select all items from DynamoDB table", () => {
//     it("select all items into DynamoDB table and returns it", () => {
//       let dynamoQueryParams = Controller.handleRequest('hi','ja')
//       console.log('hola')
//     });
//   });



// // describe("Return response", () => {
// //     it("Return response", () => {
// //         const sum =()=>{ 
// //           let a = 5;
// //           let b = 10;
// //           if(a < b){
// //             return new ResponseSuccess();
// //           }else{
// //             throw new ResponseReject();
// //           }
          
// //         }

// //         sum();

// //     });
// //   });


// describe("bulk items", () => {
//   it("delete an object from DynamoDB table", () => {
    // let test = new DynamoDBCRUD('City').bulk([
    
    // ])
    // console.log(test);
//   });
// });


describe("opaginate item", () => {
  it("delete an object from DynamoDB table", async() => {
    let query = new DynamoDBQueryParams()
    .setfilters('createDate >= :createDate')
    .setAttributeValues({":createDate": '2022-07-22T09:53:26.179Z'})
    let test = await new DynamoDBCRUD('City').paginate(query,2,20,'createDate',true);
    console.log(test);
  });
});