import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import colors from "../../utils/colors";
import { formatYear, formatLongText } from "../../utils/stringFormatting";

const BibleCard = ({ Version }) => {

  return (
    <Card
      sx={{
        maxWidth: 295,
        mb: 2,
        backgroundColor: colors.background,
      }}
    >
      <CardContent>
        <Typography
          component="div"
          color={colors.secondary}
          gutterBottom
          variant="p"
        >
          {formatYear(Version.year)}
        </Typography>
      </CardContent>

      <Typography variant="h6" color={colors.primary} fontWeight={"bold"} ml={1}>
        {formatLongText(Version.name)}
      </Typography>

      <Typography variant="body2" component="p" color={colors.primary} ml={1}>
        {Version.lang ? Version.lang : 'None'}
      </Typography>
      <Typography
        variant="p"
        sx={{
          display: "flex",
          position: "relative",
          bottom: 45,
          left: 250,
          color: "#fff",
          backgroundColor: colors.secondary,
          width: "25px",
          height: "25px",
          borderRadius: "15px",
          pb: 1,
          pl: 1,
        }}
      >
        {Version.research}
      </Typography>
    </Card>
  );
};

export default BibleCard;
