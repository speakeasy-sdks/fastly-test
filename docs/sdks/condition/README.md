# condition

## Overview

Conditions are used to control whether logic defined in configured VCL objects is applied for a particular client request. A condition contains a VCL conditional expression that evaluates to either true or false and is used to determine whether the condition is met. The type of the condition determines where it is executed and the VCL variables that can be evaluated as part of the conditional logic.

<https://developer.fastly.com/reference/api/vcl-services/condition>
### Available Operations

* [createCondition](#createcondition) - Create a condition
* [deleteCondition](#deletecondition) - Delete a condition
* [getCondition](#getcondition) - Describe a condition
* [listConditions](#listconditions) - List conditions
* [updateCondition](#updatecondition) - Update a condition

## createCondition

Creates a new condition.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { CreateConditionResponse, CreateConditionSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { ConditionType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: CreateConditionSecurity = {
  token: "",
};

sdk.condition.createCondition({
  conditionInput: {
    comment: "iusto",
    name: "test-condition",
    priority: "10",
    statement: "dicta",
    type: ConditionType.Response,
    version: "enim",
  },
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: CreateConditionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateConditionRequest](../../models/operations/createconditionrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateConditionSecurity](../../models/operations/createconditionsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateConditionResponse](../../models/operations/createconditionresponse.md)>**


## deleteCondition

Deletes the specified condition.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { DeleteConditionResponse, DeleteConditionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: DeleteConditionSecurity = {
  token: "",
};

sdk.condition.deleteCondition({
  conditionName: "test-condition",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: DeleteConditionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteConditionRequest](../../models/operations/deleteconditionrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteConditionSecurity](../../models/operations/deleteconditionsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteConditionResponse](../../models/operations/deleteconditionresponse.md)>**


## getCondition

Gets the specified condition.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { GetConditionResponse, GetConditionSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: GetConditionSecurity = {
  token: "",
};

sdk.condition.getCondition({
  conditionName: "test-condition",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: GetConditionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetConditionRequest](../../models/operations/getconditionrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetConditionSecurity](../../models/operations/getconditionsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetConditionResponse](../../models/operations/getconditionresponse.md)>**


## listConditions

Gets all conditions for a particular service and version.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { ListConditionsResponse, ListConditionsSecurity } from "FastlyTestJS/dist/sdk/models/operations";

const sdk = new Fastly();
const operationSecurity: ListConditionsSecurity = {
  token: "",
};

sdk.condition.listConditions({
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: ListConditionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListConditionsRequest](../../models/operations/listconditionsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ListConditionsSecurity](../../models/operations/listconditionssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListConditionsResponse](../../models/operations/listconditionsresponse.md)>**


## updateCondition

Updates the specified condition.

### Example Usage

```typescript
import { Fastly } from "FastlyTestJS";
import { UpdateConditionResponse, UpdateConditionSecurity } from "FastlyTestJS/dist/sdk/models/operations";
import { ConditionType } from "FastlyTestJS/dist/sdk/models/shared";

const sdk = new Fastly();
const operationSecurity: UpdateConditionSecurity = {
  token: "",
};

sdk.condition.updateCondition({
  conditionInput: {
    comment: "accusamus",
    name: "test-condition",
    priority: "10",
    statement: "commodi",
    type: ConditionType.Prefetch,
    version: "quae",
  },
  conditionName: "test-condition",
  serviceId: "SU1Z0isxPaozGVKXdv0eY",
  versionId: 1,
}, operationSecurity).then((res: UpdateConditionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateConditionRequest](../../models/operations/updateconditionrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdateConditionSecurity](../../models/operations/updateconditionsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateConditionResponse](../../models/operations/updateconditionresponse.md)>**

