import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sigin-bg.png';

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
    margin-top: 120px;
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
    input {
        background: #232129;
        color: #f4ede8;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;

        &::placeholder {
            color: #666360;
        }

        & + input {
            margin-top: 8px;
        }
    }

    button {
        background: #ff9000;
        height: 56px;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 0 16px;
        width: 100%;
        color: #312e38;
        margin: 24px 0;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }
    }
    a {
        color: #f4ede8;
        text-decoration: none;
        transition: color 0.2s;
        margin-bottom: 80px;

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }
    > a {
        color: #ff9000;
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
