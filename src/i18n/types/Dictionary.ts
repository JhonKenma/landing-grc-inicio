/**
 * SEO
 * 
 */

export type SeoDictionary = {
    home: {
        title: string
        description: string
    }
    login: {
        title: string,
        description: string
    }
    demo: {
        title: string,
        description: string
    }
}


/**WELCOME TOOLS */

export interface BaseSection {
  title: string
  description?: string
  cta?: string
}

/*
*
*
    WELCOME PAGE
*
*
*/
export type HeroDictionary = {
    title: string
    highlight: string
    description: string
    cta: {
        login: string
        demo: string
    }
}

export type ProductOverviewDictionary = {
    header: {
        badge: string
        title: string
        highlight: string
        description: string
    }

    features: {
        risk: {
        title: string
        description: string
        bullets: string[]
        cta: string
        }
        compliance: {
            title: string
            description: string
            bullets: string[]
            cta: string
        }
        audit: {
        title: string
        description: string
        bullets: string[]
        cta: string
        }
    }

    dashboard: {
        title: string
        description: string
        stats: {
        uptime: {
            value: string
            label: string
        }
        resolution: {
            value: string
            label: string
        }
        auditReduction: {
            value: string
            label: string
        }
        riskSpeed: {
            value: string
            label: string
        }
        }
    }
}

export type SolutionsDictionary = {
    header: {
        badge: string
        title: string
        highlight: string
        description: string
    }
    industries: {
        banking: {
        tag: string
        title: string
        description: string
        bullets: string[]
        successMetric: {
            label: string
            value: string
        }
        }

        healthcare: {
        tag: string
        title: string
        description: string
        bullets: string[]
        successMetric: {
            label: string
            value: string
        }
        }

        technology: {
        tag: string
        title: string
        description: string
        bullets: string[]
        successMetric: {
            label: string
            value: string
        }
        }

        retail: {
        tag: string
        title: string
        description: string
        bullets: string[]
        successMetric: {
            label: string
            value: string
        }
        }

        manufacturing: {
        tag: string
        title: string
        description: string
        bullets: string[]
        successMetric: {
            label: string
            value: string
        }
        }

        custom: {
        tag: string
        title: string
        description: string
        bullets: string[]
        cta: string
        }
    }

    results: {
        title: string
        description: string
        items: {
            value: string
            title: string
            description: string
        }[]
    }

    cta: {
        title: string
        description: string
        action: string
    }
}


export type ComplianceDictionary = {
    header: {
        badge: string
        title: string
        highlight: string
        description: string
    }

    globalCoverage: {
        title: string
        description: string

        primaryFrameworks: {
        gdpr: {
            region: string
            tag: string
            title: string
            description: string
            coverage: string
        }
        hipaa: {
            region: string
            tag: string
            title: string
            description: string
            coverage: string
        }
        soc2: {
            region: string
            tag: string
            title: string
            description: string
            coverage: string
        }
        iso42001: {
            region: string
            tag: string
            title: string
            description: string
            coverage: string
        }
        }

        secondaryFrameworks: {
        name: string
        region: string
        coverage: string
        }[]
    }

    lifecycle: {
        title: string
        description: string
        steps: {
        step: string
        title: string
        description: string
        }[]
    }

    comparison: {
        title: string
        description: string

        manual: {
        title: string
        items: {
            title: string
            description: string
        }[]
        timeline: {
            label: string
            value: string
            note: string
        }
        }

        automated: {
        title: string
        items: {
            title: string
            description: string
        }[]
        timeline: {
            label: string
            value: string
            note: string
        }
        }
    }

    certifications: {
        title: string
        description: string
        items: {
        name: string
        status: string
        }[]
    }

    cta: {
        title: string
        description: string
        action: string
    }
}

// export type ResourcesDictionary = {
//     header: {
//         badge: string
//         title: string
//         highlight: string
//         description: string
//     }

//     sections: {
//         blog: {
//         title: string
//         description: string
//         items: {
//             date: string
//             category: string
//             title: string
//             summary: string
//         }[]
//         cta: string
//         }

