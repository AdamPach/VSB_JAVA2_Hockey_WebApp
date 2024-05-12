/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  MatchDetail,
  UpdateMatch,
} from '../models/index';
import {
    MatchDetailFromJSON,
    MatchDetailToJSON,
    UpdateMatchFromJSON,
    UpdateMatchToJSON,
} from '../models/index';

export interface CreateMatchRequest {
    updateMatch: UpdateMatch;
}

export interface DeleteMatchRequest {
    matchId: number;
}

export interface GetMatchRequest {
    matchId: number;
}

export interface UpdateMatchRequest {
    matchId: number;
    updateMatch: UpdateMatch;
}

/**
 * 
 */
export class MatchControllerApi extends runtime.BaseAPI {

    /**
     */
    async createMatchRaw(requestParameters: CreateMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchDetail>> {
        if (requestParameters['updateMatch'] == null) {
            throw new runtime.RequiredError(
                'updateMatch',
                'Required parameter "updateMatch" was null or undefined when calling createMatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/matches`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMatchToJSON(requestParameters['updateMatch']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchDetailFromJSON(jsonValue));
    }

    /**
     */
    async createMatch(requestParameters: CreateMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchDetail> {
        const response = await this.createMatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteMatchRaw(requestParameters: DeleteMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchDetail>> {
        if (requestParameters['matchId'] == null) {
            throw new runtime.RequiredError(
                'matchId',
                'Required parameter "matchId" was null or undefined when calling deleteMatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/matches/{matchId}`.replace(`{${"matchId"}}`, encodeURIComponent(String(requestParameters['matchId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchDetailFromJSON(jsonValue));
    }

    /**
     */
    async deleteMatch(requestParameters: DeleteMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchDetail> {
        const response = await this.deleteMatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getMatchRaw(requestParameters: GetMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchDetail>> {
        if (requestParameters['matchId'] == null) {
            throw new runtime.RequiredError(
                'matchId',
                'Required parameter "matchId" was null or undefined when calling getMatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/matches/{matchId}`.replace(`{${"matchId"}}`, encodeURIComponent(String(requestParameters['matchId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchDetailFromJSON(jsonValue));
    }

    /**
     */
    async getMatch(requestParameters: GetMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchDetail> {
        const response = await this.getMatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getMatchesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MatchDetail>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/matches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MatchDetailFromJSON));
    }

    /**
     */
    async getMatches(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MatchDetail>> {
        const response = await this.getMatchesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async updateMatchRaw(requestParameters: UpdateMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatchDetail>> {
        if (requestParameters['matchId'] == null) {
            throw new runtime.RequiredError(
                'matchId',
                'Required parameter "matchId" was null or undefined when calling updateMatch().'
            );
        }

        if (requestParameters['updateMatch'] == null) {
            throw new runtime.RequiredError(
                'updateMatch',
                'Required parameter "updateMatch" was null or undefined when calling updateMatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/matches/{matchId}`.replace(`{${"matchId"}}`, encodeURIComponent(String(requestParameters['matchId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMatchToJSON(requestParameters['updateMatch']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatchDetailFromJSON(jsonValue));
    }

    /**
     */
    async updateMatch(requestParameters: UpdateMatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatchDetail> {
        const response = await this.updateMatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
