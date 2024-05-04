import { useCallback, useState } from "react";

type ReturnType = [boolean, (pending: boolean) => void];

const useDisable = (): ReturnType => {
  const [state, setState] = useState<boolean>(false);

  const handleDisable = useCallback((pending: boolean) => {
    setState(pending);
  }, []);

  return [state, handleDisable];
};

export default useDisable;
