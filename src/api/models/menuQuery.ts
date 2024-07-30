export type MenuItem = {
  node: {
    label: string;
    path: string;
    childItems?: {
      nodes: {
        label: string;
        path: string;
      }[];
    };
  };
};

export type MenuQuery = {
  data: {
    menuItems: {
      edges: MenuItem[];
    };
  };
};
