/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SurveysApi {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Publish a Survey
     * Publish a survey that is in draft, unpublished, or has been previously published and edited.
     * @returns any Survey Published
     * @throws ApiError
     */
    public postListsIdSurveysIdActionsPublish({
        listId,
        surveyId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The ID of the survey.
         */
        surveyId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists/{list_id}/surveys/{survey_id}/actions/publish',
            path: {
                'list_id': listId,
                'survey_id': surveyId,
            },
        });
    }

    /**
     * Unpublish a Survey
     * Unpublish a survey that has been published.
     * @returns any Survey Instance
     * @throws ApiError
     */
    public postListsIdSurveysIdActionsUnpublish({
        listId,
        surveyId,
    }: {
        /**
         * The unique ID for the list.
         */
        listId: string,
        /**
         * The ID of the survey.
         */
        surveyId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists/{list_id}/surveys/{survey_id}/actions/unpublish',
            path: {
                'list_id': listId,
                'survey_id': surveyId,
            },
        });
    }

}
