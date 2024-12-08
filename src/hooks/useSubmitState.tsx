import { useState, useEffect } from 'react';

const useSubmitState = (searchString: string) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [warning, setWarning] = useState('');

  useEffect(() => {
    if (searchString.length > 2) {
      setIsButtonDisabled(false);
      setWarning('');
    } else {
      setIsButtonDisabled(true);
      if (searchString.length > 0) {
        setWarning('Search string must be at least 3 characters long');
      } else {
        setWarning('');
      }
    }
  }, [searchString]);

  return { isButtonDisabled, warning };
};

export default useSubmitState;
