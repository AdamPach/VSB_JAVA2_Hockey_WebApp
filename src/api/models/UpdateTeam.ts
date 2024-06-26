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
 * @interface UpdateTeam
 */
export interface UpdateTeam {
    /**
     * 
     * @type {string}
     * @memberof UpdateTeam
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateTeam
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateTeam
     */
    city?: string;
    /**
     * 
     * @type {Date}
     * @memberof UpdateTeam
     */
    establishmentDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof UpdateTeam
     */
    imageUrl?: string;
}

/**
 * Check if a given object implements the UpdateTeam interface.
 */
export function instanceOfUpdateTeam(value: object): boolean {
    return true;
}

export function UpdateTeamFromJSON(json: any): UpdateTeam {
    return UpdateTeamFromJSONTyped(json, false);
}

export function UpdateTeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTeam {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'city': json['city'] == null ? undefined : json['city'],
        'establishmentDate': json['establishmentDate'] == null ? undefined : (new Date(json['establishmentDate'])),
        'imageUrl': json['imageUrl'] == null ? undefined : json['imageUrl'],
    };
}

export function UpdateTeamToJSON(value?: UpdateTeam | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'city': value['city'],
        'establishmentDate': value['establishmentDate'] == null ? undefined : ((value['establishmentDate']).toISOString().substring(0,10)),
        'imageUrl': value['imageUrl'],
    };
}

