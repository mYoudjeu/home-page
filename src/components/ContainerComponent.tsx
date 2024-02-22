import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ContainerComponent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed sx={{ marginTop: '50px', marginBottom: '20px' }}>
                <div style={{ width: '97vw', alignSelf: 'center' }}>

                    <h1 style={{ color: '#0654AE', textAlign: 'center' }}> <strong> You can equally use our services to pay your bills </strong></h1>
                    <iframe
                        frameBorder={'0'}
                        height="200"
                        src="https://webpay.smobilpay.acceptance.maviance.info/embed"
                        title="Webpay for partner"
                        style={{ border: 'none', display: 'flex', width: '97vw' }}

                    // allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"


                    ></iframe>

                    <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '50px' }}> You can directly pay your guce bill <a href='https://webpay.smobilpay.acceptance.maviance.info/service/douanes/P106400414020U'>Click here</a> </h2>



                </div>
            </Container>
        </React.Fragment >
    );
}