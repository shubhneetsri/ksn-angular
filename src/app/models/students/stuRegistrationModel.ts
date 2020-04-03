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

   getValue(item){

      let post = {
         class_id : item.class_id,
         academic_year: item.academic_year,
         name: item.name,
         gender: item.gender,
         father_name: item.father_name,
         mother_name: item.mother_name,
         dob: item.dob,
         status: item.status,
         image: item.image,
         address: item.address,
         check: item.check,
      }

      return post;

   }
}
