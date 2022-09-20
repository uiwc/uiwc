import { i18n } from '../../../i18n/language';
import { EmptyProps } from './constants';
import { EmptyStyled } from './styled';

export function Empty({
  children = i18n('ui.components.table.empty'),
  hideImage = false,
  hideText = false,
  size = 'medium',
  ...rest
}: EmptyProps) {
  return (
    <EmptyStyled size={size} {...rest}>
      {hideImage ? null : (
        <div className="dw-empty-img">
          <img
            src="https://storage.googleapis.com/dawere-web-assets/Ilustraciones/*DASHBOARD%20PADRES%20%26%20EMPRESAS/zzz_no%20archivos.svg"
            alt="empty"
          />
        </div>
      )}
      {hideText ? null : <div>{children}</div>}
    </EmptyStyled>
  );
}
