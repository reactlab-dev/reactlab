import React from 'react';
import { Experience } from '../model';
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
          <Expertise>{this.props.experience.expertise}</Expertise>
          <OrganisationLabel>Company description</OrganisationLabel>
          <Text>{this.props.experience.description}</Text>
          <OrganisationLabel>Team organisation</OrganisationLabel>
          <Text>{this.props.experience.organisation}</Text>

          <Label>TOOLS/TECHNOS </Label>
          <PracticesContainer data-testid="practices-container">
            {this.props.experience.practices.map((practice, index) => (
              <div key={index}>{practice}</div>
            ))}
          </PracticesContainer>

          <Label>TEAM </Label>
          <PeopleContainer data-testid="general-team-container">
            {this.props.experience.team.map((people, index) => (
              <People key={index}>
                <span> {people.name}</span>
                <PeopleRole> {people.role}, </PeopleRole>
              </People>
            ))}
          </PeopleContainer>

          <Label>PLACE </Label>
          <Place>{this.props.experience.location}</Place>

          <CloseDetails>Close details</CloseDetails>
        </DetailsContainer>
      </DetailsPage>
    );
  }
}

const OrganisationLabel = styled.label`
  margin: 0;
  color: #222222;
  font-family: 'Graphik Web';
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;
`;

const DetailsPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const PracticesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  > div {
    border-radius: 2px;
    background-color: #253ab6;
    margin: 0 20px 10px 0;
    color: #ffffff;
    font-family: 'Graphik Web';
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    padding: 0 8px;
  }
`;

const CloseDetails = styled.p`
  margin: 0;
  color: #253ab6;
  font-family: 'Graphik Web';
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: justify;
`;

const Name = styled.h2`
  margin: 0;
  color: #222222;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 14px;
  font-weight: 400;
`;

const Expertise = styled.h2`
  margin: 0;
  color: #222222;
  font-family: 'Graphik Web';
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 14px;
`;

const Text = styled.p`
  margin: 0;
  color: #222222;
  font-family: 'Graphik Web';
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  margin-bottom: 14px;
`;

const Label = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: #253ab6;
  font-family: 'Graphik Web';
  font-size: 12px;
  line-height: 18px;
`;

const People = styled.div`
  color: #222222;
  font-family: 'Graphik Web';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;

const Place = styled.div`
  color: #222222;
  font-family: 'Graphik Web';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 20px;
`;
const PeopleContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const PeopleRole = styled.span`
  color: #253ab6;
`;

export default ExperienceDetails;