//         webinars: {
//         title: string
//         description: string
//         items: {
//             status: "upcoming" | "recording"
//             date: string
//             title: string
//             summary: string
//             action: string
//         }[]
//         cta: string
//         }

//         documentation: {
//         title: string
//         description: string
//         items: {
//             title: string
//             description: string
//             href: string
//         }[]
//         cta: string
//         }

//         caseStudies: {
//         title: string
//         description: string
//         items: {
//             company: string
//             industry: string
//             metric: string
//             summary: string
//         }[]
//         cta: string
//         }

//         tools: {
//             title: string
//             description: string
//             items: {
//                 id: string
//                 title: string
//                 description: string
//                 icon: "smartphone" | "bell" | "hammer"
//                 badge?: string
//                 href?: string
//             }[]
//             cta?: string
//         }


//         support: {
//         title: string
//         description: string
//         items: {
//             title: string
//             subtitle: string
//             href: string
//         }[]
//         sla: string
//         }
//     }

//     featuredResource: {
//         badge: string
//         title: string
//         description: string
//         bullets: string[]
//         actions: {
//         primary: string
//         secondary: string
//         }
//         meta: {
//         label: string
//         pages: string
//         format: string
//         }
//     }

//     newsletter: {
//         title: string
//         description: string
//         placeholder: string
//         button: string
//         privacyText: string
//         privacyLink: string
//     }

//     finalCta: {
//         title: string
//         description: string
//         action: string
//     }
// }

    export type ResourcesDictionary = {
        header: {
            badge: string
            title: string
            highlight: string
            description: string
        }

        sections: {
            blog: {
            title: string
            description: string
            items: {
                date: string
                category: string
                title: string
                summary: string
            }[]
            cta: string
            }

            webinars: {
            title: string
            description: string
            items: {
                status: "upcoming" | "recording" | "próximo" | string
                date: string
                title: string
                summary: string
                action: {
                    value: string 
                    to: string
                }
            }[]
            cta: string
            }

            documentation: {
            title: string
            description: string
            items: {
                title: string
                description: string
                href: string
            }[]
            cta: string
            }

            caseStudies: {
            title: string
            description: string
            items: {
                company: string
                industry: string
                metric: string
                summary: string
            }[]
            cta: string
            }

            tools: {
            title: string
            description: string
            items: {
                id: string
                title: string
                description: string
                icon: "smartphone" | "bell" | "hammer" | string
                badge?: string
                href?: string
            }[]
            cta?: string
            }

            support: {
            title: string
            description: string
            items: {
                title: string
                subtitle: string
                href: string
            }[]
            sla: string
            }
        }

        featuredResource: {
            badge: string
            title: string
            description: string
            bullets: string[]
            actions: {
            primary: string
            secondary: string
            }
            meta: {
            label: string
            pages: string
            format: string
            }
        }

        newsletter: {
            title: string
            description: string
            placeholder: string
            button: string
            privacyText: string
            privacyLink: string
        }

        finalCta: {
            title: string
            description: string
            action: string
        }
    }


export type PricingDictionary = {
    header: {
        badge: string
        title: string
        highlight: string
        description: string
    }

    billingToggle: {
        annual: {
            label: string
            discountLabel: string
        }
        monthly: {
            label: string
        }
    }

    plans: {
        essential: {
            badge: string
            name: string
            description: string
            pricing: {
                monthly: string
                yearly: string
                taxes: string
                savings: string
            }
            features: string[]
            cta: string
            note: string
        }
        growth: {
            popularBadge: string
            badge: string
            name: string
            description: string
            pricing: {
                monthly: string
                yearly: string
                taxes: string
                savings: string
            }
            features: string[]
            cta: string
            note: string
        }
        scale: {
            badge: string
            name: string
            description: string
            pricing: {
                customLabel: string
                subtitle: string
                benefits: string
            }
            features: string[]
            cta: string
            note: string
        }
    }

    comparison: {
        header: {
            title: string
            description: string
        }
        table: {
            columns: {
                feature: string
                essential: {
                    label: string
                    price: string
                }
                growth: {
                    label: string
                    price: string
                }
                scale: {
                    label: string
                    price: string
                }
            }
            rows: Array<{
                feature: string
                essential: string
                growth: string
                scale: string
            }>
        }
    }

    roi: {
        title: string
        description: string
        inputs: {
            employees: {
                label: string
                min: number
                max: number
            }
            frameworks: {
                label: string
                options: string[]
                hoursPerFramework: number
            }
        }

        calculation:{
            costPerHour: number,
            automationSavingsRate: number,
            monthlyPlatformCost: number
        }
        results: {
            savingsLabel: string
            roiLabel: string
            timelineLabel: string
            averageRoi: {
                label: string
                value: string
                description: string
            }
        }
    }

    faq: {
        header: {
            title: string
            description: string
        }
        items: Array<{
            question: string
            answer: string
        }>
    }

    finalCta: {
        title: string
        description: string
        actions: {
            primary: string
            secondary: string
        }
    }
}

