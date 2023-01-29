import axios from "axios";
import { ConsumerUseCases } from "../interfaces/consumerUseCases";

export class AxiosConsumer<T> implements ConsumerUseCases<T>{
    async getData(query: string) {
        return axios.get<T>(process.env.API_ENDPOINT + query + '&api_key=' + process.env.API_KEY).then((res: any) => (res.data as T[]))
    }
}