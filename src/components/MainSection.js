import MainImage from "./MainImage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

function MainSection(props) {
    return(
        <div className="main-section">
            <Card sx={{ maxWidth: { xs: "75%", sm: "40%" },  height: "auto" }} style={{ display: 'flex', alignContent: 'center', flexFlow: 'wrap'}}>
                <CardContent sx={{ width: '100%'}}>
                    <div>
                        <Typography sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 600, fontFamily: 'Garamond' }} color="text.primary" gutterBottom>
                            {props.header ?? 'Przepisy z całego świata'}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 12, sm: 16}, fontFamily: 'Garamond' }} color="text.secondary" gutterBottom>
                            {props.body ?? 'Autorstwa szefa Tomasza Traczyka'}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <MainImage></MainImage>
        </div>
    )
}

export default MainSection;