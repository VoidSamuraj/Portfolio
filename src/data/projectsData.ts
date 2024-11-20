import lumbze1 from "../assets/images/projects/lumbze/s1.webp";
import lumbze2 from "../assets/images/projects/lumbze/s2.webp";
import lumbze3 from "../assets/images/projects/lumbze/s3.webp";
import lumbze4 from "../assets/images/projects/lumbze/s4.webp";
import lumbze5 from "../assets/images/projects/lumbze/s5.webp";
import lumbze6 from "../assets/images/projects/lumbze/s6.webp";
import lumbzeMockup from "../assets/images/projects/lumbze/mockup.webp";

import lot1 from "../assets/images/projects/lot/s1.webp";
import lot2 from "../assets/images/projects/lot/s2.webp";
import lot3 from "../assets/images/projects/lot/s3.webp";
import lot4 from "../assets/images/projects/lot/s4.webp";
import lot5 from "../assets/images/projects/lot/s5.webp";
import lot6 from "../assets/images/projects/lot/s6.webp";
import lotMockup from "../assets/images/projects/lot/mockup.webp";

import vts1 from "../assets/images/projects/videoToStyles/s1.webp";
import vts2 from "../assets/images/projects/videoToStyles/s2.webp";
import vts3 from "../assets/images/projects/videoToStyles/s3.webp";
import vts4 from "../assets/images/projects/videoToStyles/s4.webp";
import vts5 from "../assets/images/projects/videoToStyles/s5.webp";
import vtsMockup from "../assets/images/projects/videoToStyles/mockup.webp";

import seam1 from "../assets/images/projects/seam/source1.webp";
import seam2 from "../assets/images/projects/seam/output1.webp";
import seam3 from "../assets/images/projects/seam/source2.webp";
import seam4 from "../assets/images/projects/seam/output2.webp";
import seamMockup from "../assets/images/projects/seam/mockup.webp";

import ios1 from "../assets/images/projects/ios/s1.webp";
import ios2 from "../assets/images/projects/ios/s2.webp";
import ios3 from "../assets/images/projects/ios/s3.webp";
import ios4 from "../assets/images/projects/ios/s4.webp";
import iosMockup from "../assets/images/projects/ios/mockup.webp";

import swpfoWebLogin from "../assets/images/projects/swpfo/loginwww.webp";
import swpfoWebMap from "../assets/images/projects/swpfo/wwwmap.webp";
import swpfoWebMenu from "../assets/images/projects/swpfo/wwwmenus.webp";
import swpfoWebAssign from "../assets/images/projects/swpfo/wwwassign.webp";
import swpfoWebStat from "../assets/images/projects/swpfo/wwwstat.webp";
import swpfoWebAdmin from "../assets/images/projects/swpfo/wwwadmin.webp";
import swpfoMobileClient from "../assets/images/projects/swpfo/client.webp";
import swpfoMobileGuard from "../assets/images/projects/swpfo/guard.webp";

import swpfoMockup from "../assets/images/projects/swpfo/mockup.webp";

import scara1 from "../assets/images/projects/scara/screenshot1.webp";
import scara2 from "../assets/images/projects/scara/screenshot2.webp";
import scara3 from "../assets/images/projects/scara/screenshot3.webp";
import scara4 from "../assets/images/projects/scara/screenshot4.webp";
import scara5 from "../assets/images/projects/scara/screenshot5.webp";
import scara6 from "../assets/images/projects/scara/screenshot6.webp";
import scara7 from "../assets/images/projects/scara/screenshot7.webp";
import scaraMockup from "../assets/images/projects/scara/mockup.webp";

import tetrisMockup from "../assets/images/projects/tetris/mockup.webp";
import { StaticImageData } from "next/image";

export interface ImageGalleryItem {
  type: "image" | "video";
  name: string;
  image?: StaticImageData; // only for: "image"
  src?: string; // only for: "video"
}

export interface VideoToStylesData extends ImageGalleryItem {
  type: "image" | "video";
  name: string;
  image?: StaticImageData; // only for: "image"
  src?: string; // only for: "video"
}

export const swpfoData: ImageGalleryItem[] = [
  { type: "image", name: "Client", image: swpfoMobileClient },
  { type: "image", name: "Guard", image: swpfoMobileGuard },
  { type: "image", name: "Login", image: swpfoWebLogin },
  { type: "image", name: "Map", image: swpfoWebMap },
  { type: "image", name: "Menu", image: swpfoWebMenu },
  { type: "image", name: "Assign", image: swpfoWebAssign },
  { type: "image", name: "Stat", image: swpfoWebStat },
  { type: "image", name: "Admin", image: swpfoWebAdmin },
];

