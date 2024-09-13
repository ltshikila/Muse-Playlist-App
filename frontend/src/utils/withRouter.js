// withRouter.js
import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  function ComponentWithRouterProps(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  }

  return ComponentWithRouterProps;
};