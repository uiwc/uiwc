import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Callout, Modal, Skeleton } from '../..';
import { i18n } from '../../../i18n/language';
import { PreviewerProps } from './constants';
import { renderStatus } from './helpers';
import { PreviewerStyled } from './styled';

export function Previewer({
  name = '',
  status = 'none',
  src = null,
  thumbnail = null,
  physical = false,
  loading = false,
  height = 200,
  reasonsToReject = [],
  to,
  ...rest
}: PreviewerProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleKnowReasonsClick = useCallback((e: any) => {
    e.preventDefault();

    setOpenModal(true);
  }, []);

  const handleOpenSource = useCallback(() => {
    if (src) {
      window.open(src, '_blank', 'noopener,noreferrer');
    }
  }, [src]);

  const subtext = useMemo(
    () =>
      `(${i18n('ui.components.previewer.digital')}${
        physical ? i18n('ui.components.previewer.original') : ''
      })`,
    [physical]
  );

  if (loading) {
    return <Skeleton.Previewer />;
  }

  return (
    <>
      <PreviewerStyled
        src={thumbnail ? thumbnail : src}
        status={status}
        height={height}
        {...rest}
      >
        {src ? (
          <button onClick={handleOpenSource}>
            {i18n('ui.components.previewer.seeDocument')}
          </button>
        ) : (
          <span className="text-muted">
            {i18n('ui.components.previewer.noDocument')}
          </span>
        )}
      </PreviewerStyled>

      <p className="mb-1">
        {name} {subtext}
      </p>

      {renderStatus(
        src,
        status,
        physical,
        reasonsToReject,
        handleKnowReasonsClick
      )}

      <Modal
        open={openModal}
        onClose={setOpenModal}
        type="warning"
        title={i18n('ui.components.document.modal.title')}
        footer={
          <Button block as={Link} to={to}>
            {i18n('ui.components.document.modal.button')}
          </Button>
        }
      >
        <p>{i18n('ui.components.document.modal.text1')}</p>

        <Callout className="mb-3 bg-powderer">
          <ul className="pl-4">
            {reasonsToReject.map((reason: string, index: number) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </Callout>

        <p>{i18n('ui.components.document.modal.text2')}</p>
      </Modal>
    </>
  );
}
