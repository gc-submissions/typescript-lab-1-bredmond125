export interface Mountain {
    name: string;
    height: number;
}

export const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro', 
        height: 19341, 
    },
    {
        name: 'Everest',
        height: 29029,
    },
    {
        name: 'Denali',
        height: 20310
    }
];

export function findNameOfTallestMountain(mountainArray: Mountain[]): string {
    let tallestMountain: Mountain = {
        name: '',
        height: 0
    }
    mountainArray.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    })
    
    return tallestMountain.name;
}
    