export const lumbzeData: ImageGalleryItem[] = [
  { type: "image", name: "Home", image: lumbze1 },
  { type: "image", name: "Game screen", image: lumbze2 },
  { type: "image", name: "Options", image: lumbze3 },
  { type: "image", name: "Game Help", image: lumbze4 },
  { type: "image", name: "Shop", image: lumbze5 },
  { type: "image", name: "Stats", image: lumbze6 },
];

export const lotData: ImageGalleryItem[] = [
  { type: "image", name: "Splash Screen", image: lot1 },
  { type: "image", name: "Login", image: lot2 },
  { type: "image", name: "Home", image: lot3 },
  { type: "image", name: "Stats", image: lot4 },
  { type: "image", name: "Plan Of The Day", image: lot5 },
  { type: "image", name: "Menu Light Mode", image: lot6 },
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
  { type: "image", name: "Screenshot 2", image: scara2 },
  { type: "image", name: "Screenshot 3", image: scara3 },
  { type: "image", name: "Screenshot 4", image: scara4 },
  { type: "image", name: "Screenshot 5", image: scara5 },
  { type: "image", name: "Screenshot 6", image: scara6 },
  { type: "image", name: "Screenshot 7", image: scara7 },
];
export interface Project {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string[];
  features?: string[];
  githubLink?: string;
  badges?: {
    link: string;
    alt: string;
  }[];
  gallery?: ImageGalleryItem[];
  preview?: StaticImageData;
  createdAt?: string;
  styles?: string;
  inDiv?: boolean;
  mobile?: boolean;
  github?: boolean;
}

// En - locale

export const swpfoPageEn: Project = {
  id: 1,
  title: "A system supporting the work of a security company",
  shortDescription: "Quick emergency calls and real-time patrol assignment.",
  description: [
    "The SOS app supports security companies by enabling quick SOS reporting, patrol assignment, and real-time tracking of those needing help.",
  ],
  features: [
    "SOS: Quickly report emergencies via the SOS button.",
    "Location: Real-time tracking of clients and patrols.",
    "Patrol Assignment: Automatic and manual patrol assignment.",
    "Patrol Interface: Simple interface for guards with Built-in Navigation.",
    "Intuitive UI: Easy-to-use interface.",
    "Secure Communication: HTTPS and WSS encryption.",
    "Notifications: Guards and dispatchers receive notifications.",
    "Connection: The connection to the system is tracked and its status is updated, in case of disconnection an attempt is made to reconnect.",
  ],
  badges: [
    {
      link: "https://img.shields.io/badge/Kotlin-2.0.10-purple",
      alt: "Kotlin 2.0.10",
    },
    {
      link: "https://img.shields.io/badge/Ktor-2.3.12-purple?color=5300EB",
      alt: "Ktor 2.3.12",
    },
    {
      link: "https://img.shields.io/badge/Exposed-0.53.0-green?color=008B02",
      alt: "Exposed 0.53.0",
    },
    {
      link: "https://img.shields.io/badge/Docker-24.0.7-blue",
      alt: "Docker 24.0.7",
    },
    { link: "https://img.shields.io/badge/AWS-Cloud-orange", alt: "AWS Cloud" },
    {
      link: "https://img.shields.io/badge/HTTPS-Secure-green?color=008B02",
      alt: "HTTPS Secure",
    },
    {
      link: "https://img.shields.io/badge/WebSocket-WSS-blue?color=1E90FF",
      alt: "WebSocket WSS",
    },
    {
      link: "https://img.shields.io/badge/JWT-Secure-blue?color=008B8B",
      alt: "JWT Secure",
    },
    {
      link: "https://img.shields.io/badge/PostgreSQL-16.3-blue?color=336791",
      alt: "PostgreSQL 16.3",
    },
    {
      link: "https://img.shields.io/badge/React-18.3.1-blue?color=61DAFB",
      alt: "React 18.3.1 ",
    },
    {
      link: "https://img.shields.io/badge/Webpack-5.94.0-grey?color=8DD6F9",
      alt: "Webpack 5.94.0",
    },
    {
      link: "https://img.shields.io/badge/Google_Maps-API-red?color=EA4335",
      alt: "Google Maps API",
    },
    {
      link: "https://img.shields.io/badge/Mapbox-API-0073e6",
      alt: "Mapbox API",
    },
    {
      link: "https://img.shields.io/badge/Jetpack_Compose-1.4.3-purple?color=5C2D91",
      alt: "Jetpack Compose 1.4.3",
    },
    {
      link: "https://img.shields.io/badge/minSdk_33-%233DDC84",
      alt: "minSdk 33",
    },
    {
      link: "https://img.shields.io/badge/targetSdk_34-%23008B02",
      alt: "targetSdk 34 ",
    },
    {
      link: "https://img.shields.io/badge/Retrofit-2.9.0-orange?color=FF4500",
      alt: "Retrofit 2.9.0",
    },
    {
      link: "https://img.shields.io/badge/SimpleJavaMail-8.11.3-blue?color=1E90FF",
      alt: "Simple Java Mail 8.11.3",
    },
    {
      link: "https://img.shields.io/badge/ViewModel-Android-green?color=3DDC84",
      alt: "ViewModel Android",
    },
    {
      link: "https://img.shields.io/badge/Location_Service-Background-%23008B02",
      alt: "Location Service Background",
    },
    {
      link: "https://img.shields.io/badge/Notifications-Android-purple?color=5C2D91",
      alt: "Notifications Android",
    },
  ],
  gallery: swpfoData,
  preview: swpfoMockup,
  createdAt: "08/2024 - Now",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};
