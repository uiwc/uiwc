import { IBaseProps } from '../../IBaseProps';
import { Status } from 'react-stickynode';

export interface AffixProps extends IBaseProps {
  /** The switch to enable or disable Sticky (true by default ). */
  enabled?: boolean;
  /**
   * The offset from the top of window where the top of the element will
   * be when sticky state is triggered(0 by default ). If it is a selector
   * to a target (via `querySelector()`), the offset will be the height of
   * the target.
   */
  top?: number | string;
  /**
   * The offset from the top of document which release state will be
   * triggered when the bottom of the element reaches at. If it is a
   * selector to a target (via `querySelector()`), the offset will be the
   * bottom of the target.
   */
  bottomBoundary?: number | string;
  /** z-index of the sticky */
  innerZ?: number | string;
  /** Enable the use of CSS3 transforms (`true` by default). */
  enableTransforms?: boolean;
  /**
   * Class name to be applied to the element when the sticky state is
   * active ('active' by default).
   */
  activeClass?: string;
  /**
   * Class name to be applied to the inner element ('' by default).
   */
  innerClass?: string;
  innerActiveClass?: string;
  /**
   * Class name to be applied to the element independent of the
   * sticky state.
   */
  className?: string;
  /**
   * Class name to be applied to the element when the sticky state is
   * released ('released' by default).
   */
  releasedClass?: string;
  /** Callback for when the sticky state changes. */
  onStateChange?: (status: Status) => void;
  /**
   * Callback to indicate when the sticky plugin should freeze position
   * and ignore scroll/resize events.
   */
  shouldFreeze?: () => boolean;
  children: React.ReactNode | ((status: Status) => React.ReactNode);
}
