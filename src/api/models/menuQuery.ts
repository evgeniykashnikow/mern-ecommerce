export type MenuItem = {
  label: string;
  path: string;
  childItems?: {
    nodes: {
      label: string;
      path: string;
    }[];
  };
};

export type MenuQuery = {
  data: {
    menuItems: {
      nodes: MenuItem[];
    };
  };
};
