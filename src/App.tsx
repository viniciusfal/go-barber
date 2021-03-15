import React from 'react';

import { AuthProvider } from './context/AuthContext';
import GlobalStyle from './styles/global';
import SignIn from './page/SignIn';
// import SignUp from './page/SignUp';

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <SignIn />
                <GlobalStyle />
            </AuthProvider>
        </>
    );
};
export default App;
