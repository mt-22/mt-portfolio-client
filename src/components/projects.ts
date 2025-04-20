import appleWatchImg from "../media/applewatch.webp";
import portraitImg from "../media/portrait.webp";
import sheerIDImg from "../media/sheerID.webp";
import upostImg from "../media/upost.webp";

export const data = [
    {
        "text": "WatchOS Crossfit Timer built using SwiftUI \n\n Has different types of timers such as EMOM, and AMRAP",
        "label": "WatchOS XFit Timer",
        "img": appleWatchImg
    },
    {
        "label": "This Portfolio Site",
        "text": "Built using React, and a small API using Flask to handle the contact forum",
        "img": portraitImg,
        "link1": {
            "url": "https://github.com/mt-22/mt-portfolio-client",
            "label": "Client"
        },
        "link2": {
            "url":  "https://github.com/mt-22/mt-portfolio-api",
            "label": "API"
        }
    },
    {
        "label": "SheerID ROI Calculator",
        "text": "ROI calculator built using React.ts \n Given to potential customers to increase sales",
        "img": sheerIDImg
    },
    {
        "label": "Uni_Post Forum App",
        "text": "University private forum app\nBuilt using React.ts, Flask, SQLAlchemy, and AWS S3\nSession based auth, dynamic image compression",
        "img": upostImg,
        "link1": {
            "url": "https://github.com/mt-22/uni_forum",
            "label": "Github"
        }
    },
]