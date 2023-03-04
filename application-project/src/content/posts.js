/*
    Post Types:
        - break
        - selfcare
        - image
*/

const samplePosts = [
    {
        id: 1,
        title: "Enjoying Bloomscroll?",
        img: "./images/flowers1.jpg",
        type: "break",
        body: "Are you using Bloomscroll to avoid doing something else? If so, consider this your reminder to close the app and get it done!"
    },
    {
        id: 2,
        title: "Rest Stop",
        img: "./images/campfire.png",
        type: "break",
        body: "Remember to unclench your jaw, shoulders, and anywhere else you might be holding tension. "
    },
    {
        id: 3,
        title: "Feeling tired?",
        type: "selfcare",
        body: "Getting more sunlight can improve your mood and energy! Just 5-15 minutes a few times a day is enough to see a benefit.",
        source: "https://www.healthline.com/health/depression/benefits-sunlight#benefits"
    },
    {
        id: 4,
        type: "image",
        img: "./images/birdbranch.jpg"
    },
    {
        id: 5,
        type: "image",
        img: "./images/flowercat.jpg"
    },
    {
        id: 6,
        type: "image",
        img: "./images/flowerdog.png"
    },
    {
        id: 7,
        type: "image",
        img: "./images/grasschick.jpg"
    },
    {
        id: 8,
        type: "image",
        img: "./images/meadowcat.jpg",
    },
    {
        id: 9,
        type: "image",
        img: "./images/meadowchipmunk.jpg"
    },
    {
        id: 10,
        type: "image",
        img: "./images/sleepdog.jpg"
    },
    {
        id: 11,
        type: "image",
        img: "./images/sleepkitten.jpg"
    },
    {
        id: 12,
        title: "Remember to move!",
        type: "selfcare",
        body: "Have you moved today? If not, try to stretch your legs a little."
    },
    {
        id: 13,
        title: "Angry about something you saw online?",
        type: "selfcare",
        body: "We are more likely to react, comment and share things we find online that upset us, rather than things we like. Social media platforms know this, so they will often show you things they think will make you angry. If you find yourself getting upset or worked up on social media, try to close the app and do something else."
    },
    {
        id: 14,
        title: "Remember to hydrate!",
        type: "selfcare",
        body: "If you haven't drank any water in the last little while, take this as an opportunity to do so."
    },
    {
        id: 15,
        title: "Feeling burnt out?",
        type: "selfcare",
        body: "Feeling exhausted, irritable and isolated? You may be experiencing burnout. Exercise, reaching out to friends and family, and prioritizing time for creative pursuits may help alleviate some of those feelings.",
        source: "https:/,/www.healthline.com/health/mental-health/burnout-recovery"
    },
    {
        id: 16,
        title: "Remember to treat yourself with self-compassion",
        type: "selfcare",
        body: "Sometimes, we are our own harshest critics. When you're feeling low, try to take a moment to notice the way you talk to yourself in those moments. If a friend was going through the same thing, what would you say to them? Try speaking to yourself the same way you'd talk to someone you love.",
        source: "https://positivepsychology.com/how-to-practice-self-compassion/"
    },
    {
        id: 17,
        title: "Movie trailers used to play after the movie",
        type: "trivia",
        body: "This is why they were called \"trailers\" - because they trailed the film. Between the 1920s and 1940s, when it was typical for two movies to play, trailers for other films would be shown after the first one.",
        source: "https://forgottenhistoryblog.com/movie-trailers-werent-always-shown-before-films/"
    },
    {
        id: 18,
        title: "Email existed for twenty years before the world wide web",
        type: "trivia",
        body: "The earliest version of what would eventually become the internet was developed in the 1960s. Email has been around since 1971, but the World Wide Web has only existed since 1991.",
        source: "https://study.com/academy/lesson/what-is-the-history-of-the-internet-origins-timeline.html"
    },
    {
        id: 19,
        title: "The smallest weasel is called the 'least weasel'",
        type: "trivia",
        body: "It's also the smallest carnivore in North America. The name makes sense - this is the least weasel you can have while still having a weasel! They weigh only a few ounces, and are less than 10 inches (25cm) long.",
        source: "https://fieldguide.mt.gov/speciesDetail.aspx?elcode=AMAJF02020"
    },
    {
        id: 20,
        title: "The worst video game ever made",
        type: "trivia",
        body: "The Atari game E.T., based on the movie is considered to be one of the worst video games ever made. In fact, in 1983, Atari buried thousands of copies of it in a New Mexico landfill.",
        source: "https://www.theguardian.com/film/2015/jan/30/a-golden-shining-moment-the-true-story-behind-et-the-worst-video-game-ever"

    }

]

export default samplePosts;