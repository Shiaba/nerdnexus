import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
            ...prevResource,
            next: data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                    ? acc
                    : [...acc, cur];
            }, prevResource.results),
        }));
    } catch (err) {}
};

export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
        ? // Profile clicked on, update it's followers count
            {
                ...profile,
                followers_count: profile.followers_count + 1,
                following_id,
            }
        : profile.is_owner
        ? // Profile of the logged in user, update following count
            { ...profile, following_count: profile.following_count + 1 }
        : // Not the clicked on profile user or owner, returns unchanged
            profile;
};