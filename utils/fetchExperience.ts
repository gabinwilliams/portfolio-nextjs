import axios from 'axios';

export const fetchExperience = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
        );

        return data;
    } catch (err) {
        console.error('Failed to fetch experience:', err);
        return null;
    }
};
