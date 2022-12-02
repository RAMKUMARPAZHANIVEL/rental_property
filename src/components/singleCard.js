import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const SingleCard = ({ elem }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image={elem.image_thumbnail}
        alt="property"
      />
      {/* {/* <img src={elem.image_thumbnail ? : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixq1rDYqHZcrvUvdIBdmm8Vlads5RLIAOjDDQXEpWEDVh1XTP0BknMbY_B8k5Vx5GkFk&usqp=CAU"}  */}
      {/* <img src={elem?.image_thumbnail} height="140" alt='property' width="100%"/>  */}
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {elem.property_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price&emsp;{elem.price} {elem.currency}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Place Name : {elem.place_name}
        </Typography>
      </CardContent>
     <Box className="card-content">
     <Button size="small" ml={2}>
        Surface area : {elem.surface_covered_in_m2} m2
      </Button>
       <br />
      <Button size="small" ml={2}>
        Price per m2 : {Math.floor(elem.price_per_m2)} {elem.currency}{" "}
      </Button>
     </Box>
    </Card>
  );
};

export default SingleCard;
