import styled from 'styled-components';

export const HomeStyle = styled.div`
   
`;

export const HomeBody = styled.div`
   width: 100%;
   height: 91vh;
   background-color: #393939;
   display: grid;
   grid-template-columns: 70vw 30vw;
   grid-template-rows: auto;


`;

export const FeedBody = styled.div`
   width: 100%;
   height: 100%;
   overflow: scroll;
   overflow-x: hidden;
   background: ${ (props) => props.theme.bodyBackground } ;
   border-right: 2px solid #717272;
`;


export const MessageBody = styled.div`
   width: 100%;
   height: 100%;
   background-image: ${ (props) => props.theme.messageBodyBackground };
   background-color: ${ (props) => props.theme.messageBodyBackground };
   overflow: auto;
   box-shadow:${ (props) => props.theme.messageBodyBorder }
   
`;
export const MessageFeedBody = styled.div`
   background-image: ${ (props) => props.theme.messageBodyBackground };
   background-color: ${ (props) => props.theme.messageBodyBackground };
   
   
`;

export const StoryDiv = styled.div`
   width: 100%;
   background-color: green;
   height: 15%;
   margin-bottom: 10px;

`;




// export const ProfileDp = styled.div`
//    width: ${ (props) => props.size };
//    height: ${ (props) => props.size };
//    background-image: url(${ (props) => props.dpUrl });
//    borger-radius: 50%;
// `;
