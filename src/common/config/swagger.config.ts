import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Country State City API',
            version: '1.0.0',
            description: 'API documentation for Country Provinces City project, information was gathered 5+ years (pre-public ChatGPT) so you need to confirm the information if its up-to-date. The latitude and longitude of some provinces and cities are not accurate, so you need to confirm them. Happy coding!',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/**/*.routes.config.ts'], // Path to the route files for Swagger annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;