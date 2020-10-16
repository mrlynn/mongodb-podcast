export type User = {
   id: number;
   name: string;
 };
 
 export type Show = {
   fileName: string;
   fileRelativePath: string;
   data: {
     frontmatter: {
       description: string;
       title: string;
       date: string;
       author: string;
       tags: string[];
     };
     markdownBody: string;
   };
 };
 export type Tag = {
   name: string;
   selected: Boolean;
 };
