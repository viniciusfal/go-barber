/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="GoBarber" />
            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Email" />
                <input type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
