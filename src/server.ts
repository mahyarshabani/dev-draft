import app from "./app";
import config from './config/config';

app.listen(config.port, (error) => {
    if (error) {
        console.error(`Error starting server: ${error.message}`);
    }
    console.log(`Server running on port ${config.port}`);
});