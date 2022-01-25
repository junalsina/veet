import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 28,
  color: "#61C890",
  padding: '0px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#61C890',
  fontFamily: [
    'Dongle',
  ].join(','),
  '&:hover': {
    backgroundColor: '#D6FFE9',
    borderColor: '#D6FFE9',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#43A771',
    borderColor: '#43A771',
  },
});

export default function CustomizedButtons({title}) {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="outlined" disableRipple>
        {title}
      </BootstrapButton>
    </Stack>
  );
}