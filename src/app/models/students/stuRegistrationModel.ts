export class stuRegistrationModel {
   class_id: number;
   academic_year: string;
   name: string;
   gender: string;
   father_name: string;
   mother_name: string;
   dob: string;
   status: number;
   image: number;
   address: number;
   check: string;

   public get(){

      return this.name;

   }
}
