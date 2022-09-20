export const position = (placement: 'bottom' | 'top' | 'left' | 'right') => ({
  current: placement,
  negate() {
    if (this.current === 'left') {
      return 'right';
    }
    if (this.current === 'right') {
      return 'left';
    }
    if (this.current === 'top') {
      return 'bottom';
    }
    /* if (this.current === 'bottom')  */
    return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  },
});

class Point {
  x: number = 0;
  y: number = 0;

  reset(p: Point) {
    this.x = p.x;
    this.y = p.y;
  }

  restrictRect(rect: any) {
    if (this.x < rect.left) {
      this.x = rect.left;
    } else if (this.x > rect.right) {
      this.x = rect.right;
    }

    if (this.y < rect.top) {
      this.y = rect.top;
    } else if (this.y > rect.bottom) {
      this.y = rect.bottom;
    }
  }
}

export const getPoint = (
  el: any,
  tooltip: any,
  placement: 'bottom' | 'top' | 'left' | 'right',
  space: number
) => {
  let count = 0;
  const pt = new Point();
  const boundaries = {
    left: space,
    top: space,
    right: document.body.clientWidth - (tooltip.clientWidth - space),
    bottom: window.innerHeight - (tooltip.clientHeight - space),
  };
  const elRect = el.getBoundingClientRect();

  return (function recursive(placement) {
    count++;
    const pos = position(placement);
    switch (pos.current) {
      case 'left':
        pt.x = elRect.left - (tooltip.offsetWidth + space);
        pt.y = elRect.top + (el.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'right':
        pt.x = elRect.right + space;
        pt.y = elRect.top + (el.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'top':
        pt.x = elRect.left + (el.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elRect.top - (tooltip.offsetHeight + space);
        break;
      default:
        pt.x = elRect.left + (el.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elRect.bottom + space;
    }

    if (count < 3) {
      if (
        (pos.isHorizontal() &&
          (pt.x < boundaries.left || pt.x > boundaries.right)) ||
        (pos.isVertical() &&
          (pt.y < boundaries.top || pt.y > boundaries.bottom))
      ) {
        pt.reset(recursive(pos.negate()));
      }
    }

    // restrict to rect boundary
    pt.restrictRect(boundaries);

    return pt;
  })(placement);
};
