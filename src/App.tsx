import React from 'react';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';
import GlobalStyle from './styles/global';
import SignIn from './page/SignIn';
// import SignUp from './page/SignUp';

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <SignIn />

                <ToastContainer />

                <GlobalStyle />
            </AuthProvider>
        </>
    );
};
export default App;
