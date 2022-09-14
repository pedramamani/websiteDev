import {writable} from 'svelte/store';

export enum Themes {
    Light, Dark
}

export enum Backgrounds {
    Off, On
}

export enum ChipColors {
    Blue, Violet, Green
}

export enum CategoryIds {
    Code, Design, Research, Teach, Compete, Other
}

export enum ProjectIds {
    Ipho, Cap, Autoaim, Paper, Beam, Phas, Screw, Sim2d, Tutor, Boxes, Planter
}

export enum MediaFormats {
    Image, SwitchImage, Video
}

export type LinkType = {
    name: string, href: string, isFile: boolean
}

export type MediaType =
    { fmt: MediaFormats.Image, src: string, alt: string }
    | { fmt: MediaFormats.SwitchImage, src: string, alt: string, switchSrc: string, switchAlt: string }
    | { fmt: MediaFormats.Video, src: string }

export type CategoryType = {
    show: boolean, id: string, title: string
}

export type ProjectType = {
    show: boolean, categoryId: CategoryIds, title: string, date: string, about: string, links: LinkType[], medias: MediaType[]
}

export type CircleType = {
    x: number, y: number, r: number
}

export const title: string = "Pedram Amani"
export const description: string = "A showcase of my projects and achievements: "
export const name: string = "I'm Pedram"
export const about: string = "I strive to be a life-long learner and maker. For the past 8 years, I have focused on learning physics and obtained a BS and several rankings at the national and international level. More recently, I became interested in the software side of robotics. To give you an idea of my interests and skills, I am showcasing some of my projects and involvements here. Enjoy your visit!"
export const headshotSrc: string = "../headshot.png"
export const headshotAlt: string = "headshot of Pedram with a suit and tie"
export const navbarId: string = "navbar"
export const footerId: string = "footer"

export const categories = new Map<CategoryIds, CategoryType>([
    [CategoryIds.Code, {show: true, id: "code", title: "Coding Projects"}],
    [CategoryIds.Research, {show: true, id: "research", title: "Research"}],
    [CategoryIds.Teach, {show: true, id: "teach", title: "Teaching"}],
    [CategoryIds.Compete, {show: false, id: "compete", title: "Competing"}],
    [CategoryIds.Design, {show: true, id: "design", title: "3D Design"}],
    [CategoryIds.Other, {show: false, id: "other", title: "Other"}]
])

