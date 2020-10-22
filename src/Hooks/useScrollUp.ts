import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default () => {
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unsubscribe();
    };
  }, [history]);
};