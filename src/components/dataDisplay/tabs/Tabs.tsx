import { TabStyled, TabsStyled, TabPanelStyled, TabListStyled } from './styled';

export {
  TabStyled as Tab,
  TabPanelStyled as TabPanel,
  TabListStyled as TabList,
};

export const Tabs: any = TabsStyled;
Tabs.Panel = TabPanelStyled;
Tabs.List = TabListStyled;
Tabs.Tab = TabStyled;
