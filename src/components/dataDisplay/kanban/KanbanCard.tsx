import React, { useCallback } from 'react';
import { useCollapse } from '../../../hooks';
import { Utils } from '../../../utils';
import { Button } from '../../general/button';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { Avatar } from '../avatar';
import { KanbanCardProps } from './constants';
import { KanbanPopover } from './KanbanPopover';
import {
  GridStyled,
  KanbanCardInfoStyled,
  KanbanCardStyled,
  KanbantCardThumbnailStyled,
} from './styled';

const MAX_VISIBLE_AVATARS = 3;

export default function KanbanCard({
  id,
  title,
  thumbnail,
  program = {},
  period = {},
  teachers = [],
  loading = false,
  onAdd = (data: any) => {},
  onUninvite = (teacher: any) => {},
  onRemove = (teacher: any) => {},
  onResend = (teacher: any) => {},
  ...rest
}: KanbanCardProps) {
  const restTotal = teachers.length - MAX_VISIBLE_AVATARS;
  const firstAvatars = teachers.slice(0, MAX_VISIBLE_AVATARS);
  const { getCollapseProps, getToggleProps } = useCollapse();

  const handleAdd = useCallback(
    (e: any) => {
      onAdd({
        id,
        title,
        thumbnail,
        program,
        period,
        teachers,
      });
    },
    [id, onAdd, period, program, teachers, thumbnail, title]
  );

  const handleUninvite = useCallback(
    (teacher: any) => {
      onUninvite(teacher);
    },
    [onUninvite]
  );

  const handleRemove = useCallback(
    (teacher: any) => {
      onRemove(teacher);
    },
    [onRemove]
  );

  const handleResend = useCallback(
    (teacher: any) => {
      onResend(teacher);
    },
    [onResend]
  );

  return (
    <KanbanCardStyled>
      <KanbantCardThumbnailStyled src={thumbnail} />

      <KanbanCardInfoStyled>
        <strong className="d-block fw-500 mb-2">{title}</strong>

        <Flex align="center" justify="end">
          <Avatar.Group>
            {firstAvatars.map((teacher, index: number) => (
              <KanbanPopover
                key={index}
                teacher={teacher}
                subject={title}
                program={program?.name}
                period={period?.name}
                onUninvite={handleUninvite}
                onRemove={handleRemove}
                onResend={handleResend}
              >
                <Avatar
                  size={30}
                  icon={Utils.getInitialLetters(
                    teacher.pending ? teacher.email : teacher.name,
                    teacher.pending ? '' : teacher.lastName
                  )}
                  src={teacher.avatar}
                  tooltip={Utils.getFullname(
                    teacher.pending ? teacher.email : teacher.name,
                    teacher.pending ? '' : teacher.lastName
                  )}
                />
              </KanbanPopover>
            ))}

            {teachers.length > MAX_VISIBLE_AVATARS ? (
              <Button circle size={30} {...getToggleProps()}>
                {restTotal < 100 ? `+${restTotal}` : '...'}
              </Button>
            ) : null}
          </Avatar.Group>

          <Flex shrink={false}>
            <Button circle size="35px" className="ml-2" onClick={handleAdd}>
              <Icons.Plus />
            </Button>
          </Flex>
        </Flex>
      </KanbanCardInfoStyled>

      <div {...getCollapseProps()}>
        <GridStyled>
          {teachers.map((teacher) => (
            <KanbanPopover
              key={teacher.id}
              teacher={teacher}
              onUninvite={handleUninvite}
              onRemove={handleRemove}
              onResend={handleResend}
            >
              <Avatar
                size={33}
                icon={Utils.getInitialLetters(
                  teacher.pending ? teacher.email : teacher.name,
                  teacher.pending ? '' : teacher.lastName
                )}
                src={teacher.avatar}
                tooltip={Utils.getFullname(
                  teacher.pending ? teacher.email : teacher.name,
                  teacher.pending ? '' : teacher.lastName
                )}
              />
            </KanbanPopover>
          ))}
        </GridStyled>
      </div>
    </KanbanCardStyled>
  );
}
