/**
 * CYBERCITY — Rotation Outcome Surface
 *
 * RotationOutcomeSurface is the boundary wrapper above
 * RotationOutcome. It exposes the final passive rotation
 * outcome safely to higher subsystems without granting new
 * powers, authority, or behavior.
 *
 * It does not:
 * - execute rotation
 * - activate wheel behavior
 * - compute rotation
 * - modify PlacePrimitive
 * - mutate rotation states
 * - enrich outcomes
 * - create authority
 * - modify sovereignty
 *
 * RotationOutcomeSurface only:
 * - exposes the outcome through a surface boundary
 * - preserves non-interference doctrine
 * - maintains structural immutability
 */

import { RotationOutcome } from "./rotation-outcome";

export interface RotationOutcomeSurface {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOutcomeSurface";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OUTCOME_SURFACE";

  /**
   * Wrapped rotation outcome artifact.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted by the surface.
   */
  outcome: RotationOutcome;

  /**
   * Passive surface-level exposure.
   *
   * Returns the outcome unchanged.
   */
  surfaceOutcome(): RotationOutcome;
}

/**
 * Build a RotationOutcomeSurface artifact.
 *
 * This constructs the boundary wrapper above RotationOutcome.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only exposes the final outcome safely.
 */
export function buildRotationOutcomeSurface(
  outcome: RotationOutcome
): RotationOutcomeSurface {
  const artifact: RotationOutcomeSurface = {
    doctrine: "CyberCity_RotationOutcomeSurface",
    status: "ROTATION_OUTCOME_SURFACE",

    outcome,

    surfaceOutcome: () => outcome,
  };

  return Object.freeze(artifact);
}
