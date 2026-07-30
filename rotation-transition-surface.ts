/**
 * CYBERCITY — Rotation Transition Surface
 *
 * RotationTransitionSurface is the boundary wrapper above
 * PlaceRotationTransition. It exposes transition continuity
 * safely to higher subsystems without granting new powers,
 * authority, or behavior.
 *
 * It does not:
 * - execute rotation
 * - activate wheel behavior
 * - compute transitions
 * - modify PlacePrimitive
 * - mutate rotation states
 * - enrich transitions
 * - create authority
 * - modify sovereignty
 *
 * RotationTransitionSurface only:
 * - exposes transition continuity through a surface boundary
 * - preserves non-interference doctrine
 * - maintains structural immutability
 */

import { PlaceRotationTransition } from "./place-rotation-transition";

export interface RotationTransitionSurface {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationTransitionSurface";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_TRANSITION_SURFACE";

  /**
   * Wrapped rotation transition artifact.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted by the surface.
   */
  transition: PlaceRotationTransition;

  /**
   * Passive surface-level exposure.
   *
   * Returns the transition unchanged.
   */
  surfaceTransition(): PlaceRotationTransition;
}

/**
 * Build a RotationTransitionSurface artifact.
 *
 * This constructs the boundary wrapper above
 * PlaceRotationTransition.
 *
 * It does not:
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only exposes transition continuity safely.
 */
export function buildRotationTransitionSurface(
  transition: PlaceRotationTransition
): RotationTransitionSurface {
  const artifact: RotationTransitionSurface = {
    doctrine: "CyberCity_RotationTransitionSurface",
    status: "ROTATION_TRANSITION_SURFACE",

    transition,

    surfaceTransition: () => transition,
  };

  return Object.freeze(artifact);
}
