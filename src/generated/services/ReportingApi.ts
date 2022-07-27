/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ReportingApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List facebook ads reports
     * Get reports of Facebook ads.
     * @returns any List of Facebook Ad Report Instances
     * @throws ApiError
     */
    public getReportingFacebookAds({
        fields,
        excludeFields,
        count = 10,
        offset,
        sortField,
        sortDir,
    }: {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'created_at' | 'updated_at' | 'end_time',
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
    }): CancelablePromise<{
        facebook_ads?: Array<({
            /**
             * Unique ID of an Outreach
             */
            id?: string;
            /**
             * Web ID
             */
            web_id?: number;
            /**
             * Title or name of an Outreach
             */
            name?: string;
            /**
             * Supported Campaign, Ad, Page type
             */
            type?: 'regular' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'survey';
            /**
             * Campaign, Ad, or Page status
             */
            status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished';
            /**
             * Outreach report availability
             */
            show_report?: boolean;
            create_time?: string;
            start_time?: string;
            updated_at?: string;
            canceled_at?: string;
            published_time?: string;
            has_segment?: boolean;
            report_summary?: {
                opens?: number;
                unique_opens?: number;
                open_rate?: number;
                clicks?: number;
                subscriber_clicks?: number;
                click_rate?: number;
                visits?: number;
                unique_visits?: number;
                conversion_rate?: number;
                subscribes?: number;
                ecommerce?: {
                    total_revenue?: number;
                    currency_code?: string;
                    average_order_revenue?: number;
                };
                impressions?: number;
                reach?: number;
                engagements?: number;
                total_sent?: number;
            };
            /**
             * List settings for the outreach
             */
            recipients?: {
                /**
                 * The unique list id.
                 */
                list_id?: string;
                /**
                 * The status of the list used, namely if it's deleted or disabled.
                 */
                readonly list_is_active?: boolean;
                /**
                 * The name of the list.
                 */
                readonly list_name?: string;
                /**
                 * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
                 */
                readonly segment_text?: string;
                /**
                 * Count of the recipients on the associated list. Formatted as an integer.
                 */
                readonly recipient_count?: number;
                /**
                 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
                 */
                segment_opts?: {
                    /**
                     * The id for an existing saved segment.
                     */
                    saved_segment_id?: number;
                    /**
                     * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                     */
                    prebuilt_segment_id?: string;
                    /**
                     * Segment match type.
                     */
                    match?: 'any' | 'all';
                    /**
                     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                     */
                    conditions?: Array<any>;
                };
            };
            /**
             * The URL of the thumbnail for this outreach
             */
            thumbnail?: string;
        } & {
            email_source_name?: string;
            paused_at?: string;
            end_time?: string;
            needs_attention?: boolean;
            was_canceled_by_facebook?: boolean;
        } & {
            /**
             * Channel settings
             */
            channel?: {
                /**
                 * Is this for facebook feed
                 */
                fb_placement_feed?: boolean;
                /**
                 * Is this for facebook audience
                 */
                fb_placement_audience?: boolean;
                /**
                 * Is this for instagram feed
                 */
                ig_placement_feed?: boolean;
            };
            /**
             * Audience settings
             */
            audience?: {
                /**
                 * Type of the audience
                 */
                type?: 'Custom Audience' | 'Lookalike Audience' | 'Interest-based Audience';
                /**
                 * List or Facebook based audience
                 */
                source_type?: 'facebook' | 'list';
                email_source?: {
                    /**
                     * Email source name
                     */
                    name?: string;
                    /**
                     * Type of the email source
                     */
                    type?: string;
                    /**
                     * Is the source reference a segment
                     */
                    is_segment?: boolean;
                    /**
                     * Segment type if this source is tied to a segment
                     */
                    segment_type?: string;
                    /**
                     * Associated list name to the source
                     */
                    list_name?: string;
                };
                /**
                 * To include list contacts as part of audience
                 */
                include_source_in_target?: boolean;
                /**
                 * To find similar audience in given country
                 */
                lookalike_country_code?: string;
                targeting_specs?: {
                    gender?: 0 | 1 | 2;
                    min_age?: number;
                    max_age?: number;
                    locations?: {
                        countries?: Array<string>;
                        regions?: Array<string>;
                        cities?: Array<string>;
                        zips?: Array<string>;
                    };
                    interests?: Array<{
                        name?: string;
                    }>;
                };
            };
            budget?: {
                /**
                 * Duration of the ad in seconds
                 */
                duration?: number;
                /**
                 * Total budget of the ad
                 */
                total_amount?: number;
                /**
                 * Currency code
                 */
                currency_code?: string;
            };
            /**
             * Report summary of facebook ad
             */
            report_summary?: {
                reach?: number;
                impressions?: number;
                clicks?: number;
                click_rate?: number;
                unique_clicks?: number;
                first_time_buyers?: number;
                ecommerce?: {
                    total_revenue?: number;
                    currency_code?: string;
                };
                total_products_sold?: number;
                total_orders?: number;
                average_order_amount?: {
                    amount?: number;
                    currency_code?: string;
                };
                cost_per_click?: {
                    amount?: number;
                    currency_code?: string;
                };
                average_daily_budget?: {
                    amount?: number;
                    currency_code?: string;
                };
                likes?: number;
                comments?: number;
                shares?: number;
                has_extended_ad_duration?: boolean;
                extended_at?: {
                    datetime?: string;
                    timezone?: string;
                };
                return_on_investment?: number;
            };
            audience_activity?: {
                clicks?: Array<{
                    date?: string;
                    clicks?: number;
                }>;
                impressions?: Array<{
                    date?: string;
                    impressions?: number;
                }>;
                revenue?: Array<{
                    date?: string;
                    revenue?: number;
                }>;
            };
        } & {
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        })>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/facebook-ads',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'sort_field': sortField,
                'sort_dir': sortDir,
            },
        });
    }

    /**
     * Get facebook ad report
     * Get report of a Facebook ad.
     * @returns any Facebook Ad report Instance
     * @throws ApiError
     */
    public getReportingFacebookAdsId({
        outreachId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<({
        /**
         * Unique ID of an Outreach
         */
        id?: string;
        /**
         * Web ID
         */
        web_id?: number;
        /**
         * Title or name of an Outreach
         */
        name?: string;
        /**
         * Supported Campaign, Ad, Page type
         */
        type?: 'regular' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'survey';
        /**
         * Campaign, Ad, or Page status
         */
        status?: 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished';
        /**
         * Outreach report availability
         */
        show_report?: boolean;
        create_time?: string;
        start_time?: string;
        updated_at?: string;
        canceled_at?: string;
        published_time?: string;
        has_segment?: boolean;
        report_summary?: {
            opens?: number;
            unique_opens?: number;
            open_rate?: number;
            clicks?: number;
            subscriber_clicks?: number;
            click_rate?: number;
            visits?: number;
            unique_visits?: number;
            conversion_rate?: number;
            subscribes?: number;
            ecommerce?: {
                total_revenue?: number;
                currency_code?: string;
                average_order_revenue?: number;
            };
            impressions?: number;
            reach?: number;
            engagements?: number;
            total_sent?: number;
        };
        /**
         * List settings for the outreach
         */
        recipients?: {
            /**
             * The unique list id.
             */
            list_id?: string;
            /**
             * The status of the list used, namely if it's deleted or disabled.
             */
            readonly list_is_active?: boolean;
            /**
             * The name of the list.
             */
            readonly list_name?: string;
            /**
             * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
             */
            readonly segment_text?: string;
            /**
             * Count of the recipients on the associated list. Formatted as an integer.
             */
            readonly recipient_count?: number;
            /**
             * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
             */
            segment_opts?: {
                /**
                 * The id for an existing saved segment.
                 */
                saved_segment_id?: number;
                /**
                 * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
                 */
                prebuilt_segment_id?: string;
                /**
                 * Segment match type.
                 */
                match?: 'any' | 'all';
                /**
                 * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
                 */
                conditions?: Array<any>;
            };
        };
        /**
         * The URL of the thumbnail for this outreach
         */
        thumbnail?: string;
    } & {
        email_source_name?: string;
        paused_at?: string;
        end_time?: string;
        needs_attention?: boolean;
        was_canceled_by_facebook?: boolean;
    } & {
        /**
         * Channel settings
         */
        channel?: {
            /**
             * Is this for facebook feed
             */
            fb_placement_feed?: boolean;
            /**
             * Is this for facebook audience
             */
            fb_placement_audience?: boolean;
            /**
             * Is this for instagram feed
             */
            ig_placement_feed?: boolean;
        };
        /**
         * Audience settings
         */
        audience?: {
            /**
             * Type of the audience
             */
            type?: 'Custom Audience' | 'Lookalike Audience' | 'Interest-based Audience';
            /**
             * List or Facebook based audience
             */
            source_type?: 'facebook' | 'list';
            email_source?: {
                /**
                 * Email source name
                 */
                name?: string;
                /**
                 * Type of the email source
                 */
                type?: string;
                /**
                 * Is the source reference a segment
                 */
                is_segment?: boolean;
                /**
                 * Segment type if this source is tied to a segment
                 */
                segment_type?: string;
                /**
                 * Associated list name to the source
                 */
                list_name?: string;
            };
            /**
             * To include list contacts as part of audience
             */
            include_source_in_target?: boolean;
            /**
             * To find similar audience in given country
             */
            lookalike_country_code?: string;
            targeting_specs?: {
                gender?: 0 | 1 | 2;
                min_age?: number;
                max_age?: number;
                locations?: {
                    countries?: Array<string>;
                    regions?: Array<string>;
                    cities?: Array<string>;
                    zips?: Array<string>;
                };
                interests?: Array<{
                    name?: string;
                }>;
            };
        };
        budget?: {
            /**
             * Duration of the ad in seconds
             */
            duration?: number;
            /**
             * Total budget of the ad
             */
            total_amount?: number;
            /**
             * Currency code
             */
            currency_code?: string;
        };
        /**
         * Report summary of facebook ad
         */
        report_summary?: {
            reach?: number;
            impressions?: number;
            clicks?: number;
            click_rate?: number;
            unique_clicks?: number;
            first_time_buyers?: number;
            ecommerce?: {
                total_revenue?: number;
                currency_code?: string;
            };
            total_products_sold?: number;
            total_orders?: number;
            average_order_amount?: {
                amount?: number;
                currency_code?: string;
            };
            cost_per_click?: {
                amount?: number;
                currency_code?: string;
            };
            average_daily_budget?: {
                amount?: number;
                currency_code?: string;
            };
            likes?: number;
            comments?: number;
            shares?: number;
            has_extended_ad_duration?: boolean;
            extended_at?: {
                datetime?: string;
                timezone?: string;
            };
            return_on_investment?: number;
        };
        audience_activity?: {
            clicks?: Array<{
                date?: string;
                clicks?: number;
            }>;
            impressions?: Array<{
                date?: string;
                impressions?: number;
            }>;
            revenue?: Array<{
                date?: string;
                revenue?: number;
            }>;
        };
    } & {
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/facebook-ads/{outreach_id}',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List facebook ecommerce report
     * Get breakdown of product activity for an outreach.
     * @returns any Ecommerce Product Activity Instance
     * @throws ApiError
     */
    public getReportingFacebookAdsIdEcommerceProductActivity({
        outreachId,
        fields,
        excludeFields,
        count = 10,
        offset,
        sortField,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'title' | 'total_revenue' | 'total_purchased',
    }): CancelablePromise<{
        products?: Array<{
            title?: string;
            sku?: string;
            image_url?: string;
            total_revenue?: number;
            total_purchased?: number;
            currency_code?: string;
            recommendation_total?: number;
            recommendation_purchased?: number;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/facebook-ads/{outreach_id}/ecommerce-product-activity',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
                'sort_field': sortField,
            },
        });
    }

    /**
     * Get landing page report
     * Get report of a landing page.
     * @returns any Landing Page Report Instance
     * @throws ApiError
     */
    public getReportingLandingPagesId({
        outreachId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this landing page.
         */
        readonly id?: string;
        /**
         * The name of this landing page the user will see.
         */
        readonly name?: string;
        /**
         * The name of the landing page the user's customers will see.
         */
        readonly title?: string;
        /**
         * The landing page url.
         */
        readonly url?: string;
        /**
         * The time this landing page was published.
         */
        readonly published_at?: string;
        /**
         * The time this landing page was unpublished.
         */
        readonly unpublished_at?: string;
        /**
         * The status of the landing page.
         */
        readonly status?: string;
        /**
         * The list id connected to this landing page.
         */
        readonly list_id?: string;
        /**
         * The number of visits to this landing pages.
         */
        readonly visits?: number;
        /**
         * The number of unique visits to this landing pages.
         */
        readonly unique_visits?: number;
        /**
         * The number of subscribes to this landing pages.
         */
        readonly subscribes?: number;
        /**
         * The number of clicks to this landing pages.
         */
        readonly clicks?: number;
        /**
         * The percentage of people who visited your landing page and were added to your list.
         */
        readonly conversion_rate?: number;
        timeseries?: {
            /**
             * The clicks and visits data from the last seven days.
             */
            readonly daily_stats?: {
                clicks?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
                visits?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
                unique_visits?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
            };
            /**
             * The clicks and visits data from the last five weeks.
             */
            readonly weekly_stats?: {
                /**
                 * The total number of clicks in a week.
                 */
                clicks?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
                /**
                 * The total number of visits in a week.
                 */
                visits?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
                unique_visits?: Array<{
                    readonly date?: string;
                    readonly val?: number;
                }>;
            };
        };
        ecommerce?: {
            /**
             * The total revenue of this landing page.
             */
            readonly total_revenue?: number;
            /**
             * The user's currency code.
             */
            readonly currency_code?: string;
            /**
             * The total number of orders associated with this landing page.
             */
            readonly total_orders?: number;
            /**
             * The average order revenue of this landing page.
             */
            readonly average_order_revenue?: number;
        };
        /**
         * The ID used in the Mailchimp web application.
         */
        readonly web_id?: number;
        /**
         * List Name
         */
        readonly list_name?: string;
        /**
         * A list of tags associated to the landing page.
         */
        readonly signup_tags?: Array<{
            /**
             * The unique id for the tag.
             */
            readonly tag_id?: number;
            /**
             * The name of the tag.
             */
            readonly tag_name?: string;
        }>;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/landing-pages/{outreach_id}',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List landing pages reports
     * Get reports of landing pages.
     * @returns any List of Landing Page Report Instances
     * @throws ApiError
     */
    public getReportingLandingPages({
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        landing_pages?: Array<{
            /**
             * A string that uniquely identifies this landing page.
             */
            readonly id?: string;
            /**
             * The name of this landing page the user will see.
             */
            readonly name?: string;
            /**
             * The name of the landing page the user's customers will see.
             */
            readonly title?: string;
            /**
             * The landing page url.
             */
            readonly url?: string;
            /**
             * The time this landing page was published.
             */
            readonly published_at?: string;
            /**
             * The time this landing page was unpublished.
             */
            readonly unpublished_at?: string;
            /**
             * The status of the landing page.
             */
            readonly status?: string;
            /**
             * The list id connected to this landing page.
             */
            readonly list_id?: string;
            /**
             * The number of visits to this landing pages.
             */
            readonly visits?: number;
            /**
             * The number of unique visits to this landing pages.
             */
            readonly unique_visits?: number;
            /**
             * The number of subscribes to this landing pages.
             */
            readonly subscribes?: number;
            /**
             * The number of clicks to this landing pages.
             */
            readonly clicks?: number;
            /**
             * The percentage of people who visited your landing page and were added to your list.
             */
            readonly conversion_rate?: number;
            timeseries?: {
                /**
                 * The clicks and visits data from the last seven days.
                 */
                readonly daily_stats?: {
                    clicks?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                    visits?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                    unique_visits?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                };
                /**
                 * The clicks and visits data from the last five weeks.
                 */
                readonly weekly_stats?: {
                    /**
                     * The total number of clicks in a week.
                     */
                    clicks?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                    /**
                     * The total number of visits in a week.
                     */
                    visits?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                    unique_visits?: Array<{
                        readonly date?: string;
                        readonly val?: number;
                    }>;
                };
            };
            ecommerce?: {
                /**
                 * The total revenue of this landing page.
                 */
                readonly total_revenue?: number;
                /**
                 * The user's currency code.
                 */
                readonly currency_code?: string;
                /**
                 * The total number of orders associated with this landing page.
                 */
                readonly total_orders?: number;
                /**
                 * The average order revenue of this landing page.
                 */
                readonly average_order_revenue?: number;
            };
            /**
             * The ID used in the Mailchimp web application.
             */
            readonly web_id?: number;
            /**
             * List Name
             */
            readonly list_name?: string;
            /**
             * A list of tags associated to the landing page.
             */
            readonly signup_tags?: Array<{
                /**
                 * The unique id for the tag.
                 */
                readonly tag_id?: number;
                /**
                 * The name of the tag.
                 */
                readonly tag_name?: string;
            }>;
            /**
             * A list of link types and descriptions for the API schema documents.
             */
            readonly _links?: Array<{
                /**
                 * As with an HTML 'rel' attribute, this describes the type of link.
                 */
                readonly rel?: string;
                /**
                 * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
                 */
                readonly href?: string;
                /**
                 * The HTTP method that should be used when accessing the URL defined in 'href'.
                 */
                readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
                /**
                 * For GETs, this is a URL representing the schema that the response should conform to.
                 */
                readonly targetSchema?: string;
                /**
                 * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
                 */
                readonly schema?: string;
            }>;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/landing-pages',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * List survey reports
     * Get reports for surveys.
     * @returns any List of Survey Report Instances
     * @throws ApiError
     */
    public getReportingSurveys({
        fields,
        excludeFields,
        count = 10,
        offset,
    }: {
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The number of records to return. Default value is 10. Maximum value is 1000
         */
        count?: number,
        /**
         * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         */
        offset?: number,
    }): CancelablePromise<{
        /**
         * The surveys that have reports available.
         */
        surveys?: Array<{
            /**
             * A string that uniquely identifies this survey.
             */
            readonly id?: string;
            /**
             * The ID used in the Mailchimp web application. View this survey report in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/surveys/results?survey_id={web_id}`.
             */
            readonly web_id?: number;
            /**
             * The ID of the list connected to this survey.
             */
            readonly list_id?: string;
            /**
             * The name of the list connected to this survey.
             */
            readonly list_name?: string;
            /**
             * The title of the survey.
             */
            readonly title?: string;
            /**
             * The URL for the survey.
             */
            readonly url?: string;
            /**
             * The survey's status.
             */
            readonly status?: 'published' | 'unpublished';
            /**
             * The date and time the survey was published in ISO 8601 format.
             */
            readonly published_at?: string;
            /**
             * The date and time the survey was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the survey was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
            /**
             * The total number of responses to this survey.
             */
            readonly total_responses?: number;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Get survey report
     * Get report for a survey.
     * @returns any Survey Report Instance
     * @throws ApiError
     */
    public getReportingSurveysId({
        outreachId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this survey.
         */
        readonly id?: string;
        /**
         * The ID used in the Mailchimp web application. View this survey report in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/surveys/results?survey_id={web_id}`.
         */
        readonly web_id?: number;
        /**
         * The ID of the list connected to this survey.
         */
        readonly list_id?: string;
        /**
         * The name of the list connected to this survey.
         */
        readonly list_name?: string;
        /**
         * The title of the survey.
         */
        readonly title?: string;
        /**
         * The URL for the survey.
         */
        readonly url?: string;
        /**
         * The survey's status.
         */
        readonly status?: 'published' | 'unpublished';
        /**
         * The date and time the survey was published in ISO 8601 format.
         */
        readonly published_at?: string;
        /**
         * The date and time the survey was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the survey was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
        /**
         * The total number of responses to this survey.
         */
        readonly total_responses?: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List survey question reports
     * Get reports for survey questions.
     * @returns any List of Survey Question Report Instances
     * @throws ApiError
     */
    public getReportingSurveysIdQuestions({
        outreachId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * An array of reports for each question on the survey.
         */
        questions?: Array<{
            /**
             * The ID of the survey question.
             */
            readonly id?: string;
            /**
             * The unique ID of the survey.
             */
            readonly survey_id?: string;
            /**
             * The query of the survey question.
             */
            readonly query?: string;
            /**
             * The response type of the survey question.
             */
            readonly type?: 'pickOne' | 'pickMany' | 'range' | 'text' | 'email';
            /**
             * The total number of responses to this question.
             */
            readonly total_responses?: number;
            /**
             * Whether this survey question is required to answer.
             */
            readonly is_required?: boolean;
            /**
             * Whether this survey question has an 'other' option.
             */
            readonly has_other?: boolean;
            /**
             * Label used for the 'other' option of this survey question.
             */
            readonly other_label?: string;
            /**
             * The average rating for this range question.
             */
            readonly average_rating?: number;
            /**
             * Label for the low end of the range.
             */
            readonly range_low_label?: string;
            /**
             * Label for the high end of the range.
             */
            readonly range_high_label?: string;
            /**
             * Placeholder text for this survey question's answer box.
             */
            readonly placeholder_label?: string;
            /**
             * Whether the subscribe checkbox is shown for this email question.
             */
            readonly subscribe_checkbox_enabled?: boolean;
            /**
             * Label used for the subscribe checkbox for this email question.
             */
            readonly subscribe_checkbox_label?: string;
            /**
             * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
             */
            readonly merge_field?: {
                /**
                 * An unchanging id for the merge field.
                 */
                readonly id?: number;
                /**
                 * The [label](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
                 */
                readonly label?: string;
                /**
                 * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
                 */
                readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
            };
            /**
             * The answer choices for this question.
             */
            readonly options?: Array<{
                /**
                 * The label for this survey question option.
                 */
                label?: string;
                /**
                 * The ID for this survey question option.
                 */
                id?: string;
                /**
                 * The count of responses that selected this survey question option.
                 */
                count?: number;
            }>;
            /**
             * For email question types, how many are new, known, or unknown contacts.
             */
            contact_counts?: {
                /**
                 * The number of known contacts that responded to this survey.
                 */
                known?: number;
                /**
                 * The number of unknown contacts that responded to this survey.
                 */
                unknown?: number;
                /**
                 * The number of new contacts that responded to this survey.
                 */
                new?: number;
            };
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}/questions',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Get survey question report
     * Get report for a survey question.
     * @returns any Survey Question Report Instance
     * @throws ApiError
     */
    public getReportingSurveysIdQuestionsId({
        outreachId,
        questionId,
        fields,
        excludeFields,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * The ID of the survey question.
         */
        questionId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
    }): CancelablePromise<{
        /**
         * The ID of the survey question.
         */
        readonly id?: string;
        /**
         * The unique ID of the survey.
         */
        readonly survey_id?: string;
        /**
         * The query of the survey question.
         */
        readonly query?: string;
        /**
         * The response type of the survey question.
         */
        readonly type?: 'pickOne' | 'pickMany' | 'range' | 'text' | 'email';
        /**
         * The total number of responses to this question.
         */
        readonly total_responses?: number;
        /**
         * Whether this survey question is required to answer.
         */
        readonly is_required?: boolean;
        /**
         * Whether this survey question has an 'other' option.
         */
        readonly has_other?: boolean;
        /**
         * Label used for the 'other' option of this survey question.
         */
        readonly other_label?: string;
        /**
         * The average rating for this range question.
         */
        readonly average_rating?: number;
        /**
         * Label for the low end of the range.
         */
        readonly range_low_label?: string;
        /**
         * Label for the high end of the range.
         */
        readonly range_high_label?: string;
        /**
         * Placeholder text for this survey question's answer box.
         */
        readonly placeholder_label?: string;
        /**
         * Whether the subscribe checkbox is shown for this email question.
         */
        readonly subscribe_checkbox_enabled?: boolean;
        /**
         * Label used for the subscribe checkbox for this email question.
         */
        readonly subscribe_checkbox_label?: string;
        /**
         * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
         */
        readonly merge_field?: {
            /**
             * An unchanging id for the merge field.
             */
            readonly id?: number;
            /**
             * The [label](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
             */
            readonly label?: string;
            /**
             * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
             */
            readonly type?: 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip';
        };
        /**
         * The answer choices for this question.
         */
        readonly options?: Array<{
            /**
             * The label for this survey question option.
             */
            label?: string;
            /**
             * The ID for this survey question option.
             */
            id?: string;
            /**
             * The count of responses that selected this survey question option.
             */
            count?: number;
        }>;
        /**
         * For email question types, how many are new, known, or unknown contacts.
         */
        contact_counts?: {
            /**
             * The number of known contacts that responded to this survey.
             */
            known?: number;
            /**
             * The number of unknown contacts that responded to this survey.
             */
            unknown?: number;
            /**
             * The number of new contacts that responded to this survey.
             */
            new?: number;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}/questions/{question_id}',
            path: {
                'outreach_id': outreachId,
                'question_id': questionId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * List answers for question
     * Get answers for a survey question.
     * @returns any List of Survey Question Answers
     * @throws ApiError
     */
    public getReportingSurveysIdQuestionsIdAnswers({
        outreachId,
        questionId,
        fields,
        excludeFields,
        respondentFamiliarityIs,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * The ID of the survey question.
         */
        questionId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * Filter survey responses by familiarity of the respondents.
         */
        respondentFamiliarityIs?: 'new' | 'known' | 'unknown',
    }): CancelablePromise<{
        /**
         * An array of answers for a question on the survey.
         */
        answers?: Array<{
            /**
             * The ID of the answer.
             */
            readonly id?: string;
            /**
             * The raw text answer.
             */
            readonly value?: string;
            /**
             * The ID of the survey response.
             */
            readonly response_id?: string;
            /**
             * The date and time when the survey response was submitted in ISO 8601 format.
             */
            readonly submitted_at?: string;
            /**
             * Information about the contact.
             */
            readonly contact?: {
                /**
                 * The MD5 hash of the lowercase version of the list member's email address.
                 */
                readonly email_id?: string;
                /**
                 * The ID of this contact.
                 */
                readonly contact_id?: string;
                /**
                 * The contact's current status.
                 */
                readonly status?: 'Subscribed' | 'Unsubscribed' | 'Non-Subscribed' | 'Cleaned' | 'Archived';
                /**
                 * The contact's email address.
                 */
                readonly email?: string;
                /**
                 * The contact's full name.
                 */
                readonly full_name?: string;
                /**
                 * Indicates whether a contact consents to 1:1 messaging.
                 */
                readonly consents_to_one_to_one_messaging?: boolean;
                /**
                 * URL for the contact's avatar or profile image.
                 */
                readonly avatar_url?: string;
            };
            /**
             * If this contact was added to the Mailchimp audience via this survey.
             */
            is_new_contact?: boolean;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}/questions/{question_id}/answers',
            path: {
                'outreach_id': outreachId,
                'question_id': questionId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'respondent_familiarity_is': respondentFamiliarityIs,
            },
        });
    }

    /**
     * List survey responses
     * Get responses to a survey.
     * @returns any List of survey responses
     * @throws ApiError
     */
    public getReportingSurveysIdResponses({
        outreachId,
        fields,
        excludeFields,
        answeredQuestion,
        choseAnswer,
        respondentFamiliarityIs,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         */
        fields?: Array<string>,
        /**
         * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         */
        excludeFields?: Array<string>,
        /**
         * The ID of the question that was answered.
         */
        answeredQuestion?: number,
        /**
         * The ID of the option chosen to filter responses on.
         */
        choseAnswer?: string,
        /**
         * Filter survey responses by familiarity of the respondents.
         */
        respondentFamiliarityIs?: 'new' | 'known' | 'unknown',
    }): CancelablePromise<{
        /**
         * An array of responses to a survey.
         */
        responses?: Array<{
            /**
             * The ID for the survey response.
             */
            readonly response_id?: string;
            /**
             * The date and time when the survey response was submitted in ISO 8601 format.
             */
            readonly submitted_at?: string;
            /**
             * Information about the contact.
             */
            readonly contact?: {
                /**
                 * The MD5 hash of the lowercase version of the list member's email address.
                 */
                readonly email_id?: string;
                /**
                 * The ID of this contact.
                 */
                readonly contact_id?: string;
                /**
                 * The contact's current status.
                 */
                readonly status?: 'Subscribed' | 'Unsubscribed' | 'Non-Subscribed' | 'Cleaned' | 'Archived';
                /**
                 * The contact's email address.
                 */
                readonly email?: string;
                /**
                 * The contact's full name.
                 */
                readonly full_name?: string;
                /**
                 * Indicates whether a contact consents to 1:1 messaging.
                 */
                readonly consents_to_one_to_one_messaging?: boolean;
                /**
                 * URL for the contact's avatar or profile image.
                 */
                readonly avatar_url?: string;
            };
            /**
             * If this contact was added to the Mailchimp audience via this survey.
             */
            is_new_contact?: boolean;
        }>;
        /**
         * The total number of items matching the query regardless of pagination.
         */
        readonly total_items?: number;
        /**
         * A list of link types and descriptions for the API schema documents.
         */
        readonly _links?: Array<{
            /**
             * As with an HTML 'rel' attribute, this describes the type of link.
             */
            readonly rel?: string;
            /**
             * This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action.
             */
            readonly href?: string;
            /**
             * The HTTP method that should be used when accessing the URL defined in 'href'.
             */
            readonly method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
            /**
             * For GETs, this is a URL representing the schema that the response should conform to.
             */
            readonly targetSchema?: string;
            /**
             * For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to.
             */
            readonly schema?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}/responses',
            path: {
                'outreach_id': outreachId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'answered_question': answeredQuestion,
                'chose_answer': choseAnswer,
                'respondent_familiarity_is': respondentFamiliarityIs,
            },
        });
    }

    /**
     * Get survey response
     * Get a single survey response.
     * @returns any Get a single survey response.
     * @throws ApiError
     */
    public getReportingSurveysIdResponsesId({
        outreachId,
        responseId,
    }: {
        /**
         * The outreach id.
         */
        outreachId: string,
        /**
         * The ID of the survey response.
         */
        responseId: string,
    }): CancelablePromise<{
        /**
         * The ID for the survey response.
         */
        readonly response_id?: string;
        /**
         * The date and time when the survey response was submitted in ISO 8601 format.
         */
        readonly submitted_at?: string;
        /**
         * Information about the contact.
         */
        readonly contact?: {
            /**
             * The MD5 hash of the lowercase version of the list member's email address.
             */
            readonly email_id?: string;
            /**
             * The ID of this contact.
             */
            readonly contact_id?: string;
            /**
             * The contact's current status.
             */
            readonly status?: 'Subscribed' | 'Unsubscribed' | 'Non-Subscribed' | 'Cleaned' | 'Archived';
            /**
             * The contact's email address.
             */
            readonly email?: string;
            /**
             * The contact's full name.
             */
            readonly full_name?: string;
            /**
             * Indicates whether a contact consents to 1:1 messaging.
             */
            readonly consents_to_one_to_one_messaging?: boolean;
            /**
             * URL for the contact's avatar or profile image.
             */
            readonly avatar_url?: string;
        };
        /**
         * If this contact was added to the Mailchimp audience via this survey.
         */
        is_new_contact?: boolean;
        /**
         * The survey questions and the answers to those questions.
         */
        results?: Array<{
            /**
             * The unique ID for this question.
             */
            question_id?: string;
            /**
             * The type of question this is.
             */
            question_type?: 'pickOne' | 'pickMany' | 'range' | 'text' | 'email';
            /**
             * The survey question.
             */
            query?: string;
            /**
             * The answer to this survey question.
             */
            answer?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reporting/surveys/{outreach_id}/responses/{response_id}',
            path: {
                'outreach_id': outreachId,
                'response_id': responseId,
            },
        });
    }

}
