export type MenuItem = {
  label: string;
  path: string;
  parentDatabaseId: number;
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
