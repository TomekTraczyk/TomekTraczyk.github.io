import MainImage from "./MainImage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

function MainSection() {
    return(
        <div className="main-section">
            <Card sx={{ minWidth: 275,  maxHeight: "calc(40vh - 29px)" }} style={{ display: 'flex', alignContent: 'center', flexFlow: 'wrap'}}>
                <CardContent>
                    <div>
                        <Typography sx={{ fontSize: 24, fontWeight: 600, fontFamily: 'Garamond' }} color="text.primary" gutterBottom>
                            Przepisy z całego świata
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontFamily: 'Garamond' }} color="text.secondary" gutterBottom>
                            Autorstwa Szefa Tomasza Traczyka
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <MainImage></MainImage>
        </div>
    )
}

export default MainSection;