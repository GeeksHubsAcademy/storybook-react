import { useRef, useEffect, useState } from 'react';

const on = (obj, ...args) => obj.addEventListener(...args);

const off = (obj, ...args) => obj.removeEventListener(...args);

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = (
  ref,
  onClickAway,
  events = defaultEvents,
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref;
      el &&
        !el.contains(event.target) &&
        savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export const useScrollBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  const scrollRef = useRef(null);

  const onScroll = () => {
    if (scrollRef.current) {
      setIsBottom(
        scrollRef.current.scrollTop >=
          scrollRef.current.scrollHeight -
            scrollRef.current.clientHeight,
      );
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', onScroll);
      return () => {
        if (scrollRef && scrollRef.current) {
          scrollRef.current.removeEventListener(
            'scroll',
            onScroll,
          );
        }
      };
    }
  }, [scrollRef.current]);

  return [isBottom, scrollRef];
};

export const useStateWithCallback = (
  initialState,
  defaultCb = () => {},
) => {
  const [[state, callback], set] = useState([
    initialState,
    defaultCb,
  ]);

  const setState = (update, cb) => {
    if (typeof update == 'function') {
      set(([s]) => [update(s), cb]);
    } else {
      set([update, cb]);
    }
  };

  useEffect(() => callback(state), [state, defaultCb]);

  return [state, setState];
};

export default useStateWithCallback;
