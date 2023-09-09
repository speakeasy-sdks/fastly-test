# invitations

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
import { CreateInvitationResponse, CreateInvitationSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import {
  InvitationDataAttributesStatusCode,
  RoleUser,
  ServiceInvitationDataAttributesPermission,
  TypeInvitation,
  TypeService,
  TypeServiceInvitation,
} from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateInvitationSecurity = {
  token: "",
};

sdk.invitations.createInvitation({
  data: {
    attributes: {
      email: "Russ76@gmail.com",
      limitServices: false,
      role: RoleUser.User,
      statusCode: InvitationDataAttributesStatusCode.Zero,
    },
    relationships: {
      serviceInvitations: {
        data: [
          {
            data: {
              attributes: {
                permission: ServiceInvitationDataAttributesPermission.PurgeAll,
              },
              relationships: {
                service: {
                  type: TypeService.Service,
                },
              },
              type: TypeServiceInvitation.ServiceInvitation,
            },
          },
        ],
      },
    },
    type: TypeInvitation.Invitation,
  },
}, operationSecurity).then((res: CreateInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.InvitationInput](../../models/shared/invitationinput.md)                           | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.CreateInvitationSecurity](../../models/operations/createinvitationsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateInvitationResponse](../../models/operations/createinvitationresponse.md)>**


## deleteInvitation

Delete an invitation.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteInvitationResponse, DeleteInvitationSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteInvitationSecurity = {
  token: "",
};

sdk.invitations.deleteInvitation({
  invitationId: "3krg2uUGZzb2W9Euo4moOY",
}, operationSecurity).then((res: DeleteInvitationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteInvitationRequest](../../models/operations/deleteinvitationrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.DeleteInvitationSecurity](../../models/operations/deleteinvitationsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteInvitationResponse](../../models/operations/deleteinvitationresponse.md)>**


## listInvitations

List all invitations.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListInvitationsResponse, ListInvitationsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListInvitationsSecurity = {
  token: "",
};

sdk.invitations.listInvitations({
  pageNumber: 1,
  pageSize: 20,
}, operationSecurity).then((res: ListInvitationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListInvitationsRequest](../../models/operations/listinvitationsrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.ListInvitationsSecurity](../../models/operations/listinvitationssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListInvitationsResponse](../../models/operations/listinvitationsresponse.md)>**

