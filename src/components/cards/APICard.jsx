import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import colors from "../../utils/colors";

const APICard = ({ name, purpose, parameters, method, endpoint }) => {
  return (
    <Card
      sx={{
        maxWidth: matchMedia,
        mb: 2,
      }}
    >
      <CardContent>
        <Typography
          component="div"
          color={colors.primary}
          fontWeight={"bold"}
          gutterBottom
          variant="p"
        >
          {name.toUpperCase()}
        </Typography>

        <Typography variant="p" color={colors.primary}>
          {purpose}
        </Typography>
        <Typography variant="body2" color={colors.primary}>
          Parameters: {parameters}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color={colors.primary}>
          Endpoint: {endpoint}
        </Typography>
        <Typography variant="body2" color={colors.secondary}>
          Method: {method}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default APICard;
