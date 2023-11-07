# Contact
(*.contact*)

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
import { Fastly } from "Fastly";
import { DeleteContactRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const contactId: string = "x4xCwxxJxGCx123Rx5xTx";
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.contact.deleteContact(contactId, customerId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contactId`                                                  | *string*                                                     | :heavy_check_mark:                                           | An alphanumeric string identifying the customer contact.     | x4xCwxxJxGCx123Rx5xTx                                        |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteContactResponse](../../models/operations/deletecontactresponse.md)>**


## listContacts

List all contacts from a specified customer ID.

### Example Usage

```typescript
import { Fastly } from "Fastly";
import { ListContactsRequest } from "Fastly/dist/sdk/models/operations";

(async() => {
  const sdk = new Fastly({
    token: "",
  });
const customerId: string = "x4xCwxxJxGCx123Rx5xTx";

  const res = await sdk.contact.listContacts(customerId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `customerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying the customer.                | x4xCwxxJxGCx123Rx5xTx                                        |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ListContactsResponse](../../models/operations/listcontactsresponse.md)>**

