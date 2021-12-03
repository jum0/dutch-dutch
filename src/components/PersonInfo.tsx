import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import { THEME_COLOR } from '../constants';
import { PersonList } from '../types/personList';
import Button from './Button';

interface PersonInfoProps {
  personList: PersonList[];
  setPersonList: React.Dispatch<SetStateAction<PersonList[]>>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const PersonContainer = styled.div`
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

const PersonInfo = ({ personList, setPersonList }: PersonInfoProps) => {
  const handleNameInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = target;
    const list = [...personList];

    list[index].name = value;
    setPersonList(list);
  };

  const handleCostInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { valueAsNumber } = target;
    const list = [...personList];

    list[index].cost = valueAsNumber;
    setPersonList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...personList];

    list.splice(index, 1);
    setPersonList(list);
  };

  return (
    <Container>
      {personList.map((person, index) => (
        <PersonContainer key={index}>
          <Input
            placeholder="이름"
            value={person.name}
            onChange={(event) => handleNameInputChange(event, index)}
          />
          <Input
            type="number"
            placeholder="금액"
            value={person.cost}
            onChange={(event) => handleCostInputChange(event, index)}
          />
          <>
            {personList.length !== 1 && (
              <Button
                buttonType="FILLED"
                styles={{ width: '4rem' }}
                onClick={() => handleRemoveClick(index)}
              >
                삭제
              </Button>
            )}
          </>
        </PersonContainer>
      ))}
    </Container>
  );
};

export default PersonInfo;
