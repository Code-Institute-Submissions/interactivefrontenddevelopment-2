
function subscribe_btn_setup() {
    /*
      Attach function to the subscribe button to email
      IP attache with customer information for subsciption
    */
    $('#subscribe_btn').click(function(event) {
                event.preventDefault();

                // Validate the email address is provided
                email_address = $('#email_addr').val().trim();
                if (email_address == '') {
                    alert('Please provide an email address.');
                    return;
                }

                // Provide a default subject, email message for the subscription that
                // could be parsed from the email received
                subject = '[Request]: IP Atache subscription'
                email_message= 'Please subscribe me to your newsletter. My email is: ' + email_address
                window.location.href = 'mailto:info@ipattache.com?subject=' + subject + 
                    encodeURIComponent(subject) + '&body=' + encodeURIComponent(email_message);    
    });
}

function send_message_btn_setup() {
        /*
          Attach function to the send message button to email
          IP attache any message the customer wants to send
        */
        $('#send_message_btn').click(function(event) {
                event.preventDefault();

                // Validate all the fields on the form were provided
                your_name = $('#your_name').val().trim();

                if (your_name == '') {
                    alert('Please tell us your name.');
                    return;
                }

                email_address = $('#your_email').val().trim();
                if (email_address == '') {
                    alert('Please provide an email address.');
                    return;
                }

                subject = $('#subject').val().trim();
                if (subject == '') {
                    alert('Please provide a subject');
                    return;
                }
                email_message = $('#email_message').val().trim();
                if (email_message == '') {
                    alert('Please provide an email message');
                    return;
                }

                // Attach the name of the customer at the end of the email message
                email_message += ' -> from: ' + your_name;

                window.location.href = 'mailto:info@ipattache.com?subject=' + subject + 
                    encodeURIComponent(subject) + '&body=' + encodeURIComponent(email_message);    
    });
}
