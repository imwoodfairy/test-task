import { $host } from "./index";


export const fetchCities = async (name) => {
    const { data } = await $host.get('api/cities/' + name)
    return data
}