/**
 * CYBERCITY — Rotation Decision Surface
 *
 * RotationDecisionSurface is the boundary wrapper above
 * RotationOperationDecision. It exposes the decision safely
 * to higher subsystems without granting new powers, authority,
 * or behavior.
 *
 * It does not:
 * - execute rotation
 * - approve rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify PlacePrimitive
 * - mutate rotation states
 * - enrich decisions
 * - create authority
 * - modify sovereignty
 *
 * RotationDecisionSurface only:
 * - exposes the decision through a surface boundary
 * - preserves non-interference doctrine
 * - maintains structural immutability
 */

import { RotationOperationDecision } from "./rotation-operation-decision";

export interface RotationDecisionSurface {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationDecisionSurface";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_DECISION_SURFACE";

  /**
   * Wrapped decision artifact.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted by the surface.
   */
  decision: RotationOperationDecision;

  /**
   * Passive surface-level exposure.
   *
   * Returns the decision unchanged.
   */
  surfaceDecision(): RotationOperationDecision;
}

/**
 * Build a RotationDecisionSurface artifact.
 *
 * This constructs the boundary wrapper above RotationOperationDecision.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only exposes the decision safely.
 */
export function buildRotationDecisionSurface(
  decision: RotationOperationDecision
): RotationDecisionSurface {
  const artifact: RotationDecisionSurface = {
    doctrine: "CyberCity_RotationDecisionSurface",
    status: "ROTATION_DECISION_SURFACE",

    decision,

    surfaceDecision: () => decision,
  };

  return Object.freeze(artifact);
}
