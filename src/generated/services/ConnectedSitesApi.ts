/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ConnectedSitesApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List connected sites
     * Get all connected sites in an account.
     * @returns any
     * @throws ApiError
     */
    public getConnectedSites({
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
         * An array of objects, each representing a connected site.
         */
        sites?: Array<{
            /**
             * The unique identifier for the site.
             */
            readonly foreign_id?: string;
            /**
             * The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
             */
            readonly store_id?: string;
            /**
             * The platform of the connected site.
             */
            readonly platform?: string;
            /**
             * The connected site domain.
             */
            readonly domain?: string;
            /**
             * The script used to connect your site with Mailchimp.
             */
            readonly site_script?: {
                /**
                 * The URL used for any integrations that offer built-in support for connected sites.
                 */
                url?: string;
                /**
                 * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
                 */
                fragment?: string;
            };
            /**
             * The date and time the connected site was created in ISO 8601 format.
             */
            readonly created_at?: string;
            /**
             * The date and time the connected site was last updated in ISO 8601 format.
             */
            readonly updated_at?: string;
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
            url: '/connected-sites',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add connected site
     * Create a new Mailchimp connected site.
     * @returns any
     * @throws ApiError
     */
    public postConnectedSites({
        body,
    }: {
        body: {
            /**
             * The unique identifier for the site.
             */
            foreign_id: string;
            /**
             * The connected site domain.
             */
            domain: string;
        },
    }): CancelablePromise<{
        /**
         * The unique identifier for the site.
         */
        readonly foreign_id?: string;
        /**
         * The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
         */
        readonly store_id?: string;
        /**
         * The platform of the connected site.
         */
        readonly platform?: string;
        /**
         * The connected site domain.
         */
        readonly domain?: string;
        /**
         * The script used to connect your site with Mailchimp.
         */
        readonly site_script?: {
            /**
             * The URL used for any integrations that offer built-in support for connected sites.
             */
            url?: string;
            /**
             * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
             */
            fragment?: string;
        };
        /**
         * The date and time the connected site was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the connected site was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/connected-sites',
            body: body,
        });
    }

    /**
     * Get connected site
     * Get information about a specific connected site.
     * @returns any
     * @throws ApiError
     */
    public getConnectedSitesId({
        connectedSiteId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique identifier for the site.
         */
        connectedSiteId: string,
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
         * The unique identifier for the site.
         */
        readonly foreign_id?: string;
        /**
         * The unique identifier for the ecommerce store that's associated with the connected site (if any). The store_id for a specific connected site can't change.
         */
        readonly store_id?: string;
        /**
         * The platform of the connected site.
         */
        readonly platform?: string;
        /**
         * The connected site domain.
         */
        readonly domain?: string;
        /**
         * The script used to connect your site with Mailchimp.
         */
        readonly site_script?: {
            /**
             * The URL used for any integrations that offer built-in support for connected sites.
             */
            url?: string;
            /**
             * A pre-built script that you can copy-and-paste into your site to integrate it with Mailchimp.
             */
            fragment?: string;
        };
        /**
         * The date and time the connected site was created in ISO 8601 format.
         */
        readonly created_at?: string;
        /**
         * The date and time the connected site was last updated in ISO 8601 format.
         */
        readonly updated_at?: string;
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
            url: '/connected-sites/{connected_site_id}',
            path: {
                'connected_site_id': connectedSiteId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Delete connected site
     * Remove a connected site from your Mailchimp account.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteConnectedSitesId({
        connectedSiteId,
    }: {
        /**
         * The unique identifier for the site.
         */
        connectedSiteId: string,
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
            url: '/connected-sites/{connected_site_id}',
            path: {
                'connected_site_id': connectedSiteId,
            },
        });
    }

    /**
     * Verify connected site script
     * Verify that the connected sites script has been installed, either via the script URL or fragment.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public postConnectedSitesIdActionsVerifyScriptInstallation({
        connectedSiteId,
    }: {
        /**
         * The unique identifier for the site.
         */
        connectedSiteId: string,
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
            url: '/connected-sites/{connected_site_id}/actions/verify-script-installation',
            path: {
                'connected_site_id': connectedSiteId,
            },
        });
    }

}