export const scaraPageEn: Project = {
  id: 2,
  title: "Scara Arm",
  shortDescription:
    "The Ktor server app lets users control a SCARA arm through a web interface, allowing movements and command execution.",
  description: [
    "Ktor server app to control Scara arm. The app allows free movement, loading and execution " +
      "commands written in G-Code (simple movement at the moment). Every user has their own account and " +
      "files stored in the H2 database.",
    "The user interface is a website with Three.js to display arm and allow users to interact. I use " +
      "Kotlin code to control the arm, it connects to the port and communicates with Arduino. " +
      'There is also a special function to translate G-Code to my "Scara Code". From the other side is ' +
      "Arduino which controls motors and communicates with the server. Server is a simple orangePi " +
      "board with an Ubuntu server",
  ],
  features: [
    "moving the robotic arm manually (only on a computer)",
    "moving robotic arm by G-Code file",
    "visualization of the G-Code file, arm movement",
    "accounts and private files",
  ],
  githubLink: "https://github.com/VoidSamuraj/ScaraArm",
  badges: [
    {
      link: "https://img.shields.io/badge/Kotlin-1.8.21-purple",
      alt: "Kotlin 1.8.21",
    },
    {
      link: "https://img.shields.io/badge/Ktor-2.3.1-purple?color=5300EB",
      alt: "Ktor 2.3.1",
    },
    {
      link: "https://img.shields.io/badge/Three.js-r152-yellow?color=ffc107",
      alt: "Three.js r152",
    },
    {
      link: "https://img.shields.io/badge/H2-2.1.214-green",
      alt: "H2 2.1.214",
    },
    {
      link: "https://img.shields.io/badge/exposed-0.41.1-green?color=008B02",
      alt: "Exposed 0.41.1",
    },
  ],
  gallery: scaraData,
  preview: scaraMockup,
  createdAt: "2023 - Now(On hold)",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};
export const lumbzePageEn: Project = {
  id: 3,
  title: "Lumbze",
  shortDescription:
    "A simple game where you solve circular mazes, earn points and compete with others.",
  description: [
    "Simple game where you solve circular mazes, earn points, unlock new ball styles and see the best on the podium.",
    "The app was written with Jetpack Compose and ViewModel. Authentification is delivered by Google. " +
      "The app uses Firebase and RoomDB to store data. There is also music being played by AudioManager and MediaPlayer.",
    "This app is a step further in building clean code. Room Database and ViewModel are a great improvement from my previous app. " +
      "Different approach in app building allowed me to create app faster.",
  ],
  features: ["JetpackCompose", "MVVM", "Room Database", "Firebase"],
  githubLink: "https://github.com/VoidSamuraj/Lumbze",
  badges: [
    {
      link: "https://img.shields.io/badge/jetpack_compose-1.3.0-green",
      alt: "Jetpack Compose 1.3.0",
    },
    {
      link: "https://img.shields.io/badge/Kotlin-1.7.10-purple",
      alt: "Kotlin 1.7.10",
    },
    {
      link: "https://img.shields.io/badge/minSdkVersion-28-blue",
      alt: "minSdk 28",
    },
    {
      link: "https://img.shields.io/badge/targetSdkVersion-33-blue",
      alt: "targetSdk 33",
    },
  ],
  gallery: lumbzeData,
  preview: lumbzeMockup,
  createdAt: "2023 - 2024",
  styles: "phoneGallery",
  mobile: true,
};

