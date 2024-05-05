import { useRef, useEffect } from "react";

export function useFocus() {
  const ref = useRef<HTMLInputElement>(null);

  //focusing on input element
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
}
