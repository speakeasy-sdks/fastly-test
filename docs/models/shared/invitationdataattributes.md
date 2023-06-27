# InvitationDataAttributes


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `email`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | The email address of the invitee.                                                                |                                                                                                  |
| `limitServices`                                                                                  | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Indicates the user has limited access to the customer's services.                                |                                                                                                  |
| `role`                                                                                           | [RoleUser](../../models/shared/roleuser.md)                                                      | :heavy_minus_sign:                                                                               | The permissions role assigned to the user. Can be `user`, `billing`, `engineer`, or `superuser`. | user                                                                                             |
| `statusCode`                                                                                     | [InvitationDataAttributesStatusCode](../../models/shared/invitationdataattributesstatuscode.md)  | :heavy_minus_sign:                                                                               | Indicates whether or not the invitation is active.                                               |                                                                                                  |