export const lotPageEn: Project = {
  id: 4,
  title: "Lord Of Time",
  shortDescription:
    "This planner app helps you manage time, create tasks, set routines and receive notifications, with access to data across devices and insightful usage charts.",
  description: [
    "The app is designed to help you manage your time more effectively. You can use it to create " +
      "tasks, categorize them and set start and end times. The app allows you to establish " +
      "routines and receive notifications on your device. It provides statistics on today's work, " +
      "time, charts for comparing previous dates and a chart showing your app usage over the last " +
      "24 hours. You can also enter your birth date and set an estimated timeline to remind you of " +
      "the passing of time. Additionally, the app offers the option to create an account and access " +
      "your data from any device.",
    "My first project in Kotlin, using XML. Data is stored on the device by SQLite and on Firebase. " +
      "To notify the user I used services. I made charts by extending the View class. I also added " +
      "scrollable view, which allows you to add task when clicked.",
    "It was my first big project, which allowed me to learn a lot about views, services and Android overall.",
  ],
  features: [
    "create own account and log in on different devices",
    "create and track tasks",
    "set task repetition",
    "set categories for tasks",
    "set your daily goals and track progress",
    "notification when it's time for a task and when it is finished",
  ],
  githubLink: "https://github.com/VoidSamuraj/LordOfTime",
  badges: [
    {
      link: "https://img.shields.io/badge/Kotlin-1.7.10-purple",
      alt: "Kotlin 1.7.10",
    },
    { link: "https://img.shields.io/badge/XML-BE3144", alt: "XML" },
    {
      link: "https://img.shields.io/badge/minSdkVersion-26-blue",
      alt: "minSdk 26",
    },
    {
      link: "https://img.shields.io/badge/targetSdkVersion-30-blue",
      alt: "targetSdk 30",
    },
  ],
  gallery: lotData,
  preview: lotMockup,
  createdAt: "2022",
  styles: "phoneGallery phoneSmall horizontalGallery",
  mobile: true,
};

export const vtsPageEn: Project = {
  id: 5,
  title: "VideoToStyles",
  shortDescription: "App to change video style to ascii/dots.",
  description: [
    "The JavaFx application changing video style to ascii/dots. Uses OpenCV and ffmpeg.",
  ],
  features: [
    "Transform the video into different styles.",
    "Preview the applied style to selected frame.",
    "Adjust style settings.",
  ],
  githubLink: "https://github.com/VoidSamuraj/VideoToStyles",
  badges: [
    { link: "https://img.shields.io/badge/JavaFX-blue", alt: "JavaFX" },
    { link: "https://img.shields.io/badge/OpenCV-red", alt: "OpenCV" },
  ],
  gallery: vtsData,
  preview: vtsMockup,
  createdAt: "2023",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};

export const seamPageEn: Project = {
  id: 6,
  title: "Image Seam",
  shortDescription:
    "Changing image size by using seam. Code removes less significant pixels in least significant path in selected direction.",
  description: [
    "Changing image size by using seam.",
    "Code removes less significant pixels in least significant path in selected direction.",
    "Based on Princeton Algorithms, Part II course",
    `More info:
        <a href="https://coursera.cs.princeton.edu/algs4/assignments/seam/specification.php" target="_blank" style={{ padding: "0px 10px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>Specification</a>
        <a href="https://www.youtube.com/watch?v=6NcIJXTlugc" target="_blank" style={{ padding: "0px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>YouTube example</a>
      `,
  ],
  features: [],
  githubLink: "https://github.com/VoidSamuraj/Image-Seam",
  badges: [{ link: "https://img.shields.io/badge/Java-blue", alt: "Java" }],
  gallery: seamData,
  preview: seamMockup,
  createdAt: "2023",
  styles: "desktopGallery fixedSize desktopGalleryNoScale",
  inDiv: true,
};

