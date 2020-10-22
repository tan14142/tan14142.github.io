import { useEffect, useState } from 'react';
import useToast from './useToast';

export default (url: string, transform?: (res: Response) => any) => {

  const
  [state, setState] = useState({ data: '', ready: false }),
  toast = useToast();

  useEffect(() => {

    let isMounted = true;

    (async () => {
      try {
        const
        response = await fetch(url),
        result = isMounted && await (transform
          ? transform!(response)
          : response.text()
        );
        isMounted && setState({
          data: result,
          ready: true
        });
      }
      catch(e) {
        isMounted && toast(e.name === 'AbortError'
          ? 'Fetch was aborted'
          : e.name
        );
      };
    })();
    
    return () => {
      isMounted = false;
    }
  }, [toast, url, transform]);

  return state;
};