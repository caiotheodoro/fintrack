import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";


export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
min-width: 32rem;
border-radius: 6px;
padding: 2.5rem 3rem;
background: ${({ theme }) => theme['gray-800']};

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;


    input {
        border-radius: 6px;
        border: 0;
        background: ${({ theme }) => theme['gray-900']};
        padding: 1rem;
        color: ${({ theme }) => theme['gray-300']};


        &::placeholder {	
            color: ${({ theme }) => theme['gray-500']};
        }
    }

    button[type="submit"] {
        height: 58px;
        border: 0;
        background: ${({ theme }) => theme['green-500']};
        color: ${({ theme }) => theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 1.5rem;

        
        &:hover {
            background: ${({ theme }) => theme['green-700']};
            transition: background-color 0.2s;
        }
    }

}

`

export const CloseButton = styled(Dialog.Close)`
position: absolute;
top: 1.5rem;
right: 1.5rem;
border: 0;
background: transparent;
line-height: 0; //tirar o espaçamento padrão do botão

color: ${({ theme }) => theme['gray-300']};
font-size: 1.5rem;
cursor: pointer;

`