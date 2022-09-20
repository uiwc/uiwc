import { i18n } from '../../../i18n/language';
import { ChangeEvent, DragEvent, useCallback, useState } from 'react';
import { Utils } from '../../../utils';
import { Button } from '../../general/button';
import { ArticleIcon, CloseIcon } from '../../general/icons';
import { ContainerStyled, ErrorStyled, HelpTextStyled } from '../common';
import { process } from '../helpers';
import { FileProps, UploadStateProps } from './constants';
import { UploadStyled } from './styled';

enum DragStates {
  Error = -1,
  None = 0,
  Over = 1,
  Uploading = 2,
  Complete = 3,
}

export function File({
  name,
  className,
  error = '',
  accept = '',
  height = 200,
  onlyImages = false,
  disabled = false,
  loading = false,
  helpText,
  onUpload = (data: any) => {},
  onRemove = () => {},
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  ...rest
}: FileProps) {
  const [state, setState] = useState<UploadStateProps>({
    file: null,
    url: null,
    formatError: false,
    isImage: false,
  });
  const [drag, setDrag] = useState(DragStates.None);
  const { file, url, formatError, isImage } = state;

  const styles = Utils.joinClasses(
    className,
    drag === DragStates.Over ? 'over' : '',
    (error || formatError) && 'has-error',
    file && 'filled'
  );

  const background = {
    backgroundImage: url ? `url(${url})` : 'none',
  };

  if (onlyImages) {
    accept =
      'image/gif, image/jpeg, image/png, image/svg+xml, image/bmp, image/tiff';
  }

  const innerName =
    register !== undefined ? register(name, process(validators)) : { name };

  const isValidFormat = useCallback(
    (file: any) => {
      const acceptedTypes = Utils.replaceAll(accept, ' ', '').split(',');

      if (!Utils.isEmpty(accept) && !acceptedTypes.includes(file.type)) {
        setState({
          ...state,
          file: null,
          url: null,
          formatError: true,
          isImage: false,
        });
        return false;
      }
      return true;
    },
    [accept, state]
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

        if (!isValidFormat(file)) {
          return;
        }

        const base64 = await Utils.toBase64(file);
        const extension = Utils.getFileExtension(file?.name);

        setState({
          ...state,
          file: file,
          url: URL.createObjectURL(file),
          formatError: false,
          isImage: Utils.isFileImage(file),
        });

        onUpdateForm(name, e, {
          shouldValidate: mode === 'onChange',
          shouldDirty: true,
        });

        onUpload({ file, base64, extension });
      }
    },
    [isValidFormat, mode, name, onUpdateForm, onUpload, state]
  );

  const handleRemove = useCallback(() => {
    setState({
      ...state,
      file: null,
      url: null,
      formatError: false,
      isImage: false,
    });

    onUpdateForm(name, null, {
      shouldValidate: mode === 'onChange',
      shouldDirty: true,
    });

    onRemove();
  }, [mode, name, onRemove, onUpdateForm, state]);

  return (
    <ContainerStyled className="input-container">
      <UploadStyled
        height={height}
        className={styles}
        {...rest}
        style={background}
      >
        {file ? (
          <Button
            variant="secondary"
            className="remove-button"
            onClick={handleRemove}
            disabled={disabled}
            loading={loading}
          >
            <CloseIcon />
          </Button>
        ) : null}

        {!file ? (
          <>
            {i18n('ui.components.placeholders.dragAndDrop')}
            <Button
              variant="secondary"
              className="mt-2"
              disabled={disabled}
              loading={loading}
            >
              {i18n('ui.components.buttons.chooseFile')}
            </Button>
          </>
        ) : null}

        {file && !isImage ? (
          <>
            <ArticleIcon className="fs-8 text-light" />
            <p className="mb-0 text-muted mt-2">{file.name}</p>
          </>
        ) : null}

        <input
          type="file"
          accept={accept}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          {...innerName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.files)
          }
          disabled={disabled || loading}
        />
      </UploadStyled>

      {error ? <ErrorStyled>{error}</ErrorStyled> : null}
      {formatError ? (
        <ErrorStyled>
          {i18n('ui.components.forms.errors.invalidFormat')}
        </ErrorStyled>
      ) : null}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
    </ContainerStyled>
  );
}
