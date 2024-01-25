import styled from 'styled-components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

const InputSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  align-items: center;
  margin-bottom: 15px;
`;

const DeleteMessages = styled.div`
  background-color: red;
  color: #fff;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const DeleteIcon = styled(DeleteForeverIcon)`
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  margin-bottom: 6px;
`;

const InputContainer = styled.div`
margin-top: 1px;
width: 80%;
display: flex;
box-sizing: border-box;
border-radius: 15px;
padding: 10px;
flex-direction: row;
background-color: #3b3b3b;
}
`;

const InputField = styled.input`
  border: none;
  outline: none;
  width: 100%;
  border-radius: 15px;
  margin: 2px;
  background-color: transparent;
  &input-field {
    border: none;
    outline: none;
    font-size: 16px;
  }
`;

const SendButton = styled(SendIcon)`
  margin-left: 5px;
  padding: 5px;
  cursor: pointer;
`;

const InputSection = ({
  inputText,
  setInputText,
  handleSendMessage,
  deleteMessages,
}) => {
  return (
    <InputSectionContainer>
      <DeleteMessages>
        <DeleteIcon onClick={deleteMessages} />
      </DeleteMessages>
      <InputContainer>
        <InputField
          type='text'
          value={inputText}
          placeholder='Mesajınızı yazınız...'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          onChange={(e) => setInputText(e.target.value)}
        />
        <SendButton onClick={handleSendMessage} />
      </InputContainer>
    </InputSectionContainer>
  );
};

export default InputSection;
