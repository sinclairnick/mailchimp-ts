/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BatchesApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List batch requests
     * Get a summary of batch requests that have been made.
     * @returns any
     * @throws ApiError
     */
    public getBatches({
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
         * An array of objects representing batch calls.
         */
        batches?: Array<{
            /**
             * A string that uniquely identifies this batch request.
             */
            readonly id?: string;
            /**
             * The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status.
             */
            readonly status?: 'pending' | 'preprocessing' | 'started' | 'finalizing' | 'finished';
            /**
             * The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
             */
            readonly total_operations?: number;
            /**
             * The number of completed operations. This includes operations that returned an error.
             */
            readonly finished_operations?: number;
            /**
             * The number of completed operations that returned an error.
             */
            readonly errored_operations?: number;
            /**
             * The date and time when the server received the batch request in ISO 8601 format.
             */
            readonly submitted_at?: string;
            /**
             * The date and time when all operations in the batch request completed in ISO 8601 format.
             */
            readonly completed_at?: string;
            /**
             * The URL of the gzipped archive of the results of all the operations.
             */
            readonly response_body_url?: string;
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
            url: '/batches',
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
                'count': count,
                'offset': offset,
            },
        });
    }

    /**
     * Start batch operation
     * Begin processing a batch operations request.
     * @returns any
     * @throws ApiError
     */
    public postBatches({
        body,
    }: {
        body: {
            /**
             * An array of objects that describes operations to perform.
             */
            operations: Array<{
                /**
                 * The HTTP method to use for the operation.
                 */
                method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
                /**
                 * The relative path to use for the operation.
                 */
                path: string;
                /**
                 * Any request query parameters. Example parameters: {"count":10, "offset":0}
                 */
                params?: any;
                /**
                 * A string containing the JSON body to use with the request.
                 */
                body?: string;
                /**
                 * An optional client-supplied id returned with the operation results.
                 */
                operation_id?: string;
            }>;
        },
    }): CancelablePromise<{
        /**
         * A string that uniquely identifies this batch request.
         */
        readonly id?: string;
        /**
         * The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status.
         */
        readonly status?: 'pending' | 'preprocessing' | 'started' | 'finalizing' | 'finished';
        /**
         * The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
         */
        readonly total_operations?: number;
        /**
         * The number of completed operations. This includes operations that returned an error.
         */
        readonly finished_operations?: number;
        /**
         * The number of completed operations that returned an error.
         */
        readonly errored_operations?: number;
        /**
         * The date and time when the server received the batch request in ISO 8601 format.
         */
        readonly submitted_at?: string;
        /**
         * The date and time when all operations in the batch request completed in ISO 8601 format.
         */
        readonly completed_at?: string;
        /**
         * The URL of the gzipped archive of the results of all the operations.
         */
        readonly response_body_url?: string;
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
            url: '/batches',
            body: body,
        });
    }

    /**
     * Get batch operation status
     * Get the status of a batch request.
     * @returns any
     * @throws ApiError
     */
    public getBatchesId({
        batchId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the batch operation.
         */
        batchId: string,
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
         * A string that uniquely identifies this batch request.
         */
        readonly id?: string;
        /**
         * The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status.
         */
        readonly status?: 'pending' | 'preprocessing' | 'started' | 'finalizing' | 'finished';
        /**
         * The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
         */
        readonly total_operations?: number;
        /**
         * The number of completed operations. This includes operations that returned an error.
         */
        readonly finished_operations?: number;
        /**
         * The number of completed operations that returned an error.
         */
        readonly errored_operations?: number;
        /**
         * The date and time when the server received the batch request in ISO 8601 format.
         */
        readonly submitted_at?: string;
        /**
         * The date and time when all operations in the batch request completed in ISO 8601 format.
         */
        readonly completed_at?: string;
        /**
         * The URL of the gzipped archive of the results of all the operations.
         */
        readonly response_body_url?: string;
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
            url: '/batches/{batch_id}',
            path: {
                'batch_id': batchId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

    /**
     * Delete batch request
     * Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
     * @returns any An error generated by the Mailchimp API.
     * @throws ApiError
     */
    public deleteBatchesId({
        batchId,
    }: {
        /**
         * The unique id for the batch operation.
         */
        batchId: string,
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
            url: '/batches/{batch_id}',
            path: {
                'batch_id': batchId,
            },
        });
    }

}
