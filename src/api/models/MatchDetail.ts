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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MatchDetail
 */
export interface MatchDetail {
    /**
     * 
     * @type {number}
     * @memberof MatchDetail
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchDetail
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof MatchDetail
     */
    matchDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof MatchDetail
     */
    homeScore?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchDetail
     */
    awayTeamId?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchDetail
     */
    awayScore?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchDetail
     */
    homeTeamId?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchDetail
     */
    homeTeamName?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchDetail
     */
    awayTeamName?: string;
}

/**
 * Check if a given object implements the MatchDetail interface.
 */
export function instanceOfMatchDetail(value: object): boolean {
    return true;
}

export function MatchDetailFromJSON(json: any): MatchDetail {
    return MatchDetailFromJSONTyped(json, false);
}

export function MatchDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'matchDate': json['matchDate'] == null ? undefined : (new Date(json['matchDate'])),
        'homeScore': json['homeScore'] == null ? undefined : json['homeScore'],
        'awayTeamId': json['awayTeamId'] == null ? undefined : json['awayTeamId'],
        'awayScore': json['awayScore'] == null ? undefined : json['awayScore'],
        'homeTeamId': json['homeTeamId'] == null ? undefined : json['homeTeamId'],
        'homeTeamName': json['homeTeamName'] == null ? undefined : json['homeTeamName'],
        'awayTeamName': json['awayTeamName'] == null ? undefined : json['awayTeamName'],
    };
}

export function MatchDetailToJSON(value?: MatchDetail | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'description': value['description'],
        'matchDate': value['matchDate'] == null ? undefined : ((value['matchDate']).toISOString().substring(0,10)),
        'homeScore': value['homeScore'],
        'awayTeamId': value['awayTeamId'],
        'awayScore': value['awayScore'],
        'homeTeamId': value['homeTeamId'],
        'homeTeamName': value['homeTeamName'],
        'awayTeamName': value['awayTeamName'],
    };
}
