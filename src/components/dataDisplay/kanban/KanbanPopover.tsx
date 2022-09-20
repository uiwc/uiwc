import React, { useCallback, useRef, useState } from 'react';
import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { Confirm } from '../../feedback/confirm';
import { Icons } from '../../general';
import { Flex } from '../../layout/flex';
import { Avatar } from '../avatar';
import { Popover } from '../popover';

export function KanbanPopover({
  children,
  teacher,
  subject = '',
  program = '',
  period = '',
  onUninvite = (teacher: any) => {},
  onRemove = (teacher: any) => {},
  onResend = (teacher: any) => {},
  readOnly = false,
}: any) {
  const popoverRef = useRef<any>();

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenConfirmUninvite, setIsOpenConfirmUninvite] = useState(false);
  const [isOpenConfirmResend, setIsOpenConfirmResend] = useState(false);

  const handleOpenDelete = useCallback(() => {
    if (teacher?.pending) {
      setIsOpenConfirmUninvite(true);
    } else {
      setIsOpenConfirmDelete(true);
    }
    popoverRef?.current?.close();
  }, [teacher?.pending]);

  const handleOpenResend = useCallback(() => {
    setIsOpenConfirmResend(true);
    popoverRef?.current?.close();
  }, []);

  const handleUninvite = useCallback(() => {
    onUninvite(teacher);
  }, [onUninvite, teacher]);

  const handleDelete = useCallback(() => {
    onRemove(teacher);
  }, [onRemove, teacher]);

  const handleResend = useCallback(() => {
    onResend(teacher);
  }, [onResend, teacher]);

  return (
    <>
      <Popover
        ref={popoverRef}
        placement="right"
        fixedWidth
        content={
          <>
            {teacher?.pending ? (
              <>
                {teacher?.email ? (
                  <p className="mb-1">
                    <Icons.Email /> {teacher?.email}
                  </p>
                ) : null}

                <p>
                  <Icons.Clock />{' '}
                  <span className="text-muted">
                    {i18n('ui.components.kanban.card.pending')}
                  </span>
                </p>
              </>
            ) : (
              <>
                <Flex align="center" className="mb-3">
                  <Flex shrink={false}>
                    <Avatar
                      className="mr-2"
                      size={30}
                      icon={Utils.getInitialLetters(
                        teacher?.name,
                        teacher?.lastName
                      )}
                      src={teacher?.avatar}
                    />
                  </Flex>
                  <p className="fs-1 m-0">
                    {Utils.getFullname(teacher?.name, teacher?.lastName)}
                  </p>
                </Flex>

                {teacher?.email ? (
                  <p className={teacher?.phone ? 'mb-1' : ''}>
                    <Icons.Email /> {teacher?.email}
                  </p>
                ) : null}

                {teacher?.phone ? (
                  <p className={readOnly ? 'm-0' : ''}>
                    <Icons.Phone /> {teacher?.phone}
                  </p>
                ) : null}
              </>
            )}

            {readOnly ? null : (
              <Flex align="center">
                <span
                  onClick={handleOpenDelete}
                  className="anchor cursor-pointer d-inline-block"
                >
                  {i18n('ui.components.kanban.card.delete')}
                </span>

                {teacher?.pending ? (
                  <span
                    onClick={handleOpenResend}
                    className="anchor cursor-pointer d-inline-block ml-3"
                  >
                    {i18n('ui.components.kanban.card.resend')}
                  </span>
                ) : null}
              </Flex>
            )}
          </>
        }
      >
        {children}
      </Popover>

      <Confirm
        type="warning"
        title={i18n('v2.pages.teachers.modals.delete.title')}
        open={isOpenConfirmUninvite}
        onClose={setIsOpenConfirmUninvite}
        onConfirm={handleUninvite}
        confirmText={i18n('v2.pages.teachers.modals.delete.confirmText')}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: i18n('v2.pages.teachers.modals.delete.text', {
              name: teacher?.email,
            }),
          }}
        />
      </Confirm>

      <Confirm
        type="warning"
        title={i18n('v2.pages.teachers.modals.delete.title')}
        open={isOpenConfirmDelete}
        onClose={setIsOpenConfirmDelete}
        onConfirm={handleDelete}
        confirmText={i18n('v2.pages.teachers.modals.delete.confirmText')}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: i18n('v2.pages.teachers.modals.delete.textUnassign', {
              name: Utils.getFullname(teacher?.name, teacher?.lastName),
              subject,
              program,
              period,
            }),
          }}
        />
      </Confirm>

      <Confirm
        type="email"
        title={i18n('v2.pages.teachers.modals.resend.title')}
        open={isOpenConfirmResend}
        onClose={setIsOpenConfirmResend}
        onConfirm={handleResend}
        confirmText={i18n('v2.pages.teachers.modals.resend.confirmText')}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: i18n('v2.pages.teachers.modals.resend.text', {
              email: teacher?.email,
            }),
          }}
        />
      </Confirm>
    </>
  );
}
