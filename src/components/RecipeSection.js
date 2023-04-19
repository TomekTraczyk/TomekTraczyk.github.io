import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

function RecipeSection(props) {
    return (
        <Card variant="outlined" sx={{ minWidth: 275, margin: { xs: "10px", sm: '20px 10% 20px 10%' }, display: 'flex', flexFlow: 'wrap' }}>
            <Box sx={{ maxWidth: '20%', display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                <img src={props.imageSrc} className="recipe-image" />
            </Box>
            <Box sx={{ maxWidth: {xs: '100%', md: '70%'} }}>
                <Typography component="div" sx={{ fontSize: 24, fontWeight: 600, fontFamily: 'Garamond' }} color="text.primary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography sx={{ fontSize: 12, fontFamily: 'Garamond' }} color="text.secondary">
                    {props.description}
                </Typography>
                <Box sx={{ display: 'flex', marginTop: '15px', flexWrap: 'wrap', marginLeft: '15px', flexDirection: {xs: 'column', lg: 'row'} }}>
                    <Box sx={{ width: {sm: '100%', lg: '20%'} }}>
                        <Typography component="div" sx={{ textAlign: 'left', fontFamily: 'Garamond', display: { xs: 'none', lg: 'block'}, lineBreak: 'anywhere' }}>
                            Składniki:<br/>
                            {props.ingridients.map((ingridient) =>
                                <p style={{ margin: '5px 0 5px 15px', width: '100%' }}>-{ingridient}</p>
                            )}
                        </Typography>
                        <Typography component="div" sx={{ marginBottom: '15px', textAlign: {xs: 'center', md: 'left'}, fontFamily: 'Garamond', display: { xs: 'block', lg: 'none'} }}>
                            Składniki: {props.ingridients.join(", ")}
                        </Typography>
                    </Box>
                    <Box sx={{ width: {xs: '100%', md: '75%'}, marginBottom: '15px', paddingLeft: {xs: 0, md: '5%'} }}>
                        <Typography component="div" sx={{ textAlign: {xs: 'center', md: 'left'}, fontFamily: 'Garamond',}}>
                            {props.instruction}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default RecipeSection;