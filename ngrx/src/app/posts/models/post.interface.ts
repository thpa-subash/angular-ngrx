export interface postInterface{
    id:number,
    userId:number,
    title:string,
    body:string

}
export interface postStateInterface{
    post:postInterface[],
    loading:boolean,
    error:string|null
}