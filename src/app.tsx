import { MantineProvider, Stack } from '@mantine/core';

import Blog from './components/Blog';
import Introduction from './components/Introduction';
import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <Stack
        style={{
          width: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        <Introduction />
        <Blog />
      </Stack>
    </MantineProvider>
  );
}
