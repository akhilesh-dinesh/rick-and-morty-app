import { indexRoute } from './routes/index';
import { characterRoute } from './routes/character.$characterId';
import { rootRoute } from './routes/__root';

export const routeTree = rootRoute.addChildren([
  indexRoute,
  characterRoute,
]);