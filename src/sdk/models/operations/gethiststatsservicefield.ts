/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as components from "../../../sdk/models/components";
import { AxiosResponse } from "axios";

export class GetHistStatsServiceFieldRequest extends SpeakeasyBase {
    /**
     * Duration of sample windows. One of:
     *
     * @remarks
     *   * `hour` - Group data by hour.
     *   * `minute` - Group data by minute.
     *   * `day` - Group data by day.
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by" })
    by?: components.By;

    /**
     * Name of the stats field.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field" })
    field: string;

    /**
     * Timestamp that defines the start of the window for which to fetch statistics, including the timestamp itself. Accepts Unix timestamps, or any form of input parsable by the [Chronic Ruby library](https://github.com/mojombo/chronic), such as 'yesterday', or 'two weeks ago'. Default varies based on the value of `by`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
    from?: string;

    /**
     * Limit query to a specific geographic region. One of:
     *
     * @remarks
     *   * `usa` - North America.
     *   * `europe` - Europe.
     *   * `anzac` - Australia and New Zealand.
     *   * `asia` - Asia.
     *   * `asia_india` - India.
     *   * `asia_southkorea` - South Korea.
     *   * `africa_std` - Africa.
     *   * `southamerica_std` - South America.
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
    region?: components.Region;

    /**
     * Alphanumeric string identifying the service.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" })
    serviceId: string;

    /**
     * Timestamp that defines the end of the window for which to fetch statistics. Accepts the same formats as `from`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
    to?: string;
}

export class GetHistStatsServiceFieldResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    historicalFieldAggregateResponse?: components.HistoricalFieldAggregateResponse;
}
