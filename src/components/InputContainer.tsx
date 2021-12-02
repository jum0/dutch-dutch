import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import { THEME_COLOR } from '../constants';
import { InputList } from '../types/inputList';
import Button from './Button';

interface InputContainerProps {
  inputLists: InputList[];
  setInputList: React.Dispatch<SetStateAction<InputList[]>>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 6rem;
  height: 2rem;
  border: 0.1rem solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.25rem;
  background-color: transparent;
  text-align: center;
`;

const InputContainer = ({ inputLists, setInputList }: InputContainerProps) => {
  const handleNameInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = target;
    const list = [...inputLists];

    list[index].name = value;
    setInputList(list);
  };

  const handleCostInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { valueAsNumber } = target;
    const list = [...inputLists];

    list[index].cost = valueAsNumber;
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputLists];

    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <Container>
      {inputLists.map((inputList, index) => (
        <LineContainer key={index}>
          <Input
            placeholder="이름"
            value={inputList.name}
            onChange={(event) => handleNameInputChange(event, index)}
          />
          <Input
            type="number"
            placeholder="금액"
            value={inputList.cost}
            onChange={(event) => handleCostInputChange(event, index)}
          />
          <>
            {inputLists.length !== 1 && (
              <Button
                buttonType="FILLED"
                styles={{ width: '4rem' }}
                onClick={() => handleRemoveClick(index)}
              >
                삭제
              </Button>
            )}
          </>
        </LineContainer>
      ))}
    </Container>
  );
};

export default InputContainer;
