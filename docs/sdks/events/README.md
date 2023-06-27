# events

## Overview

[Event logs](https://docs.fastly.com/en/guides/reviewing-service-activity-with-the-event-log) are used to audit actions performed by customers.


<https://developer.fastly.com/reference/api/account/events>
### Available Operations

* [getEvent](#getevent) - Get an event
* [listEvents](#listevents) - List events

## getEvent

Get a specific event.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetEventResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { EventAttributesEventType, TypeEvent } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.events.getEvent({
  eventId: "1PTzLK8g1NRKMGu5kUb8SC",
}, {
  token: "",
}).then((res: GetEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetEventRequest](../../models/operations/geteventrequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetEventSecurity](../../models/operations/geteventsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetEventResponse](../../models/operations/geteventresponse.md)>**


## listEvents

List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListEventsResponse } from "FastlyTestJS/dist/sdk/models/operations";
import { EventAttributesEventType, Sort, TypeEvent } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();

sdk.events.listEvents({
  filterCreatedAt: "necessitatibus",
  filterCustomerId: "x4xCwxxJxGCx123Rx5xTx",
  filterEventType: "distinctio",
  filterServiceId: "asperiores",
  filterTokenId: "nihil",
  filterUserId: "ipsum",
  pageNumber: 1,
  pageSize: 20,
  sort: Sort.CreatedAt,
}, {
  token: "",
}).then((res: ListEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListEventsRequest](../../models/operations/listeventsrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.ListEventsSecurity](../../models/operations/listeventssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListEventsResponse](../../models/operations/listeventsresponse.md)>**
