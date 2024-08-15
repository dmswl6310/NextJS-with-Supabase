import { useEffect } from "react";
import { useState } from "react";

// 하이드레이션전 html이 표시되서 밀린 ui 보이는 현상
// useEffect 발동 여부로 확인가능
const useHydrate = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);
  return isMount;
};

export default useHydrate;
