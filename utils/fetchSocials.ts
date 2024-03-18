import axios from 'axios';

export const fetchSocials = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
        );

        return data;
    } catch (err) {
        console.error('Failed to fetch socials:', err);
        return null;
    }
};
