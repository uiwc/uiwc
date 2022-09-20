import { i18n } from '../../../i18n/language';
import { useCallback } from 'react';
import { Visible } from 'react-grid-system';
import { Utils } from '../../../utils';
import { Collapser } from '../../dataDisplay/collapser';
import { Icons } from '../../general';
import { Headline } from '../../general/headline';
import { Flex } from '../../layout/flex';
import { SyllabusTopicProps } from './constants';
import {
  SyllabusCheckIconStyled,
  SyllabusTopicIconStyled,
  SyllabusTopicVerticalStyled,
} from './styled';

export function SyllabusTopic({
  vertical = false,
  open = false,
  number = 0,
  title = '',
  time = 0,
  checkedElements = 0,
  totalElements = 0,
  children,
}: SyllabusTopicProps) {
  const getLabel = useCallback(
    (forceVertical = false) => {
      if (vertical || forceVertical) {
        return (
          <SyllabusTopicVerticalStyled>
            <div>
              {checkedElements === totalElements && totalElements !== 0 ? (
                <SyllabusCheckIconStyled vertical={vertical}>
                  <Icons.Check alone />
                </SyllabusCheckIconStyled>
              ) : (
                <SyllabusTopicIconStyled vertical={vertical}>
                  <Icons.School />
                </SyllabusTopicIconStyled>
              )}
            </div>
            <div>
              <Headline
                size={2}
                className="mb-0 text-nowrap d-flex align-items-center"
              >
                {i18n('ui.components.classroom.topic', {
                  number: Utils.pad(number.toString(), 2, '0'),
                })}
              </Headline>
            </div>
            <div></div>
            <div>
              <Headline size={4} variant="spanish" className="mb-1">
                {title}
              </Headline>

              <div className="text-muted d-flex align-items-center fs-small">
                <span className="mr-2 text-nowrap">
                  {checkedElements}/{totalElements}
                </span>
                &bull;
                <span className="ml-2 text-nowrap">
                  {Utils.convertMinutesToString(time)}
                </span>
              </div>
            </div>
          </SyllabusTopicVerticalStyled>
        );
      }

      return (
        <>
          <Flex align="center">
            <Headline
              size={3}
              className="mb-0 text-nowrap d-flex align-items-center"
            >
              {checkedElements === totalElements && totalElements !== 0 ? (
                <SyllabusCheckIconStyled vertical={vertical}>
                  <Icons.Check alone />
                </SyllabusCheckIconStyled>
              ) : (
                <SyllabusTopicIconStyled vertical={vertical}>
                  <Icons.School />
                </SyllabusTopicIconStyled>
              )}
              {i18n('ui.components.classroom.topic', {
                number: Utils.pad(number.toString(), 2, '0'),
              })}
            </Headline>

            <Headline size={4} variant="spanish" className="mb-0 mx-3">
              {title}
            </Headline>
          </Flex>

          <div className="text-muted d-flex align-items-center fs-small fs-md-0">
            <span className="mr-2 text-nowrap">
              {checkedElements}/{totalElements}
            </span>
            &bull;
            <span className="ml-2 text-nowrap">
              {Utils.convertMinutesToString(time)}
            </span>
          </div>
        </>
      );
    },
    [checkedElements, number, vertical, time, title, totalElements]
  );

  return (
    <Collapser
      open={open}
      className="px-3"
      contentClassName={vertical ? 'py-3' : 'py-3 py-md-5'}
      label={
        <>
          <Visible xs sm>
            {getLabel(true)}
          </Visible>

          <Visible md lg xl xxl>
            {getLabel()}
          </Visible>
        </>
      }
    >
      {children}
    </Collapser>
  );
}
