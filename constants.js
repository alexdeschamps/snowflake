// @flow
import * as d3 from 'd3'

export type TrackId =
  'DOMAIN_KNOWLEDGE' |
  'CUSTOMER_EMPATHY' |
  'EXECUTION' |
  'CODING' |
  'QUALITY_CRAFTSMANSHIP' |
  'PROBLEM_SOLVING' |
  'DESIGN_ARCHITECTURE' |
  'JUDGEMENT_WISDOM' |
  'INFLUENCE'

export type Milestone = 0 | 1 | 2 | 3

export type MilestoneMap = {
  'DOMAIN_KNOWLEDGE': Milestone,
  'CUSTOMER_EMPATHY': Milestone,
  'EXECUTION': Milestone,
  'CODING': Milestone,
  'QUALITY_CRAFTSMANSHIP': Milestone,
  'PROBLEM_SOLVING': Milestone,
  'DESIGN_ARCHITECTURE': Milestone,
  'JUDGEMENT_WISDOM': Milestone,
  'INFLUENCE': Milestone,
}
export const milestones = [0, 1, 2, 3]

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
  'QUALITY_CRAFTSMANSHIP': Track,
  'PROBLEM_SOLVING': Track,
  'DESIGN_ARCHITECTURE': Track,
  'JUDGEMENT_WISDOM': Track,
  'INFLUENCE': Track,
|}

