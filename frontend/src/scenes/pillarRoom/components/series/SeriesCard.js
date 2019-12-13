// DEPENDANCIES
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import PaletteIcon from "@material-ui/icons/Palette";

class SeriesCard extends Component {
  render() {
    const { series, onClick } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography>
            {series.name}
            <PaletteIcon
              style={{ color: series.color, float: "right" }}
            ></PaletteIcon>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => onClick(series.id)}>EDIT</Button>
        </CardActions>
      </Card>
    );
  }
}

export default SeriesCard;
