/**
 * CYBERCITY — Rotation Outcome Binding
 *
 * RotationOutcomeBinding is the passive structural binder that
 * attaches a RotationOutcome to a higher subsystem without
 * granting new powers, authority, or behavior.
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
 * RotationOutcomeBinding only:
 * - binds the outcome into a structural context
 * - preserves non-interference doctrine
 * - maintains immutability
 */

import { RotationOutcome } from "./rotation-outcome";

export interface RotationOutcomeBinding {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOutcomeBinding";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OUTCOME_BINDING";

  /**
   * Bound rotation outcome.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted.
   */
  outcome: RotationOutcome;

  /**
   * Passive binding context identifier.
   *
   * Purely structural. No authority.
   */
  context: string;
}

/**
 * Build a RotationOutcomeBinding artifact.
 *
 * This constructs the passive binder above RotationOutcome.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 */
export function buildRotationOutcomeBinding(
  outcome: RotationOutcome,
  context: string
): RotationOutcomeBinding {
  const artifact: RotationOutcomeBinding = {
    doctrine: "CyberCity_RotationOutcomeBinding",
    status: "ROTATION_OUTCOME_BINDING",

    outcome,
    context,
  };

  return Object.freeze(artifact);
}
