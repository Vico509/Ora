import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import colors from "../../utils/colors";


const VerseGrid = ({ verses }) => {
    return (
        <Grid container spacing={2} style={{ paddingTop: "20px" }}>
            {verses.map((verse, index) => (
                <Grid item key={index} xs={6}>
                    <Typography variant="body1">
                        <span style={{ color: colors.secondary }}>{verse.number}</span>. <span >{verse.text.replace(/^¶\s*/, "")}</span>
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default VerseGrid;
