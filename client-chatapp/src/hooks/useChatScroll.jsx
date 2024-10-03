import { useEffect, useRef } from "react";

function useChatScroll(dep) {
  const ref = useRef(); // Reference to the chat container

  useEffect(() => {
    // Scroll to the bottom of the chat container after the messages change

    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    console.log("inside scroll hook");
  }, [dep]); // Dependency on the messages array

  return ref; // Return the ref to be used in the component
}

export default useChatScroll;
