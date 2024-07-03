import lumbze1 from "../assets/images/projects/lumbze/s1.webp"
import lumbze2 from "../assets/images/projects/lumbze/s2.webp"
import lumbze3 from "../assets/images/projects/lumbze/s3.webp"
import lumbze4 from "../assets/images/projects/lumbze/s4.webp"
import lumbze5 from "../assets/images/projects/lumbze/s5.webp"
import lumbze6 from "../assets/images/projects/lumbze/s6.webp"
import lumbzeMockup from "../assets/images/projects/lumbze/mockup.webp"

import lot1 from "../assets/images/projects/lot/s1.webp"
import lot2 from "../assets/images/projects/lot/s2.webp"
import lot3 from "../assets/images/projects/lot/s3.webp"
import lot4 from "../assets/images/projects/lot/s4.webp"
import lot5 from "../assets/images/projects/lot/s5.webp"
import lot6 from "../assets/images/projects/lot/s6.webp"
import lotMockup from "../assets/images/projects/lot/mockup.webp"

import vts1 from "../assets/images/projects/videoToStyles/s1.webp"
import vts2 from "../assets/images/projects/videoToStyles/s2.webp"
import vts3 from "../assets/images/projects/videoToStyles/s3.webp"
import vts4 from "../assets/images/projects/videoToStyles/s4.webp"
import vts5 from "../assets/images/projects/videoToStyles/s5.webp"
import vtsMockup from "../assets/images/projects/videoToStyles/mockup.webp"

import seam1 from "../assets/images/projects/seam/source1.webp"
import seam2 from "../assets/images/projects/seam/output1.webp"
import seam3 from "../assets/images/projects/seam/source2.webp"
import seam4 from "../assets/images/projects/seam/output2.webp"
import seamMockup from "../assets/images/projects/seam/mockup.webp"

import ios1 from "../assets/images/projects/ios/s1.webp"
import ios2 from "../assets/images/projects/ios/s2.webp"
import ios3 from "../assets/images/projects/ios/s3.webp"
import ios4 from "../assets/images/projects/ios/s4.webp"
import iosMockup from "../assets/images/projects/ios/mockup.webp"


import scara1 from "../assets/images/projects/scara/screenshot1.webp"
import scara2 from "../assets/images/projects/scara/screenshot2.webp"
import scaraMockup from "../assets/images/projects/scara/mockup.webp"

import tetrisMockup from "../assets/images/projects/tetris/mockup.webp"
import { StaticImageData } from "next/image"

export interface ImageGalleryItem {
  type: "image" | "video";
  name: string;
  image?: StaticImageData; // tylko dla type: "image"
  src?: string; // tylko dla type: "video"
}

export interface VideoToStylesData extends ImageGalleryItem {
  type: "image" | "video";
  name: string;
  image?: StaticImageData; // tylko dla type: "image"
  src?: string; // tylko dla type: "video"
}

// Definicje danych dla poszczególnych projektów
export const lumbzeData: ImageGalleryItem[] = [
  { type: "image", name: "Home", image: lumbze1 },
  { type: "image", name: "Game screen", image: lumbze2 },
  { type: "image", name: "Options", image: lumbze3 },
  { type: "image", name: "Game Help", image: lumbze4 },
  { type: "image", name: "Shop", image: lumbze5 },
  { type: "image", name: "Stats", image: lumbze6 }
];

export const lotData: ImageGalleryItem[] = [
  { type: "image", name: "Splash Screen", image: lot1 },
  { type: "image", name: "Login", image: lot2 },
  { type: "image", name: "Home", image: lot3 },
  { type: "image", name: "Stats", image: lot4 },
  { type: "image", name: "Plan Of The Day", image: lot5 },
  { type: "image", name: "Menu Light Mode", image: lot6 }
];

export const vtsData: VideoToStylesData[] = [
  { type: "image", name: "ASCII 1", image: vts1 },
  { type: "image", name: "ASCII 2", image: vts2 },
  { type: "image", name: "Dots 1", image: vts3 },
  { type: "image", name: "Dots 2", image: vts4 },
  { type: "image", name: "Dots 3", image: vts5 },
  { type: "video", name: "Demo", src: "videos/projects/videoToStyles/demo" },
];

export const seamData: ImageGalleryItem[] = [
  { type: "image", name: "Before 1", image: seam1 },
  { type: "image", name: "After 1", image: seam2 },
  { type: "video", name: "After 1", src: "videos/projects/seam/output1" },
  { type: "image", name: "Before 2", image: seam3 },
  { type: "image", name: "After 2", image: seam4 },
  { type: "video", name: "After 2", src: "videos/projects/seam/output2" },
];

export const iosData: ImageGalleryItem[] = [
  { type: "image", name: "Screenshot 1", image: ios1 },
  { type: "image", name: "Screenshot 2", image: ios2 },
  { type: "image", name: "Screenshot 3", image: ios3 },
  { type: "image", name: "Screenshot 4", image: ios4 },
];

