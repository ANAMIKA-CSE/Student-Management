trigger EnrollmentTrigger on Enrollment__c (before insert) {

    for(Enrollment__c e : Trigger.new){

        Course__c c = [
            SELECT Id, Available_Seats__c
            FROM Course__c
            WHERE Id = :e.Course__c
            LIMIT 1
        ];

        if(c.Available_Seats__c <= 0){

            e.addError('No seats available');

        } else {

            c.Available_Seats__c -= 1;
            update c;
        }
    }
}