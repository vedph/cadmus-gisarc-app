import { IndexLookupDefinitions } from '@myrmidon/cadmus-core';
import { EPI_FORMULA_PATTERNS_PART_TYPEID } from '@myrmidon/cadmus-part-epigraphy-formula-patterns';
import { METADATA_PART_TYPEID } from '@myrmidon/cadmus-part-general-ui';

export const INDEX_LOOKUP_DEFINITIONS: IndexLookupDefinitions = {
  // human-friendly ID for sites
  site: {
    typeId: METADATA_PART_TYPEID,
    name: 'eid',
  },
  formula_pattern: {
    typeId: EPI_FORMULA_PATTERNS_PART_TYPEID,
    name: 'eid',
  },
};
