import request from '@/request/index'

//
const getScaler = (data: any) => {
  return request({
    url: 'scaler/getScaler',
    params: { sid: data }
  })
}

//
const scaler = (data: any) => {
  return request({
    url: 'scaler/scaler',
    method: 'POST',
    data
  })
}

export { getScaler, scaler }
