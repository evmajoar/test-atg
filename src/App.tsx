import React, { FC } from 'react';
import ContentList from './components/content/content-list';

import MainLayout from './layouts';

const App: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <ContentList />
    </MainLayout>
  );
};

export default App;
