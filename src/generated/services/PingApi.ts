/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PingApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Ping
     * A health check for the API that won't return any account-specific information.
     * @returns any
     * @throws ApiError
     */
    public getPing(): CancelablePromise<{
        /**
         * This will return a constant string value if the request is successful. Ex. "Everything's Chimpy!"
         */
        readonly health_status?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }

}
