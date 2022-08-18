import axios from "axios";
import { Category } from "../models/Category";

export const getAllCategories = (id: number) => {
    if (id != 0) {
        return axios.get<Category[]>("/api/Categories/GetAllCategories/" + id);
    }
    else {
        return axios.get<Category[]>("/api/Categories/GetAllCategories");
    }
}