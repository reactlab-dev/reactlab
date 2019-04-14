import React from 'react';
import { Route } from 'react-router';
import Informations from './Informations';
import Team from './Team';
import { Infos } from '../../model/experience';
import { FullSizeContainer, TitleWizard } from '../../styles';

interface Props {}

interface State {
  informations: Infos;
}

class CreateWizard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      informations: { practices: [] },
    };
  }
  render() {
    return (
      <FullSizeContainer>
        <TitleWizard>Create your experience </TitleWizard>
        <Route
          exact
          key='enterprises-create-informations'
          path='/experience/create/informations'
          component={() => (
            <Informations
              onChange={(informations: Infos) => {
                this.setState({ informations });
              }}
            />
          )}
        />
        <Route
          exact
          key='enterprises-create-team'
          path='/experience/create/team'
          component={Team}
        />
      </FullSizeContainer>
    );
  }
}

export default CreateWizard;
