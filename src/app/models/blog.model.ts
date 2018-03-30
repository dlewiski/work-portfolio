export class Blog {
  public author: string = "Anna Marie Cooper";
  public date: string = new Date().toISOString().split("T")[0];
  constructor(public title: string, public postBody: string) { }
}
