import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  function ComponentWithRouterProps(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  }

  return ComponentWithRouterProps;
};
