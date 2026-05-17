import { LightningElement } from 'lwc';
import addStudent from '@salesforce/apex/StudentController.addStudent';

export default class StudentRegistration extends LightningElement {

    name = '';
    email = '';
    phone = '';
    college = '';

    handleName(event){
        this.name = event.target.value;
    }

    handleEmail(event){
        this.email = event.target.value;
    }

    handlePhone(event){
        this.phone = event.target.value;
    }

    handleCollege(event){
        this.college = event.target.value;
    }

    saveStudent(){

        addStudent({
            name: this.name,
            email: this.email,
            phone: this.phone,
            college: this.college
        })

        .then(result => {
            alert(result);

            // clear form
            this.name = '';
            this.email = '';
            this.phone = '';
            this.college = '';
        })

        .catch(error => {
            console.log(error);
        });
    }
}