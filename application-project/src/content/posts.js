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
    }
]

export default samplePosts;