export type WelcomePageDictionary = {
    hero: HeroDictionary

    productOverview: ProductOverviewDictionary

    solutions: SolutionsDictionary

    compliance: ComplianceDictionary

    resources: ResourcesDictionary

    pricing: PricingDictionary
}
/*
*
*
    LOGIN PAGE
*
*
*/

export type LoginFormDictionary = {
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    submit: string
    submitting: string
    errorRequired: string
}

export type LoginPageDictionary = {
    title: string
    subtitle: string
    noAccount: string
    getDemo: string
    form: LoginFormDictionary
}

/*
*
*
    FOOTER SECTION
*
*
*/

export type FooterDictionary = {
    description: string
    trustBadges: string[]
    platform: {
        title: string
        links: string[]
    }
    solutions: {
        title: string
        links: string[]
    }
    contact: {
        title: string
        email: string
        phone: string
        address: string
        newsletter: {
        title: string
        placeholder: string
        button: string
        }
    }
    legal: string[]
    socials: string[]
    languageLabel: string
}

/*
*
*
    DEMO PAGE
*
*
*/

export type DemoFormDictionary = {
    // Labels
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    companyLabel: string;
    phoneLabel: string;
    countryLabel: string;
    jobTitleLabel: string;
    companySizeLabel: string;
    industryLabel: string;
    useCaseLabel: string;
    messageLabel: string;
    termsLabel: string;
    
    // Placeholders
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    phonePlaceholder: string;
    jobTitlePlaceholder: string;
    companySizePlaceholder: string;
    industryPlaceholder: string;
    useCasePlaceholder: string;
    messagePlaceholder: string;
    
    // Messages
    termsText: string;
    privacyPolicy: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    errorMessage: string;
    requiredField: string;
    invalidEmail: string;
    
    // Additional Info
    responseGuarantee: string;
    teamContact: string;
    secureConnection: string;
}

export type DemoPageDictionary = {
    // Header
    badge: string;
    title: string;
    subtitle: string;
    
    // Contact Info Card
    contactTitle: string;
    callLabel: string;
    salesEmailLabel: string;
    hoursLabel: string;
    hours: string;
    spanishSupport: string;
    internationalNumbers: string;
    
    // What to Expect Card
    whatToExpectTitle: string;
    personalizedDemo: {
        title: string;
        description: string;
    };
    dedicatedExpert: {
        title: string;
        description: string;
    };
    caseAnalysis: {
        title: string;
        description: string;
    };
    roiEstimate: {
        title: string;
        description: string;
    };
    
    // Trust Indicators Card
    whyChooseTitle: string;
    uptime: string;
    responseTime: string;
    companiesTrust: string;
    satisfaction: string;
    certifiedSecurity: string;
    certifications: string;
    
    // International Numbers
    countries: {
        spain: string;
        mexico: string;
        uk: string;
        australia: string;
    };
    from: DemoFormDictionary
}



/*
*
*
    HEADER GLOBAL
*
*
*/

export type MenuDictionary = {
    [key: string]: string
}

export type MenuHeaderDictionary = {
    login: string
    demo: string
}