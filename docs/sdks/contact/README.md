# contact

## Overview

A Customer Contact is the base object that holds the different types of contact information Fastly uses to contact a customer.

<https://developer.fastly.com/reference/api/account/contact>
### Available Operations

* [deleteContact](#deletecontact) - Delete a contact
* [listContacts](#listcontacts) - List contacts

## deleteContact

Delete a contact.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteContactResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.contact.deleteContact({
  contactId: "x4xCwxxJxGCx123Rx5xTx",
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: DeleteContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteContactRequest](../../models/operations/deletecontactrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteContactSecurity](../../models/operations/deletecontactsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteContactResponse](../../models/operations/deletecontactresponse.md)>**


## listContacts

List all contacts from a specified customer ID.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListContactsResponse } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();

sdk.contact.listContacts({
  customerId: "x4xCwxxJxGCx123Rx5xTx",
}, {
  token: "",
}).then((res: ListContactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListContactsRequest](../../models/operations/listcontactsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListContactsSecurity](../../models/operations/listcontactssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListContactsResponse](../../models/operations/listcontactsresponse.md)>**

