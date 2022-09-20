import { i18n } from '../../../i18n/language';
import { useCallback, useEffect, useState } from 'react';
import { Icons } from '..';
import { Tooltip } from '../..';
import { CopierProps } from './constants';
import { CopierStyled } from './styled';

export function Copier({ text = '', ...rest }: CopierProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 5000);
    }
  }, [copied]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => setCopied(true));
  }, [text]);

  return (
    <CopierStyled {...rest}>
      {text}
      {copied ? (
        <Tooltip text={i18n('ui.components.copier.copied')} placement="top">
          <i>
            <Icons.Check success />
          </i>
        </Tooltip>
      ) : (
        <Icons.Copy className="copy" onClick={handleCopy} />
      )}
    </CopierStyled>
  );
}
