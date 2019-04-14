import React from 'react';
import { Experience } from '../model/experience';
import styled from 'styled-components';

interface Props {
  experience: Experience;
}

class ExperienceDetails extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    return (
      <DetailsPage>
        <DetailsContainer>
          <Name>{this.props.experience.name}</Name>
          <Text>{this.props.experience.description}</Text>
          <Text>{this.props.experience.organisation}</Text>
          <Label>Main team : </Label>
          <PeopleContaner data-testid='general-team-container'>
            {this.props.experience.teamGeneral.map((people, index) => (
              <People key={index}>
                <PeopleName>{people.name}</PeopleName>
                <PeopleRole> {people.role}</PeopleRole>
              </People>
            ))}
          </PeopleContaner>

          <Label>Practices : </Label>
          <PracticesContainer data-testid='practices-container'>
            {this.props.experience.practices.map((practice, index) => (
              <div key={index}>{practice}</div>
            ))}
          </PracticesContainer>
        </DetailsContainer>
      </DetailsPage>
    );
  }
}

const DetailsPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const PracticesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 0 10px 10px 0;
    padding: 3px 10px;
    border-radius: 4px;
    border: 1px solid #5c9ead;
    white-space: nowrap;
    color: #326273;
  }
`;

const Name = styled.h2`
  color: #326273;
  margin: 0;
  padding: 10px 0;
`;

const Text = styled.p`
  color: #5c9ead;
  margin: 0;
  padding: 5px 0;
`;

const Label = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #326273;
`;

const People = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #e39774;
  font-size: 14px;
`;
const PeopleContaner = styled.div`
  display: flex;
  flex: 1;
`;
const PeopleName = styled.span`
  color: #326273;
`;
const PeopleRole = styled.span`
  color: #5c9ead;
`;

export default ExperienceDetails;
