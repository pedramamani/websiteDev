import {writable} from "svelte/store";

export enum Themes {
    Light, Dark
}

export enum Rains {
    Off, On
}

export enum ChipColors {
    Blue, Violet, Green
}

export enum CategoryIds {
    Code, Research, Design, Teach, Compete, Other
}

export enum ProjectIds {
    Ipho, Cap, Autoaim, Paper, Beam, Phas, Screw, Sim2d, Tutor, Boxes, Planter
}

export enum MediaFormats {
    Image, SwitchImage, Video
}

export type CircleType = {
    x: number, y: number, r: number
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

export const description: string = "A showcase of my projects and involvements: "
export const about: string = "I strive to be a life-long learner and maker. Learning physics has been my focus for the past 8 years. I was involved in several research projects, achieved national and international competition rankings, and obtained a BS in Physics. Recently, I have been intrigued by robotics software. To give you an idea of my interests and skills, I am showcasing some of my projects and involvements here. Enjoy your visit!"
export const navbarId: string = "navbar"

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
            src: "./ipho/me.webp",
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
        about: "I lead the vision team at the UBC RoboMaster student team to design and implement an algorithm for real-time detection of targets on moving robots. We used a combination of OpenCV and TensorFlow to achieve low-latency detection with good accuracy. Below is a promotional video I made that demonstrates the result.",
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
        about: "With the invaluable help and guidance of Dr. Valery Milner of the Ultrafast Coherent Control Group at UBC, I published my first paper in The Journal of Chemical Physics. The research process was incredibly diverse as it entailed: understanding the theory of molecular rotation and its interaction with light, hands-on work on the optical table assembling and tuning components, manufacturing custom parts when needed, data collection, processing, visualization, and academic communication.",
        links: [{
            name: "Publication",
            href: "https://doi.org/10.1063/5.0062051",
            isFile: false
        }, {name: "Research group", href: "https://coherentcontrol.sites.olt.ubc.ca", isFile: false}], medias: [{
            fmt: MediaFormats.Image,
            src: "./research/setup.webp",
            alt: "optical setup with a notch held in the beam focal plane"
        },{
            fmt: MediaFormats.Image,
            src: "./research/xfrog.webp",
            alt: "overhead shot of optical table with various components"
        }]
    }], [
        ProjectIds.Beam, {
            show: true,
            categoryId: CategoryIds.Research,
            title: "Beam Optics Simulation",
            date: "August 2020",
            about: "During a summer research position, I wrote a Python library to simulate the propagation of a Gaussian beam through an optical system. I used NumPy and pyFFTW to simulate the effect of various optical elements in the time and frequency domains. These graphs show the beam intensity following a simulated double-slit experiment.",
            links: [{name: "GitHub", href: "https://github.com/pedramamani/beamSim", isFile: false}],
            medias: [{
                fmt: MediaFormats.SwitchImage,
                src: "./beam/monoGraph.webp",
                alt: "beam intensity as a function of space following a double-slit experiment",
                switchSrc: "./beam/monoCode.webp",
                switchAlt: "code used to simulate a monochromatic double-slit experiment"
            }, {
                fmt: MediaFormats.SwitchImage,
                src: "./beam/polyGraph.webp",
                alt: "beam intensity as a function of space and time following a double-slit experiment",
                switchSrc: "./beam/polyCode.webp",
                switchAlt: "code used to simulate a polychromatic double-slit experiment"
            }]
        }],

    [
        ProjectIds.Phas, {
        show: true,
        categoryId: CategoryIds.Teach,
        title: "UBC Physics Circle",
        date: "March 2021",
        about: "I co-organized the UBC Physics Circle outreach program for 2 years. I prepared many problems and gave several talks to an audience of around 30 high school students from across Vancouver. I have linked some of my talks and problems; the full list can be found on the official website.",
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
        about: "As part of a personal project involving automated sorting of screws and small parts, I am writing a custom vision library in Go. Given an image of the part it can currently derive its coarse outline and some global parameters. The goal is to ultimately classify a part from its image (i.e. M3×12mm FHCS in the right example). Hover the images below to see the input.",
        links: [{name: "GitHub", href: "https://github.com/pedramamani/screwSort", isFile: false}],
        medias: [{
            fmt: MediaFormats.SwitchImage,
            src: "./screw/nutOut.png",
            alt: "side profile of an M4 nut with a computer-detected outline and parameters such as width and height",
            switchSrc: "./screw/nutIn.webp",
            switchAlt: "side profile of an M4 nut"
        }, {
            fmt: MediaFormats.SwitchImage,
            src: "./screw/screwOut.png",
            alt: "side profile of an M3 screw with a computer-detected outline and parameters such as width and height",
            switchSrc: "./screw/screwIn.webp",
            switchAlt: "side profile of an M3 screw"
        }]
    }],
    [
        ProjectIds.Sim2d, {
        show: true,
        categoryId: CategoryIds.Code,
        title: "RoboMaster Simulated Environment",
        date: "July 2021",
        about: "During my time at the UBC RoboMaster student team, I wrote a 2D simulated environment in Python to train robotic agents with. It is a simulation of DJI's RMUA challenge, a 2v2 shooting match between fully autonomous robots. The motion and collision mechanics were implemented from scratch and I used Pygame for visualization. I also did work on the agent's path finding and action planning, but the ones below are human-controlled.",
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
        about: "I have gathered around 500 hours of tutoring experience with more than 10 students in the past 6 years. I tutor IB mathematics and physics, university physics, and competitive physics. This year, one of my competitively-trained students placed 2nd in Canada in the High School CAP Exam. My teaching philosophy is to start from the very fundamentals and supplement new material with lots of problems.",
        links: [{
            name: "Mechanics problems",
            href: "./tutor/mechanics.pdf",
            isFile: true
        }, {name: "Optics problems", href: "./tutor/optics.pdf", isFile: true}], medias: []
    }], [
        ProjectIds.Boxes, {
            show: true,
            categoryId: CategoryIds.Design,
            title: "Organization Boxes",
            date: "April 2022",
            about: "I designed these modular boxes to organize my many small parts and components. I minimized material usage by taking advantage of vase mode (a slicing mode that prints the outer wall as a spiral). Each unit box weighs merely 9 grams. The roughly 300 boxes in the photo were printed with 3kg of filament in 4 days.",
            links: [{
                name: "Onshape",
                href: "https://cad.onshape.com/documents/44a4494862e4dbf0f141205a",
                isFile: false
            }, {
                name: "Box model",
                href: "./boxes/unit.stl",
                isFile: true
            }],
            medias: [{
                fmt: MediaFormats.SwitchImage,
                src: "./boxes/unitModel.webp",
                alt: "3D model of a unit box",
                switchSrc: "./boxes/unitPrint.webp",
                switchAlt: "a unit box printed in black filament"
            }, {
                fmt: MediaFormats.Image,
                src: "./boxes/organized.webp",
                alt: "300 boxes of various sizes placed in a grid with small parts organized in each"
            }]
        }], [
        ProjectIds.Planter, {
            show: true,
            categoryId: CategoryIds.Design,
            title: "Planter Box Storage",
            date: "August 2021",
            about: "Our strata bylaws prohibit the use of balcony for storage, but planter boxes are allowed. As we were short on storage space, I decided to design this planter box with hidden storage underneath. It features a sloped bed, a water drain, air vents, and wheels for moving to get access to the back. A year after I finished the build, this is the state of our planter in summer of 2022.",
            links: [{
                name: "Onshape",
                href: "https://cad.onshape.com/documents/755ab1df508a2af9cabe77a1",
                isFile: false
            }],
            medias: [{
                fmt: MediaFormats.SwitchImage,
                src: "./planter/model.webp",
                alt: "3D model of the planter box casing",
                switchSrc: "./planter/modelFrame.webp",
                switchAlt: "3D model of the planter box frame"
            }, {
                fmt: MediaFormats.Image,
                src: "./planter/current.webp",
                alt: "photo of the planter box containing a variety of plants and flowers"
            }]
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
    "lightGray": ["#6a7fff1e", "#8a99ff1f"],
    "gray": ["#babfc0", "#5c5c65"],
    "accent": ["#0024ff1f", "#6c7eff1f"],
    "imageBrightness": ["100%", "90%"],
    "transitionDuration": ["400ms", "400ms"]
};

export const themeStore = writable(Themes.Light)

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
    document.documentElement.style.backgroundColor = styles.white[theme]
    return true
}

export function toggleTheme() {
    themeStore.update(t => {
        t = (t == Themes.Dark) ? Themes.Light : Themes.Dark
        localStorage.theme = t
        return t
    })
}

export const rainStore = writable(Rains.On)

export function initRain() {
    const rainString = localStorage.getItem("rain")
    if (rainString) {
        rainStore.set(parseInt(rainString))
    } else {
        rainStore.set(Rains.On)
        localStorage.rain = Rains.On
    }
}

export function toggleRain() {
    rainStore.update(r => {
        r = (r == Rains.On) ? Rains.Off : Rains.On
        localStorage.rain = r
        return r
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
