import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/signUp.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    img {
        width: 230px;
        height: 134px;
    }
`;
export const Content = styled.div`
    margin: 90px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px;
    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }
    h1 {
        margin-bottom: 24px;
    }

    a {
        display: flex;
        align-items: center;

        color: #f4ede8;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }

        svg {
            margin-right: 16px;
            transition: color 0.2s;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
