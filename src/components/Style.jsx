import React from 'react';
import styled from "styled-components";

const Style = () => {
    return (
        <div>
            <Box>{/* 디자인을 하기 위한 컴포넌트 */}
                <Title fontSize="2rem" color="#d39">스타일드 컴포넌트</Title>
                <Title fontSize="1.5rem" color="#39630f">CSS IN JS</Title>
                <Title color="#ee7124">Fun and Easy</Title>
                <Btn borderColor="#03f" active> normal </Btn>
                <Btn borderColor="#ddd"> disabled  </Btn>
                <Btn borderColor="#f30"> active </Btn>
            </Box>
            <Box as="ul">

            </Box>
        </div>
    );
};

export default Style;

const Btn = styled.button.attrs(props =>({
    type:'button',
    className:props.active  ? 'btn on' : 'btn' 
}))`
    width:80px;
    height:40px;
    border-radius: 3px;
    margin:10px;
    color:${(props)=>props.borderColor} ;
    border:1px solid ${(props)=>props.borderColor} ; 
`

const Box = styled.div`
    width:500px;
    height:300px;
    border:5px solid red;
    margin: 3rem auto;
    text-align: center;
`
// props 사용 
const Title = styled.h2`
    font-size: ${(props) => props.fontSize};
    color:${(props)=>props.color};
    margin: 1rem 0;
`
/* 
1.  as사용 
2. 
 scss 
 module.css 
 styled components 
 css in js  
*/