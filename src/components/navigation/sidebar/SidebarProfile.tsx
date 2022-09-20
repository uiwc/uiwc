import { Avatar } from '../../dataDisplay/avatar';
import { Skeleton } from '../../feedback/skeleton';
import { Flex } from '../../layout/flex';
import { SidebarProfileProps } from './constants';
import { SidebarProfileStyled } from './styled';

export function SidebarProfile({
  name,
  avatar,
  role,
  onCloseSidebar = () => {},
  loading = false,
  ...rest
}: SidebarProfileProps) {
  return (
    <SidebarProfileStyled {...rest}>
      <Flex>
        <Flex>
          <Avatar src={avatar} size={50} />
        </Flex>

        <Flex className="dui-profile-info" basis={100} direction="column">
          <h3 title={name}>{name}</h3>
          {loading ? <Skeleton wrapper="small" /> : <small>{role}</small>}
        </Flex>
      </Flex>
    </SidebarProfileStyled>
  );
}
