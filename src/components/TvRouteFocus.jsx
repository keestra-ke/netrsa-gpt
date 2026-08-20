import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TvRouteFocus() {
  const location = useLocation();

  useEffect(() => {
    window.dispatchEvent(new Event('keja-route'));
  }, [location.pathname, location.search]);

  return null;
}

export default TvRouteFocus;
