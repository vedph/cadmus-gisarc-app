import { Part } from '@myrmidon/cadmus-core';

/**
 * The location part model.
 */
export interface LocationPart extends Part {
  latitude: number;
  longitude: number;
  altitude?: number;
  geometries?: string[];
}

/**
 * The type ID used to identify the LocationPart type.
 */
export const LOCATION_PART_TYPEID = 'it.vedph.gisarc.location';

/**
 * JSON schema for the Location part.
 * You can use the JSON schema tool at https://jsonschema.net/.
 */
export const LOCATION_PART_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'www.vedph.it/cadmus/parts/gisarc/' + LOCATION_PART_TYPEID + '.json',
  type: 'object',
  title: 'LocationPart',
  required: [
    'id',
    'itemId',
    'typeId',
    'timeCreated',
    'creatorId',
    'timeModified',
    'userId',
    'latitude',
    'longitude',
  ],
  properties: {
    timeCreated: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    creatorId: {
      type: 'string',
    },
    timeModified: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    userId: {
      type: 'string',
    },
    id: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    itemId: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    typeId: {
      type: 'string',
      pattern: '^[a-z][-0-9a-z._]*$',
    },
    roleId: {
      type: ['string', 'null'],
      pattern: '^([a-z][-0-9a-z._]*)?$',
    },
    latitude: {
      type: 'number',
    },
    longitude: {
      type: 'number',
    },
    altitude: {
      type: 'number',
    },
    geometries: {
      type: 'array',
      default: [],
      items: {
        type: 'string',
      },
    },
  },
};
