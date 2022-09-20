import { Tooltip } from '..';
import { Utils } from '../../../utils';
import { Icons } from '../../general/icons';
import { Image } from '../image';
import { AvatarGroup } from './AvatarGroup';
import { AvatarProps } from './constants';
import { AvatarStyled } from './styled';

export function Avatar({
  alt = ' ',
  size = 24,
  inPopover = false,
  src,
  className,
  shape = 'circle',
  icon,
  iconClassName = '',
  tooltip,
  active = false,
  ...rest
}: AvatarProps) {
  // const [imageExists, setImageExists] = useState(Utils.imageExists(src));

  const styles = Utils.joinClasses(
    className,
    shape === 'circle' && 'rounded-circle',
    active && 'active'
  );

  if (!icon) {
    icon = (
      <Icons.Account
        className={Utils.joinClasses(
          iconClassName,
          shape === 'circle' && 'rounded-circle',
          'default-icon'
        )}
      />
    );
  }

  // useEffect(() => {
  //   setImageExists(Utils.imageExists(src));
  // }, [src]);

  const render = () => {
    return (
      <AvatarStyled size={size} className={styles} {...rest}>
        {src ? (
          <Image
            src={src}
            width={size}
            alt={alt}
            square
            circle={shape === 'circle'}
          />
        ) : (
          icon
        )}
      </AvatarStyled>
    );
  };

  if (tooltip) {
    return (
      <Tooltip text={tooltip} inPopover={inPopover}>
        {render()}
      </Tooltip>
    );
  }

  return render();
}

Avatar.Group = AvatarGroup;
