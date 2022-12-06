// overload
function head(value: string): string;
function head(value: number[]): number;
function head(value: string[]): string;
function head(value: boolean[]): boolean;
function head(value: Date[]): Date;
function head(value: any): any {
    return value[0];
}

interface ModuleData {
    title: string; 
    value: string; // number [] boolean
}

export {}