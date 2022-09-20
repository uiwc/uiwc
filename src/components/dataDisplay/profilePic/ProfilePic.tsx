import { AnimatePresence } from 'framer-motion';
import React, { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { Utils } from '../../../utils';
import { Avatar } from '../avatar';
import { ProfilePicProps } from './constants';
import {
  ProfilePicButtonStyled,
  ProfilePicIconStyled,
  ProfilePicStyled,
} from './styled';

export function ProfilePic({
  src,
  size = 160,
  className,
  accept = '',
  onlyImages = true,
  disabled = false,
  loading = false,
  onChange = (data: any) => {},
  ...rest
}: ProfilePicProps) {
  const ref = useRef<any>();

  const buttonStyles = Utils.joinClasses(
    loading && 'loading',
    disabled && 'disabled'
  );

  const styles = Utils.joinClasses(
    className,
    loading && 'loading',
    disabled && 'disabled'
  );

  const animation = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.25 },
    }),
    []
  );

  if (onlyImages) {
    accept =
      'image/gif, image/jpeg, image/png, image/svg+xml, image/bmp, image/tiff';
  }

  const isValidFormat = useCallback(
    (file: any) => {
      const acceptedTypes = Utils.replaceAll(accept, ' ', '').split(',');

      if (!Utils.isEmpty(accept) && !acceptedTypes.includes(file.type)) {
        return false;
      }
      return true;
    },
    [accept]
  );

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

        const base64 = await Utils.toBase64(file);
        const extension = Utils.getFileExtension(file?.name);
        const url = URL.createObjectURL(file);

        onChange({ file, base64, extension, url });

        if (ref && ref.current) {
          ref.current.value = '';
        }
      }
    },
    [isValidFormat, onChange]
  );

  return (
    <ProfilePicStyled className={styles} {...rest}>
      <Avatar src={src} size={size} iconClassName="text-powder" />
      <AnimatePresence exitBeforeEnter>
        {loading ? null : (
          <ProfilePicButtonStyled className={buttonStyles} {...animation}>
            <ProfilePicIconStyled />
            <input
              ref={ref}
              type="file"
              accept={accept}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.files)
              }
              disabled={disabled}
            />
          </ProfilePicButtonStyled>
        )}
      </AnimatePresence>
    </ProfilePicStyled>
  );
}
