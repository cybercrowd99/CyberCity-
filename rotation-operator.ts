/**
 * CYBERCITY — Rotation Operator
 *
 * RotationOperator is the sovereign-safe interpreter of rotation
 * operation requests. It follows RotationOperationRequest and
 * provides a passive interpretation boundary without approving,
 * executing, or activating rotation behavior.
 *
 * It does not:
 * - execute rotation
 * - approve rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify PlacePrimitive
 * - mutate rotation states
 * - create authority
 * - modify sovereignty
 *
 * RotationOperator only:
 * - interprets the existence of a request
 * - exposes passive interpretation operations
 * - preserves non-interference doctrine
 */

import { RotationOperationRequest } from "./rotation-operation-request";

export interface RotationOperator {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOperator";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OPERATOR";

  /**
   * Passive interpretation of a rotation request.
   *
   * Never approves.
   * Never executes.
   * Never mutates.
   */
  interpretRequest(
    request: RotationOperationRequest
  ): RotationOperationRequest;
}

/**
 * Build a RotationOperator artifact.
 *
 * This constructs the sovereign-safe interpreter layer
 * for rotation operation requests.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only provides passive interpretation of requests.
 */
export function buildRotationOperator(): RotationOperator {
  const artifact: RotationOperator = {
    doctrine: "CyberCity_RotationOperator",
    status: "ROTATION_OPERATOR",

    interpretRequest: (request) => request,
  };

  return Object.freeze(artifact);
}
