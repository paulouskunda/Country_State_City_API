export const createResponse = (status: number, message: any) => {
    return {
        status,
        message,
    };
};