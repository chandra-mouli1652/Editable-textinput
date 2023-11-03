import {Component} from 'react'
import styled from 'styled-components'

export default class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = e => {
    this.setState({text: e.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InLineBlock>
            {isEditable ? (
              <Input value={text} onChange={this.getText} type="text" />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </InLineBlock>
        </Container>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  background-color: #f5d0fe;
  height: 200px;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

const InLineBlock = styled.div``

const InlineText = styled.p`
  display: inline;
  font-size: 15px;
`

const Input = styled.input`
  height: 30px;
  width: 250px;
  margin-right: 20px;
  padding: 10px;
  outline: none;
`

const Button = styled.button`
  font-size: 13px;
`
