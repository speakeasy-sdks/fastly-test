# Invitations
(*invitations*)

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
import { Fastly } from "FastlyTestJS";
import {
  InvitationDataAttributesStatusCode,
  RoleUser,
  ServiceInvitationDataAttributesPermission,
  TypeInvitation,
  TypeService,
  TypeServiceInvitation,
} from "FastlyTestJS/dist/sdk/models/shared";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
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

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.InvitationInput](../../models/shared/invitationinput.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateInvitationResponse](../../models/operations/createinvitationresponse.md)>**


## deleteInvitation

Delete an invitation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.invitations.deleteInvitation({
    invitationId: "3krg2uUGZzb2W9Euo4moOY",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteInvitationRequest](../../models/operations/deleteinvitationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteInvitationResponse](../../models/operations/deleteinvitationresponse.md)>**


## listInvitations

List all invitations.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";

(async() => {
  const sdk = new Fastly({
    security: {
      token: "",
    },
  });

  const res = await sdk.invitations.listInvitations({
    pageNumber: 1,
    pageSize: 20,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListInvitationsRequest](../../models/operations/listinvitationsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListInvitationsResponse](../../models/operations/listinvitationsresponse.md)>**

