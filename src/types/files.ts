export interface Files {
    fileNo: string;
    fileName: string;
    fileDateIn: string;
    categoryID: string;
    categoryName: string;
    cabinetid: number;
    cabinetNo: string;
    levelid: number;
    levelNo: string;
    levelDesc: string;
    subid: number;
    subName: string;
    fileStatus: string;
    fileStat: string;
}

export interface PaginationResponse {
    current_page: number;
    page_size: number;
    total_records: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
}

export interface FilesResponse {
    data: Files[];
    pagination: PaginationResponse;
}