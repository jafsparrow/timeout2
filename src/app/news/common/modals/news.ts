interface Club {
    name: string;
    id: string;

}


export class News {
    id: any;
    title: string;
    author: string;
    publishDate: Date;
    summary: string;
    image?: string;
    article: string;
    clubTags?: Array<Club>;


    cosntructor(article: any) {
    
    }
}