export const projects = new Map<ProjectIds, ProjectType>([
    [ProjectIds.Ipho, {
        show: false,
        categoryId: CategoryIds.Compete,
        title: "IPhO Bronze Medal",
        date: "July 2017",
        about: "With top performance in the CAP High School Prize Exam and the Canadian Physics Olympiad, I was chosen as one of five to represent Canada in the International Physics Olympiad at Yogyakarta, Indonesia. After an adventurous week and two intense 5-hour-long exams, I took home a bronze medal and lots of sweet memories. I am indebted to my amazing teachers at AE High School for this achievement.",
        links: [{
            name: "Result",
            href: "https://ipho-unofficial.org/timeline/2017/individual#:~:text=Pedram%20Amani",
            isFile: false
        }, {name: "Certificate", href: "./ipho/certificate.pdf", isFile: true}],
        medias: [{
            fmt: MediaFormats.Image,
            src: "./ipho/me.jpg",
            alt: "Pedram holding the Canadian flag and wearing a bronze medal at the IPhO award ceremony"
        }]
    }],
    [
        ProjectIds.Cap, {
        show: false,
        categoryId: CategoryIds.Compete,
        title: "CAP Exam 3rd Place",
        date: "March 2021",
        about: "I placed 3rd in the Lloyd G. Elliott CAP University Prize Exam open to all undergraduate students in Canada.",
        links: [{
            name: "Result",
            href: "https://www.cap.ca/programs/medals-and-awards/prizes-students/university-prize-exam/2021-cap-university-prize-exam-results/#:~:text=Pedram%20Amani",
            isFile: false
        }, {name: "My solutions", href: "./cap/solutions.pdf", isFile: true}], medias: []
    }],
    [
        ProjectIds.Autoaim, {
        show: true,
        categoryId: CategoryIds.Code,
        title: "RoboMaster Autoaim",
        date: "October 2019",
        about: "I lead the vision team at the UBC RoboMaster student team to design and implement an algorithm for real-time detection of armour modules on moving robots. We used OpenCV and TensorFlow to achieve low-latency detection with high accuracy. Add another sentence or two here describing the details of this project. If you want to go into more detail, maybe take the audience to a new page.",
        links: [{name: "GitHub", href: "https://github.com/ubcrm/autoaim", isFile: false}, {
            name: "RMUT challenge",
            href: "https://www.robomaster.com/en-US/robo/rmtc",
            isFile: false
        }],
        medias: [{fmt: MediaFormats.Video, src: "./autoaim/video.mp4"}]
    }],
    [
        ProjectIds.Paper, {
        show: true,
        categoryId: CategoryIds.Research,
        title: "First-Authored Publication",
        date: "September 2021",
        about: "With the invaluable help and guidance of Dr. Valery Milner and Dr. Alexander Milner of the Ultrafast Coherent Control Group at UBC, I published my first first-authored paper in The Journal of Chemical Physics. We demonstrate that different molecular species in a gaseous mixture can be simultaneously excited to desired rotational frequencies using an optical centrifuge. This research was partly funded by an NSERC USRA.",
        links: [{
            name: "Publication",
            href: "https://doi.org/10.1063/5.0062051",
            isFile: false
        }, {name: "Research group", href: "https://coherentcontrol.sites.olt.ubc.ca", isFile: false}], medias: []
    }], [
        ProjectIds.Beam, {
            show: true,
            categoryId: CategoryIds.Research,
            title: "Beam Optics Simulation",
            date: "August 2020",
            about: "During a summer research position, I wrote a Python library to simulate the propagation of a Gaussian beam through an optical system. I used NumPy and pyFFTW to simulate the effect of various optical elements in the temporal and spectral domains. These graphs show the beam intensity following a double-slit experiment. Add another sentence or two here describing the details of this project.",
            links: [{name: "GitHub", href: "https://github.com/pedramamani/beamSim", isFile: false}],
            medias: [{
                fmt: MediaFormats.SwitchImage,
                src: "./beam/monoGraph.png",
                alt: "beam intensity as a function of space following a double-slit experiment",
                switchSrc: "./beam/monoCode.png",
                switchAlt: "code used to simulate a monochromatic double-slit experiment"
            }, {
                fmt: MediaFormats.SwitchImage,
                src: "./beam/polyGraph.png",
                alt: "beam intensity as a function of space and time following a double-slit experiment",
                switchSrc: "./beam/polyCode.png",
                switchAlt: "code used to simulate a polychromatic double-slit experiment"
            }]
        }],

    [
        ProjectIds.Phas, {
        show: true,
        categoryId: CategoryIds.Teach,
        title: "UBC Physics Circle",
        date: "March 2021",
        about: "I co-organized the UBC Physics Circle outreach program for two years. I prepared many problems for and gave several talks to an audience of around 30 high school students from across Vancouver. I have linked some of my talks and problems; the full list can be found on the official website.",
        links: [{
            name: "Physics Circle website",
            href: "https://outreach.phas.ubc.ca/events/metro-vancouver-physics-circle",
            isFile: false
        }, {
            name: "Color talk",
            href: "./phas/color.pdf",
            isFile: true
        }, {
            name: "Chalk problem",
            href: "./phas/chalk.pdf",
            isFile: true
        }, {
            name: "Swing problem",
            href: "./phas/swing.pdf",
            isFile: true
        }], medias: []
    }],
    [
        ProjectIds.Screw, {
        show: true,
        categoryId: CategoryIds.Code,
        title: "Screw-Sorting Vision",
        date: "Ongoing",
        about: "As part of a personal project involving automated sorting of screws and small parts, I am writing a custom vision library in Go. At the moment, it can map an image of the part taken against a lit background to a coarse outline and derive some global parameters. The goal is to ultimately classify a part from its image (i.e. M3×12mm FHCS in the example below).",
        links: [{name: "GitHub", href: "https://github.com/pedramamani/screwSort", isFile: false}],
        medias: [{
            fmt: MediaFormats.SwitchImage,
            src: "./screw/nutOut.png",
            alt: "side profile of an M4 nut with a computer-detected outline and parameters such as width and height",
            switchSrc: "./screw/nutIn.png",
            switchAlt: "side profile of an M4 nut"
        }, {
            fmt: MediaFormats.SwitchImage,
            src: "./screw/screwOut.png",
            alt: "side profile of an M3 screw with a computer-detected outline and parameters such as width and height",
            switchSrc: "./screw/screwIn.png",
            switchAlt: "side profile of an M3 screw"
        }]
    }],
    [
        ProjectIds.Sim2d, {
        show: true,
        categoryId: CategoryIds.Code,
        title: "RoboMaster Simulated Environment",
        date: "July 2021",
        about: "During my time at the UBC RoboMaster student team, I wrote a 2D simulated environment in Python to train machine learning models in. I simulated the RoboMaster University AI Challenge (RMUA), a 2v2 shooting match between fully autonomous robots. Motion and collision mechanics were implemented from scratch and I used Pygame for visualization.",
        links: [{name: "GitHub", href: "https://github.com/ubcrm/sim-2d", isFile: false}, {
            name: "RMUA challenge",
            href: "https://www.robomaster.com/en-US/robo/icra",
            isFile: false
        }], medias: [{fmt: MediaFormats.Video, src: "./sim2d/video.mp4"}]
    }],
    [
        ProjectIds.Tutor, {
        show: true,
        categoryId: CategoryIds.Teach,
        title: "Private Tutoring",
        date: "June 2022",
        about: "I have around 500 hours of tutoring experience with more than 10 students in the past 6 years. I tutor IB high school mathematics and physics, university physics, and competitive physics. Some of my past students are currently in UBC Engineering Physics and Computer Science programs. This year, one of my competitively-trained students placed 2nd in Canada in the High School CAP Exam. My teaching philosophy is to start from the very fundamentals and supplement new material with lots of problems.",
        links: [{
            name: "Mechanics problem set",
            href: "./tutor/mechanics.pdf",
            isFile: true
        }, {name: "Optics problem set", href: "./tutor/optics.pdf", isFile: true}], medias: []
    }],[
        ProjectIds.Boxes, {
            show: true,
            categoryId: CategoryIds.Design,
            title: "Organization Boxes",
            date: "April 2022",
            about: "I designed these boxes to organize the many small lib I had. I optimized for material usage and time to print. Each box weighing only 9 grams. The key was to use vase mode for much faster speed and better accuracy. I was able to print everything in the photo with 2kg of filament and about 3 days of continuous printing. This is the V3 iteration of my organization boxes, currently working on a V4.",
            links: [{name: "Onshape", href: "https://cad.onshape.com/documents/44a4494862e4dbf0f141205a", isFile: false}, {
                name: "Unit box",
                href: "./boxes/unit.stl",
                isFile: true
            }], medias: [{fmt: MediaFormats.SwitchImage, src: "./boxes/unitModel.png", alt: "3D model of a one-by-one box", switchSrc: "./boxes/unitPrint.png", switchAlt: "a one-by-one box printed in black filament"}, {fmt: MediaFormats.Image, src: "./boxes/organized.jpg", alt: "170 boxes of various sizes placed in a grid with small parts organized in each"}]
        }],[
        ProjectIds.Planter, {
            show: true,
            categoryId: CategoryIds.Design,
            title: "Planter Box Storage",
            date: "August 2021",
            about: "Our Strata bylaws prohibit the use of balcony for storage, but planter boxes are allows. But we were really short on storage space and we need the balcony. So the solution was to design a planter box on top with hidden storage on the bottom. I designed everything in 3D and sourced all the material and all the building myself. The challenging thing was getting the dimensions of the concrete walls as they were not uniform/parallel at all. Features a sloped bed, a water vent, air vents, and a mesh bedding so soil doesn't stay moist underneath. A year later and this is the current state of planter. Definitely still need to work on our gardening skills.",
            links: [{name: "Onshape", href: "https://cad.onshape.com/documents/755ab1df508a2af9cabe77a1", isFile: false}], medias: [{fmt: MediaFormats.SwitchImage, src: "./planter/model.png", alt: "3D model of the planter box", switchSrc: "./planter/modelFrame.png", switchAlt: "3D model of the planter box frame"}, {fmt: MediaFormats.Image, src: "./planter/current.jpg", alt: "photo of the planter box containing a variety of plants and flowers"}]
        }]
])

