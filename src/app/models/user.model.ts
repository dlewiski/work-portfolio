export class User {
  public admin: boolean = false;
  constructor(
    public userName: string,
    public userEmail: string,
) {}
}