export const tetrisPageEn: Project = {
  id: 7,
  title: "Blockout",
  shortDescription: "3D Tetris made by pure html canvas and js.",
  description: ["3D Tetris made by pure html canvas and js."],
  features: [
    "Rotation works along 3 axis.",
    "movement- arrows",
    "rotation- a,d,w,s,q,e",
    "move forward- space",
  ],
  githubLink: "https://github.com/VoidSamuraj/Blockout",
  gallery: [
    { type: "video", name: "Demo", src: "videos/projects/tetris/demo" },
  ],
  preview: tetrisMockup,
  createdAt: "2021",
  badges: [
    { link: "https://img.shields.io/badge/HTML-orange", alt: "HTML" },
    {
      link: "https://img.shields.io/badge/JavaScript-yellow",
      alt: "JavaScript",
    },
    { link: "https://img.shields.io/badge/CSS-blue", alt: "CSS" },
  ],
  styles: "desktopGallery fixedSize",
};

export const iosPageEn: Project = {
  id: 0,
  title: "iOS Planner",
  shortDescription: "Simple iOS app for planning tasks.",
  description: ["Simple iOS app for planning tasks.", "My first iOS app"],
  features: [
    "calendar view, which automatically filters tasks for selected day",
    "task has an assigned category",
    "tasks and categories can be added and edited",
    "data is stored by CoreData",
  ],
  gallery: iosData,
  badges: [{ link: "https://img.shields.io/badge/Swift-orange", alt: "Swift" }],
  preview: iosMockup,
  createdAt: "2024",
  styles: "ios",
  mobile: true,
};

export const githubPageEn: Project = {
  title: "See more on my GitHub",
  githubLink: "https://github.com/VoidSamuraj",
  github: true,
};

// Pl - locale
export const swpfoPagePl: Project = {
  id: 1,
  title: "System wspomagający pracę firmy ochroniarskiej",
  shortDescription:
    "Szybkie wezwanie pomocy i przypisywanie patroli w czasie rzeczywistym.",
  description: [
    "Aplikacja SOS wspiera firmy ochroniarskie, umożliwiając szybkie zgłoszenie SOS, przypisanie patroli oraz śledzenie lokalizacji osób potrzebujących pomocy w czasie rzeczywistym.",
  ],
  features: [
    "SOS: Szybkie zgłaszanie sytuacji kryzysowych przez przycisk SOS.",
    "Lokalizacja: Śledzenie lokalizacji klientów i patroli.",
    "Przydział patroli: Automatyczne i ręczne przypisanie patroli.",
    "Interfejs patrolowy: Prosty interfejs dla ochroniarzy zawierający wbudowaną nawigację.",
    "Intuicyjny UI: Łatwy w obsłudze interfejs.",
    "Bezpieczna komunikacja: HTTPS i WSS dla szyfrowania.",
    "Powiadomienia: Ochroniarze i dyspozytorzy otrzymują powiadomienia.",
    "Połączenie: Połączenie z systemem jest śledzone i aktualizowany jego status, w przypadku rozłączenia następuje próba ponownego nawiązania kontaktu.",
  ],
   badges: [
      {
        link: "https://img.shields.io/badge/Kotlin-2.0.10-purple",
        alt: "Kotlin 2.0.10",
      },
      {
        link: "https://img.shields.io/badge/Ktor-2.3.12-purple?color=5300EB",
        alt: "Ktor 2.3.12",
      },
      {
        link: "https://img.shields.io/badge/Exposed-0.53.0-green?color=008B02",
        alt: "Exposed 0.53.0",
      },
      {
        link: "https://img.shields.io/badge/Docker-24.0.7-blue",
        alt: "Docker 24.0.7",
      },
      { link: "https://img.shields.io/badge/AWS-Cloud-orange", alt: "AWS Cloud" },
      {
        link: "https://img.shields.io/badge/HTTPS-Secure-green?color=008B02",
        alt: "HTTPS Secure",
      },
      {
        link: "https://img.shields.io/badge/WebSocket-WSS-blue?color=1E90FF",
        alt: "WebSocket WSS",
      },
      {
        link: "https://img.shields.io/badge/JWT-Secure-blue?color=008B8B",
        alt: "JWT Secure",
      },
      {
        link: "https://img.shields.io/badge/PostgreSQL-16.3-blue?color=336791",
        alt: "PostgreSQL 16.3",
      },
      {
        link: "https://img.shields.io/badge/React-18.3.1-blue?color=61DAFB",
        alt: "React 18.3.1 ",
      },
      {
        link: "https://img.shields.io/badge/Webpack-5.94.0-grey?color=8DD6F9",
        alt: "Webpack 5.94.0",
      },
      {
        link: "https://img.shields.io/badge/Google_Maps-API-red?color=EA4335",
        alt: "Google Maps API",
      },
      {
        link: "https://img.shields.io/badge/Mapbox-API-0073e6",
        alt: "Mapbox API",
      },
      {
        link: "https://img.shields.io/badge/Jetpack_Compose-1.4.3-purple?color=5C2D91",
        alt: "Jetpack Compose 1.4.3",
      },
      {
        link: "https://img.shields.io/badge/minSdk_33-%233DDC84",
        alt: "minSdk 33",
      },
      {
        link: "https://img.shields.io/badge/targetSdk_34-%23008B02",
        alt: "targetSdk 34 ",
      },
      {
        link: "https://img.shields.io/badge/Retrofit-2.9.0-orange?color=FF4500",
        alt: "Retrofit 2.9.0",
      },
      {
        link: "https://img.shields.io/badge/SimpleJavaMail-8.11.3-blue?color=1E90FF",
        alt: "Simple Java Mail 8.11.3",
      },
      {
        link: "https://img.shields.io/badge/ViewModel-Android-green?color=3DDC84",
        alt: "ViewModel Android",
      },
      {
        link: "https://img.shields.io/badge/Location_Service-Background-%23008B02",
        alt: "Location Service Background",
      },
      {
        link: "https://img.shields.io/badge/Notifications-Android-purple?color=5C2D91",
        alt: "Notifications Android",
      },
    ],
  gallery: swpfoData,
  preview: swpfoMockup,
  createdAt: "08/2024 - Obecnie",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};