export let validIds = new Map<CategoryIds, ProjectIds[]>([])
for (let categoryId of enumValues(CategoryIds)) {
    if (categories.get(categoryId).show) {
        validIds.set(categoryId, [])
        for (let projectId of enumValues(ProjectIds)) {
            const project = projects.get(projectId)
            if (project.categoryId === categoryId) {
                validIds.get(categoryId).push(projectId)
            }
        }
    }
}


export const styles = {
    "white": ["#ffffff", "#27272d"],
    "black": ["#424242", "#d0d0d5"],
    "whiteTrans": ["#ffffffc0", "#27272dc0"],
    "lightGray": ["#b1c3ff43", "#7fa8ff23"],
    "gray": ["#acb1b2", "#5c5c65"],
    "accent": ["#5979ff2d", "#7862ff26"],
    "imageBrightness": ["100%", "85%"]
};

export const themeStore = writable(Themes.Light)
export const backgroundStore = writable(Backgrounds.Off)

export function initTheme() {
    const themeString = localStorage.getItem("theme")
    if (themeString) {
        themeStore.set(parseInt(themeString))
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeStore.set(Themes.Dark)
        localStorage.theme = Themes.Dark
    } else {
        themeStore.set(Themes.Light)
        localStorage.theme = Themes.Light
    }
}

export function applyTheme(theme: Themes): boolean {
    const root: HTMLElement | null = document.querySelector(":root")
    if (root == null) {
        return false
    }
    for (let [k, v] of Object.entries(styles)) {
        root.style.setProperty(`--${k}`, v[theme])
    }
    return true
}

export function toggleTheme() {
    themeStore.update(theme => {
        theme = (theme == Themes.Dark) ? Themes.Light : Themes.Dark
        localStorage.theme = theme
        return theme
    })
}

export function initBackground() {
    const backgroundString = localStorage.getItem("background")
    if (backgroundString) {
        backgroundStore.set(parseInt(backgroundString))
    } else {
        backgroundStore.set(Backgrounds.On)
        localStorage.background = Backgrounds.On
    }
}

export function toggleBackground() {
    backgroundStore.update(background => {
        background = (background == Backgrounds.On) ? Backgrounds.Off : Backgrounds.On
        localStorage.background = background
        return background
    })
}

export function enumValues(enumObject: any): number[] {
    let values: number[] = []
    let value: number
    for (let key of Object.keys(enumObject)) {
        value = Number(enumObject[key])
        if (!isNaN(value)) {
            values.push(value)
        }
    }
    return values;
}
