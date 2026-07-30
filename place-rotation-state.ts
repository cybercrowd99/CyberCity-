/**
 * CYBERCITY — Place Rotation State
 *
 * PlaceRotationState is the structural rotation condition for a place.
 * It follows PlacePrimitive and records the passive rotational state
 * without activating logic or creating authority.
 *
 * It does not:
 * - execute rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify sovereignty
 * - enrich primitive
 *
 * PlaceRotationState only preserves:
 * - place primitive reference
 * - rotation mode
 * - orientation vector
 * - passive rotation condition
 *
 * The orientation vector is preserved as structural data only.
 * It is not interpreted or executed by this artifact.
 * Future consumers may read this data, but PlaceRotationState
 * never performs computation or behavior.
 */

import { PlacePrimitive } from "./place-primitive";

export interface PlaceRotationState {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_PlaceRotationState";

  /**
   * Structural artifact discriminator.
   */
  status: "PLACE_ROTATION_STATE";

  /**
   * Preserved place primitive.
   *
   * Never enriched.
   * Never interpreted.
   * Never modified.
   */
  primitive: PlacePrimitive;

  /**
   * Structural rotation mode.
   *
   * Describes rotational condition only.
   * Never activates behavior.
   */
  mode: "NONE" | "STATIC" | "DYNAMIC";

  /**
   * Preserved orientation vector.
   *
   * Structural data only.
   * This artifact never computes with these values.
   * Future artifacts may observe this orientation.
   */
  vector: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * Build a PlaceRotationState artifact.
 *
 * This constructs the passive rotation condition for a place.
 *
 * It does not:
 * - execute rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify primitive
 * - create authority
 * - modify sovereignty
 *
 * PlaceRotationState is a passive structural artifact whose only
 * refinement is structural immutability.
 */
export function buildPlaceRotationState(
  primitive: PlacePrimitive,
  mode: "NONE" | "STATIC" | "DYNAMIC" = "NONE",
  vector = { x: 0, y: 0, z: 0 }
): PlaceRotationState {
  const artifact: PlaceRotationState = {
    doctrine: "CyberCity_PlaceRotationState",
    status: "PLACE_ROTATION_STATE",

    primitive,

    mode,

    vector,
  };

  return Object.freeze(artifact);
}
