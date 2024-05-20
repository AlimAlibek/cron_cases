import axios from "axios";

const url = 'https://services.it-cron.ru/api/cases';

export const getCases = async () => {

    await new Promise(res => {
        setTimeout(() => res(), 1000)
    })

    const cases = await axios.get(url, {
        headers: {
            'Accept': 'text/plain',
            'Accept-language': 'ru'
        },
    });

    return cases.data.Data;

}