export const scaraPagePl: Project = {
  id: 2,
  title: "Ramie SCARA",
  shortDescription:
    "Aplikacja na serwerze Ktor, pozwalająca sterować ramieniem przez stronę www.",
  description: [
    "Aplikacja serwerowa Ktor do sterowania ramieniem SCARA. Aplikacja pozwala na swobodne poruszanie ramieniem, załadowanie i wykonanie " +
      "komend G-Code(Narazie proste komendy). Każdy użytkownik ma własne pliki na swoim koncie " +
      "przechowywane w bazie danych H2.",
    "Interfejs stanowi strona www z wykorzystaniem Three.js, by wyświetlić ramie i pozwolić użytkownikowi na interakcję z nim. Aplikacja używa " +
      "kodu w Kotlinie do kontrolowania ramienia, łączenia się z portem i komunikacji z arduino. " +
      'Zawiera tam funkcję do zmiany G-Code do "Scara Code" obsługiwanego przez ramie. Po drugiej stronie jest ' +
      "arduino które kontroluje silniki i komunikuje się z serwerem. Serwer stanowi płytka orangePi " +
      "z Serwerem Ubuntu",
  ],
  features: [
    "swobodne poruszanie ramieniem (tylko przez komputer).",
    "poruszanie ramieniem przez plik G-Code.",
    "wizualizacja pliku G-Code i ruchu ramienia.",
    "konta i prywatne pliki.",
  ],
  githubLink: "https://github.com/VoidSamuraj/ScaraArm",
  badges: [
    {
      link: "https://img.shields.io/badge/Kotlin-1.8.21-purple",
      alt: "Kotlin 1.8.21",
    },
    {
      link: "https://img.shields.io/badge/Ktor-2.3.1-purple?color=5300EB",
      alt: "Ktor 2.3.1",
    },
    {
      link: "https://img.shields.io/badge/Three.js-r152-yellow?color=ffc107",
      alt: "Three.js r152",
    },
    {
      link: "https://img.shields.io/badge/H2-2.1.214-green",
      alt: "H2 2.1.214",
    },
    {
      link: "https://img.shields.io/badge/exposed-0.41.1-green?color=008B02",
      alt: "Exposed 0.41.1",
    },
  ],
  gallery: scaraData,
  preview: scaraMockup,
  createdAt: "2023 - Obecnie(Wstrzymano)",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};
