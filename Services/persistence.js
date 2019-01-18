// @flow 
import { local } from "d3-selection";
import { trackIds } from '../constants'

export const getUserTrack = (userId: string): any => {
    // return dummy data for now
    if (window.localStorage && "milestoneTrack" in window.localStorage) {
        return JSON.parse(window.localStorage.getItem("milestoneTrack"));
    }

    return {
        title: 'Software Developer',
        milestoneByTrack: sampleMilestonMapGenerator(),
    }
}

const sampleMilestonMapGenerator = () => {
    const sampleMilestone = {}
    trackIds.map((track) => {
        sampleMilestone[track] = Math.floor(Math.random() * 5);
    });
    return sampleMilestone;
}

export const saveUserTrack= ( userId: string, userTrack: object): any => {

    //Save to local storage for now
    if(window.localStorage) {
        if (window.localStorage.getItem("userid") === userId) {
            window.localStorage.setItem("milestoneTrack", JSON.stringify(userTrack));
        }
    }
    //silent fail :'(
}