import Cookie from 'js-cookie'

const key = 'x-nideshop-token';
export function setToken(val:string){
    Cookie.set(key, val);
}

export function getToken(): string{
    return Cookie.get(key)!;
}

export function removeToken(){
    return Cookie.remove(key)
}