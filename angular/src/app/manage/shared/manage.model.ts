
export interface Menu {
    id: number;
    content:string;
    router:string;
    fatherId:number;
    menus:Menu[]
  }