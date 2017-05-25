export class User { 

constructor(public id: number, 
            public email: string, 
            public password: string,
            public firstName: string, 
            public lastName: string,
            public biography: string, 
            public country: string, 
            public province: string, 
            public city: string, 
            public yearsExperience: number){
    
}
}