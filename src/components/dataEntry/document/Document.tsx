import { i18n } from '../../../i18n/language';
import { DragEvent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Callout, Modal, Skeleton, Spinner } from '../..';
import { Utils } from '../../../utils';
import { ContainerStyled, ErrorStyled, HelpTextStyled } from '../common';
import { DocumentProps } from './constants';
import { renderStatus } from './helpers';
import { DocumentWrapperStyled, FileChooserStyled } from './styled';

enum DragStates {
  Error = -1,
  None = 0,
  Over = 1,
  Uploading = 2,
  Complete = 3,
}

interface UploadStateProps {
  file: File | null;
  formatError: boolean;
  sizeError: boolean;
}

export function Document({
  title = '',
  name = '',
  status = 'none',
  src = null,
  thumbnail = null,
  physical = false,
  height = 200,
  reasonsToReject = [],
  className,
  accept = 'application/pdf, image/jpeg, image/png, image/bmp',
  maxSize = 2, // MB
  disabled = false,
  loading = false,
  uploading = false,
  to,
  onUpload = (data: any) => {},
  ...rest
}: DocumentProps) {
  const ref = useRef<any>();
  const [state, setState] = useState<UploadStateProps>({
    file: null,
    formatError: false,
    sizeError: false,
  });
  const [drag, setDrag] = useState(DragStates.None);
  const [openModal, setOpenModal] = useState(false);
  const { formatError, sizeError } = state;

  const helpText = i18n('ui.components.helps.maxFileSize', {
    maxFileSize: Utils.humanizeFileSize(Utils.megasToBytes(maxSize)),
  });

  const subtext = `(${i18n('ui.components.previewer.digital')}${
    physical ? i18n('ui.components.previewer.original') : ''
  })`;

  const styles = Utils.joinClasses(
    className,
    drag === DragStates.Over ? 'over' : '',
    formatError && 'has-error',
    sizeError && 'has-error',
    src && 'filled',
    uploading && 'uploading'
  );

  const isValidFormat = useCallback(
    (file: any) => {
      const acceptedTypes = Utils.replaceAll(accept, ' ', '').split(',');

      if (!Utils.isEmpty(accept) && !acceptedTypes.includes(file.type)) {
        setState({
          file: null,
          formatError: true,
          sizeError: false,
        });
        return false;
      }
      return true;
    },
    [accept]
  );

  const isValidSize = useCallback(
    (file: any) => {
      const allowSize = Utils.megasToBytes(maxSize);

      if (file.size > allowSize) {
        setState({
          file: null,
          formatError: false,
          sizeError: true,
        });
        return false;
      }
      return true;
    },
    [maxSize]
  );

  const handleDragEnter = useCallback((e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDrag(DragStates.Over);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDrag(DragStates.None);
  }, []);

  const handleDrop = useCallback((e: DragEvent<HTMLInputElement>) => {
    setDrag(DragStates.None);
  }, []);

  const handleChange = useCallback(
    async (e: FileList | null) => {
      if (e !== null) {
        const file = e.item(0);

        if (file === null) {
          if (ref && ref.current) {
            ref.current.value = '';
          }
          return;
        }

        if (!isValidFormat(file)) {
          if (ref && ref.current) {
            ref.current.value = '';
          }
          return;
        }

        if (!isValidSize(file)) {
          if (ref && ref.current) {
            ref.current.value = '';
          }
          return;
        }

        const base64 = await Utils.toBase64(file);
        const extension = Utils.getFileExtension(file?.name);
        const url = URL.createObjectURL(file);

        setState({
          file: file,
          formatError: false,
          sizeError: false,
        });

        onUpload({ file, base64, extension, url });

        if (ref && ref.current) {
          ref.current.value = '';
        }
      }
    },
    [isValidFormat, isValidSize, onUpload]
  );

  const handleOpenSource = useCallback(() => {
    if (src) {
      window.open(src, '_blank', 'noopener,noreferrer');
    }
  }, [src]);

  const handleKnowReasonsClick = useCallback((e: any) => {
    e.preventDefault();

    setOpenModal(true);
  }, []);

  if (loading) {
    return <Skeleton.Previewer />;
  }

  const renderComponent = () => {
    // Subiendo archivo
    if (uploading) {
      return <Spinner variant="dots" color={src ? 'white' : 'primary'} />;
    }

    // Hay archivo en el servidor
    if (src) {
      // El archivo esta aprobado
      if (status === 'approved') {
        return (
          <button className="btn-open" onClick={handleOpenSource}>
            {i18n('ui.components.previewer.seeDocument')}
          </button>
        );
      }

      // Se puede reemplazar el archivo del servidor
      return (
        <FileChooserStyled {...rest} height={height} className={styles}>
          <p className="mb-2 text-white">
            {i18n('ui.components.placeholders.dragAndDrop2')}
          </p>

          <Button variant="dropdown" disabled={disabled} loading={loading}>
            {i18n('ui.components.buttons.chooseFile')}
          </Button>

          <button className="btn-open" onClick={handleOpenSource}>
            {i18n('ui.components.previewer.seeDocument')}
          </button>

          <input
            ref={ref}
            type="file"
            accept={accept}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChange={(e: any) => handleChange(e.target.files)}
            disabled={disabled || loading}
          />
        </FileChooserStyled>
      );
    } else {
      // No hay archivo en el servidor
      return (
        <FileChooserStyled {...rest} height={height} className={styles}>
          <p className="mb-2 text-muted">
            {i18n('ui.components.placeholders.dragAndDrop')}
          </p>

          <Button variant="dropdown" disabled={disabled} loading={loading}>
            {i18n('ui.components.buttons.chooseFile')}
          </Button>

          <input
            ref={ref}
            type="file"
            accept={accept}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChange={(e: any) => handleChange(e.target.files)}
            disabled={disabled || loading}
            name={name}
          />
        </FileChooserStyled>
      );
    }
  };

  return (
    <ContainerStyled className="input-container">
      <DocumentWrapperStyled
        {...rest}
        className={styles}
        src={thumbnail ? thumbnail : src}
        status={status}
        height={height}
      >
        {renderComponent()}
      </DocumentWrapperStyled>

      <p className="mb-1">
        {title} {subtext}
      </p>

      {formatError ? (
        <ErrorStyled className="mb-1 mt-0">
          {i18n('ui.components.forms.errors.invalidFormat')}
        </ErrorStyled>
      ) : null}

      {sizeError ? (
        <ErrorStyled className="mb-1 mt-0">
          {i18n('ui.components.forms.errors.invalidSize')}
        </ErrorStyled>
      ) : null}

      {helpText && (
        <HelpTextStyled className="mb-1 mt-0 text-muted">
          {helpText}
        </HelpTextStyled>
      )}

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
    </ContainerStyled>
  );
}
