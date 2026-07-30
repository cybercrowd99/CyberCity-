/**
 * CYBERCITY — Rotation Outcome
 *
 * RotationOutcome is the passive structural artifact following
 * RotationDecisionSurface. It records the final structural outcome
 * of a rotation operation without executing rotation or creating
 * authority.
 *
 * It does not:
 * - execute rotation
 * - activate wheel behavior
 * - compute rotation
 * - modify PlacePrimitive
 * - mutate rotation states
 * - enrich decisions
 * - create authority
 * - modify sovereignty
 *
 * RotationOutcome only:
 * - preserves the decision artifact
 * - records the passive final outcome
 * - maintains non-interference doctrine
 */

import { RotationOperationDecision } from "./rotation-operation-decision";

export interface RotationOutcome {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOutcome";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OUTCOME";

  /**
   * Preserved decision artifact.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted further.
   */
  decision: RotationOperationDecision;

  /**
   * Passive final outcome marker.
   */
  outcome:
    | "NO_ACTION"
    | "ACTION_REQUESTED"
    | "ACTION_DECLINED";
}

/**
 * Build a RotationOutcome artifact.
 *
 * This constructs the passive final outcome boundary
 * after the rotation decision surface.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 */
export function buildRotationOutcome(
  decision: RotationOperationDecision,
  outcome:
    | "NO_ACTION"
    | "ACTION_REQUESTED"
    | "ACTION_DECLINED" = "NO_ACTION"
): RotationOutcome {
  const artifact: RotationOutcome = {
    doctrine: "CyberCity_RotationOutcome",
    status: "ROTATION_OUTCOME",

    decision,

    outcome,
  };

  return Object.freeze(artifact);
}
