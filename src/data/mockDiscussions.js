// src/data/mockDiscussions.js

export const circles = [
  {
    id: 1,
    name: "Healing & Comfort",
    color: "#F8E8FF",
    posts: [
        {
            id: 101,
            title: "How do you comfort a scared rescue cat?",
            author: "LunaLover",
            replies: [
            {
                id: 201,
                author: "MeowMentor",
                content: "Try creating a cozy safe spot for them to hide in."
            },
            {
                id: 202,
                author: "WhiskerWhisperer",
                content: "Go slow and speak softly. My rescue opened up after 2 weeks!"
            }
            ]
        },
        {
            id: 102,
            title: "What helped you when your cat was sick?",
            author: "CatMom23",
            replies: []
        }
    ]
  },
  {
    id: 2,
    name: "Joy & Playfulness",
    color: "#E8F4FF",
    posts: []
  },
  {
    id: 3,
    name: "Anxiety & Stress",
    color: "#FFF4E8",
    posts: []
  },
  {
    id: 4,
    name: "Grief & Loss",
    color: "#FFE8E8",
    posts: []
  }
];
