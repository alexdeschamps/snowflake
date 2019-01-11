// @flow
import * as d3 from 'd3'

export type TrackId =
  'DOMAIN_KNOWLEDGE' |
  'CUSTOMER_EMPATHY' |
  'EXECUTION' |
  'CODING' |
  'FOSTERING_TECHNICAL_EXCELLENCE' |
  'QUALITY_CRAFTMANSHIP' |
  'PROBLEM_SOLVING' |
  'DESIGN_ARCHITECTURE' |
  'JUDGEMENT_WISDOM' |
  'INFLUENCE' |
  'STEWARDSHIP' |
  'COLLABORATION' |
  'OUTCOME_DRIVEN' |
  'MENTORSHIP' |
  'ADAPTABILITY' |
  'ENGAGEMENT_WITH_OTHER_TEAMS' |
  'EXPECTATION_MANAGEMENT' |
  'EXECUTIVE_ALIGNMENT' |
  'PROCESS_AGILITY'

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'DOMAIN_KNOWLEDGE': Milestone,
  'CUSTOMER_EMPATHY': Milestone,
  'EXECUTION': Milestone,
  'CODING': Milestone,
  'FOSTERING_TECHNICAL_EXCELLENCE': Milestone,
  'QUALITY_CRAFTMANSHIP': Milestone,
  'PROBLEM_SOLVING': Milestone,
  'DESIGN_ARCHITECTURE': Milestone,
  'JUDGEMENT_WISDOM': Milestone,
  'INFLUENCE': Milestone,
  'STEWARDSHIP': Milestone,
  'COLLABORATION': Milestone,
  'OUTCOME_DRIVEN': Milestone,
  'MENTORSHIP': Milestone,
  'ADAPTABILITY': Milestone,
  'ENGAGEMENT_WITH_OTHER_TEAMS': Milestone,
  'EXPECTATION_MANAGEMENT': Milestone,
  'EXECUTIVE_ALIGNMENT': Milestone,
  'PROCESS_AGILITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'DOMAIN_KNOWLEDGE': Track,
  'CUSTOMER_EMPATHY': Track,
  'EXECUTION': Track,
  'CODING': Track,
  'FOSTERING_TECHNICAL_EXCELLENCE': Track,
  'QUALITY_CRAFTMANSHIP': Track,
  'PROBLEM_SOLVING': Track,
  'DESIGN_ARCHITECTURE': Track,
  'JUDGEMENT_WISDOM': Track,
  'INFLUENCE': Track,
  'STEWARDSHIP': Track,
  'COLLABORATION': Track,
  'OUTCOME_DRIVEN': Track,
  'MENTORSHIP': Track,
  'ADAPTABILITY': Track,
  'ENGAGEMENT_WITH_OTHER_TEAMS': Track,
  'EXPECTATION_MANAGEMENT': Track,
  'EXECUTIVE_ALIGNMENT': Track,
  'PROCESS_AGILITY': Track
|}

export const tracks: Tracks = {
  "DOMAIN_KNOWLEDGE": {
    "displayName": "Domain Knowledge",
    "category": "A",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "CUSTOMER_EMPATHY": {
    "displayName": "Customer Empathy",
    "category": "A",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "EXECUTION": {
    "displayName": "Execution",
    "category": "A",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",

      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "CODING": {
    "displayName": "Coding",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "FOSTERING_TECHNICAL_EXCELLENCE": {
    "displayName": "Fostering Technical Excellence in others",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "QUALITY_CRAFTMANSHIP": {
    "displayName": "Quality / Craftsmanship",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "PROBLEM_SOLVING": {
    "displayName": "Problem Solving",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "DESIGN_ARCHITECTURE": {
    "displayName": "Design / Architecture",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "JUDGEMENT_WISDOM": {
    "displayName": "Judgement / Wisdom",
    "category": "B",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "INFLUENCE": {
    "displayName": "Influence",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "STEWARDSHIP": {
    "displayName": "Stewardship",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "COLLABORATION": {
    "displayName": "Collaboration",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "OUTCOME_DRIVEN": {
    "displayName": "Outcome Driven",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "ADAPTABILITY": {
    "displayName": "Adaptability",
    "category": "C",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "ENGAGEMENT_WITH_OTHER_TEAMS": {
    "displayName": "Engagement with other teams",
    "category": "D",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "EXPECTATION_MANAGEMENT": {
    "displayName": "Expectation Management",
    "category": "D",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "EXECUTIVE_ALIGNMENT": {
    "displayName": "Executive Alignment",
    "category": "D",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
  "PROCESS_AGILITY": {
    "displayName": "Process Agility",
    "category": "D",
    "description": "description1",
    "milestones": [{
      "summary": "milestone 1",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 2",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 3",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 4",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }, {
      "summary": "milestone 5",
      "signals": [
        "signal 1",
        "signal 2",
      ],
      "examples": [
        "example 1",
        "example 2",
      ],
    }]
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Junior Software Developer', minPoints: 0, maxPoints: 16},
  {label: 'Software Developer', minPoints: 17, maxPoints: 35},
  {label: 'Senior Software Developer', minPoints: 36, maxPoints: 57},
  {label: 'Staff Software Developer', minPoints: 36, maxPoints: 57},
  {label: 'Principal Software Developer', minPoints: 58, maxPoints: 89},
  {label: 'Fellow Software Developer', minPoints: 58, maxPoints: 89},
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
