import axios from 'axios';

export const fetchPageInfo = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
        );

        return data;
    } catch (err) {
        console.error('Failed to fetch page info:', err);
        return null;
    }
};
