import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        // console.log(resource.next)
        let url=new URL(resource.next)
        let correctUrl = resource.next.split(url.origin)[1]
        const { data } = await axiosReq.get(correctUrl);
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

export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
        ? 
            {
                ...profile,
                followers_count: profile.followers_count - 1,
                following_id: null,
            }
        : profile.is_owner
        ? 
            { ...profile, following_count: profile.following_count - 1 }
        : 
            profile;
};

export const setTokenTimeStamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
};