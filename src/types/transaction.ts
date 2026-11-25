export interface Transaction {
    staffName: string;
    transID: number;
    staffId: string;
    categoryID: string;
    cabinetid : number;
    levelid : number;
    fileNo: string;
    fileName: string;
    fileDateTaken: number;
    fileDateReturn: number;
    fileTransStatus: string;
    subid: number;
}

export type TransactionResponse = Transaction[];