import axios from 'axios';

export const fetchSkills = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
        );

        return data;
    } catch (err) {
        console.error('Failed to fetch skills:', err);
        return null;
    }
};
