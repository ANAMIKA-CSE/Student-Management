public with sharing class StudentController {

    @AuraEnabled
    public static String addStudent(
        String name,
        String email,
        String phone,
        String college
    ){

        Student__c s = new Student__c(
            Email__c = email,
            Phone__c = phone,
            College__c = college
        );

        insert s;

        return 'Student Added';
    }
}