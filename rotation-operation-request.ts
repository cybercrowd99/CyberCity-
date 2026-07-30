/**
 * CYBERCITY — Rotation Operation Request
 *
 * RotationOperationRequest is the structural request artifact
 * that follows RotationOperator.
 *
 * It records a requested rotation relationship without approving,
 * executing, or activating rotation behavior.
 *
 * It does not:
 * - execute rotation
 * - approve rotation
 * - select wheel behavior
 * - modify PlacePrimitive
 * - mutate rotation state
 * - create authority
 * - modify sovereignty
 *
 * RotationOperationRequest only preserves:
 * - source rotation state
 * - requested target rotation state
 * - passive request condition
 */

import { PlaceRotationState } from "./place-rotation-state";

export interface RotationOperationRequest {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOperationRequest";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OPERATION_REQUEST";

  /**
   * Current rotation state.
   *
   * Never enriched.
   * Never interpreted.
   * Never modified.
   */
  from: PlaceRotationState;

  /**
   * Requested future rotation state.
   *
   * Never enriched.
   * Never interpreted.
   * Never modified.
   */
  to: PlaceRotationState;

  /**
   * Passive request marker.
   *
   * Indicates existence of a request only.
   */
  requestState: "REQUESTED";
}

/**
 * Build a RotationOperationRequest artifact.
 *
 * This constructs the passive request boundary
 * between two rotation states.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify states
 * - create authority
 * - modify sovereignty
 */
export function buildRotationOperationRequest(
  from: PlaceRotationState,
  to: PlaceRotationState
): RotationOperationRequest {
  const artifact: RotationOperationRequest = {
    doctrine: "CyberCity_RotationOperationRequest",
    status: "ROTATION_OPERATION_REQUEST",

    from,
    to,

    requestState: "REQUESTED",
  };

  return Object.freeze(artifact);
}
