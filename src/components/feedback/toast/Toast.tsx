import React from 'react';
import { toast as toastify, ToastContent, ToastOptions } from 'react-toastify';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout';
export { ToastContainerStyled as ToastContainer } from './styled';

export const toast = (
  content: ToastContent,
  options?: ToastOptions
): React.ReactText => {
  return toastify(
    <Flex>
      <Flex shrink={false}>
        <Icons.Info filled className="mr-3" style={{ width: 32, height: 32 }} />
      </Flex>
      <Flex className="text-break" basis={100}>
        {content}
      </Flex>
    </Flex>,
    options
  );
};

toast.success = (
  content: ToastContent,
  options?: ToastOptions
): React.ReactText => {
  return toastify.success(
    <Flex>
      <Flex shrink={false}>
        <Icons.Check
          success
          className="mr-3"
          style={{ width: 32, height: 32 }}
        />
      </Flex>
      <Flex className="text-break" basis={100}>
        {content}
      </Flex>
    </Flex>,
    options
  );
};

toast.error = (
  content: ToastContent,
  options?: ToastOptions
): React.ReactText => {
  return toastify.error(
    <Flex>
      <Flex shrink={false}>
        <Icons.Cancel
          className="text-error mr-3"
          style={{ width: 32, height: 32 }}
        />
      </Flex>

      <Flex className="text-break" basis={100}>
        {content}
      </Flex>
    </Flex>,
    options
  );
};

toast.warning = (
  content: ToastContent,
  options?: ToastOptions
): React.ReactText => {
  return toastify.warning(
    <Flex>
      <Flex shrink={false}>
        <Icons.Alert
          warning
          className="mr-3"
          style={{ width: 32, height: 32 }}
        />
      </Flex>

      <Flex className="text-break" basis={100}>
        {content}
      </Flex>
    </Flex>,
    options
  );
};
