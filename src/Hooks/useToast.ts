import { useEffect, useState } from "react";
import M from 'materialize-css';
import './useToast/Style.scss';

export default () => {

  const [message, setMessage] = useState('');

  useEffect(() => {
    message && M.toast({
      completeCallback: () => setMessage(''),
      html: message
    });
    return () => M.Toast.dismissAll();
  }, [message]);

  return setMessage;
};