export const lumbzePagePl: Project = {
  id: 3,
  title: "Lumbze",
  shortDescription:
    "Prosta gra, w której rozwiązujesz okrągły labirynt, zbierasz punkty, i konkurujesz z innymi.",
  description: [
    "Prosta gra, w której rozwiązujesz okrągły labirynt, zbierasz punkty, aby odblokować nowe style kulki i trafić na podium.",
    "Aplikacja napisana w Jetpack Compose z wykorzystaniem ViewModel. Autentyfikacja jest wykonywana z pomocą konta Google. " +
      "Aplikacja korzysta z Firebase i bazy danych Room. Jest także muzyka odtwarzana przez AudioManager i MediaPlayer.",
    "Ta aplikacja to krok dalej w tworzeniu czystego kodu, baza danych RoomDB i ViewModel jest dużym ulepszeniem w stosunku do poprzedniej aplikacji. " +
      "Inne podejście do tworzenia aplikacji (Jetpack) pozwoliło mi stworzyć ją szybciej.",
  ],
  features: ["JetpackCompose", "MVVM", "Room Database", "Firebase"],
  githubLink: "https://github.com/VoidSamuraj/Lumbze",
  badges: [
    {
      link: "https://img.shields.io/badge/jetpack_compose-1.3.0-green",
      alt: "Jetpack Compose 1.3.0",
    },
    {
      link: "https://img.shields.io/badge/Kotlin-1.7.10-purple",
      alt: "Kotlin 1.7.10",
    },
    {
      link: "https://img.shields.io/badge/minSdkVersion-28-blue",
      alt: "minSdk 28",
    },
    {
      link: "https://img.shields.io/badge/targetSdkVersion-33-blue",
      alt: "targetSdk 33",
    },
  ],
  gallery: lumbzeData,
  preview: lumbzeMockup,
  createdAt: "2023 - 2024",
  styles: "phoneGallery",
  mobile: true,
};

export const lotPagePl: Project = {
  id: 4,
  title: "Lord Of Time",
  shortDescription:
    "Planer poprawiający zarządzanie czasem. Umożliwia tworzenie zadań, rutyn, otrzymywanie powiadomień, z dostępem do danych na różnych urządzeniach i wykresami produktywności użytkownika.",
  description: [
    "Aplikacja jest zaprojekowana, aby umożliwić efektywniejsze zarządzanie czasem. Możesz w niej tworzyć " +
      "zadania, nadawać im kategorie, ustawić czas rozpoczęcia i zakończenia. Aplikacja pozwala na ustawienie " +
      "rutyn i otrzymywanie powiadomień na urządzeniu. Pokazuje statystyki z dzisiejszej pracy, " +
      "czas, wykresy do porównania z poprzednimi dniami, i wykres pokazujący użycie innych aplikacji na urządzeniu " +
      "przez ostatnie 24h. Możesz także wpisać swoją datę urodzenia i oczekiwany czas życia, aby aplikacja przypominała ci o " +
      "przemijającm czasie. Dodatkowo aplikacja umożliwia korzystanie z konta i dostęp do danych na wielu urządzeniach.",
    "Mój pierwszy projekt w Kotlin, wykorzystuje XML. Dane są przechowywane na urządzeniu poprzez SQLite i poprzez bazę danych Firebase. " +
      "Użyłem serwisów do wysyłania powiadomień dla użytkownika. Stworzyłem własne wykresy, rozszerzając klasę View. Dodałem także " +
      "przewijalny widok, który umożliwia dodanie zadania na kliknięcie.",
    "To był mój pierwszy duży projekt, który pozwolił mi nauczyć się wiele o widokach, serwisach, i androidzie.",
  ],
  features: [
    "stwórz własne konto, korzystaj na wielu urządzeniach.",
    "twórz i śledź zadania.",
    "ustawiaj powtarzanie zadań.",
    "ustawiaj kategorie zadań.",
    "ustal dzienny cel i śledź postęp.",
    "powiadomienia, gdy czas na zadanie oraz gdy zadanie zostanie zakończone.",
  ],
  githubLink: "https://github.com/VoidSamuraj/LordOfTime",
  badges: [
    {
      link: "https://img.shields.io/badge/Kotlin-1.7.10-purple",
      alt: "Kotlin 1.7.10",
    },
    { link: "https://img.shields.io/badge/XML-BE3144", alt: "XML" },
    {
      link: "https://img.shields.io/badge/minSdkVersion-26-blue",
      alt: "minSdk 26",
    },
    {
      link: "https://img.shields.io/badge/targetSdkVersion-30-blue",
      alt: "targetSdk 30",
    },
  ],
  gallery: lotData,
  preview: lotMockup,
  createdAt: "2022",
  styles: "phoneGallery phoneSmall horizontalGallery",
  mobile: true,
};

