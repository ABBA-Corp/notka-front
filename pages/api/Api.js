import axios from 'axios';
import Lenta1 from '../../assets/images/lenta1.png';
import Lenta2 from '../../assets/images/lenta2.png';
import NewsImg1 from '../../assets/images/news1.png';
import NewsImg2 from '../../assets/images/news2.png';
import GalleryImg from '../../assets/images/gallery.png';
import CategImg1 from '../../assets/images/category1.png';
import CategImg2 from '../../assets/images/category2.png';
import CategImg3 from '../../assets/images/category3.png';
import { CATEGORIES_DATA_URL, GALLERY_DATA_URL, LENTA_DATA_URL, NEWS_DATA_URL, PRODUCTS_DATA_URL } from './ApiUrl';

// categories API

export const fetchCategoriesApi = () => {
    return axios.get(CATEGORIES_DATA_URL)
};

export const dataCategories = [
    { id: 1, color: "#FFEDC3", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candyuz", name_ru: "Orange orzu candyru", name_en: "Orange orzu candyen" },
    { id: 2, color: "#9FF8FF", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 3, color: "#B5FF93", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 4, color: "#FFEDC3", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 5, color: "#9FF8FF", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 6, color: "#B5FF93", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 7, color: "#FFEDC3", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 8, color: "#9FF8FF", image: CategImg2, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" },
    { id: 9, color: "#B5FF93", image: CategImg1, slide_image: CategImg3, name_uz: "Orange orzu candy", name_ru: "Orange orzu candy", name_en: "Orange orzu candy" }
];

// products API

export const fetchProductsApi = () => {
    return axios.get(PRODUCTS_DATA_URL)
};

export const dataProducts = [
    { id: 1, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 2, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 3, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 4, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 5, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 6, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 7, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 8, image: CategImg2, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" },
    { id: 9, image: CategImg1, weight: 2, artikul: "NTK2orng", uglevod: 66, top: true, name_uz: "ORANGE CANDY BY “NOTKA”", name_ru: "ORANGE CANDY BY “NOTKA”", name_en: "ORANGE CANDY BY “NOTKA”" }
];

// lenta API

export const fetchLentaApi = () => {
    return axios.get(LENTA_DATA_URL)
};

export const dataLenta = [
    { id: 1, image: Lenta1 },
    { id: 2, image: Lenta2 },
    { id: 3, image: Lenta1 },
    { id: 4, image: Lenta2 },
    { id: 5, image: Lenta1 },
    { id: 6, image: Lenta2 },
    { id: 7, image: Lenta1 },
    { id: 8, image: Lenta2 }
];

// news API

export const fetchNewsApi = () => {
    return axios.get(NEWS_DATA_URL)
};

export const dataNews = [
    { id: 1, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
    { id: 2, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
    { id: 3, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
    { id: 4, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
    { id: 5, image: NewsImg1, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" },
    { id: 6, image: NewsImg2, name_uz: "Eng shirin konfetlar", name_en: "Eng shirin konfetlar", name_ru: "Eng shirin konfetlar", description_uz: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_ru: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd", description_en: "Amerikada eng shirin kofet tayyorlandi bu zori dsfsdf sadfsd" }
];

// gallery API

export const fetchGalleriesApi = () => {
    return axios.get(GALLERY_DATA_URL)
};

export const dataGallery = [
    { id: 1, image: GalleryImg },
    { id: 2, image: GalleryImg },
    { id: 3, image: GalleryImg },
    { id: 4, image: GalleryImg }
];