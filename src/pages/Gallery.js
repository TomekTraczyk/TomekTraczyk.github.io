import MenuBar from "../components/MenuBar";
import MainSection from "../components/MainSection";
import {Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Gallery() {
    const photos = [
        'golabki.jpeg',
        'pierogi.jpg',
        'rosol.webp',
        'schabowy.jpeg',
        'zurek.webp',
        'bigos.jpg',
        'chleb.jpeg',
        'kaszanka.jpg'
    ];

    return (
        <div className="App" style={{height: '200vh'}}>
            <MenuBar></MenuBar>
            <MainSection></MainSection>
            <Card sx={{m: {xs: 5, md: 10}}}>
                <CardContent>
                    <Typography component="div" sx={{ fontSize: 26, fontWeight: 600, textAlign: 'center', fontFamily: 'Garamond' }}>
                        Galeria
                    </Typography>
                    <Grid container>
                        {photos.map((photo) =>
                            <Grid item xs={12} sm={6} md={4} lg={3} key={photo} sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center'}}>
                                <img src={photo} style={{maxWidth: '90%', maxHeight: '90%'}} />
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Gallery;