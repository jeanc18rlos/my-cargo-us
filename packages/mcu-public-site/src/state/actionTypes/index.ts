import { actions as AuthActions } from './Auth';
import { ContactActions } from './Contact';

export * from './Auth';
export * from './Contact';

export const actions = {
  ...AuthActions,
  ...ContactActions
};
