import 'whatwg-fetch';

class HttpService {
    
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(resp => {
                resolve(resp.json());
            }, err => {
                reject(err);
            });
        });

        return promise;
    }

}

export default HttpService;