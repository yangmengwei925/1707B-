export interface IRouterProp{
    routes: IRouterItem[]
}

export interface IRouterItem{
    path: string,
    component: Function,
    redirect?: string,
    children?: IRouterItem[]
}

export interface IAction{
    readonly type: string,
    payload?: any
}