/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LandingPagesApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List landing pages
     * Get all landing pages.
     * @returns any Landing Pages Collection
     * @throws ApiError
     */
    public getAllLandingPages({
        sortDir,
        sortField,
        fields,
        excludeFields,
        count = 10,
    }: {
        /**
         * Determines the order direction for sorted results.
         */
        sortDir?: 'ASC' | 'DESC',
        /**
         * Returns files sorted by the specified field.
         */
        sortField?: 'created_at' | 'updated_at',
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
    }): CancelablePromise<{
        /**
         * The landing pages on the account
         */
        landing_pages?: Array<{
            /**
             * A string that uniquely identifies this landing page.
             */
            readonly id?: string;
            /**
             * The name of this landing page.
             */
            name?: string;
            /**
             * The title of this landing page seen in the browser's title bar.
             */
            title?: string;
            /**
             * The description of this landing page.
             */
            description?: string;
            /**
             * The template_id of this landing page.
             */
            readonly template_id?: number;
            /**
             * The status of this landing page.
             */
            readonly status?: 'published' | 'unpublished' | 'draft';
            /**
             * The list's ID associated with this landing page.
             */
            list_id?: string;
            /**
             * The ID of the store associated with this landing page.
             */
            store_id?: string;
            /**
             * The ID used in the Mailchimp web application.
             */
            web_id?: number;
            /**
             * Created by mobile or web
             */
            readonly created_by_source?: string;
            /**
             * The url of the published landing page.
             */
            readonly url?: string;
            /**
             * The time this landing page was created.
             */
            readonly created_at?: string;
            /**
             * The time this landing page was published.
             */
            readonly published_at?: string;
            /**
             * The time this landing page was unpublished.
             */
            readonly unpublished_at?: string;
            /**
             * The time this landing page was updated at.
             */
            readonly updated_at?: string;
            /**
             * The tracking settings applied to this landing page.
             */
            tracking?: {
                /**
                 * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
                 */
                track_with_mailchimp?: boolean;
                /**
                 * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
                 */
                enable_restricted_data_processing?: boolean;
            };
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
            url: '/landing-pages',
            query: {
                'sort_dir': sortDir,
                'sort_field': sortField,
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
            },
        });
    }

    /**
     * Add landing page
     * Create a new Mailchimp landing page.
     * @returns any
     * @throws ApiError
     */
    public postAllLandingPages({
        body,
        useDefaultList,
    }: {
        body: {
            /**
             * The name of this landing page.
             */
            name?: string;
            /**
             * The title of this landing page seen in the browser's title bar.
             */
            title?: string;
            /**
             * The description of this landing page.
             */
            description?: string;
            /**
             * The ID of the store associated with this landing page.
             */
            store_id?: string;
            /**
             * The list's ID associated with this landing page.
             */
            list_id?: string;
            /**
             * The type of template the landing page has.
             */
            type?: 'signup' | 'product';
            /**
             * The template_id of this landing page.
             */
            template_id?: number;
            /**
             * The tracking settings applied to this landing page.
             */
            tracking?: {
                /**
                 * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
                 */
                track_with_mailchimp?: boolean;
                /**
                 * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
                 */
                enable_restricted_data_processing?: boolean;
            };
        },
        /**
         * Will create the Landing Page using the account's Default List instead of requiring a list_id.
         */
        useDefaultList?: boolean,
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this landing page.
         */
        readonly id?: string;
        /**
         * The name of this landing page.
         */
        name?: string;
        /**
         * The title of this landing page seen in the browser's title bar.
         */
        title?: string;
        /**
         * The description of this landing page.
         */
        description?: string;
        /**
         * The template_id of this landing page.
         */
        readonly template_id?: number;
        /**
         * The status of this landing page.
         */
        readonly status?: 'published' | 'unpublished' | 'draft';
        /**
         * The list's ID associated with this landing page.
         */
        list_id?: string;
        /**
         * The ID of the store associated with this landing page.
         */
        store_id?: string;
        /**
         * The ID used in the Mailchimp web application.
         */
        web_id?: number;
        /**
         * Created by mobile or web
         */
        readonly created_by_source?: string;
        /**
         * The url of the published landing page.
         */
        readonly url?: string;
        /**
         * The time this landing page was created.
         */
        readonly created_at?: string;
        /**
         * The time this landing page was published.
         */
        readonly published_at?: string;
        /**
         * The time this landing page was unpublished.
         */
        readonly unpublished_at?: string;
        /**
         * The time this landing page was updated at.
         */
        readonly updated_at?: string;
        /**
         * The tracking settings applied to this landing page.
         */
        tracking?: {
            /**
             * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
             */
            track_with_mailchimp?: boolean;
            /**
             * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
             */
            enable_restricted_data_processing?: boolean;
        };
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
            method: 'POST',
            url: '/landing-pages',
            query: {
                'use_default_list': useDefaultList,
            },
            body: body,
        });
    }

    /**
     * Get landing page info
     * Get information about a specific page.
     * @returns any Landing Pages Instance
     * @throws ApiError
     */
    public getLandingPageId({
        pageId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
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
         * The name of this landing page.
         */
        name?: string;
        /**
         * The title of this landing page seen in the browser's title bar.
         */
        title?: string;
        /**
         * The description of this landing page.
         */
        description?: string;
        /**
         * The template_id of this landing page.
         */
        readonly template_id?: number;
        /**
         * The status of this landing page.
         */
        readonly status?: 'published' | 'unpublished' | 'draft';
        /**
         * The list's ID associated with this landing page.
         */
        list_id?: string;
        /**
         * The ID of the store associated with this landing page.
         */
        store_id?: string;
        /**
         * The ID used in the Mailchimp web application.
         */
        web_id?: number;
        /**
         * Created by mobile or web
         */
        readonly created_by_source?: string;
        /**
         * The url of the published landing page.
         */
        readonly url?: string;
        /**
         * The time this landing page was created.
         */
        readonly created_at?: string;
        /**
         * The time this landing page was published.
         */
        readonly published_at?: string;
        /**
         * The time this landing page was unpublished.
         */
        readonly unpublished_at?: string;
        /**
         * The time this landing page was updated at.
         */
        readonly updated_at?: string;
        /**
         * The tracking settings applied to this landing page.
         */
        tracking?: {
            /**
             * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
             */
            track_with_mailchimp?: boolean;
            /**
             * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
             */
            enable_restricted_data_processing?: boolean;
        };
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
            url: '/landing-pages/{page_id}',
            path: {
                'page_id': pageId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Update landing page
     * Update a landing page.
     * @returns any
     * @throws ApiError
     */
    public patchLandingPageId({
        pageId,
        body,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
        body: {
            /**
             * The name of this landing page.
             */
            name?: string;
            /**
             * The title of this landing page seen in the browser's title bar.
             */
            title?: string;
            /**
             * The description of this landing page.
             */
            description?: string;
            /**
             * The ID of the store associated with this landing page.
             */
            store_id?: string;
            /**
             * The list's ID associated with this landing page.
             */
            list_id?: string;
            /**
             * The tracking settings applied to this landing page.
             */
            tracking?: {
                /**
                 * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
                 */
                track_with_mailchimp?: boolean;
                /**
                 * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
                 */
                enable_restricted_data_processing?: boolean;
            };
        },
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this landing page.
         */
        readonly id?: string;
        /**
         * The name of this landing page.
         */
        name?: string;
        /**
         * The title of this landing page seen in the browser's title bar.
         */
        title?: string;
        /**
         * The description of this landing page.
         */
        description?: string;
        /**
         * The template_id of this landing page.
         */
        readonly template_id?: number;
        /**
         * The status of this landing page.
         */
        readonly status?: 'published' | 'unpublished' | 'draft';
        /**
         * The list's ID associated with this landing page.
         */
        list_id?: string;
        /**
         * The ID of the store associated with this landing page.
         */
        store_id?: string;
        /**
         * The ID used in the Mailchimp web application.
         */
        web_id?: number;
        /**
         * Created by mobile or web
         */
        readonly created_by_source?: string;
        /**
         * The url of the published landing page.
         */
        readonly url?: string;
        /**
         * The time this landing page was created.
         */
        readonly created_at?: string;
        /**
         * The time this landing page was published.
         */
        readonly published_at?: string;
        /**
         * The time this landing page was unpublished.
         */
        readonly unpublished_at?: string;
        /**
         * The time this landing page was updated at.
         */
        readonly updated_at?: string;
        /**
         * The tracking settings applied to this landing page.
         */
        tracking?: {
            /**
             * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
             */
            track_with_mailchimp?: boolean;
            /**
             * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google's restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
             */
            enable_restricted_data_processing?: boolean;
        };
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
            method: 'PATCH',
            url: '/landing-pages/{page_id}',
            path: {
                'page_id': pageId,
            },
            body: body,
        });
    }

    /**
     * Delete landing page
     * Delete a landing page.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteLandingPageId({
        pageId,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/landing-pages/{page_id}',
            path: {
                'page_id': pageId,
            },
        });
    }

    /**
     * Publish landing page
     * Publish a landing page that is in draft, unpublished, or has been previously published and edited.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postLandingPageIdActionsPublish({
        pageId,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/landing-pages/{page_id}/actions/publish',
            path: {
                'page_id': pageId,
            },
        });
    }

    /**
     * Unpublish landing page
     * Unpublish a landing page that is in draft or has been published.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postLandingPageIdActionsUnpublish({
        pageId,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
    }): CancelablePromise<{
        /**
         * An absolute URI that identifies the problem type. When dereferenced, it should provide human-readable documentation for the problem type.
         */
        type: string;
        /**
         * A short, human-readable summary of the problem type. It shouldn't change based on the occurrence of the problem, except for purposes of localization.
         */
        title: string;
        /**
         * The HTTP status code (RFC2616, Section 6) generated by the origin server for this occurrence of the problem.
         */
        status: number;
        /**
         * A human-readable explanation specific to this occurrence of the problem. [Learn more about errors](/developer/guides/get-started-with-mailchimp-api-3/#Errors).
         */
        detail: string;
        /**
         * A string that identifies this specific occurrence of the problem. Please provide this ID when contacting support.
         */
        instance: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/landing-pages/{page_id}/actions/unpublish',
            path: {
                'page_id': pageId,
            },
        });
    }

    /**
     * Get landing page content
     * Get the the HTML for your landing page.
     * @returns any
     * @throws ApiError
     */
    public getLandingPageIdContent({
        pageId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the page.
         */
        pageId: string,
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
         * The raw HTML for the landing page.
         */
        html?: string;
        /**
         * The JSON Structure for the landing page
         */
        json?: string;
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
            url: '/landing-pages/{page_id}/content',
            path: {
                'page_id': pageId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}
