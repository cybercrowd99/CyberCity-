/**
 * CYBERCITY — Rotation Engine Skeleton
 *
 * RotationEngineSkeleton is the non-authoritative observer of
 * place rotation artifacts. It reads PlacePrimitive,
 * PlaceRotationState, and PlaceRotationTransition without owning,
 * modifying, interpreting, or activating any rotation behavior.
 *
 * It does not:
 * - execute rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify sovereignty
 * - mutate artifacts
 * - enrich rotation data
 *
 * RotationEngineSkeleton only:
 * - observes structural rotation artifacts
 * - exposes passive read operations
 * - preserves non-interference doctrine
 */

import { PlacePrimitive } from "./place-primitive";
import { PlaceRotationState } from "./place-rotation-state";
import { PlaceRotationTransition } from "./place-rotation-transition";

export interface RotationEngineSkeleton {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationEngineSkeleton";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_ENGINE_SKELETON";

  /**
   * Passive read operation for PlacePrimitive.
   *
   * Never interprets.
   * Never mutates.
   */
  readPrimitive(primitive: PlacePrimitive): PlacePrimitive;

  /**
   * Passive read operation for PlaceRotationState.
   *
   * Never interprets.
   * Never mutates.
   */
  readState(state: PlaceRotationState): PlaceRotationState;

  /**
   * Passive read operation for PlaceRotationTransition.
   *
   * Never interprets.
   * Never mutates.
   */
  readTransition(
    transition: PlaceRotationTransition
  ): PlaceRotationTransition;
}

/**
 * Build a RotationEngineSkeleton artifact.
 *
 * This constructs the non-authoritative rotation observer.
 *
 * It does not:
 * - activate rotation
 * - compute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only provides passive read access to rotation artifacts.
 */
export function buildRotationEngineSkeleton(): RotationEngineSkeleton {
  const artifact: RotationEngineSkeleton = {
    doctrine: "CyberCity_RotationEngineSkeleton",
    status: "ROTATION_ENGINE_SKELETON",

    readPrimitive: (primitive) => primitive,
    readState: (state) => state,
    readTransition: (transition) => transition,
  };

  return Object.freeze(artifact);
}
