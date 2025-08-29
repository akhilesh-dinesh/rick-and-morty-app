import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { CharacterDetail } from '../pages/CharacterDetail/CharacterDetail';

export const characterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$characterId',
  component: CharacterDetail,
});