/**
 * CYBERCITY — Place Primitive
 *
 * The PlacePrimitive is the zero-state structural container for CyberCity.
 * It binds a spatial boundary (terminal), a functional organ (wheel), and
 * a passive binding state without activating logic or creating authority.
 *
 * It does not:
 * - execute services
 * - evaluate identity
 * - correlate behavior
 * - modify sovereignty
 * - activate wheel behavior
 * - enrich terminal state
 *
 * PlacePrimitive only preserves:
 * - spatial boundary (B)
 * - wheel organ (W)
 * - structural binding state (S)
 */

import { NetConnectionTerminal } from "../net/net-connection-terminal";
import { WheelReactor } from "../wheel/wheel-reactor";
import { NetWheelBinding } from "../net/net-wheel-binding";

export interface PlacePrimitive {
  /**
   * Governing CyberCity doctrine.
   */
  doctrine: "CyberCity_PlacePrimitive";

  /**
   * Structural artifact discriminator.
   */
  status: "PLACE_PRIMITIVE";

  /**
   * Spatial boundary (B).
   *
   * Never enriched.
   * Never interpreted.
   */
  boundary: NetConnectionTerminal;

  /**
   * Functional organ (W).
   *
   * Never activated.
   * Never given authority.
   */
  wheel: WheelReactor;

  /**
   * Structural binding state (S).
   *
   * Passive, frozen relationship.
   */
  binding: NetWheelBinding;
}

/**
 * Build a PlacePrimitive artifact.
 *
 * This constructs the zero-state CyberCity container by binding
 * a wheel organ into a spatial terminal using NetWheelBinding.
 *
 * It does not:
 * - activate wheel behavior
 * - route connections
 * - modify boundary
 * - modify wheel
 * - create authority
 */
export function buildPlacePrimitive(
  terminal: NetConnectionTerminal,
  wheel: WheelReactor
): PlacePrimitive {
  const binding: NetWheelBinding = Object.freeze({
    doctrine: "Net_WheelBinding",
    status: "NET_WHEEL_BINDING",

    terminal,
    wheel,

    bindingState: "BOUND",
  });

  const artifact: PlacePrimitive = {
    doctrine: "CyberCity_PlacePrimitive",
    status: "PLACE_PRIMITIVE",

    boundary: terminal,
    wheel,
    binding,
  };

  return Object.freeze(artifact);
}
