# User

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
import { Fastly } from "FastlyTestJS";
import { CreateUserResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { RoleUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.createUser({
  limitServices: false,
  locked: false,
  name: "Rogelio Bins V",
  requireNewPassword: false,
  role: RoleUser.User,
  twoFactorAuthEnabled: false,
  twoFactorSetupRequired: false,
}).then((res: CreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.UserInput](../../models/shared/userinput.md)         | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)>**


## deleteUser

Delete a user.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteUserResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.deleteUser({
  userId: "x9KzsrACXZv8tPwlEDsKb6",
}).then((res: DeleteUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Fastly } from "FastlyTestJS";
import { GetCurrentUserResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.getCurrentUser().then((res: GetCurrentUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Fastly } from "FastlyTestJS";
import { GetUserResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.getUser({
  userId: "x9KzsrACXZv8tPwlEDsKb6",
}).then((res: GetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Fastly } from "FastlyTestJS";
import { RequestPasswordResetResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.requestPasswordReset({
  userLogin: "krisowner@example.com",
}).then((res: RequestPasswordResetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Fastly } from "FastlyTestJS";
import { UpdateUserResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { RoleUser } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.user.updateUser({
  userInput: {
    limitServices: false,
    locked: false,
    name: "Troy Cormier",
    requireNewPassword: false,
    role: RoleUser.User,
    twoFactorAuthEnabled: false,
    twoFactorSetupRequired: false,
  },
  userId: "x9KzsrACXZv8tPwlEDsKb6",
}).then((res: UpdateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Fastly } from "FastlyTestJS";
import { UpdateUserPasswordResponse, UpdateUserPasswordSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: UpdateUserPasswordSecurity = {
  password: "",
  username: "",
};

sdk.user.updateUserPassword({
  newPassword: "necessitatibus",
  oldPassword: "ipsum",
}, operationSecurity).then((res: UpdateUserPasswordResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.PasswordChange](../../models/shared/passwordchange.md)                                 | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateUserPasswordSecurity](../../models/operations/updateuserpasswordsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateUserPasswordResponse](../../models/operations/updateuserpasswordresponse.md)>**

