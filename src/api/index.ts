import axios from 'axios'
//获取表情包
export const getEmo =  () => {
    return axios.get('/MiHoYoEmo/getEmo')
    // return axios.get('https://bbs-api.mihoyo.com/misc/api/emoticon_set')
}