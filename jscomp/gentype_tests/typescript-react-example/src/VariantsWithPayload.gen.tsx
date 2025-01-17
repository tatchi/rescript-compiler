/* TypeScript file generated from VariantsWithPayload.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as VariantsWithPayloadBS__Es6Import from './VariantsWithPayload.bs';
const VariantsWithPayloadBS: any = VariantsWithPayloadBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type payload = { readonly x: number; readonly y?: string };

// tslint:disable-next-line:interface-over-type-literal
export type withPayload = 
    "a"
  | "b"
  | "True"
  | "Twenty"
  | "Half"
  | { NAME: "c"; VAL: payload };

// tslint:disable-next-line:interface-over-type-literal
export type manyPayloads = 
    { NAME: "one"; VAL: number }
  | { NAME: "two"; VAL: [string, string] }
  | { NAME: "three"; VAL: payload };

// tslint:disable-next-line:interface-over-type-literal
export type simpleVariant = "A" | "B" | "C";

// tslint:disable-next-line:interface-over-type-literal
export type variantWithPayloads = 
    "A"
  | { TAG: "B"; _0: number }
  | { TAG: "C"; _0: number; _1: number }
  | { TAG: "D"; _0: number; _1: number }
  | { TAG: "E"; _0: number; _1: string; _2: number };

// tslint:disable-next-line:interface-over-type-literal
export type variant1Int = { TAG: "R"; _0: number };

// tslint:disable-next-line:interface-over-type-literal
export type variant1Object = { TAG: "R"; _0: payload };

export const testWithPayload: (x:withPayload) => withPayload = VariantsWithPayloadBS.testWithPayload;

export const printVariantWithPayload: (x:withPayload) => void = VariantsWithPayloadBS.printVariantWithPayload;

export const testManyPayloads: (x:manyPayloads) => manyPayloads = VariantsWithPayloadBS.testManyPayloads;

export const printManyPayloads: (x:manyPayloads) => void = VariantsWithPayloadBS.printManyPayloads;

export const testSimpleVariant: (x:simpleVariant) => simpleVariant = VariantsWithPayloadBS.testSimpleVariant;

export const testVariantWithPayloads: (x:variantWithPayloads) => variantWithPayloads = VariantsWithPayloadBS.testVariantWithPayloads;

export const printVariantWithPayloads: (x:variantWithPayloads) => void = VariantsWithPayloadBS.printVariantWithPayloads;

export const testVariant1Int: (x:variant1Int) => variant1Int = VariantsWithPayloadBS.testVariant1Int;

export const testVariant1Object: (x:variant1Object) => variant1Object = VariantsWithPayloadBS.testVariant1Object;
