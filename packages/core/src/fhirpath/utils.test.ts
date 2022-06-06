import { PropertyType } from '../types';
import {
  fhirPathArrayEquals,
  fhirPathArrayEquivalent,
  fhirPathEquals,
  fhirPathEquivalent,
  fhirPathIs,
  toJsBoolean,
  toTypedValue,
} from './utils';

const TYPED_TRUE = { type: PropertyType.boolean, value: true };
const TYPED_FALSE = { type: PropertyType.boolean, value: false };
const TYPED_1 = { type: PropertyType.integer, value: 1 };
const TYPED_2 = { type: PropertyType.integer, value: 2 };

describe('FHIRPath utils', () => {
  test('toJsBoolean', () => {
    expect(toJsBoolean([{ type: PropertyType.BackboneElement, value: undefined }])).toEqual(false);
    expect(toJsBoolean([{ type: PropertyType.BackboneElement, value: null }])).toEqual(false);
    expect(toJsBoolean([{ type: PropertyType.boolean, value: false }])).toEqual(false);
    expect(toJsBoolean([{ type: PropertyType.boolean, value: true }])).toEqual(true);
    expect(toJsBoolean([{ type: PropertyType.string, value: '' }])).toEqual(false);
    expect(toJsBoolean([{ type: PropertyType.string, value: 'hi' }])).toEqual(true);
  });

  test('fhirPathIs', () => {
    expect(fhirPathIs({ type: PropertyType.string, value: undefined }, 'string')).toEqual(false);
    expect(fhirPathIs({ type: PropertyType.BackboneElement, value: {} }, 'Patient')).toEqual(false);
    expect(fhirPathIs({ type: PropertyType.BackboneElement, value: { resourceType: 'Patient' } }, 'Patient')).toEqual(
      true
    );
    expect(
      fhirPathIs({ type: PropertyType.BackboneElement, value: { resourceType: 'Observation' } }, 'Patient')
    ).toEqual(false);
    expect(fhirPathIs({ type: PropertyType.boolean, value: true }, 'Boolean')).toEqual(true);
    expect(fhirPathIs({ type: PropertyType.boolean, value: false }, 'Boolean')).toEqual(true);
    expect(fhirPathIs({ type: PropertyType.integer, value: 100 }, 'Boolean')).toEqual(false);
    expect(fhirPathIs({ type: PropertyType.BackboneElement, value: {} }, 'Boolean')).toEqual(false);
  });

  test('fhirPathEquals', () => {
    expect(fhirPathEquals(TYPED_TRUE, TYPED_TRUE)).toEqual([TYPED_TRUE]);
    expect(fhirPathEquals(TYPED_TRUE, TYPED_FALSE)).toEqual([TYPED_FALSE]);
    expect(fhirPathEquals(TYPED_1, TYPED_1)).toEqual([TYPED_TRUE]);
    expect(fhirPathEquals(TYPED_1, TYPED_2)).toEqual([TYPED_FALSE]);
    expect(fhirPathEquals(TYPED_2, TYPED_1)).toEqual([TYPED_FALSE]);
  });

  test('fhirPathArrayEquals', () => {
    expect(fhirPathArrayEquals([TYPED_1], [TYPED_1])).toEqual([TYPED_TRUE]);
    expect(fhirPathArrayEquals([TYPED_1], [TYPED_2])).toEqual([TYPED_FALSE]);

    // Acceptable threshold
    expect(fhirPathArrayEquals([toTypedValue(1.0)], [toTypedValue(1.0001)])).toEqual([TYPED_FALSE]);
    expect(fhirPathArrayEquals([toTypedValue(1.0)], [toTypedValue(1.5)])).toEqual([TYPED_FALSE]);

    // Sort order does matter
    expect(fhirPathArrayEquals([TYPED_1, TYPED_2], [TYPED_2, TYPED_1])).toEqual([TYPED_FALSE]);
    expect(fhirPathArrayEquals([TYPED_1, TYPED_2], [TYPED_1, TYPED_1])).toEqual([TYPED_FALSE]);
  });

  test('fhirPathEquivalent', () => {
    expect(fhirPathEquivalent(TYPED_TRUE, TYPED_TRUE)).toEqual([TYPED_TRUE]);
    expect(fhirPathEquivalent(TYPED_TRUE, TYPED_FALSE)).toEqual([TYPED_FALSE]);
    expect(fhirPathEquivalent(TYPED_1, TYPED_1)).toEqual([TYPED_TRUE]);
    expect(fhirPathEquivalent(TYPED_1, TYPED_2)).toEqual([TYPED_FALSE]);
    expect(fhirPathEquivalent(TYPED_2, TYPED_1)).toEqual([TYPED_FALSE]);
  });

  test('fhirPathArrayEquivalent', () => {
    expect(fhirPathArrayEquivalent([TYPED_1], [TYPED_1])).toEqual([TYPED_TRUE]);
    expect(fhirPathArrayEquivalent([TYPED_1], [TYPED_2])).toEqual([TYPED_FALSE]);

    // Acceptable threshold
    expect(fhirPathArrayEquivalent([toTypedValue(1.0)], [toTypedValue(1.0001)])).toEqual([TYPED_TRUE]);
    expect(fhirPathArrayEquivalent([toTypedValue(1.0)], [toTypedValue(1.5)])).toEqual([TYPED_FALSE]);

    // Sort order does not matter
    expect(fhirPathArrayEquivalent([TYPED_1, TYPED_2], [TYPED_2, TYPED_1])).toEqual([TYPED_TRUE]);
    expect(fhirPathArrayEquivalent([TYPED_1, TYPED_2], [TYPED_1, TYPED_1])).toEqual([TYPED_FALSE]);
  });
});
