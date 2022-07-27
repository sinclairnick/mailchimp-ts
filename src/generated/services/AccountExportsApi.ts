/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountExportsApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List account exports
     * Get a list of account exports for a given account.
     * @returns any
     * @throws ApiError
     */
    public getAccountExports({
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
         * An array of objects, each representing an account export.
         */
        exports?: Array<{
            /**
             * The ID for the export.
             */
            export_id?: number;
            /**
             * Start time for the export.
             */
            started?: string;
            /**
             * If finished, the finish time for the export.
             */
            finished?: string;
            /**
             * The size of the uncompressed export in bytes.
             */
            size_in_bytes?: number;
            /**
             * If the export is finished, the download URL for an export. URLs are only valid for 90 days after the export completes.
             */
            download_url?: string;
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
            url: '/account-exports',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Add export
     * Create a new account export in your Mailchimp account.
     * @returns any
     * @throws ApiError
     */
    public postAccountExport({
        body,
    }: {
        body: {
            /**
             * The stages of an account export to include.
             */
            include_stages: Array<'audiences' | 'campaigns' | 'events' | 'gallery_files' | 'reports' | 'templates'>;
            /**
             * An ISO 8601 date that will limit the export to only records created after a given time. For instance, the reports stage will contain any campaign sent after the given timestamp. Audiences, however, are excluded from this limit.
             */
            since_timestamp?: string;
        },
    }): CancelablePromise<{
        /**
         * The ID for the export.
         */
        export_id?: number;
        /**
         * Start time for the export.
         */
        started?: string;
        /**
         * If finished, the finish time for the export.
         */
        finished?: string;
        /**
         * The size of the uncompressed export in bytes.
         */
        size_in_bytes?: number;
        /**
         * If the export is finished, the download URL for an export. URLs are only valid for 90 days after the export completes.
         */
        download_url?: string;
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
            url: '/account-exports',
            body: body,
        });
    }

}
