import React from 'react';
import { Button } from 'mcu-ui-kit';
const Index = () => {
  return (
    <>
      <h1>Private Site Theme</h1>
      <Button backgroundColor="red" primary={true} size="xl" label="button" onClick={() => alert('Clicked')} />
    </>
  );
};

export default Index;
