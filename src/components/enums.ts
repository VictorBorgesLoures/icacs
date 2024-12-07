export interface InterfaceSecao {
    nome: string,
    requisito: []
}

export interface InterfaceCapitulo {
    nome: string,
    secao: [InterfaceSecao]
}



const enums: any = {
    "4.0.3": {
        level: [
            "Level 1",
            "Level 2",
            "Level 3"
        ],
        capitulo: [
            {
                nome: "Architecture, Design and Threat Modeling",
                secao: [
                    
                    {
                        nome: "Secure Software Development Lifecycle",
                        requisito: [
                                `Verify the use of a secure software development lifecycle that addresses security in all stages of development. ([C1](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify the use of threat modeling for every design change or sprint planning to identify threats, plan for countermeasures, facilitate appropriate risk responses, and guide security testing.`,
                                `Verify that all user stories and features contain functional security constraints, such as "As a user, I should be able to view and edit my profile. I should not be able to view or edit anyone else's profile"`,
                                `Verify documentation and justification of all the application's trust boundaries, components, and significant data flows.`,
                                `Verify definition and security analysis of the application's high-level architecture and all connected remote services. ([C1](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify implementation of centralized, simple (economy of design), vetted, secure, and reusable security controls to avoid duplicate, missing, ineffective, or insecure controls. ([C10](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify availability of a secure coding checklist, security requirements, guideline, or policy to all developers and testers.`
                        ]
                    },
                    {
                        nome: "Authentication Architecture",
                        requisito: [
                                `Verify the use of unique or special low-privilege operating system accounts for all application components, services, and servers. ([C3](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that communications between application components, including APIs, middleware and data layers, are authenticated. Components should have the least necessary privileges needed. ([C3](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that the application uses a single vetted authentication mechanism that is known to be secure, can be extended to include strong authentication, and has sufficient logging and monitoring to detect account abuse or breaches.`,
                                `Verify that all authentication pathways and identity management APIs implement consistent authentication security control strength, such that there are no weaker alternatives per the risk of the application.`,
                        ]
                    },
                    {
                        nome: "Access Control Architecture",
                        requisito: [
                            `Verify that trusted enforcement points, such as access control gateways, servers, and serverless functions, enforce access controls. Never enforce access controls on the client.`,
                            `Verify the application uses a single and well-vetted access control mechanism for accessing protected data and resources. All requests must pass through this single mechanism to avoid copy and paste or insecure alternative paths. ([C7](https://owasp.org/...`,
                            `Verify that attribute or feature-based access control is used whereby the code checks the user's authorization for a feature/data item rather than just their role. Permissions should still be allocated using roles. ([C7](https://owasp.org/www-project-proactive-controls/#div-numbering))`
                        ]
                    },
                    {
                        nome: "Input and Output Architecture",
                        requisito: [
                            `Verify that input and output requirements clearly define how to handle and process data based on type, content, and applicable laws, regulations, and other policy compliance.`,
                            `Verify that serialization is not used when communicating with untrusted clients. If this is not possible, ensure that adequate integrity controls (and possibly encryption if sensitive data is sent) are enforced to prevent deserialization attacks includin...`,
                            `Verify that input validation is enforced on a trusted service layer. ([C5](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                            `Verify that output encoding occurs close to or by the interpreter for which it is intended. ([C4](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                        ]
                    },
                    {
                        nome: "Cryptographic Architecture",
                        requisito: [
                            `Verify that there is an explicit policy for management of cryptographic keys and that a cryptographic key lifecycle follows a key management standard such as NIST SP 800-57.`,
                            `Verify that consumers of cryptographic services protect key material and other secrets by using key vaults or API based alternatives.`,
                            `Verify that all keys and passwords are replaceable and are part of a well-defined process to re-encrypt sensitive data.`,
                            `Verify that the architecture treats client-side secrets--such as symmetric keys, passwords, or API tokens--as insecure and never uses them to protect or access sensitive data.`,
                        ]
                    },
                    {
                        nome: "Errors, Logging and Auditing Architecture",
                        requisito: [
                            `Verify that a common logging format and approach is used across the system. ([C9](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                            `Verify that logs are securely transmitted to a preferably remote system for analysis, detection, alerting, and escalation. ([C9](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                        ]
                    },
                    {
                        nome: "Data Protection and Privacy Architecture",
                        requisito: [
                            `Verify that all sensitive data is identified and classified into protection levels.`,
                            `Verify that all protection levels have an associated set of protection requirements, such as encryption requirements, integrity requirements, retention, privacy and other confidentiality requirements, and that these are applied in the architecture.`,
                        ]
                    },
                    {
                        nome: "Communications Architecture",
                        requisito: [
                            `Verify the application encrypts communications between components, particularly when these components are in different containers, systems, sites, or cloud providers. ([C3](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                            `Verify that application components verify the authenticity of each side in a communication link to prevent person-in-the-middle attacks. For example, application components should validate TLS certificates and chains.`,
                        ]
                    },
                    {
                        nome: "Malicious Software Architecture",
                        requisito: [
                            `Verify that a source code control system is in use, with procedures to ensure that check-ins are accompanied by issues or change tickets. The source code control system should have access control and identifiable users to allow traceability of any changes.`
                        ]
                    },
                    {
                        nome: "Business Logic Architecture",
                        requisito: [
                            `Verify the definition and documentation of all application components in terms of the business or security functions they provide.`,
                            `Verify that all high-value business logic flows, including authentication, session management and access control, do not share unsynchronized state.`,
                            `Verify that all high-value business logic flows, including authentication, session management and access control are thread safe and resistant to time-of-check and time-of-use race conditions.`,
                        ]
                    },
                    {
                        nome: "Secure File Upload Architecture",
                        requisito: [
                            `Verify that user-uploaded files - if required to be displayed or downloaded from the application - are served by either octet stream downloads, or from an unrelated domain, such as a cloud file storage bucket. Implement a suitable Content Security Policy (CSP) to reduce the risk from XSS vectors or other attacks from the uploaded file.`
                        ]
                    },
                    {
                        nome: "Configuration Architecture",
                        requisito: [
                            `Verify the segregation of components of differing trust levels through well-defined security controls, firewall rules, API gateways, reverse proxies, cloud-based security groups, or similar mechanisms.`,
                            `Verify that binary signatures, trusted connections, and verified endpoints are used to deploy binaries to remote devices.`,
                            `Verify that the build pipeline warns of out-of-date or insecure components and takes appropriate actions.`,
                            `Verify that the build pipeline contains a build step to automatically build and verify the secure deployment of the application, particularly if the application infrastructure is software defined, such as cloud environment build scripts.`,
                            `Verify that application deployments adequately sandbox, containerize and/or isolate at the network level to delay and deter attackers from attacking other applications, especially when they are performing sensitive or dangerous actions such as deserializ...`,
                            `Verify the application does not use unsupported, insecure, or deprecated client-side technologies such as NSAPI plugins, Flash, Shockwave, ActiveX, Silverlight, NACL, or client-side Java applets.`,
                        ]
                    }
                ]
            },
            {
                nome: "Authentication",
                secao: [
                    {
                        nome: "Password Security",
                        requisito:[
                                `Verify that user set passwords are at least 12 characters in length (after multiple spaces are combined). ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that passwords of at least 64 characters are permitted, and that passwords of more than 128 characters are denied. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that password truncation is not performed. However, consecutive multiple spaces may be replaced by a single space. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that any printable Unicode character, including language neutral characters such as spaces and Emojis are permitted in passwords.`,
                                `Verify users can change their password.`,
                                `Verify that password change functionality requires the user's current and new password.`,
                                `Verify that passwords submitted during account registration, login, and password change are checked against a set of breached passwords either locally (such as the top 1,000 or 10,000 most common passwords which match the system's password policy) or usi...`,
                                `Verify that a password strength meter is provided to help users set a stronger password.`,
                                `Verify that there are no password composition rules limiting the type of characters permitted. There should be no requirement for upper or lower case or numbers or special characters. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that there are no periodic credential rotation or password history requirements.`,
                                `Verify that "paste" functionality, browser password helpers, and external password managers are permitted.`,
                                `Verify that the user can choose to either temporarily view the entire masked password, or temporarily view the last typed character of the password on platforms that do not have this as built-in functionality.`,
                        ]
                    },
                    {
                        nome: "General Authenticator Security",
                        requisito:[
                                `Verify that user set passwords are at least 12 characters in length (after multiple spaces are combined). ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that passwords of at least 64 characters are permitted, and that passwords of more than 128 characters are denied. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that password truncation is not performed. However, consecutive multiple spaces may be replaced by a single space. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that any printable Unicode character, including language neutral characters such as spaces and Emojis are permitted in passwords.`,
                                `Verify users can change their password.`,
                                `Verify that password change functionality requires the user's current and new password.`,
                                `Verify that passwords submitted during account registration, login, and password change are checked against a set of breached passwords either locally (such as the top 1,000 or 10,000 most common passwords which match the system's password policy) or usi...`,
                                `Verify that a password strength meter is provided to help users set a stronger password.`,
                                `Verify that there are no password composition rules limiting the type of characters permitted. There should be no requirement for upper or lower case or numbers or special characters. ([C6](https://owasp.org/www-project-proactive-controls/#div-numbering))`,
                                `Verify that there are no periodic credential rotation or password history requirements.`,
                                `Verify that "paste" functionality, browser password helpers, and external password managers are permitted.`,
                                `Verify that the user can choose to either temporarily view the entire masked password, or temporarily view the last typed character of the password on platforms that do not have this as built-in functionality.`,
                        ]
                    },
                    {
                        nome: "Authenticator Lifecycle",
                        requisito:[]
                    },
                    {
                        nome: "Credential Storage",
                        requisito:[]
                    },
                    {
                        nome: "Credential Recovery",
                        requisito:[]
                    },
                    {
                        nome: "Look-up Secret Verifier",
                        requisito:[]
                    },
                    {
                        nome: "Out of Band Verifier",
                        requisito:[]
                    },
                    {
                        nome: "One Time Verifier",
                        requisito:[]
                    },
                    {
                        nome: "Cryptographic Verifier",
                        requisito:[]
                    },
                    {
                        nome: "Service Authentication",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Session Management",
                secao: [
                    {
                        nome: "Fundamental Session Management Security",
                        requisito: []
                    },
                    {
                        nome: "Session Binding",
                        requisito: []
                    },
                    {
                        nome: "Session Termination",
                        requisito: []
                    },
                    {
                        nome: "Cookie-based Session Management",
                        requisito: []
                    },
                    {
                        nome: "Token-based Session Management",
                        requisito: []
                    },
                    {
                        nome: "Federated Re-authentication",
                        requisito: []
                    },
                    {
                        nome: "Defenses Against Session Management Exploits",
                        requisito: []
                    }
                ]
            },
            {
                nome: "Access Control",
                secao: [
                    {
                        nome: "General Access Control Design",
                        requisito:[]
                    },
                    {
                        nome: "Operation Level Access Control",
                        requisito:[]
                    },
                    {
                        nome: "Other Access Control Considerations",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Validation, Sanitization and Encoding",
                secao: [
                    {
                        nome: "Input Validation",
                        requisito: []
                    },
                    {
                        nome: "Sanitization and Sandboxing",
                        requisito: []
                    },
                    {
                        nome: "Output Encoding and Injection Prevention",
                        requisito: []
                    },
                    {
                        nome: "Memory, String, and Unmanaged Code",
                        requisito: []
                    },
                    {
                        nome: "Deserialization Prevention",
                        requisito: []
                    }
                ]
            },
            {
                nome: "Stored Cryptography",
                secao: [
                    {
                        nome: "Data Classification",
                        requisito:[]
                    },
                    {
                        nome: "Algorithms",
                        requisito:[]
                    },
                    {
                        nome: "Random Values",
                        requisito:[]
                    },
                    {
                        nome: "Secret Management",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Error Handling and Logging",
                secao: [
                    {
                        nome: "Log Content",
                        requisito:[]
                    },
                    {
                        nome: "Log Processing",
                        requisito:[]
                    },
                    {
                        nome: "Log Protection",
                        requisito:[]
                    },
                    {
                        nome: "Error Handling",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Data Protection",
                secao: [
                    {
                        nome:"General Data Protection",
                        requisito:[]
                    },
                    {
                        nome:"Client-side Data Protection",
                        requisito:[]
                    },
                    {
                        nome:"Sensitive Private Data",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Communication",
                secao: [
                    {
                        nome:"Client Communication Security",
                        requisito:[]
                    },
                    {
                        nome:"Server Communication Security",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Malicious Code",
                secao: [
                    {
                        nome: "Code Integrity",
                        requisito:[]
                    },
                    {
                        nome: "Malicious Code Search",
                        requisito:[]
                    },
                    {
                        nome: "Application Integrity",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Business Logic",
                secao: [
                    {
                        nome:"Business Logic Security",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Files and Resources",
                secao: [
                    {
                        nome: "File Integrity",
                        requisito:[]
                    },
                    {
                        nome: "File Upload",
                        requisito:[]
                    },
                    {
                        nome: "File Execution",
                        requisito:[]
                    },
                    {
                        nome: "File Storage",
                        requisito:[]
                    },
                    {
                        nome: "File Download",
                        requisito:[]
                    },
                    {
                        nome: "SSRF Protection",
                        requisito:[]
                    },
                    {
                        nome: "Generic Web Service Security",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "API and Web Service",
                secao: [
                    {
                        nome: "RESTful Web Service",
                        requisito:[]
                    },
                    {
                        nome: "SOAP Web Service",
                        requisito:[]
                    },
                    {
                        nome: "GraphQL",
                        requisito:[]
                    }
                ]
            },
            {
                nome: "Configuration",
                secao: [
                    {
                        nome:"Build and Deploy",
                        requisito:[]
                    },
                    {
                        nome:"Dependency",
                        requisito:[]
                    },
                    {
                        nome:"Unintended Security Disclosure",
                        requisito:[]
                    },
                    {
                        nome:"HTTP Security Headers",
                        requisito:[]
                    },
                    {
                        nome:"HTTP Request Header Validation",
                        requisito:[]
                    }
                ]
            }            
        ]
    }
}

export default enums;