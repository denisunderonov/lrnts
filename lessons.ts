let projectName: string;
let version: number;
let isActive: boolean;
let currentTaskId: number | null;
let strornot: unknown;

if (typeof strornot === 'string') {
    console.log(strornot.toUpperCase());
} else {
    console.log('strornot is not a string');
}

function printProjectInfo(projectName: string, version: number): void { 
    console.log(`${projectName} v${version}`);
}