import {
  BIBLIOGRAPHY_PART_TYPEID,
  CATEGORIES_PART_TYPEID,
  COMMENT_PART_TYPEID,
  DOC_REFERENCES_PART_TYPEID,
  EXTERNAL_IDS_PART_TYPEID,
  HISTORICAL_DATE_PART_TYPEID,
  INDEX_KEYWORDS_PART_TYPEID,
  METADATA_PART_TYPEID,
  NAMES_PART_TYPEID,
  NOTE_PART_TYPEID,
  TOKEN_TEXT_PART_TYPEID,
  COMMENT_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-part-general-ui';
import {
  APPARATUS_FRAGMENT_TYPEID,
  ORTHOGRAPHY_FRAGMENT_TYPEID,
} from '@myrmidon/cadmus-part-philology-ui';
import { PartEditorKeys } from '@myrmidon/cadmus-core';

const GENERAL = 'general';
const PHILOLOGY = 'philology';
const GISARC = 'gisarc';
const TOKEN_TEXT_LAYER_PART_TYPEID = 'it.vedph.token-text-layer';

/**
 * The parts and fragments editor keys for this UI.
 * Each property is a part type ID, mapped to a value of type PartGroupKey,
 * having a part property with the part's editor key, and a fragments property
 * with the mappings between fragment type IDs and their editor keys.
 */
export const PART_EDITOR_KEYS: PartEditorKeys = {
  [BIBLIOGRAPHY_PART_TYPEID]: {
    part: GENERAL,
  },
  [CATEGORIES_PART_TYPEID]: {
    part: GENERAL,
  },
  [COMMENT_PART_TYPEID]: {
    part: GENERAL,
  },
  [DOC_REFERENCES_PART_TYPEID]: {
    part: GENERAL,
  },
  [EXTERNAL_IDS_PART_TYPEID]: {
    part: GENERAL,
  },
  [HISTORICAL_DATE_PART_TYPEID]: {
    part: GENERAL,
  },
  [INDEX_KEYWORDS_PART_TYPEID]: {
    part: GENERAL,
  },
  [METADATA_PART_TYPEID]: {
    part: GENERAL,
  },
  [NAMES_PART_TYPEID]: {
    part: GENERAL,
  },
  [NOTE_PART_TYPEID]: {
    part: GENERAL,
  },
  [TOKEN_TEXT_PART_TYPEID]: {
    part: GENERAL,
  },
  // TODO: add GISARC parts
  // layer parts
  [TOKEN_TEXT_LAYER_PART_TYPEID]: {
    part: GENERAL,
    fragments: {
      [APPARATUS_FRAGMENT_TYPEID]: PHILOLOGY,
      [COMMENT_FRAGMENT_TYPEID]: GENERAL,
      [ORTHOGRAPHY_FRAGMENT_TYPEID]: PHILOLOGY,
    },
  },
};
