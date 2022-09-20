import { i18n } from '../../../i18n/language';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { Tooltip } from '../tooltip';

export const renderStatus = (
  src: string | null = null,
  status: 'none' | 'approved' | 'rejected' | 'pending' = 'none',
  physical = false,
  reasonsToReject: string[] = [],
  handleKnowReasonsClick = (e: any) => {}
) => {
  if (src) {
    switch (status) {
      case 'approved':
        return (
          <Flex align="center">
            <Flex shrink={false}>
              <Icons.Check success className="fs-1 mr-1" />
            </Flex>
            <small className="text-success">
              {i18n('ui.components.previewer.approved')}
            </small>
          </Flex>
        );

      case 'rejected':
        return (
          <Flex align="center">
            <Flex shrink={false}>
              <Icons.Alert className="fs-1 mr-1 text-error" />
            </Flex>
            <small className="text-error">
              {i18n('ui.components.previewer.rejected')}
              {reasonsToReject.length ? (
                <>
                  {'. '}
                  <a
                    href=" "
                    className="fw-bold text-error"
                    onClick={handleKnowReasonsClick}
                  >
                    {i18n('ui.components.previewer.knowReasons')}
                  </a>
                </>
              ) : null}
              .
            </small>
          </Flex>
        );

      case 'pending':
        return (
          <Flex align="center">
            <Flex shrink={false}>
              <Tooltip
                text={physical ? i18n('ui.components.previewer.tooltip') : ''}
              >
                <i>
                  <Icons.Clock className="fs-1 mr-1" />
                </i>
              </Tooltip>
            </Flex>
            <small>
              {i18n('ui.components.previewer.pending')}{' '}
              {physical ? (
                <span>{i18n('ui.components.previewer.physicalDocument')}</span>
              ) : null}
            </small>
          </Flex>
        );

      default:
        break;
    }
  } else {
    if (physical) {
      return (
        <Flex align="center">
          <Flex shrink={false}>
            <Tooltip text={i18n('ui.components.previewer.tooltip')}>
              <i>
                <Icons.Info filled className="fs-1 mr-1" />
              </i>
            </Tooltip>
          </Flex>
          <small>{i18n('ui.components.previewer.physicalDocument')}</small>
        </Flex>
      );
    }
  }

  return null;
};
