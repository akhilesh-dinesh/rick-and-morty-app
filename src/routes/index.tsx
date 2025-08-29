import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Home } from '../pages/Home/Home';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
  validateSearch: (search: Record<string, unknown>): { page?: number } => {
    return {
      page: search.page ? Number(search.page) : undefined,
    };
  },
});