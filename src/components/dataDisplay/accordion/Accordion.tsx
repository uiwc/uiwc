import { AccordionStyled } from './styled';

export {
  AccordionItemStyled as AccordionItem,
  AccordionItemHeadingStyled as AccordionItemHeading,
  AccordionItemButtonStyled as AccordionItemButton,
  AccordionItemPanelStyled as AccordionItemPanel,
} from './styled';

export function Accordion({
  children,
  allowZeroExpanded = true,
  ...rest
}: any) {
  return (
    <AccordionStyled allowZeroExpanded={allowZeroExpanded} {...rest}>
      {children}
    </AccordionStyled>
  );
}
