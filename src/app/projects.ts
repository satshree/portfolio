import mis from "../assets/projects/make-it-secret/shot.png";
import ra from "../assets/projects/random-apps/shot.png";
import icc from "../assets/projects/image-converter-compressor/shot.png";

const projects = [
  {
    title: "Make It Secret",
    description: `Make It Secret encrypts any file with a strong AES (American Encryption Standard) Encryption Algorithm. As a web app, Make It Secret is accessible through any platform. A simple solution for file encryption.\n\nWith Make It Secret, you can make any files inaccessible and of course, only you can decrypt them with your key!\n\nEver wanted to hide some files from others? This is the app for you.`,
    techStack: ["Django", "Next.js", "Chakra UI"],
    images: [mis],
  },
  {
    title: "Random Apps",
    description: `Random apps you never thought you needed... but you do... trust me...\n\nIt was some random day when I thought what if we had this random app that could do something you wanted to at the moment? This led me to build this app.`,
    techStack: ["Next.js", "Blueprint.js"],
    images: [ra],
  },
  {
    title: "Image Converter/Compressor",
    description: `It is a simple app that allows users to upload an image and compress it or convert it from JPEG to PNG and vice versa.`,
    techStack: ["Django", "HTML/CSS/JavaScript"],
    images: [icc],
  },
];

export default projects;
