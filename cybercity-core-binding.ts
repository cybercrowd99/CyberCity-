/**
 * CYBERCITY — CORE Binding
 *
 * CyberCityCoreBinding is the passive structural binder that
 * attaches CyberCity rotation structure into the CORE continuity
 * boundary without transferring ownership, authority, or behavior.
 *
 * It does not:
 * - execute rotation
 * - activate wheel behavior
 * - compute rotation
 * - modify PlacePrimitive
 * - mutate rotation states
 * - alter CORE continuity
 * - create authority
 * - modify sovereignty
 *
 * CyberCityCoreBinding only:
 * - preserves CyberCity structural presence
 * - preserves CORE boundary reference
 * - establishes passive binding state
 * - maintains non-interference doctrine
 */

import { RotationOutcomeBinding } from "./rotation-outcome-binding";

export interface CyberCityCoreBinding {
  /**
   * Governing CyberCity CORE binding doctrine.
   */
  doctrine: "CyberCity_CoreBinding";

  /**
   * Structural artifact discriminator.
   */
  status: "CYBERCITY_CORE_BINDING";

  /**
   * Preserved CyberCity rotation outcome binding.
   *
   * Never enriched.
   * Never modified.
   * Never interpreted.
   */
  cyberCity: RotationOutcomeBinding;

  /**
   * CORE continuity boundary identifier.
   *
   * Structural reference only.
   * No authority transfer.
   */
  coreBoundary: string;

  /**
   * Passive binding state.
   */
  bindingState: "BOUND";
}

/**
 * Build CyberCity CORE binding artifact.
 *
 * This creates the passive relationship between
 * CyberCity structural rotation output and CORE boundary.
 *
 * It does not:
 * - execute rotation
 * - route operations
 * - modify CORE state
 * - modify CyberCity state
 * - create authority
 */
export function buildCyberCityCoreBinding(
  cyberCity: RotationOutcomeBinding,
  coreBoundary: string
): CyberCityCoreBinding {
  const artifact: CyberCityCoreBinding = {
    doctrine: "CyberCity_CoreBinding",
    status: "CYBERCITY_CORE_BINDING",

    cyberCity,
    coreBoundary,

    bindingState: "BOUND",
  };

  return Object.freeze(artifact);
}