export const vtsPagePl: Project = {
  id: 5,
  title: "VideoToStyles",
  shortDescription: "Aplikacja do zmiany wideo na styl ASCII/kropki.",
  description: [
    "Aplikacja JavaFx zmieniająca styl wideo na ASCII/kropki. Używa OpenCV i ffmpeg.",
  ],
  features: [
    "Zmienia wideo na inne style.",
    "Podgląd stylu zastosowanego do wybranej ramki.",
    "Dostosuj ustawienia stylu.",
  ],
  githubLink: "https://github.com/VoidSamuraj/VideoToStyles",
  badges: [
    { link: "https://img.shields.io/badge/JavaFX-blue", alt: "JavaFX" },
    { link: "https://img.shields.io/badge/OpenCV-red", alt: "OpenCV" },
  ],
  gallery: vtsData,
  preview: vtsMockup,
  createdAt: "2023",
  styles: "desktopGallery fixedSize",
  inDiv: true,
};

export const seamPagePl: Project = {
  id: 6,
  title: "Image Seam",
  shortDescription:
    "Zmienia rozmiar zdjęcia, używając szwu. Kod usuwa mniej znaczące piksele w najmniej znaczącej ścieżce w wybranym kierunku.",
  description: [
    "Zmienia rozmiar zdjęcia, używając szwu.",
    "Kod usuwa mniej znaczące piksele w najmniej znaczącej ścieżce w wybranym kierunku.",
    "Oparte na algorytmie zawartym w kursie Princeton Algorithms, Part II",
    `Więcej informacji:
        <a href="https://coursera.cs.princeton.edu/algs4/assignments/seam/specification.php" target="_blank" style={{ padding: "0px 10px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>Spacyfikacja</a>
        <a href="https://www.youtube.com/watch?v=6NcIJXTlugc" target="_blank" style={{ padding: "0px", textDecoration: "underline", background: "transparent", fontSize: "1.5rem" }}>Przykład na YouTube</a>
      `,
  ],
  features: [],
  githubLink: "https://github.com/VoidSamuraj/Image-Seam",
  badges: [{ link: "https://img.shields.io/badge/Java-blue", alt: "Java" }],
  gallery: seamData,
  preview: seamMockup,
  createdAt: "2023",
  styles: "desktopGallery fixedSize desktopGalleryNoScale",
  inDiv: true,
};

export const tetrisPagePl: Project = {
  id: 7,
  title: "Blockout",
  shortDescription: "Tetris 3D zrobiony w html canvas i js.",
  description: ["Tetris 3D zrobiony w html canvas i js."],
  features: [
    "Rotacja działa wzdłuż 3 osi.",
    "ruch- strzałki",
    "obrót- a,d,w,s,q,e",
    "przyśpieszenie- spacja",
  ],
  githubLink: "https://github.com/VoidSamuraj/Blockout",
  gallery: [
    { type: "video", name: "Demo", src: "videos/projects/tetris/demo" },
  ],
  preview: tetrisMockup,
  createdAt: "2021",
  badges: [
    { link: "https://img.shields.io/badge/HTML-orange", alt: "HTML" },
    {
      link: "https://img.shields.io/badge/JavaScript-yellow",
      alt: "JavaScript",
    },
    { link: "https://img.shields.io/badge/CSS-blue", alt: "CSS" },
  ],
  styles: "desktopGallery fixedSize",
};

export const iosPagePl: Project = {
  id: 0,
  title: "Planer na iOS",
  shortDescription: "Prosta aplikacja iOS do planowania zadań",
  description: [
    "Prosta aplikacja iOS do planowania zadań",
    "Moja pierwsz aplikacja na iOS",
  ],
  features: [
    "widok kalendarza, który automatycznie filtruje zadania dla wybranego dnia",
    "zadania mają przypisane kategorie",
    "zadania i kategorie mogą być dodane i edytowane",
    "dane przechowywane w CoreData",
  ],
  gallery: iosData,
  badges: [{ link: "https://img.shields.io/badge/Swift-orange", alt: "Swift" }],
  preview: iosMockup,
  createdAt: "2024",
  styles: "ios",
  mobile: true,
};
export const githubPagePl: Project = {
  title: "Zobacz więcej na moim GitHub",
  githubLink: "https://github.com/VoidSamuraj",
  github: true,
};
