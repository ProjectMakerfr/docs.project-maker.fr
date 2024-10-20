---
sidebar_position: 1
---
# /users

## Overview
The `/users` endpoint allows you to manage user data, including creating new users, retrieving user information, updating user details, and deleting users.

## Endpoints

### ``GET /users/``
Retrieve a list of users.

#### Request
- **Method:** GET
- **URL:** `/users`
- **Headers:** 
  - `Authorization: Bearer <token>`

#### Query Parameters
- `page` (optional): Page number for pagination.
- `limit` (optional): Number of users to return per page.

#### Response
- **Status:** 200 OK
- **Body:**
  ```json
  {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com"
      }
    ],
    "page": 1,
    "totalPages": 10
  }
  ```

### ``POST /users``
Create a new user.

#### Request
- **Method:** POST
- **URL:** `/users`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

#### Body Parameters
- `name` (required): The name of the user.
- `email` (required): The email of the user.
- `password` (required): The password for the user.

#### Response
- **Status:** 201 Created
- **Body:**
  ```json
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  }
  ```

### ``GET /users/:id``
Retrieve information about a specific user.

#### Request
- **Method:** GET
- **URL:** `/users/:id`
- **Headers:** 
  - `Authorization: Bearer <token>`

#### Path Parameters
- `id`: The ID of the user.

#### Response
- **Status:** 200 OK
- **Body:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### ``PUT /users/:id``
Update information for a specific user.

#### Request
- **Method:** PUT
- **URL:** `/users/:id`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

#### Path Parameters
- `id`: The ID of the user.

#### Body Parameters
- `name` (optional): The updated name of the user.
- `email` (optional): The updated email of the user.

#### Response
- **Status:** 200 OK
- **Body:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### ``DELETE /users/:id``
Delete a specific user.

#### Request
- **Method:** DELETE
- **URL:** `/users/:id`
- **Headers:** 
  - `Authorization: Bearer <token>`

#### Path Parameters
- `id`: The ID of the user.

#### Response
- **Status:** 204 No Content

## Error Codes
- `400 Bad Request`: The request was invalid or cannot be otherwise served.
- `401 Unauthorized`: Authentication is required and has failed or has not yet been provided.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server.

## Examples

### Example Request: GET /users
```bash
curl -X GET "https://api.example.com/users" -H "Authorization: Bearer <token>"
```

### Example Response: GET /users
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ],
  "page": 1,
  "totalPages": 10
}
```

## FAQ
### How do I authenticate requests?
All requests must include the `Authorization` header with a valid token. For example:
```bash
-H "Authorization: Bearer <token>"
```

### What is the rate limit for the API?
The API rate limit is 1000 requests per hour.

