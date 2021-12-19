import { title } from 'process';
import React from 'react'
import styled from 'styled-components'

function Titles() {
    return (
      <>
        <Title>
          <div>
            <h4>
              Welcome to Marvel Comics!
            </h4>
          </div>
        </Title> 

        <SubTitle>
          <span>
            Great Marvel Characters!
          </span>
        </SubTitle> 
          
               
      </>
    )
}

const Title = styled.div`
  margin: 0;
  width: 100%;
  height: 50%;
  padding: 1em;
  line-height: 1.15;
  font-size: 2rem; 
  background-color: #4CAF50; /* Green */
  color: #FFF;
}
`

const SubTitle = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`

export default Titles;
