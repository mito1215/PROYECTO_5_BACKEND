//MIDDLEWARE
export function logger(request, response, next) {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('------------------------');
    next();
}