export interface Files {
    fileNo: string;
    fileName: string;
    fileDateIn: string;
    categoryID: string;
    cabinetid: number;
    levelid: number;
    subid: number;
    fileStatus: string;
    fileStat: string;
}

export type FilesResponse = Files[];