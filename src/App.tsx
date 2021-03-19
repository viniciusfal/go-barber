import React from 'react';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import SignIn from './page/SignIn';
// import SignUp from './page/SignUp';

const App: React.FC = () => {
    return (
        <>
            <AppProvider>
                <SignIn />
            </AppProvider>

            <GlobalStyle />
        </>
    );
};
export default App;
