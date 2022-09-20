import { useCallback, useEffect, useState } from 'react';
import { Button, Flex, Icons, Visible } from '../..';
import { useMatchMedia, Utils } from '../../..';
import { Checkbox } from '../checkbox';
import { CartItemProps } from './constants';
import { InputStyled, ShoppingRowStyled } from './styled';

export function CartItem({
  id,
  title = '',
  price = 0,
  quantity = 0,
  checked = false,
  currency = '$',
  onChange = (data: any) => {},
  ...rest
}: CartItemProps) {
  const inputName = `input-${id}`;
  const checkboxName = `checkbox-${id}`;
  const { isMobile } = useMatchMedia();

  if (checked) {
    quantity = quantity || 1;
  }

  const [innerQuantity, setInnerQuantity] = useState<number | string>(quantity);
  const [innerChecked, setInnerChecked] = useState(quantity > 0);

  const styles = Utils.joinClasses(
    innerChecked && 'checked',
    isMobile && 'justify-content-start'
  );

  const createChangeResponse = useCallback(
    (quantity: number) => {
      return {
        id,
        title,
        quantity,
        currency,
        subtotal: quantity * price,
      };
    },
    [currency, id, price, title]
  );

  const handleQtyChange = useCallback(
    ({ target }: any) => {
      if (target.value === '') {
        setInnerQuantity('');
        return;
      }

      const qty = +target.value;

      if (Utils.isNumber(qty)) {
        setInnerQuantity(qty);
        setInnerChecked(qty > 0);
        onChange(createChangeResponse(qty));
      }
    },
    [createChangeResponse, onChange]
  );

  const handleIncDecQuantity = useCallback(
    (sign: number) => {
      setInnerQuantity((state: number | string) => {
        const qty = Math.max(0, +state + sign);
        setInnerChecked(qty > 0);
        onChange(createChangeResponse(qty));
        return qty;
      });
    },
    [createChangeResponse, onChange]
  );

  const handleCheckboxChange = useCallback(
    (checked: boolean) => {
      const qty = checked ? 1 : 0;

      setInnerChecked(checked);
      setInnerQuantity(qty);
      onChange(createChangeResponse(qty));
    },
    [createChangeResponse, onChange]
  );

  const handleBlur = useCallback(
    (e: any) => {
      if (innerQuantity === '') {
        setInnerQuantity(0);
        setInnerChecked(false);
        onChange(createChangeResponse(0));
      }
    },
    [createChangeResponse, innerQuantity, onChange]
  );

  useEffect(() => {
    if (checked) {
      setInnerQuantity(quantity || 1);
    } else {
      setInnerQuantity(0);
    }
    setInnerChecked(checked);
  }, [checked]);

  useEffect(() => {
    setInnerQuantity(quantity);
    setInnerChecked(quantity > 0);
  }, [quantity]);

  return (
    <ShoppingRowStyled id={id} className={styles} {...rest}>
      <Flex align={isMobile ? 'start' : 'center'}>
        <Checkbox
          value={innerChecked}
          onChange={({ target }: any) => handleCheckboxChange(target.checked)}
          className="mb-md-0"
          name={checkboxName}
        />

        <Flex direction="column" className="ml-3">
          <span
            className="cursor-pointer"
            onClick={() => handleCheckboxChange(!innerChecked)}
          >
            {title}
          </span>

          <Visible xs sm>
            <Flex align="center" className={innerChecked ? 'mt-2' : ''}>
              {innerChecked ? (
                <InputStyled
                  name={inputName}
                  className="mb-0 mr-3"
                  value={innerQuantity}
                  onChange={handleQtyChange}
                  onBlur={handleBlur}
                />
              ) : null}

              <strong className="d-block fs-1">
                {currency}
                {Utils.toCurrency(price * (+innerQuantity || 1))}
              </strong>
            </Flex>
          </Visible>
        </Flex>
      </Flex>

      <Visible md lg xl xxl>
        <Flex align="center" shrink={false}>
          <strong
            className={Utils.joinClasses(
              'd-block fs-1',
              innerChecked && 'mr-3'
            )}
          >
            {currency}
            {Utils.toCurrency(price * (+innerQuantity || 1))}
          </strong>

          {innerChecked ? (
            <Flex shrink={false}>
              <Button
                type="button"
                variant="link"
                className="mr-1 fs-2"
                onClick={() => handleIncDecQuantity(-1)}
              >
                <Icons.Minus alone />
              </Button>

              <InputStyled
                name={inputName}
                className="mb-0"
                value={innerQuantity}
                onChange={handleQtyChange}
                onBlur={handleBlur}
              />

              <Button
                type="button"
                variant="link"
                className="ml-1 fs-2"
                onClick={() => handleIncDecQuantity(+1)}
              >
                <Icons.Plus />
              </Button>
            </Flex>
          ) : null}
        </Flex>
      </Visible>
    </ShoppingRowStyled>
  );
}
