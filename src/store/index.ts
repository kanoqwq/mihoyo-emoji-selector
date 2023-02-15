import { defineStore } from 'pinia'
import { getEmo } from '../api/index'
let emoData: any[] = []
export const useGenshinEmo = defineStore('YS-EMO', {
    state: () => {
        return {
            emoData
        }
    },
    getters: {

    },
    actions: {
        async getEmotion() {
            let res = await getEmo()
            this.emoData = res.data.data.list
        }
    }
})