import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './page/SignIn/index';

const App: React.FC = () => (
    <>
        <SignIn />
        <GlobalStyle />
    </>
);

export default App;
