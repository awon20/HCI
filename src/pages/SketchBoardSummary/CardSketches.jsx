import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from "@material-ui/core/CardMedia";


function CardSketches({ usersData }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader title={usersData.sketchname} />
        <CardMedia
          component="img"
          image={`data:image/png;base64,${usersData.url}`}
          title={usersData.sketchname}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {usersData.username}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardSketches
