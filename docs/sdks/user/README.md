# User
(*.user*)

## Overview

A user of the Fastly API and web interface. A user is always associated with a customer. Some information may be limited depending on access level.

<https://developer.fastly.com/reference/api/account/user>
### Available Operations

* [createUser](#createuser) - Create a user
* [deleteUser](#deleteuser) - Delete a user
* [getCurrentUser](#getcurrentuser) - Get the current user
* [getUser](#getuser) - Get a user
* [requestPasswordReset](#requestpasswordreset) - Request a password reset
* [updateUser](#updateuser) - Update a user
* [updateUserPassword](#updateuserpassword) - Update the user's password

## createUser

Create a user.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { RoleUser } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.createUser({
    role: RoleUser.User,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.User](../../models/shared/user.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)>**


## deleteUser

Delete a user.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.deleteUser({
    userId: "x9KzsrACXZv8tPwlEDsKb6",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteUserResponse](../../models/operations/deleteuserresponse.md)>**


## getCurrentUser

Get the logged in user.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.getCurrentUser();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCurrentUserResponse](../../models/operations/getcurrentuserresponse.md)>**


## getUser

Get a specific user.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.getUser({
    userId: "x9KzsrACXZv8tPwlEDsKb6",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetUserRequest](../../models/operations/getuserrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetUserResponse](../../models/operations/getuserresponse.md)>**


## requestPasswordReset

Requests a password reset for the specified user.

### Example Usage

```typescript
import { Fastly } from "Fastly";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.requestPasswordReset({
    userLogin: "krisowner@example.com",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RequestPasswordResetRequest](../../models/operations/requestpasswordresetrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RequestPasswordResetResponse](../../models/operations/requestpasswordresetresponse.md)>**


## updateUser

Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Two-factor attributes are not editable via this endpoint.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { RoleUser } from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.user.updateUser({
    user: {
      role: RoleUser.User,
    },
    userId: "x9KzsrACXZv8tPwlEDsKb6",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateUserResponse](../../models/operations/updateuserresponse.md)>**


## updateUserPassword

Update the user's password to a new one.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { UpdateUserPasswordSecurity } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly();
const operationSecurity: UpdateUserPasswordSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.user.updateUserPassword({}, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [components.PasswordChange](../../models/shared/passwordchange.md)                             | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateUserPasswordSecurity](../../models/operations/updateuserpasswordsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateUserPasswordResponse](../../models/operations/updateuserpasswordresponse.md)>**

