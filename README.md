# Todo-App-TGH

MERN Stack App for TGH-Tech Internship Test 
---
### Models
- User
```
username:String
email:String
password:String
```
- Todo

```
title:String
priority:Number
is_cancelled:Boolean
is_finished:Boolean
```
---
### AUTHENTICATION
The Server Uses JWT(JSON Web Tokens) for authentication
The Authorization Header follows this format
```
Authorization:Bearer <token>
```
get JWT tokens when Signup or Login
---
### ENDPOINTS
TODO BASIC_URL:http://localhost:8000/api/todos

1. BASIC_URL
```
GET - GET ALL TODOS OF A USER
POST - CREATE A NEW TODO
```
2.BASIC_URL+'/delete'
```
DELETE - DELETE A TODO (PASS THE ID ONLY AS PARAMS)
```
3. BASIC_URL+'/cancel'
```
PUT - CANCEL/RE-ADD A TODO (PASS THE ID ONLY AS PARAMS)
```

4. BASIC_URL+'/finish'
```
PUT - FINISH/UNDO FINISH A TODO (PASS THE ID ONLY AS PARAMS)
```
5. BASIC_URL+'/report'
```
GET - GET ALL PENDING,CANCELLED AND FINISHED TODOS OF A USER
```

---
AUTHENTICATION ABASE_URL = http://localhost:8000/api/users

1. ABASE_URL+'/signup'
```
POST  - REGISTER A NEW USER 
```
2. ABASE_URL+'/login'
```
POST - LOGIN A USER 
```
