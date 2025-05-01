import React from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import SteadyrainDesktop from '../../assets/portfolio-images/steadrain-desktop.png';
import MobotDesktop from '../../assets/portfolio-images/mobot-desktop.png';

function Design() {
  return (
    <div className="design-cards">
      <CardList>
        <Card thumbnail={SteadyrainDesktop}>
        </Card>
        <Card thumbnail={MobotDesktop}>
        </Card>
      </CardList>

    </div>
  );
}

export default Design;
