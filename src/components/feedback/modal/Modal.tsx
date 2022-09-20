import { ModalProps } from './constants';
import ReactDOM from 'react-dom';
import { PortalModal } from './PortalModal';

export const Modal = (props: ModalProps) => {
  let el: HTMLElement | null = document.getElementById('dui-modal-root');

  if (!el) {
    el = document.createElement('div');
    el.setAttribute('id', 'dui-modal-root');
    // Append it to the body
    const body: HTMLElement = document.getElementsByTagName('body')[0];
    body.appendChild(el);
  }

  return ReactDOM.createPortal(<PortalModal {...props} />, el);
};
