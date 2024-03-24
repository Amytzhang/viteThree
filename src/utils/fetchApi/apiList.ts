import { apiRequest } from "./service"
const api={
  'list': '/getList',
  'postNum':'/pageNum'
}
export function getFetchList(){
  return apiRequest.get({
    url:api.list,
    data:{
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  })
}
export function postFetchNum(data1:any){
  return apiRequest.post({
    url:api.postNum,
    data:data1
  })
}