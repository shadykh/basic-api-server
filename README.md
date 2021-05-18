# Lab: Class 03

### Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

#### **Data Models**

- Create 2 in-memory data models using ES6 Classes, exported as Node Modules
  - Define your field names and an empty data storage in the constructor
- The classes should have the following methods defined, to perform CRUD Operations:
  - create()
    - Should ensure that the record created only has the fields that you defined
  - get() or read()
  - update()
  - delete()

#### **Routes**

In your express server, create a route module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

- Add a Record
  - CRUD Operation: Create
  - REST Method: POST
  - Path: /food
  - Input: JSON Object in the Request Body
  - Returns: The record that was added to the database
    - You must generate an ID and attach it to the object
    - You should verify that only the fields you define get saved as a record

- Get All Records
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food
  - Returns: An array of objects, each object being one entry from your database

- Get One Record
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /food/1
  - Returns: The object from the database, which has the id matching that which is in the path

- Update A Record
  - CRUD Operation: Update
  - REST Method: PUT
  - Path: /food/1
  - Input: JSON Object in the Request Body
  - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data
    - You should verify that only the fields you define get saved as a record

- Delete A Record
  - CRUD Operation: Destroy
  - REST Method: DELETE
  - Path: /food/1
  - Returns: The record from the database as it exists after you delete it (i.e. null)

#### **The lab tree**

- ![Tree](https://raw.githubusercontent.com/shadykh/basic-api-server/main/src/assets/tree.gif)

- Implementation Notes
  - In your server.js, require() your router modules, and use() them
  - In your routers, require() the correct data model and instantiate a new instance

#### **Testing Requirements**

- 404 on a bad route
- The correct status codes and returned data for each REST route
  - Create a record using POST
  - Read a list of records using GET
  - Read a record using GET
  - Update a record using PUT
  - Destroy a record using DELETE

#### **More about the Lab**

- Github
  - For the repo ***basic-api-server*** clicks => [here](https://github.com/shadykh/basic-api-server).
  - Pull Requests:
    - [https://github.com/shadykh/basic-api-server/pull/1](https://github.com/shadykh/basic-api-server/pull/1)
    - [https://github.com/shadykh/basic-api-server/pull/2](https://github.com/shadykh/basic-api-server/pull/2)
  - Actions:
    - [https://github.com/shadykh/basic-api-server/runs/2613483020?check_suite_focus=true](https://github.com/shadykh/basic-api-server/runs/2613483020?check_suite_focus=true)
    - [https://github.com/shadykh/basic-api-server/runs/2613497329?check_suite_focus=true](https://github.com/shadykh/basic-api-server/runs/2613497329?check_suite_focus=true)
    - [https://github.com/shadykh/basic-api-server/runs/2613498051?check_suite_focus=true](https://github.com/shadykh/basic-api-server/runs/2613498051?check_suite_focus=true)
  - Local Tests:
    - ![Local Test Image](https://raw.githubusercontent.com/shadykh/basic-api-server/main/src/assets/server_test_js.gif)
  - GitHub Tests:
    - ![github tests](https://raw.githubusercontent.com/shadykh/basic-api-server/main/src/assets/githubtests.PNG)


- Heroku
  - For the link of the ***deployment main branch => /api/favorite/games <= route***  clicks => [here](https://shady-basic-api-server.herokuapp.com/api/favorite/games).


- UML:
  - ![UML](https://raw.githubusercontent.com/shadykh/basic-api-server/main/src/assets/uml.PNG)


- Tests:
  - Test the routes and statues➡️ [server.test.js]


- I did this lab with help of
  - Node.js.
  - morgen
  - uuid 
  - cors
  - express.
  - dotenv.
  - supertest.
  - jest.
  - Github.
  - Heroku.
  - VsCode.
  - Ubuntu.

## Notes

- morgen:
  - Logger middleware function using the given format and options. The format argument may be a string of a predefined name (see below for the names), a string of a format string, or a function that will produce a log entry. The format function will be called with three arguments tokens, req, and res, where tokens is an object with all defined tokens, req is the HTTP request and res is the HTTP response. The function is expected to return a string that will be the log line, or undefined / null to skip logging.
    - > for further information clicks => [here](https://www.npmjs.com/package/morgan)
- uuid:
  - A universally unique identifier (UUID) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used, often in software created by Microsoft. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes. While the probability that a UUID will be duplicated is not zero, it is close enough to zero to be negligible.
    - > for further information clicks => [here](https://en.wikipedia.org/wiki/Universally_unique_identifier#:~:text=A%20universally%20unique%20identifier%20(UUID,%2C%20for%20practical%20purposes%2C%20unique.))
- REST and SOAP:
  - SOAP vs. REST, two of the most common API paradigms. Although the two are often compared as apples to apples, they’re inherently different technologies and aren’t easily compared on a granular level. Why? Because SOAP is a protocol, and REST is an architectural style. A REST API can actually utilize the SOAP protocol, just like it can use HTTP. So, right off the bat, they’re going to be packaged differently, function differently, and be used in different scenarios.
    - > for further information clicks => [here](https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles?utm_source=google&utm_campaign=SEM_GGL_INTL_NonBrand_Marketplace_DSA&utm_medium=cpc&utm_content=113089129402&utm_term=&campaignid=11384804789&gclid=CjwKCAjwqIiFBhAHEiwANg9szrWMLd7P9QQ4VRETxz3jPo7vQAxwQhG7WKSyuFryUk_AzoCjQoN4vxoCVagQAvD_BwE)
- JS Classes:
  - Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
    - > for further information clicks => [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

<br>

---
<br>

- ### Shady Khaled github ✅

  - [Shady Khaled](https://github.com/shadykh)

- ### Shady Khaled reading notes 📚

  - [Shady Khaled reading notes](https://shadykh.github.io/reading-notes/)

- ### Shady Khaled portfolio 💬

  - [Shady Khaled portfolio](https://portfolio-shady.herokuapp.com/)
