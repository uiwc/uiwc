import { AsideProps } from './constants';
import {
  AsideContentStyled,
  AsidePickStyled,
  AsideWrapperStyled,
} from './styled';

export const PortalAside = ({
  children,
  open = false,
  width = '19vw',
  height = '100vh',
  minWidth = '350px',
  maxWidth = '400px',
  position = 'left',
  topOffset = 0,
  picker,
  pickerTopOffset = 0,
  onToggle = (value: boolean) => {},
  ...rest
}: AsideProps) => {
  return (
    <>
      {picker ? (
        <AsidePickStyled
          className={open ? 'opened' : 'closed'}
          topOffset={topOffset}
          pickerTopOffset={pickerTopOffset}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          position={position}
        >
          {picker}
        </AsidePickStyled>
      ) : null}

      <AsideWrapperStyled
        className={open ? 'opened' : 'closed'}
        topOffset={topOffset}
        height={height}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        position={position}
      >
        <AsideContentStyled height={height} position={position}>
          {children}
        </AsideContentStyled>
      </AsideWrapperStyled>
    </>
  );
};
