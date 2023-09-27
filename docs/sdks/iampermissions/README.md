# IamPermissions
(*iamPermissions*)

## Overview

A list of available permissions that can be assigned to a custom role.

<https://developer.fastly.com/reference/api/account/permissions>
### Available Operations

* [listPermissions](#listpermissions) - List permissions

## listPermissions

List all permissions.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListPermissionsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly({
  security: {
    token: "",
  },
});

sdk.iamPermissions.listPermissions().then((res: ListPermissionsResponse) => {
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

**Promise<[operations.ListPermissionsResponse](../../models/operations/listpermissionsresponse.md)>**

