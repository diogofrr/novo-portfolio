import styled from "styled-components";
import { device } from "../device";
import theme from '../theme';
import { useState } from "react";
import Title from "./UI/Title";
import Text from "./UI/Text";

const Container = styled.section`
background-color: #FFF;
width: 100%;
padding: 32px 140px;

@media ${device.laptopL} {
  padding-right: 70px;
  padding-left: 70px;
}

@media ${device.laptop} {
  padding-right: 35px;
  padding-left: 35px;
}

@media ${device.mobileL} {
  padding-right: 17.5px;
  padding-left: 17.5px;
}
`;

const Content = styled.div`
  display: flex;
  padding-top: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 900px;

  @media ${device.laptop} {
    max-width: none;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }
`

const LanguageIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 400px;
  justify-content: center;
`

const Icon = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.pallete.secondary};
  background: ${props => props.theme.pallete.border};
  transition: 0.8s;

  svg {
    width: 50px;
    height: 50px;
  }

  &:hover {
    border-color: ${props => props.theme.pallete.decoration};
  }
`      

const TextBox = styled.div`
  max-width: 400px;
  min-height: 125px;

  @media ${device.tablet} {
    display: none;
  }
`

export default function Knowlegdes() {
  const [text, setText] = useState<string>('')

  const descriptions = {
    Html: 'HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.',
    Css: 'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.',
    Javascript: 'Javascript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.',
    TypeScript: 'TypeScript é uma linguagem de programação que é uma extensão do JavaScript, oferecendo tipagem estática para facilitar o desenvolvimento de código mais seguro e escalável.',
    React: 'React é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário (UI) interativas e reativas.',
    NextJS: 'Next.js é um framework de desenvolvimento web que se baseia no React e oferece recursos adicionais, como renderização do lado do servidor e roteamento avançado.',
    MaterialUI: 'Material-UI é uma biblioteca de componentes React que segue as diretrizes de design do Material Design, tornando mais fácil criar interfaces atraentes e consistentes.',
    Redux: 'Redux é uma biblioteca JavaScript para gerenciamento de estado, amplamente usada com o React, que ajuda a manter o estado da aplicação de forma previsível e escalável.',
    Git: 'Git é um sistema de controle de versão amplamente utilizado que permite o rastreamento de alterações em código-fonte e a colaboração eficiente em projetos de desenvolvimento de software.',
    NodeJS: 'Node.js é um ambiente de tempo de execução JavaScript que permite a execução de código JavaScript no lado do servidor, facilitando a criação de aplicativos web e APIs.',
    MySQL: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, amplamente usado para armazenar e gerenciar dados em aplicativos web.',
    Express: 'Express é um framework de aplicativo web para Node.js que simplifica a criação de APIs e aplicativos web robustos e escaláveis.',
  };
  

  return (
    <Container>
      <Title $textAlign="center">Conhecimentos</Title>
      <Content>
        <TextBox>
          <Text>
            {!text ? (
              '*Passe o mouse por cima de algum card para ler*'
            ) : (
              text
            )}
          </Text>
        </TextBox>
        <LanguageIcons>
          <Icon onMouseEnter={() => setText(descriptions.Html)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.Css)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.Javascript)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.TypeScript)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.React)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <g fill={theme.pallete.decoration}><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.NextJS)} onMouseLeave={() => setText('')}> 
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"></path><path fill={theme.pallete.decoration} d="M78.6 73.3l7.5 11.3V41.8h-7.5z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.MaterialUI)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill={theme.pallete.decoration} d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.Redux)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill={theme.pallete.decoration}></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.Git)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.NodeJS)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.MySQL)} onMouseLeave={() => setText('')}>
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-9.015-8.585-2.669-1.916-8.661-4.504-9.775-7.609l-.205-.195c1.893-.214 4.103-.898 5.85-1.367 2.934-.786 5.356-.583 8.386-1.365 1.366-.39 2.899-.781 3.899-1.171v-.78c-1-1.571-2.427-3.651-4.097-5.073-4.369-3.72-9.041-7.437-13.951-10.537-2.723-1.718-6.041-2.835-8.926-4.292-.971-.491-2.652-.746-3.294-1.562-1.517-1.932-2.328-4.382-3.498-6.633-2.449-4.717-4.849-9.868-7.019-14.831-1.48-3.384-2.443-6.72-4.289-9.756-8.86-14.567-18.395-23.358-33.167-32-3.145-1.838-6.929-2.563-10.929-3.513-2.144-.129-4.291-.26-6.437-.391-1.311-.546-2.674-2.149-3.902-2.927-4.896-3.092-17.449-9.817-21.074-.975-2.289 5.581 3.42 11.025 5.462 13.854 1.435 1.982 3.27 4.207 4.293 6.438.675 1.467.79 2.938 1.367 4.489 1.418 3.822 2.651 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.95 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.898 21.567 2.537 28.683 1.36 2.186 4.566 6.871 8.975 5.073 3.856-1.57 3.226-6.438 4.329-10.732.249-.972-.185-1.688.815-2.341v.195a128.6 128.6 0 003.282 7.024c2.6 4.187 6.889 8.562 10.798 11.514 2.027 1.531 3.92 4.177 5.92 5.073v-.101h.221c-.507-1-1.302-1.167-1.95-1.804-1.527-1.496-3.226-3.382-4.487-5.097-3.556-4.827-6.698-10.122-9.561-15.622-1.368-2.626-2.557-5.529-3.709-8.201-.443-1.03-.438-2.592-1.364-3.125-1.263 1.958-3.122 3.54-4.099 5.853-1.561 3.696-1.762 8.204-2.341 12.877-.343.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.555-6.07-3.029-15.843-.781-22.829.582-1.809 3.211-7.501 2.146-9.172-.508-1.665-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.123-5.464-2.091-4.731-3.066-10.044-5.268-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.684-6.635-.445-.968-1.051-2.518-.39-3.513.21-.671.507-.951 1.171-1.17 1.133-.873 4.283.29 5.463.779 3.129 1.3 5.741 2.5 8.392 4.256 1.271.844 2.559 1.89 4.097 2.89h1.756c2.747 0 5.824.232 8.391 1.012 4.535 1.379 8.6 3.542 12.292 5.873 11.246 7.102 20.441 17.22 26.732 29.278 1.012 1.942 1.45 3.799 2.341 5.858 1.798 4.153 4.064 8.428 5.853 12.489 1.786 4.053 3.526 8.142 6.05 11.514 1.327 1.772 6.451 2.724 8.78 3.709 1.633.689 4.308 1.409 5.854 2.34 2.953 1.782 5.814 3.904 8.586 5.855 1.384.974 5.64 3.114 5.853 4.878-6.863-.188-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.069 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.576 2.751 5.464 3.902 3.359 2.047 7.107 3.217 10.341 5.268 1.906 1.21 3.958 2.733 5.815 4.097.92.675.891 1.724 2.891 2.147v-.194c-.999-.795-.946-1.893-1.522-2.728zM29.514 23.465c-1.431-.027-2.514.157-3.514.389V24h.198c.683 1 1.888 2.33 2.731 3.538l1.952 4.108.193-.187c1.209-.853 1.763-2.211 1.756-4.291-.483-.509-.556-1.146-.974-1.754-.558-.809-1.639-1.268-2.342-1.949z"></path>
            </svg>
          </Icon>
          <Icon onMouseEnter={() => setText(descriptions.Express)} onMouseLeave={() => setText('')}>   
            <svg viewBox="0 0 128 128">
              <path fill={theme.pallete.decoration} d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
            </svg>
          </Icon>
        </LanguageIcons>
      </Content>
    </Container>
  )
}