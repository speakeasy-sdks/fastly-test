/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListEventsRequest extends SpeakeasyBase {
    /**
     * Limit the returned events to a specific time frame. Accepts sub-parameters: lt, lte, gt, gte (e.g., filter[created_at][gt]=2022-01-12).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[created_at]" })
    filterCreatedAt?: string;

    /**
     * Limit the results returned to a specific customer.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[customer_id]" })
    filterCustomerId?: string;

    /**
     * Limit the returned events to a specific `event_type`.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[event_type]" })
    filterEventType?: string;

    /**
     * Limit the results returned to a specific service.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[service_id]" })
    filterServiceId?: string;

    /**
     * Limit the returned events to a specific token.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[token_id]" })
    filterTokenId?: string;

    /**
     * Limit the results returned to a specific user.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[user_id]" })
    filterUserId?: string;

    /**
     * Current page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
    pageNumber?: number;

    /**
     * Number of records per page.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
    pageSize?: number;

    /**
     * The order in which to list the results by creation date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: shared.Sort;
}

export class ListEventsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    eventsResponse?: shared.EventsResponse;
}
