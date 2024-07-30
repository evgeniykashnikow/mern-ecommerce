import { MenuQuery } from 'api/models/menuQuery';
import { axiosInstance } from 'config/axiosInstance';

export const getMenuBySlugApi = (location: string) => {
  const query = `
    query GetMenuByLocation($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }) {
        edges {
          node {
            label
            path
            childItems {
              nodes {
                path
                parentId
                label
              }
            }
          }
        }
      }
    }
  `;

  return axiosInstance.post<MenuQuery>('', {
    query,
    variables: {
      location,
    },
  });
};
