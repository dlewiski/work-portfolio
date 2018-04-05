export class User {
  public admin: boolean = false;
  constructor(
    public userName: string,
    public uid: string,
    public userEmail: string,
) {}
}
