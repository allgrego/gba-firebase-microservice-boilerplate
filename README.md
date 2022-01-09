# GBA Firebase Microservice Boilerplate

A GBA Logistics template for a Firebase based microservice with TypeScript and Express

**Author**: _Gregorio Alvarez < galvarez@gbalogistic.com >_
**Web site**: `https://gbalogistic.com`

## Initial Setup

Clone this repository in your firebase project folder _functions/src/microservices_ with its correspondent name, and do your magic!

**Please check that your required dependencies for this app are added to _/functions/package.json_ file to be able to use them**

### Sample Firebase Project Folder Structure

firebase-root
    ├── ...
    ├── functions                   # Firebase functions folder
    │   ├── src                     # Folder for TypeScript code
    │   │   ├── index.ts            # File to expose all microservices as Firebase functions
    │   │   ├── microservices       # All Microservices folder
    |   │   │   ├── microservice1   # First microservice folder (with this boilerplate structure)
    |   |   │   │   └── ...         
    |   │   │   ├── microservice2   # Second microservice folder (with this boilerplate structure)
    |   |   │   │   └── ...         
    │   │   │   ├── index.ts        # Gather all microservices in one file
    |   │   │   └── ...   
    │   │   └── ...
    │   ├── ...
    │   ├── tsconfig.json       # Firebase functions folder
    │   └── package.json        # Functions package.json file
    ├── ...
    ├── firebase.json           # Firebase configuration file
    └── package.json            # Global firebase project package.json file

## Endpoints

- GET /random

### GET /random

Obtain a JSON greetings message response

#### Query Parameters

| Name  | Data Type | Required / Optional | Default Value | Description                               |
| ----- | --------- | ------------------- | ------------- | ----------------------------------------- |
| name  | string   | optional            | stranger             | name to be displayed in greeting           |

Sample request with optional parameters:

```
https://microservice1name.domain.com/v1/countries?page=1&count=2

```

Response:

```
{
    message: "Hi, stranger!"
}

```
