import request from '@/utils/request'

function summary(params) {
    return new Promise((resolve, reject) => {
        request("get", '/api/user/list', params).then(res => {
            resolve(res);
        }, error => {
            reject(error)
        })
    })
}

export {
    summary
}