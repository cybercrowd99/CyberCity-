/**
 * CYBERCITY — Rotation Operation Decision
 *
 * RotationOperationDecision is the passive decision artifact
 * following RotationOperator.
 *
 * It records the structural outcome of a rotation operation request
 * without executing rotation or creating authority.
 *
 * It does not:
 * - execute rotation
 * - activate wheel behavior
 * - modify PlacePrimitive
 * - mutate rotation states
 * - compute rotation
 * - create authority
 * - modify sovereignty
 *
 * RotationOperationDecision only preserves:
 * - interpreted rotation request
 * - decision state
 * - passive outcome record
 */

import { RotationOperationRequest } from "./rotation-operation-request";

export interface RotationOperationDecision {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOperationDecision";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OPERATION_DECISION";

  /**
   * Preserved rotation operation request.
   *
   * Never enriched.
   * Never interpreted further.
   * Never modified.
   */
  request: RotationOperationRequest;

  /**
   * Passive decision condition.
   */
  decision:
    | "PENDING"
    | "ACCEPTED"
    | "DECLINED";
}

/**
 * Build a RotationOperationDecision artifact.
 *
 * This constructs the passive decision boundary
 * after request interpretation.
 *
 * It does not:
 * - execute rotation
 * - activate wheels
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 */
export function buildRotationOperationDecision(
  request: RotationOperationRequest,
  decision: "PENDING" | "ACCEPTED" | "DECLINED" = "PENDING"
): RotationOperationDecision {
  const artifact: RotationOperationDecision = {
    doctrine: "CyberCity_RotationOperationDecision",
    status: "ROTATION_OPERATION_DECISION",

    request,

    decision,
  };

  return Object.freeze(artifact);
}
