/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountExportApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get account export info
     * Get information about a specific account export.
     * @returns any
     * @throws ApiError
     */
    public getAccountExportId({
        exportId,
        fields,
        excludeFields,
    }: {
        /**
         * The unique id for the account export.
         */
        exportId: string,
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
            method: 'GET',
            url: '/account-exports/{export_id}',
            path: {
                'export_id': exportId,
            },
            query: {
                'fields': fields,
                'exclude_fields': excludeFields,
            },
        });
    }

}
