import { ref } from "vue"


const parseData = (data) => {
    if (!data) return
    try {

        return data
    } catch (err) {
        return err
    }
}


const eData = ref({})


export { eData }



