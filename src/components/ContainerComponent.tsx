import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ContainerComponent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed sx={{ marginTop: '50px', marginBottom: '20px' }}>
                <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <div>
                        <h1 style={{ color: '#0654AE' }}> <strong> You can equally use our services to pay your bills </strong></h1>
                        <iframe
                            width="500"
                            height="315"
                            src="https://webpay.smobilpay.acceptance.maviance.info/embed"
                            title="Webpay for partner"
                            frameBorder="0"
                            scrolling="no"
                            allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                            style={{ overflow: 'hidden', width: '100%' }}

                        ></iframe>

                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}