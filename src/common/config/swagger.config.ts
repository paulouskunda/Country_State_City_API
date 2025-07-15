import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Country State City API',
            version: '1.0.0',
            description: 'API documentation for Country Provinces City project, most of the information was gathered 4 years (pre public ChatGPT) so you need to confirm for other countries and what ever is new in Zambia. The latitude and longitude of some provinces and cities are not accurate, so you need to confirm them.',
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