export const tracks: Tracks = {
  "DOMAIN_KNOWLEDGE": {
    "displayName": "Cunning",
    "category": "A",
    "description": "Overall craftiness.  Are you sufficiently wily and tricky?",
    "milestones": [{
      "summary": "You know a thing or two.",
      "signals": [
        "Are you aware of what your foes are up to?",
        "Can you plan a raid with more detail than just 'Loot and Pillage'?",
      ],
      "examples": [
        "Call out an assassination attempt before it occurs (you don't need to be correct).",
        "Develop a plan for a raid with at least four distinct steps.",
      ],
    }, {
      "summary": "Pretty sneaky, sis.",
      "signals": [
        "Able to develop plots that have subplots within their subplots.",
      ],
      "examples": [
        "Get the drop on someone who was actively plotting against you.",
      ],
    }, {
      "summary": "Loki, trickster god.",
      "signals": [
        "Devise a plan so cunning, so devious and yet so simple that nobody else considered it.",
        "All of your plans involve at least three double-crosses.",
      ],
      "examples": [
        "Execute a plan where your goal was to get captured all along.",
      ],
    }]
  },
  "CUSTOMER_EMPATHY": {
    "displayName": "Ruthlessness",
    "category": "A",
    "description": "A willingness to do what must be done to secure the long-term prosperity of our village.",
    "milestones": [{
      "summary": "Willing to induce mild discomfort.",
      "signals": [
        "You are able to ask your fellow warriors to do things that are uncomfortable (like farming).",
      ],
      "examples": [
        "Scheduling a raid when the weather is inclement.",
      ],
    }, {
      "summary": "Willing to do what others would rather not.",
      "signals": [
        "Your moral compass spins wildly in all directions.",
      ],
      "examples": [
        "Sacking a town when you totally know there's a curse associated with it.",
      ],
    }, {
      "summary": "The blood in your veins runs as cold as glacier runoff.",
      "signals": [
        "You are completely devoid of scruples.",
        "At least once a week someone remarks on one of your decisions 'Damn, that's cold.'",
      ],
      "examples": [
        "Raiding the same village twice in one month.",
      ],
    }]
  },
  "EXECUTION": {
    "displayName": "Execution",
    "category": "A",
    "description": "Literally execution.  Ability to make heads roll.",
    "milestones": [{
      "summary": "You can swing an axe (and not the spray for 14-year-olds).",
      "signals": [
        "You have the ability to raise a weapon over your head and bring it down with some accuracy.",
      ],
      "examples": [
        "Dispatch a foe with a single blow.",

      ],
    }, {
      "summary": "Ned Stark (from the first episode of season one, not the last episode of season one).",
      "signals": [
        "You carry out your own sentences.",
        "You're better than Rob at dispatching Karstarks",
      ],
      "examples": [
        "Upholding the King's law.",
        "Showing no mercy for deserters.",
      ],
    }, {
      "summary": "Basically a Bond Villian.",
      "signals": [
        "You no longer focus on efficiency but instead creativity.",
      ],
      "examples": [
        "Construct an elaborate trap involving no less than three conveyor belts, a dozen pulleys, a carrot that suddenly drops down in front of a donkey to get it to walk, which flips the man into the pan and the trap is set.",
        "Get a victim to ask you if you expect them to talk and have a witty response ready.",
      ],
    }]
  },
  "CODING": {
    "displayName": "Military Leadership",
    "category": "B",
    "description": "Ability to coordinate attack and defence.",
    "milestones": [{
      "summary": "Lead a squad of warriors to success in battle.",
      "signals": [
        "Coordinating attacks, coordinating retreats.",
        "Fellow warriors actually listen to your commands.",
      ],
      "examples": [
        "Lead a raid to an exceptionally hoard-like treasure.",
      ],
    }, {
      "summary": "Raid leader.",
      "signals": [
        "Able to run an entire raid, from planning to execution.",
      ],
      "examples": [
        "Lead five successful raids.",
      ],
    }, {
      "summary": "Commander of the Armies of the North.",
      "signals": [
        "Able to control strategy, not just tactics.",
        "Inspire leadership in multiple companies of men.",
      ],
      "examples": [
        "Lead two raids in two different places at the same time.",
        "Stab more people than stab you in the majority of battles.",
      ],
    }]
  },
  "QUALITY_CRAFTSMANSHIP": {
    "displayName": "Alliance Forming",
    "category": "B",
    "description": "Creating and maintaining alliances with rival villages.",
    "milestones": [{
      "summary": "Playing nicely with other tribes.",
      "signals": [
        "You don't raid lands claimed by other tribes.",
        "Those other tribes don't raid your lands.",
      ],
      "examples": [
        "Stopping to think 'what would the Jarl say?' before ordering a raid.",
      ],
    }, {
      "summary": "Lasting alliances.",
      "signals": [
        "Able to forge alliances that last more than sixty days.",
        "Manages to get something of equal or greater value for everything we give up.",
      ],
      "examples": [
        "Form a reciprocal alliance via strategic marriage.",
        "Carry out a raid where the spoils are divided evenly",
      ],
    }, {
      "summary": "Ally of convenience.",
      "signals": [
        "Recognizes when an alliance has run its course.",
      ],
      "examples": [
        "Break an existing alliance in order to make a better one with another rival.",
      ],
    }]
  },
  "PROBLEM_SOLVING": {
    "displayName": "Longboat Construction",
    "category": "B",
    "description": "Building effective naval vessels.",
    "milestones": [{
      "summary": "Look, it floats, ok?",
      "signals": [
        "Can make a wooden structure that doesn't sink (at least not at first).",
      ],
      "examples": [
        "Make a vessel capable of transporting one warrior in full gear over a fijord.",
      ],
    }, {
      "summary": "We're going to need a bigger boat.",
      "signals": [
        "Your longboats can support an entire squadron of warriors on the open ocean.",
      ],
      "examples": [
        "Fellow warriors request to get seats on your longboat.",
        "Your longboats carry at least 50lbs of booty per raider on board.",
      ],
    }, {
      "summary": "",
      "signals": [
        "Your vessels are capable of transporting warriors to the lands of the distant West.",
        "All of your ships have really sharp looking racing stripes.",
      ],
      "examples": [
        "Build a ship that's first to arrive at the raid nine raids out of ten.",
      ],
    }]
  },
  "DESIGN_ARCHITECTURE": {
    "displayName": "Helmet Quality",
    "category": "B",
    "description": "Having a really dope looking helmet that inspires terror in your enemies.",
    "milestones": [{
      "summary": "At least it's something.",
      "signals": [
        "Wear something on your head.  Anything.",
      ],
      "examples": [
        "Fashioning a squirrel pelt into a fetching headscarf.",
      ],
    }, {
      "summary": "Hornswaggler.",
      "signals": [
        "You are more concerned with fashion than function.",
      ],
      "examples": [
        "Wear a helmet with at least two horns.",
      ],
    }, {
      "summary": "Did you see how bendy those horns were?",
      "signals": [
        "Your headgear strikes terror into the hearts of your enemies",
      ],
      "examples": [
        "Wear a helment that's at least 70% horns.",
      ],
    }]
  },
  "JUDGEMENT_WISDOM": {
    "displayName": "Feasting Ability",
    "category": "B",
    "description": "Ability to just really get your feast on.",
    "milestones": [{
      "summary": "Maybe just a sample.",
      "signals": [
        "You attend every feast.",
      ],
      "examples": [
        "You are able to eat an entire pig in one sitting.",
      ],
    }, {
      "summary": "Hollow-leg.",
      "signals": [
        "You can party pretty hard.",
        "You are only sometimes obnoxious though usually drunk at a feast.",
      ],
      "examples": [
        "You are able to stay standing for at least 75% of the feast.",
        "You only get into drunken brawls with other vikings below you in stature.",
      ],
    }, {
      "summary": "That is a lot of mead.",
      "signals": [
        "You can keep up with the rest of the village in a feast.",
        "Your ability to drink knows no equal.",
      ],
      "examples": [
        "Be the last person still standing at the end of a feast.",
        "Attend every feast with a Valhalla-like hunger.",
      ],
    }]
  },
  "INFLUENCE": {
    "displayName": "Pillaging",
    "category": "C",
    "description": "General pillaging and plundering of rival villages.",
    "milestones": [{
      "summary": "Not empty-handed.",
      "signals": [
        "You return from the raid with at least something to show for it.",
      ],
      "examples": [
        "Pillage your own body weight in grain (2x your body weight for skinny warriors).",
      ],
    }, {
      "summary": "A mighty haul",
      "signals": [
        "You reliably return with spoils of war.",
        "You are able to pilfer some really sweet booty.",
      ],
      "examples": [
        "Steal something nobody has ever stolen before.",
        "Return from ten consecutive raids with a successful bounty of spoils.",
      ],
    }, {
      "summary": "Everything that isn't nailed down.",
      "signals": [
        "You are single-handedly able to stir up enough confusion to allow the rest of the party to start looting.",
      ],
      "examples": [
        "You know the difference between looting and pillaging and can explain it to the rest of the class.",
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
  {label: 'Junior Viking in Training', minPoints: 0, maxPoints: 15},
  {label: 'Assistant Housecarl', minPoints: 10, maxPoints: 30},
  {label: 'Viking Raider', minPoints: 15, maxPoints: 40},
  {label: 'Viking Commander', minPoints: 30, maxPoints: 100},
  {label: 'Viking Chieftan', minPoints: 40, maxPoints: 100},
  {label: 'Jarl', minPoints: 40, maxPoints: 100},
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
