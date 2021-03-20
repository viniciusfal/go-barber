import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    button {
        background: #ff9000;
        height: 56px;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 0 16px;
        width: 100%;
        color: #312e38;
        margin: 18px 0;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }
    }
`;
