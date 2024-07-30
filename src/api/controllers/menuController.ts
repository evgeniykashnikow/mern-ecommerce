import { MenuQuery } from 'api/models/menuQuery';
import { axiosInstance } from 'config/axiosInstance';

export const getMenuBySlugApi = (location: string) => {
  const query = `
    query GetMenuByLocation($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }) {
        nodes {
          label
          path
          childItems {
            nodes {
              path
              label
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
