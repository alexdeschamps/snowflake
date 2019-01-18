// @flow 
import { local } from "d3-selection";
import { trackIds } from '../constants'
import Config from "../config.json" 
import fetch from "isomorphic-unfetch"

export const getUserTrack = async (email: string): any => {
    // const api = Config.service_url;
    // const getURL = `${Config.service_url}${email}`
    // const response = await fetch(getURL)
    // const data = await response.json()
    // return data;
    if (window.localStorage && "milestoneTrack" in window.localStorage) {
        return JSON.parse(window.localStorage.getItem("milestoneTrack"));
    }

    return {
        title: 'Software Developer',
        milestoneByTrack: sampleMilestonMapGenerator(),
    }
}

export const saveUserTrack= async ( userId: string, userTrack: object): any => {

    // const postRequest = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userTrack)
    // }
   
    // const url = `${Config.service_url}${email}`
    // const response = await fetch(getURLm, postRequest)
    //Save to local storage for now
    if(window.localStorage) {
        if (window.localStorage.getItem("userid") === userId) {
            window.localStorage.setItem("milestoneTrack", JSON.stringify(userTrack));
        }
    }
    // TODO: process failure
}

const sampleMilestonMapGenerator = () => {
    const sampleMilestone = {}
    trackIds.map((track) => {
        sampleMilestone[track] = Math.floor(Math.random() * 5);
    });
    return sampleMilestone;
}