# Invitations
(*.invitations*)

## Overview

Invitations allow superusers and engineers to invite users to set up accounts as collaborators under a main customer account. Superusers can invite collaborators and assign them any role or permission level on a per-service basis. Engineers with no per-service limitations on their role can only invite new collaborators but cannot modify their permissions.

<https://developer.fastly.com/reference/api/account/invitations>
### Available Operations

* [createInvitation](#createinvitation) - Create an invitation
* [deleteInvitation](#deleteinvitation) - Delete an invitation
* [listInvitations](#listinvitations) - List invitations

## createInvitation

Create an invitation.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import {
  InvitationDataStatusCode,
  RoleUser,
  ServiceInvitationDataPermission,
  TypeInvitation,
  TypeService,
  TypeServiceInvitation,
} from "Fastly/dist/sdk/models/components";

(async() => {
  const sdk = new Fastly({
    token: "",
  });

  const res = await sdk.invitations.createInvitation({
    data: {
      attributes: {
        role: RoleUser.User,
      },
      relationships: {
        serviceInvitations: {
          data: [
            {
              data: {
                attributes: {},
                relationships: {
                  service: {},
                },
              },
            },
          ],
        },
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [components.Invitation](../../models/shared/invitation.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateInvitationResponse](../../models/operations/createinvitationresponse.md)>**


## deleteInvitation

Delete an invitation.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { DeleteInvitationRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const invitationId: string = "3krg2uUGZzb2W9Euo4moOY";

  const res = await sdk.invitations.deleteInvitation(invitationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invitationId`                                               | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying an invitation.               | 3krg2uUGZzb2W9Euo4moOY                                       |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteInvitationResponse](../../models/operations/deleteinvitationresponse.md)>**


## listInvitations

List all invitations.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListInvitationsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const pageNumber: number = 1;
const pageSize: number = 20;

  const res = await sdk.invitations.listInvitations(pageNumber, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `pageNumber`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListInvitationsResponse](../../models/operations/listinvitationsresponse.md)>**

