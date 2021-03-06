import React from 'react';
// import { action } from '@storybook/addon-actions';
import {
  ButtonToolbar,
  IconButton,
  Icon,
  ButtonGroup,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


export default {
  title: 'Components|Buttons/withIcons',
};

export const ButtonIcons = () => (
  <div>
    <ButtonToolbar>
      <IconButton icon={<Icon icon='star' />} />
      <IconButton
        icon={<Icon icon='star' />}
        appearance='primary'
      />
      <ButtonGroup>
        <IconButton icon={<Icon icon='align-left' />} />
        <IconButton icon={<Icon icon='align-center' />} />
        <IconButton icon={<Icon icon='align-right' />} />
        <IconButton icon={<Icon icon='align-justify' />} />
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton size='lg' icon={<Icon icon='star' />} />
      <IconButton size='lg' icon={<Icon icon={'search'} />} />
      <IconButton size='md' icon={<Icon icon='star' />} />
      <IconButton size='md' icon={<Icon icon={'search'} />} />
      <IconButton size='sm' icon={<Icon icon='star' />} />
      <IconButton size='sm' icon={<Icon icon={'search'} />} />
      <IconButton size='xs' icon={<Icon icon='star' />} />
      <IconButton size='xs' icon={<Icon icon={'search'} />} />
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton
        icon={<Icon icon='facebook-official' />}
        color='blue'
        circle
      />
      <IconButton
        icon={<Icon icon='google-plus-circle' />}
        color='red'
        circle
      />
      <IconButton
        icon={<Icon icon='twitter' />}
        color='cyan'
        circle
      />
      <IconButton
        icon={<Icon icon='linkedin' />}
        color='blue'
        circle
      />
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton icon={<Icon icon='pause' />} placement='left'>
        Pause
      </IconButton>
      <IconButton
        icon={<Icon icon='arrow-right' />}
        placement='right'
      >
        Next
      </IconButton>
    </ButtonToolbar>

    <ButtonToolbar>
      <IconButton icon={<Icon icon={'save'} />}>
        save
      </IconButton>
    </ButtonToolbar>
  </div>
);
