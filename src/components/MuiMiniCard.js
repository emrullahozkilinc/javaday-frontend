import React from 'react';
import {CardActionArea, CardContent, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

function MuiMiniCard(props) {
    return (
        <Stack>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={"center"}>
                {
                    props.cardContents.map((content, i) => {
                        return(
                            <Grid item key={i}>
                                <CardActionArea sx={{ minWidth: 200}}>
                                    <CardContent>
                                        <Grid container direction="column" alignItems="center">
                                            <Grid item>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {content[0]}
                                                </Typography>                                        </Grid>
                                            <Grid item>
                                                <Typography variant="body1">
                                                    {content[1]}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Stack>

    );
}

export default MuiMiniCard;