export const scaraData: ImageGalleryItem[] = [
  { type: "image", name: "Screenshot 1", image: scara1 },
  { type: "image", name: "Screenshot 2", image: scara2 }
];
export interface Project {
  id?: number,
  title?: string;
  shortDescription?: string;
  description?: string[];
  features?: string[];
  githubLink?: string;
  badges?: {
    link: string;
    alt: string;
  }[];
  gallery?: ImageGalleryItem[]; // używamy interfejsu ImageGalleryItem
  preview?: StaticImageData;
  createdAt?: string;
  styles?: string;
  inDiv?: boolean;
  mobile?: boolean; // opcjonalny parametr dla projektów mobilnych
  github?: boolean
}

// Dane dla poszczególnych stron projektów
export const scaraPage: Project = {
  id: 1,
  title: "Scara Arm",
  shortDescription: "The Ktor server app lets users control a SCARA arm through a web interface, allowing movements and command execution.",
  description: [
    "Ktor server app to controll scara arm. App allows free movement, load and execute " +
    "commands written in G-Code(simple movement at now). Every user have own account and " +
    "files stored in h2 database.",
    "User interface is a website with Three.js to display arm and allow user to interact. I use " +
    "Kotlin code to control the arm, it connects to the port and communicates with arduino. " +
    "There is also special function to translate G-Code to my \"Scara Code\". From other side is " +
    "arduino which control motors and communicate with server. Server is a simple orangePi " +
    "board with Ubuntu server"
  ],
  features: [
    "moving the robotic arm manually (only on a computer).",
    "moving robotic arm by G-Code file.",
    "visualization of the G-Code file, arm movement.",
    "accounts and private files."
  ],
  githubLink: "https://github.com/VoidSamuraj/ScaraArm",
  badges: [
    { link: "https://img.shields.io/badge/Kotlin-1.8.21-purple", alt: "Kotlin 1.8.21" },
    { link: "https://img.shields.io/badge/Ktor-2.3.1-purple?color=5300EB", alt: "Ktor 2.3.1" },
    { link: "https://img.shields.io/badge/Three.js-r152-yellow?color=ffc107", alt: "Three.js r152" },
    { link: "https://img.shields.io/badge/H2-2.1.214-green", alt: "H2 2.1.214" },
    { link: "https://img.shields.io/badge/exposed-0.41.1-green?color=008B02", alt: "Exposed 0.41.1" },
  ],
  gallery: scaraData,
  preview: scaraMockup,
  createdAt: "2023 - Now",
  styles: "desktopGallery fixedSize",
  inDiv: true
};
export const lumbzePage: Project = {
  id: 2,
  title: "Lumbze",
  shortDescription: "A simple game where you solve circular mazes, earn points, and compete with others.",
  description: [
    "Simple game where you solve circular mazes, earn points and can unlock new ball styles and see the best on the podium.",
    "App written with Jetpack Compose and Using ViewModel. Authentification is delivered by Google. " +
    "App uses Firebase and Room Database to store data. There is also playing music by AudioManager and MediaPlayer.",
    "This app is a step further in building clean code, Room Database and ViewModel is a great improvement from my previous app. " +
    "Different approach in app building allowed me to create app faster."
  ],
  features: [
    "JetpackCompose",
    "MVVM",
    "Room Database",
    "Firebase"
  ],
  githubLink: "https://github.com/VoidSamuraj/Lumbze",
  badges: [
    { link: "https://img.shields.io/badge/jetpack_compose-1.3.0-green", alt: "Jetpack Compose 1.3.0" },
    { link: "https://img.shields.io/badge/Kotlin-1.7.10-purple", alt: "Kotlin 1.7.10" },
    { link: "https://img.shields.io/badge/minSdkVersion-28-blue", alt: "minSdk 28" },
    { link: "https://img.shields.io/badge/targetSdkVersion-33-blue", alt: "targetSdk 33" },
  ],
  gallery: lumbzeData,
  preview: lumbzeMockup,
  createdAt: "2023 - 2024",
  styles: "phoneGallery",
  mobile: true,
};

