import request from '@/utils/request'

export function callAPIs(params) {
  return request({
    url: '/shp-healthcheck-table-apis',
    method: 'post',
    params: params
  })
}
