/**
 * Asynchronously loads the component for CookieDeclaration
 */
import Loadable from 'react-loadable';
import LoadingMask from 'components/LoadingMask';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingMask,
});
