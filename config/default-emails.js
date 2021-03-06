let default_emails = {};
default_emails.templates = [
    {name:"request_service_instance_admin",
        email_body:"Hello [[references.users.name]],\r\nYour service [[name]] has been requested for you. Please login to your account and approve the <a href='[[_hostname]]/my-services'>service</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance needs approval",
        model:"service-instance"},
    {name:"request_service_instance_user",
        email_body:"Hello [[references.users.name]], \r\nYour service request for [[name]] has been completed. Please login to your account to view and access your <a href='[[_hostname]]/service-instance/[[id]]'>service</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance requested",
        model:"service-instance"},
    {name:"service_requires_payment_approval",
        email_body:"Hello [[references.users.name]], \r\nThere are additional charges added to your service, [[name]]. Please login to your account and approve the <a href='[[_hostname]]/my-services'>charges</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance has additional charges",
        model:"service-instance"},
    {name:"service_cancellation_submitted",
        email_body:"Hello [[references.users.name]], \r\nYour cancellation request for [[name]] has been submitted. You will receive another notification when it has been approved. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance cancellation submitted",
        model:"service-instance"},
    {name:"service_instance_update",
        email_body:"Hello [[references.users.name]], \r\nYour Service Instance [[name]] has been updated. You can use this link to view your <a href='[[_hostname]]/service-instance/[[id]]'>instance details</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance updated",
        model:"service-instance"},
    {name:"instance_cancellation_approved",
        email_body:"Hello, \r\nYour cancellation request has been approved. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance cancellation request approved",
        model:"service-instance-cancellation"},
    {name:"instance_cancellation_rejected",
        email_body:"Hello, \r\nYour cancellation request for has been rejected. For more information, contact your service provider or comment on your <a href='[[_hostname]]/service-instance/[[service_instance_id]]'>service</a> and we will get back to you shortly. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Instance cancellation request rejected",
        model:"service-instance-cancellation"},
    {name:"password_reset",
        email_body:"Hello [[name]], \r\nFollow the following link to <a href='[[url]]'>reset your password</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot password reset",
        model:"user"},
    {name:"invitation",
        email_body:"Hello there, \r\nYou have been invited to use the [[_company_name]] ServiceBot System. From <a href='[[_hostname]]'>here</a> you can request new services, manage your services, and see other service options. Please click the link to begin user <a href='[[url]]'>registration</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Invitation!",
        model:"user"},
    {name:"registration_user",
        email_body:"Hello [[name]], \r\nYour registration has been completed! You can now access your account at <a href='[[_hostname]]'>here</a>. Thank you for choosing [[_company_name]]. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot registration complete",
        model:"user"},
    {name:"registration_admin",
        email_body:"Hello ServiceBot Admin, \r\nYou have gained a new user! [[name]] - [[email]] has just joined your ServiceBot system. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"New ServiceBot User",
        model:"user"},
    {name:"user_suspension",
        email_body:"Hello [[name]], \r\nYour ServiceBot account has been suspended. Please contact your service provider and check the state of your <a href='[[_hostname]]/my-services'>account</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Account Suspended",
        model:"user"},
    {name:"user_deletion",
        email_body:"Hello [[name]], \r\nYour ServiceBot account has been deleted. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Account Deleted",
        model:"user"},
    {name:"payment_failure",
        email_body:"Hello [[name]], \r\nYour payment failed. Please log into your account and check your <a href='[[_hostname]]/billing-settings'>payment plan</a>. \r\nThank you, \r\n [[_company_name]]",
        email_subject:"ServiceBot Payment Failure",
        model:"user"}
];
default_emails.templates_to_roles = [
    {
        email_template_id:11,
        role_id:1
    },
];
module.exports = default_emails;