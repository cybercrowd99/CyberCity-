/**
 * CYBERCITY — Rotation Operator Surface
 *
 * RotationOperatorSurface is the boundary wrapper above
 * RotationOperator. It exposes the operator safely to higher
 * subsystems without granting new powers, authority, or behavior.
 *
 * It does not:
 * - execute rotation
 * - approve rotation
 * - compute rotation
 * - activate wheel behavior
 * - modify PlacePrimitive
 * - mutate rotation states
 * - enrich requests
 * - create authority
 * - modify sovereignty
 *
 * RotationOperatorSurface only:
 * - exposes the operator through a surface boundary
 * - preserves non-interference doctrine
 * - maintains structural immutability
 */

import { RotationOperator } from "./rotation-operator";
import { RotationOperationRequest } from "./rotation-operation-request";

export interface RotationOperatorSurface {
  /**
   * Governing CyberCity rotation doctrine.
   */
  doctrine: "CyberCity_RotationOperatorSurface";

  /**
   * Structural artifact discriminator.
   */
  status: "ROTATION_OPERATOR_SURFACE";

  /**
   * Wrapped operator.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted by the surface.
   */
  operator: RotationOperator;

  /**
   * Passive surface-level interpretation.
   *
   * Delegates to operator without mutation.
   */
  surfaceInterpret(
    request: RotationOperationRequest
  ): RotationOperationRequest;
}

/**
 * Build a RotationOperatorSurface artifact.
 *
 * This constructs the boundary wrapper above RotationOperator.
 *
 * It does not:
 * - approve rotation
 * - execute rotation
 * - modify artifacts
 * - create authority
 * - modify sovereignty
 *
 * It only exposes the operator safely.
 */
export function buildRotationOperatorSurface(
  operator: RotationOperator
): RotationOperatorSurface {
  const artifact: RotationOperatorSurface = {
    doctrine: "CyberCity_RotationOperatorSurface",
    status: "ROTATION_OPERATOR_SURFACE",

    operator,

    surfaceInterpret: (request) =>
      operator.interpretRequest(request),
  };

  return Object.freeze(artifact);
}
