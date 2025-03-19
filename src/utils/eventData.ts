
export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  type: 'technical' | 'non-technical' | 'workshop';
  rules?: string[];
  criteria?: string[];
}

export const eventData: EventType[] = [
  {
    id: 'ideathon',
    title: 'TRACE BACK CODING',
    description: 'Trace Back Coding is a reverse coding challenge where you don’t get the problem statement—just the output and conditions! Your task is to analyze the given constraints, think logically, and write the correct code to match the expected output. If you love problem-solving and coding challenges, this is the ultimate test of your skills!',
    image:  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop', 
    date: '2025-03-29',
    time: '10:00 AM - 2:00 PM',
    type: 'technical',
    rules: [
      "Open to all individual participants interested in solving coding challenges with logic and skill." ,  

      "Participants will receive an expected output and a set of conditions to guide their solution." ,

      "The actual problem statement is hidden—you must analyze the given conditions to solve it." ,

      "Write the correct code that meets all given conditions and produces the expected output." ,

      "The event has a set time limit, and all solutions must be submitted before it ends." ,

      "Programming language: Choose any language you prefer to implement your solution." 
    ],
    criteria: [
      "Correctness: Does the code accurately produce the expected output while following all given conditions?" ,

      "Logic & Efficiency: How effectively does the code implement logic and efficiently satisfy all conditions?",
      
      "Code Optimization: Is the solution well-optimized to enhance performance while maintaining correctness?" ,
      
      "Edge Cases Handling: Does the code handle all possible inputs, including edge cases, without errors?" 
    ]
  },
  {
    id: 'cook-with-prompt',
    title: 'PROMPT CHEF',
    description: 'Prompt Chef is a technical event where participants craft precise AI image generation prompts based on given themes. Compete individually to create the most effective prompts within a fixed time. Showcase your creativity and AI skills in this unique challenge!',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop',
    date: '2025-03-29',
    time: '2:30 PM - 4:30 PM',
    type: 'technical',
    rules: [
      "Open to all individual participants interested in AI-generated images and prompt creation challenges." ,
       "Participants will get specific themes and must craft AI image generation prompts based on them." ,

       "Prompts should be clear, detailed, and optimized to achieve the best possible AI-generated results." ,

"The event has a set time limit, and all prompts must be submitted before the given time runs out." 
    ],
    criteria: [
      "Creativity: How unique and engaging is your prompt in generating AI images based on the given theme?" ,

"Clarity: Is your prompt well-structured, easy to understand, and clear in its instructions for AI?" ,

"Relevance: Does your prompt accurately align with the given theme and ensure meaningful AI results?" ,

"AI Output Quality: How effectively does the AI generate an image that matches your prompt’s details?" 
    ]
  },
  {
    id: 'bug-bounty',
    title: 'INNOV8',
    description: 'INNOV8 is a technical event  where you can bring your ideas to life! Whether you have a groundbreaking concept or a prototype project, this is your chance to showcase it. Present your ideas using a PPT or a working prototype and impress the judges with your innovation, problem-solving skills, and creativity. Let your ideas shape the future!',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop',
    date: '2025-03-29',
    time: '10:00 AM - 1:00 PM',
    type: 'technical',
    rules: [
      "Open to all individuals and teams with a maximum size of four members for participation." ,

"Participants must present their idea using a well-structured PPT or a working prototype." ,

"The idea can be a new concept, product, or an innovative solution to a real-world problem." ,

"The presentation must explain the problem, solution, implementation, and its overall impact." ,

"The total time limit for the presentation is set to 10 minutes, including all key points." ,

"After the presentation, judges may ask relevant questions to assess the idea’s depth." 
    ],
    criteria: [
      "Innovation & Creativity: How unique, original, and impactful is the idea in bringing new solutions?" ,

"Problem-Solving: Does the idea effectively address a real-world challenge with a practical approach?",

"Feasibility: Can the idea be realistically implemented, considering available resources and technology?" ,

"Presentation Quality: How clearly and effectively is the idea explained, structured, and visually presented?" ,

"Prototype (if any): How well does the prototype demonstrate and validate the concept’s functionality?" 
    ]
  },
  {
    id: 'meme-media',
    title: 'Reinz Auction',
    description: "Rinz Auction is an exciting non-technical event inspired by the IPL auction! Participants will step into the shoes of team owners, strategizing and bidding to build the best possible team within a fixed budget. Make smart decisions, outbid your rivals, and form the ultimate squad. It's all about strategy, planning, and quick thinking—are you ready to take the challenge?",
    image:  'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop', 
    date: '2025-03-29',
    time: '2:00 PM - 4:00 PM',
    type: 'non-technical',
    rules: [
      'At the beginning of the event, a list of players available for bidding will be provided.',

     'Players will be categorized into different groups (e.g., batsmen, bowlers, all-rounders) with base prices.',
    'Each team will receive a virtual budget of 140 crore to bid for players during the auction.',
    'Bidding will be conducted in rounds, and the highest bidder for each player will secure that player.',
    'Teams must strategize to build a balanced squad while staying within their allocated budget.',
    'Each team should have a minimum of 15 players and a maximum of 18 players.',
   'Each team must include 12 Indian players and a maximum of 6 overseas players.',
   'Each team must pick least 2 players from the ↓ marquee sets.',
   'Each team should have at least 3 uncapped players.',
  '*Each team must have at least: 2-wicketkeepers 3-batsmen 4-all-rounders 3-bowlers',
  'General Rules: ',

'• The use of mobile phones or any electronic devices during the event is strictly prohibited unless authorized by the organizers.',

'• Teams must maintain decorum and avoid disrupting the bidding process. Any misconduct will result in penalties or disqualification.',

'• The decisions of the event coordinators and judges will be final.'

    ],
    criteria: [
      'Humor & Creativity',
      'Technical Execution',
      'Audience Response',
      'Originality'
    ]
  },
  {
    id: 'ai-photography',
    title: 'AI Photography',
    description: 'AI-enhanced photography contest where participants capture & edit AI-driven photos. Blend your artistic vision with technology.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2638&auto=format&fit=crop',
    date: '2025-03-29',
    time: '2:00 PM - 5:00 PM',
    type: 'non-technical',
    rules: [
      'Capture photos during the event',
      'AI enhancement required',
      'Submit 3 best photos',
      'Include brief description of techniques used'
    ],
    criteria: [
      'Composition & Aesthetics',
      'Creative AI Integration',
      'Technical Skills',
      'Storytelling'
    ]
  },
  {
    id: 'ai-workshop',
    title: 'Build AI Tools from Scratch',
    description: 'A hands-on workshop where participants learn to build practical AI tools from the ground up. Gain valuable skills from industry experts.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop',
    date: '2025-03-29',
    time: '10:00 AM - 4:00 PM',
    type: 'workshop',
    rules: [
      'Bring your own laptop',
      'Basic programming knowledge required',
      'All framework dependencies will be provided',
      'Interactive sessions with Q&A'
    ]
  }
];
