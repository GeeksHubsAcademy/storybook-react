import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useClickAway from '../../hooks/useClickAway';

import Fail from '../Icons/Fail';
import Check from '../Icons/Check';
import Spinner from '../Icons/Spinner'
import Button from './Button';


const ButtonFeedback = styled(Button)`
  transition: padding 200ms ease;
  ${({ showingIcon }) => (showingIcon ? 'padding:0.5em 0.4em;' : '')}

  ${({ disabled, loading }) =>
    disabled && !loading ? 'opacity:0.7; filter: blur(1px);' : ''}

  .icon {
    display: inline-block;
    height: 1em;
    overflow: hidden;
    margin-left: 0.2em;

    transition: all 200ms ease;
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0.8em;
    ${({ showingIcon }) =>
      showingIcon ? 'width:1em; height:0.9em;opacity:1;' : ''}
    & > * {
      display: inline-block;
      width: 80%;
      height: 80%;
    }
    & > .emoji {
      position: relative;
      top: -0.1em;
      left: -0.1em;
      font-size: 0.8em;
    }
  }
`;

export default ({ children = '', disabled = undefined, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const ref = useRef(null);
  const loadingIcon = props.loadingIcon || <Spinner />;
  const successIcon = props.successIcon || <Check />;
  const failIcon = props.failIcon || <Fail />;

  useClickAway(ref, () => {
    setSuccess(false);
    setFail(false);
  });

  async function interceptClick(...args) {
    setLoading(true);
    setSuccess(false);
    setFail(false);

    try {
      const returned = await props.onClick(...args);
      setSuccess(true);
      return returned;
    } catch (error) {
      setFail(true);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <ButtonFeedback
      ref={ref}
      {...props}
      showingIcon={loading || fail || success}
      onClick={interceptClick}
      disabled={loading || disabled}
      loading={loading}
    >
      {children}
      <span className='icon'>
        {loading ? loadingIcon : null}
        {fail ? failIcon : null}
        {success ? successIcon : null}
      </span>
    </ButtonFeedback>
  );
};
