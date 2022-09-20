import ReactDOM from 'react-dom';
import { AsideProps } from './constants';
import { PortalAside } from './PortalAside';

export const Aside = (props: AsideProps) => {
  let el: HTMLElement | null = document.getElementById('dui-aside-root');

  if (!el) {
    el = document.createElement('div');
    el.setAttribute('id', 'dui-aside-root');
    // Append it to the body
    const body: HTMLElement = document.getElementsByTagName('body')[0];
    body.appendChild(el);
  }

  return ReactDOM.createPortal(<PortalAside {...props} />, el);
};
