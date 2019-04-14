import styled from 'styled-components';

export const FullSizeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const ListMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding-top: 30px;
  a {
    text-decoration: none;
  }
`;

export const ExperienceCard = styled.div`
  padding: 20px;
  border: 2px solid #e39774;
  border-radius: 4px;
  width: 100%;
  margin: 0 20px 20px 0;
`;

export const Name = styled.h5`
  margin: 0px;
  font-size: 18px;
  padding-bottom: 10px;
  color: #373e40;
`;

export const Text = styled.p`
  padding: 5px 0;
  margin: 0px;
  font-size: 14px;
  color: #305252;
`;

export const Location = styled.p`
  padding: 10px 0;
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
  color: #305252;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  position: relative;
  display: flex;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  top: 0px;
  background: #326273;

  box-sizing: border-box;
  position: fixed;

  font-size: 26px;
  line-height: 50px;
  color: #e39774;
`;

export const TitleWizard = styled.h4`
  color: #5c9ead;
  font-size: 26px;
  margin: 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #e39774;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: #326273;
  border-bottom: 2px solid #e39774;
  padding: 10px 0 5px 0;
  width: 100%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #5ea3b285;
  padding: 5px 10px;
  width: 50%;
`;

export const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #5ea3b285;
  padding: 5px 10px;
  width: 50%;
  height: 30px;
`;
export const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #5ea3b285;
  padding: 5px 10px;
  width: 50%;
`;
export const PracticesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  > div {
    margin: 0 5px 5px 0;
    padding: 3px 5px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #5c9ead;
    white-space: nowrap;
    color: #326273;
    > span {
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        color: #e39774;
        cursor: pointer;
      }
    }
  }
`;
