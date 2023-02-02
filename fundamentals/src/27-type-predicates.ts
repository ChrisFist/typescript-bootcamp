
interface Course2 {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

const course2: unknown = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

if (isCourse(course)) {

}

function isCourse(value: unknown): value is Course2 {

    const course = value as Course2

    return course?.title != null && course?.subtitle != null;
}





