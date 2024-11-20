const _translations = {
    "uk": {
        "header":{
            "Про компанію": "Про компанію",
            "Медіа": "Медіа",
            "Послуги": "Послуги",
            "Вакансії": "Вакансії",
            "Новини": "Новини",
            "Контакти": "Контакти",
        }
    },
    "en": {
        "header":{
            "Про компанію": "About us",
            "Медіа": "Media",
            "Послуги": "Services",
            "Вакансії": "Vacancies",
            "Новини": "News",
            "Контакти": "Contacts",
        }
    }
}

export default function getTranslations (lang, section){
    return _translations[lang][section]
}