// Strona Lord Of Time
export const lotPage: Project = {
  id: 3,
  title: "Lord Of Time",
  shortDescription: "This planner app helps you manage time, create tasks, set routines, and receive notifications, with access to data across devices and insightful usage charts.",
  description: [
    "The app is designed to help you manage your time more effectively. You can use it to create " +
    "tasks, categorize them, and set start and end times. The app allows you to establish " +
    "routines and receive notifications on your device. It provides statistics on today's work " +
    "time, charts for comparing previous dates, and a chart showing your app usage over the last " +
    "24 hours. You can also enter your birth date and set an estimated timeline to remind you of " +
    "the passing of time. Additionally, the app offers the option to create an account and access " +
    "your data from any device.",
    "My first project in Kotlin, using XML. Data is stored on device by SQLite and on Firebase " +
    "server. To notify user I used services. I made charts by extending View class. I also added " +
    "scrollable view which allows to add task when clicked.",
    "It was my first big project, which allowed me to learned a lot about views, services and android overall."
  ],
  features: [
    "create own account and log in on different devices.",
    "create and track tasks.",
    "set task repetition.",
    "set categories for tasks.",
    "set your daily goals and track progress.",
    "notification when it's time for a task."
  ],
  githubLink: "https://github.com/VoidSamuraj/LordOfTime",
  badges: [
    { link: "https://img.shields.io/badge/Kotlin-1.7.10-purple", alt: "Kotlin 1.7.10" },
    { link: "https://img.shields.io/badge/XML-BE3144", alt: "XML" },
    { link: "https://img.shields.io/badge/minSdkVersion-26-blue", alt: "minSdk 26" },
    { link: "https://img.shields.io/badge/targetSdkVersion-30-blue", alt: "targetSdk 30" },
  ],
  gallery: lotData,
  preview: lotMockup,
  createdAt: "2022",
  styles: "phoneGallery phoneSmall horizontalGallery",
  mobile: true,
};

// Strona VideoToStyles
export const vtsPage: Project = {
  id: 4,
  title: "VideoToStyles",
  shortDescription: "App to change video style to ascii/dots.",
  description: ["JavaFx application changing video style to ascii/dots. Uses OpenCv and ffmpeg."],
  features: ["Transform video to different styles.", "Preview applied style to selected frame.", "Adjust style settings."],
  githubLink: "https://github.com/VoidSamuraj/VideoToStyles",
  badges: [{ link: "https://img.shields.io/badge/JavaFX-blue", alt: "JavaFX" }, { link: "https://img.shields.io/badge/OpenCV-red", alt: "OpenCV" }],
  gallery: vtsData,
  preview: vtsMockup,
  createdAt: "2023",
  styles: "desktopGallery desktopGalleryThick fixedSize",
  inDiv: true
};

// Strona Image Seam
export const seamPage: Project = {
  id: 5,
  title: "Image Seam",
  shortDescription: "Changing image size by using seam.Code removes less significant pixels in least significant path in selected direction.",
  description: [
    "Changing image size by using seam.",
    "Code removes less significant pixels in least significant path in selected direction.",
    "Based on Princeton Algorithms, Part II course",
    `More info:
        <a href="https://coursera.cs.princeton.edu/algs4/assignments/seam/specification.php" target="_blank" style={{ padding: "0px 10px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>Specification</a>
        <a href="https://www.youtube.com/watch?v=6NcIJXTlugc" target="_blank" style={{ padding: "0px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>YouTube example</a>
      `
  ],
  features: [],
  githubLink: "https://github.com/VoidSamuraj/Image-Seam",
  badges: [{ link: "https://img.shields.io/badge/Java-blue", alt: "Java" }],
  gallery: seamData,
  preview: seamMockup,
  createdAt: "2023",
  styles: "desktopGallery fixedSize desktopGalleryNoScale",
  inDiv: true
};

// Strona Blockout (Tetris)
export const tetrisPage: Project = {

  id: 6,
  title: "Blockout",
  shortDescription: "3D Tetris made by pure html canvas and js.",
  description: ["3D Tetris made by pure html canvas and js."],
  features: [
    "Rotation works along 3 axis.",
    "movement- arrows",
    "rotation- a,d,w,s,q,e",
    "move forward- space"
  ],
  githubLink: "https://github.com/VoidSamuraj/Blockout",
  gallery: [{ type: "video", name: "Demo", src: "videos/projects/tetris/demo" }],
  preview: tetrisMockup,
  createdAt: "2021",
  badges: [{ link: "https://img.shields.io/badge/HTML-orange", alt: "HTML" }, { link: "https://img.shields.io/badge/JavaScript-yellow", alt: "JavaScript" }, { link: "https://img.shields.io/badge/CSS-blue", alt: "CSS" }],
  styles: "desktopGallery desktopGalleryThick",
};

// Strona iOS Planner
export const iosPage: Project = {
  id: 0,
  title: "iOS Planner",
  shortDescription: "Simple iOS app for planning tasks.",
  description: [
    "Simple iOS app for planning tasks.",
    "My first iOS app"
  ],
  features: [
    "calendar view which automatically filters tasks for selected day",
    "task have assigned category",
    "tasks and categories can be added and edited",
    "data is stored by CoreData"
  ],
  gallery: iosData,
  badges: [{ link: "https://img.shields.io/badge/Swift-orange", alt: "Swift" }],
  preview: iosMockup,
  createdAt: "2024",
  styles: "ios",
  mobile: true
};

// Strona GitHub
export const githubPage: Project = {
  title: "See more on my GitHub",
  githubLink: "https://github.com/VoidSamuraj",
  github: true
};
