import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Feed extends Component {
  genCards = num => {
    const cards = []
    for (let i = 0; i < num; i++) {
      cards.push(
        <div
          style={{
            margin: '24px 0 24px 0'
          }}
        >
          <Card>
            <CardTitle>
              <h3>Feed Example {'#' + i}</h3>
            </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
          </Card>
        </div>
      )
    }
    return cards;
  }

  render () {
    return (
      <div
        style={{
          padding: '0 64px 0 64px'
        }}
      >
        { this.genCards(4) }
      </div>
    );
  }
}
