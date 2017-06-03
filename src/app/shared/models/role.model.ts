export class Role {
    public id: Number;
    public role_name: String;

    constructor(role?: any) {
        this.id = role && role.id || null;
        this.role_name = role && role.role_name || null;
    }
}