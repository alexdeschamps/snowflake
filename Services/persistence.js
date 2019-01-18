import { local } from "d3-selection";

export const getUserTrack= (userId: string): any => {
    // return dummy data for now
    if (window.localStorage && "milestoneTrack" in window.localStorage) {
        return JSON.parse(window.localStorage.getItem("milestoneTrack"));
    }

    return {
        title: 'Software Developer',
        milestoneByTrack: {
          'DOMAIN_KNOWLEDGE': 2,
          'CUSTOMER_EMPATHY': 3,
          'EXECUTION': 1,
          'CODING': 0,
          'FOSTERING_TECHNICAL_EXCELLENCE': 1,
          'QUALITY_CRAFTMANSHIP': 0,
          'PROBLEM_SOLVING': 2,
          'DESIGN_ARCHITECTURE': 2,
          'JUDGEMENT_WISDOM': 0,
          'INFLUENCE': 2,
          'STEWARDSHIP': 3,
          'COLLABORATION': 0,
          'OUTCOME_DRIVEN': 0,
          'MENTORSHIP': 5,
          'ADAPTABILITY': 0,
          'ENGAGEMENT_WITH_OTHER_TEAMS': 1,
          'EXPECTATION_MANAGEMENT': 2,
          'EXECUTIVE_ALIGNMENT':  0,
          'PROCESS_AGILITY':  0,
        }
    }
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