/**
 * CYBERCITY — Place Rotation Transition
 *
 * PlaceRotationTransition is the structural continuity artifact
 * that follows PlaceRotationState. It records the passive transition
 * between two rotation states without activating rotation or creating
 * authority.
 *
 * It does not:
 * - execute rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify sovereignty
 * - enrich rotation states
 * - mutate primitive
 *
 * PlaceRotationTransition only preserves:
 * - previous rotation state
 * - next rotation state
 * - passive transition discriminator
 *
 * The transition preserves continuity between states.
 * It does not determine, perform, or authorize the change.
 */

import { PlaceRotationState } from "./place-rotation-state";

export interface PlaceRotationTransition {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_PlaceRotationTransition";

  /**
   * Structural artifact discriminator.
   */
  status: "PLACE_ROTATION_TRANSITION";

  /**
   * Previous rotation state.
   *
   * Never enriched.
   * Never interpreted.
   * Never modified.
   */
  from: PlaceRotationState;

  /**
   * Next rotation state.
   *
   * Never enriched.
   * Never interpreted.
   * Never modified.
   */
  to: PlaceRotationState;

  /**
   * Passive transition marker.
   *
   * Structural continuity only.
   */
  continuity: "ROTATION_STATE_TRANSITION";
}

/**
 * Build a PlaceRotationTransition artifact.
 *
 * This constructs the passive continuity relationship
 * between two rotation states.
 *
 * It does not:
 * - activate rotation
 * - compute rotation
 * - modify rotation states
 * - modify primitive
 * - create authority
 * - modify sovereignty
 *
 * PlaceRotationTransition preserves the relationship
 * between states while maintaining non-interference.
 */
export function buildPlaceRotationTransition(
  from: PlaceRotationState,
  to: PlaceRotationState
): PlaceRotationTransition {
  const artifact: PlaceRotationTransition = {
    doctrine: "CyberCity_PlaceRotationTransition",
    status: "PLACE_ROTATION_TRANSITION",

    from,
    to,

    continuity: "ROTATION_STATE_TRANSITION",
  };

  return Object.freeze(artifact);
}
