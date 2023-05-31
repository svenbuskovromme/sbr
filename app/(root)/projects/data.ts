import { Project } from "./types";

export const projects: readonly Project[] = [
    {
        title: "Jungle",
        description: 'A product centered around food discovery. \n Find recommendations from culinary professionals',
        role: {
            from: 'sep 2021',
            to: 'feb 2023',
            title: 'CTO & Developer',
            description: 'Starting out as CTO in Jungle was a heavy tech task, but later transitioned into a 50/50 product position, as it was clear the two go hand in hand. While you can build anything on the tech side, but everything flows much better if product decisions are made in a tech "aware" context. \nOur team started out as roughly 10 people, and 3 towards the end of my employment.'
        },
      apps: [
        {
          name: 'Native', 
          description: 'The app was built to support wider functionality than IG and Web, and greater user retention',
          features: [
            "Home/discover screen",
            "Weekly updated list of events",
            "\"Official\" lists for popular topics",
            "Push notifications on updates",
            "A highly customised map of all the recommendations (built in mapbox)",
            "A fully indexed search system with fine grained tags and free text support",
            "Screens to read more about places in the city, or people",
            "All the above for each major city / food scene",
            "User profiles",
            "Personalised lists, to save and organise recommendations",
          ],
          url: 'https://apps.apple.com/dk/app/apple-store/id1574546669', 
          stack: {
            database: 'postgresql',
            backend: 'nextjs',
            frontend: 'react native',
          },
          role: {
            from: 'sep 2021',
            to: 'feb 2023',
            title: 'Fullstack',
            description: 'Tech wise the app was built solo by me, with designs done separately. We went through at least 4 iterations of this app, each very different from each other. The map was once built in Unity with shaders from scratch, embedded in a view through React native, for example',
          },
        },
        {
          name: 'Web', 
          description: 'The web product was introduced to create SEO traction, as well as deep links and shareability of recommendations',
          url: 'https://jungleapp.co',
          features: [
            "Home/discover screen",
            "Events calendar",
            "Screens to read more about places in the city, or people",
            "\"Official\" lists for popular topics",
          ],
          stack: {
            database: 'postgresql',
            backend: 'nextjs',
            frontend: 'nextjs',
          },
          role: {
            from: 'oct 2022',
            to: 'dec 2022',
            title: 'Fullstack',
            description: 'Again, tech built solo with the help of my trusted designer. This was a side hustle compared to the native app, built mainly to open us up to SEO as mentioned. So while it serves the purpose, it does not have the depth that I wanted for it.',
          },
        },
      ]
    },
    {
      title: 'eRegnskab',
      role: {
        from: 'oct 2016',
        to: 'sep 2021',
        title: 'Developer',
        description: 'While the individual roles describe will what I was doing on each product, the overall role can also be further described as a position with lots of responsibility. 5000+ employees relied on the native product, to know where to go to work the next morning, and 500+ company managers relied on the web product to plan ahead and pay out salaries. We built without testing, so once in a while, all the users would feel it, and our support staff would too. On the other hand, this meant fast iterations, and less time spent on admin. The users were left overall satisfied, and felt close to the machinery because of that. As developers, we\'d work individually on our projects with TFS as version control. \nAs I grew with the company, the team grew as well, and I had some unofficial responsibility in onboarding and managing new members (3-5 total over the course of the employment)'
      },
      description: 'A holistic digital accounting product, designed to offer better prices by leveraging the algorithmic nature of finances through automisation',
      apps: [
        {
          name: 'Web', 
          description: 'As per the feature list, this web app was designed to handle all the core company management. Salary, projects, invoicing, banking, employees and so much more.',
          url: 'https://hallerup.net', 
          features: [
            "Extensive company management tools, including essentialy everything in finance"
          ],
          stack: {
            database: 'mssql',
            backend: '.net',
            frontend: 'angular',
          },
          role: {
            from: 'oct 2016',
            to: 'sep 2021',
            title: 'Fullstack',
            description: 'My work was focused perhaps 70/30 on the native app for the first 1-2 years, but in the last 2 years we decided to migrate to an angular frontend, which meant much more effort put into the web frontend as well.'
          }
        },
        {
          name: 'Native', 
          description: 'The native app mainly served the role of letting employees register their hours, and keep track of their calendar and work in general.',
          url: 'https://e-regnskab.net', 
          features: [
            "Time registration",
            "Expenses",
            "Work overview",
          ],
          stack: {
            database: 'mssql',
            backend: '.net',
            frontend: 'cordova',
          },
          role: {
            from: 'oct 2016',
            to: 'sep 2021',
            title: 'Fullstack',
            description: 'When I started, it was my task to starting eating away at the backlog of bugs. Later on, I added features as well. For the 4 years I was there I was maintaining it alone.'
          }
        },
      ]
    },
    {
        title: 'Alpine Sled Style',
        description: 'A canadian duo, that normally sells equipment for snowmobiles, has started a yearly competition between professional snowmobile riders. They each upload a 1-2m video, and let the people decide which one is best. The winner takes home a cash prize',
        role: {
            from: 'sep 2022',
            to: 'dec 2022',
            title: 'Developer',
            description: 'Sled Style needed a person to prepare them for next competition, and I took up that task.',
        },
        apps: [{
            name: 'Web',
            description: 'Their website, where visitors would be funneled in from various social media channels, and allowed to watch/vote their favorite riders',
            features: [
                "Video player",
                "Sign up - Google/Apple/Email",
                "Vote system",
                "Small webshop - simple redirect to main site",
            ],
            stack: {
                database: 'postgresql',
                backend: 'nextjs',
                frontend: 'nextjs',
            },
            url: 'https://sledstyle.com'
        }]
    }
  ];