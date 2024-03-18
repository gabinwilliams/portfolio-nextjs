import axios from 'axios';

export const fetchProjects = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
        );

        return data;
    } catch (err) {
        console.error('Failed to fetch projects:', err);
        return null;
    }
};
